import styled from "@emotion/styled";
import { ComponentPropsWithoutRef, FC } from "react";

interface Props extends ComponentPropsWithoutRef<"input"> {
  name: string;
  error?: string;
}

const TextFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: start;
`;

const TextFieldInput = styled.input<Props>`
  width: 100%;
  padding: 12px;
  border-radius: 4px;
  border: 2px solid ${(props) => (props.error ? "#990000" : "#d9d9d9")};
  &:active {
    border: 2px solid ${(props) => (props.error ? "#990000" : "#d9d9d9")};
  }
  font-size: 14px;
  box-sizing: border-box;
  font-family: "Nunito", sans-serif;
  &:focus {
    outline: none;
    border-color: ${(props) => (props.error ? "990000" : "#40a9ff")};
  }
`;

const ErrorMessage = styled.div`
  color: #990000;
  font-size: 12px;
  font-weight: bold;
  margin-left: 5px;
  margin-top: 5px;
`;

export const TextField: FC<Props> = ({ error, ...props }) => {
  return (
    <TextFieldContainer>
      <TextFieldInput {...props} error={error} />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </TextFieldContainer>
  );
};
