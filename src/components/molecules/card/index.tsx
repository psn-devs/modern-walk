import { ReactNode } from "react";
import styled from "styled-components";

interface IProps {
  width?: number | string;
  height?: number | string;
  backgroundColor?: string;
  children: ReactNode;
  gap?: number;
  alignItems?: string;
  justifyContent?: string;
  onClick?: () => void;
}

const Container = styled.div<{
  width?: number | string;
  height?: number | string;
  backgroundColor?: string;
  gap?: number;
  alignItems?: string;
  justifyContent?: string;
}>`
  display: flex;
  flex-direction: column;
  ${({ width }) =>
    width &&
    `
    width: ${width}
  `};
  ${({ height }) =>
    height &&
    `
    height: ${height}
  `};
  ${({ backgroundColor }) =>
    backgroundColor &&
    `
    background-color: ${backgroundColor}
  `};
  border-radius: 16px;
  box-shadow: 10px 15px 20px 0px rgba(0, 0, 0, 0.15);
  ${({ gap }) =>
    gap &&
    `
    gap: ${gap}px
  `};
  ${({ alignItems }) =>
    alignItems &&
    `
    align-items: ${alignItems}
  `};
  ${({ justifyContent }) =>
    justifyContent &&
    `
    justify-content: ${justifyContent}
  `};
`;

export const Card = ({
  width,
  height,
  children,
  backgroundColor,
  gap,
  alignItems,
  justifyContent,
  onClick
}: IProps) => {
  return (
    <Container
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      gap={gap}
      alignItems={alignItems}
      justifyContent={justifyContent}
      onClick={onClick}
    >
      {children}
    </Container>
  );
};
