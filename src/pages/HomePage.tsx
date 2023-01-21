import { ReactNode, useContext } from "react";
import styled from "@emotion/styled";
import { Card } from "../components/Card";
import { AuthContext } from "../context/AuthContext";
import { DogContext } from "../context/DogContext";
import { Container } from "../components/Container";
import { Spinner } from "../components/Spinner";

const HomePageCard = styled(Card)`
  display: flex;
  max-width: 600px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
const ImageContainer = styled.div`
  flex: 1;
  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
`;
const Image = styled.img`
  border-radius: 50%;
  width: 200px;
  height: 200px;
`;
const InfoContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 16px;
`;
const Name = styled.h2`
  margin: 0;
`;

const Email = Name.withComponent("p");

export function HomePage() {
  const { user } = useContext(AuthContext);
  const { breeds, selectedBreed, loading } = useContext(DogContext);

  function render(children: ReactNode) {
    return <Container>{children}</Container>;
  }

  if (loading) {
    return render(<Spinner size="60px" />);
  }

  if (!breeds.length || !selectedBreed) {
    return null;
  }

  return (
    <Container>
      <HomePageCard>
        <ImageContainer>
          <Image
            src={selectedBreed.imageUrl}
            alt={`${user!.name}'s profile picture`}
          />
        </ImageContainer>
        <InfoContainer>
          <Name>{user!.name}</Name>
          <Email>{user!.email}</Email>
        </InfoContainer>
      </HomePageCard>
    </Container>
  );
}
