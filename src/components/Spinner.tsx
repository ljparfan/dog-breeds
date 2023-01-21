import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

interface SpinnerProps {
  size?: string;
}

const spin = keyframes`
    to {
      transform: rotate(360deg);
    }
  `;

const SpinnerContainer = styled.div<SpinnerProps>`
  width: ${(props) => props.size || "16px"};
  height: ${(props) => props.size || "16px"};
  border-radius: 50%;
  border: 2px solid white;
  border-top-color: black;
  animation: ${spin} 1s linear infinite;
`;

export const Spinner = ({ size }: SpinnerProps) => (
  <SpinnerContainer size={size} />
);
