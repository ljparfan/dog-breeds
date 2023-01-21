import styled from "@emotion/styled";
import { ComponentPropsWithoutRef, FC } from "react";

interface Props extends ComponentPropsWithoutRef<"input"> {
  name: string;
}

export const TextFieldContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const TextFieldInput = styled.input`
  width: 100%;
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #d9d9d9;
  font-size: 14px;
  box-sizing: border-box;
  font-family: "Nunito", sans-serif;
  &:focus {
    outline: none;
    border-color: #40a9ff;
  }
`;

export const TextField: FC<Props> = ({ ...props }) => {
  return (
    <TextFieldContainer>
      <TextFieldInput {...props} />
    </TextFieldContainer>
  );
};
