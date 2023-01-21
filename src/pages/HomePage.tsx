import { useContext } from "react";
import styled from "@emotion/styled";
import { Card } from "../components/Card";
import { AuthContext } from "../context/AuthContext";
import { DogContext } from "../context/DogContext";
import { Container } from "../components/Container";

const HomePageCard = styled(Card)`
  display: flex;
  max-width: 600px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
const ImgContainer = styled.div`
  flex: 1;
  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
`;
const Img = styled.img`
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
  const { breeds, selectedBreed } = useContext(DogContext);
  if (!breeds.length || !selectedBreed) {
    return null;
  }

  return (
    <Container>
      <HomePageCard>
        <ImgContainer>
          <Img
            src={selectedBreed.imageUrl}
            alt={`${user!.name}'s profile picture`}
          />
        </ImgContainer>
        <InfoContainer>
          <Name>{user!.name}</Name>
          <Email>{user!.email}</Email>
        </InfoContainer>
      </HomePageCard>
    </Container>
  );
}
