import styled from "@emotion/styled";
import { Container } from "../components/Container";

const ErrorTitle = styled.h1`
  font-size: 2rem;
  color: red;
`;

const ErrorText = styled.p`
  font-size: 1.5rem;
  text-align: center;
`;

export function UnexpectedErrorPage() {
  return (
    <Container>
      <ErrorTitle>Unexpected Error</ErrorTitle>
      <ErrorText>
        Sorry, an unexpected error has occurred on our end. Please try again
        later.
      </ErrorText>
    </Container>
  );
}
