import { ReactNode } from "react";
import styled from "styled-components";

interface IProps {
  width?: number;
  height?: number;
  backgroundColor?: string;
  children: ReactNode;
  gap?: number;
}

const Container = styled.div<{
  width?: number;
  height?: number;
  backgroundColor?: string;
  gap?: number;
}>`
  display: flex;
  flex-dirction: row;
  width: ${({ width }) => (width ? `${width}px` : "auto")};
  width: ${({ height }) => (height ? `${height}px` : "auto")};
  ${({ backgroundColor }) =>
    backgroundColor &&
    `
    background-color: ${backgroundColor}
  `};
  border-radius: 12px;
  box-shadow: 10px 15px 20px 0px rgba(0, 0, 0, 0.15);
  ${({ gap }) =>
    gap &&
    `
    gap: ${gap}
  `};
`;

export const Card = ({
  width,
  height,
  children,
  backgroundColor,
  gap,
}: IProps) => {
  return (
    <Container
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      gap={gap}
    >
      {children}
    </Container>
  );
};
