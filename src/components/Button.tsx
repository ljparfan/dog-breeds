import { ReactNode, FC, ComponentPropsWithoutRef } from "react";

import styled from "@emotion/styled";
import { Spinner } from "./Spinner";

interface Props extends ComponentPropsWithoutRef<"button"> {
  children: ReactNode;
  isLoading: boolean;
}

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #1890ff;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  font-family: "Nunito", sans-serif;
  &:disabled {
    background-color: gray;
    cursor: not-allowed;
  }
`;

// const Spinner = styled.div`
//   border: 5px solid #f3f3f3;
//   border-top: 5px solid #3498db;
//   border-radius: 50%;
//   width: 20px;
//   height: 20px;
//   animation: spin 0.8s linear infinite;

//   @keyframes spin {
//     0% {
//       transform: rotate(0deg);
//     }
//     100% {
//       transform: rotate(360deg);
//     }
//   }
// `;

export const Button: FC<Props> = ({ children, isLoading, ...props }) => {
  return (
    <StyledButton disabled={isLoading || props.disabled} {...props}>
      {isLoading ? <Spinner size="16px" /> : children}
    </StyledButton>
  );
};
