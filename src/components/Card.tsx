import styled from "@emotion/styled";

export const Card = styled.div`
  font-family: "Open Sans", sans-serif;
  background-color: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  padding: 16px;
  width: 100%;

  @media (max-width: 768px) {
    width: 90%;
  }
`;
export const CardTitle = styled.h3`
  margin: 0;
  padding: 8px;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  font-family: "Nunito", sans-serif;
`;
