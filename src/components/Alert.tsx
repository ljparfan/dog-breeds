import styled from "@emotion/styled";
import { ComponentPropsWithoutRef } from "react";

interface AlertProps extends ComponentPropsWithoutRef<"div"> {
  type: "success" | "error";
  message: string;
}

const AlertContainer = styled.div<AlertProps>`
  margin-top: 12px;
  margin-bottom: 12px;
  background-color: ${(props) =>
    props.type === "success"
      ? "rgba(227, 253, 235, 1)"
      : "rgba(248, 215, 218, 1)"};
  border-color: ${(props) =>
    props.type === "success" ? "rgba(38, 179, 3, 1)" : "rgba(220, 53, 69, 1)"};
  color: ${(props) =>
    props.type === "success" ? "rgba(60, 118, 61, 1)" : "rgba(114, 28, 36,1)"};
  width: 100%;
  padding: 12px 16px;
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  margin-bottom: 12px;
  font-size: 16px;

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

export const Alert = (props: AlertProps) => (
  <AlertContainer {...props}>{props.message}</AlertContainer>
);
