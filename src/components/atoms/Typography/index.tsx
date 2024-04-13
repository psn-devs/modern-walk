import { ReactNode } from "react";
import styled from "styled-components";
import { primaryBlack } from "../../../styles/colors";

interface IProps {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  children: ReactNode;
  color?: string;
  onClick?: () => void;
}

const HeadingOne = styled.h1<{ color?: string }>`
  font-size: 32px;
  font-weight: semi-bold;
  color: ${({ color }) => (color ? color : primaryBlack)};
`;

const HeadingTwo = styled.h2<{ color?: string }>`
  font-size: 24px;
  font-weight: semi-bold;
  color: ${({ color }) => (color ? color : primaryBlack)};
`;

const HeadingThree = styled.h3<{ color?: string }>`
  font-size: 18px;
  font-weight: semi-bold;
  color: ${({ color }) => (color ? color : primaryBlack)};
`;

const HeadingFour = styled.h4<{ color?: string }>`
  font-size: 16px;
  font-weight: semi-bold;
  color: ${({ color }) => (color ? color : primaryBlack)};
`;

const HeadingFive = styled.h5<{ color?: string }>`
  font-size: 12px;
  font-weight: semi-bold;
  color: ${({ color }) => (color ? color : primaryBlack)};
`;

const HeadingSix = styled.h6<{ color?: string }>`
  font-size: 10px;
  font-weight: semi-bold;
  color: ${({ color }) => (color ? color : primaryBlack)};
`;

const Paragraph = styled.p<{ color?: string }>`
  font-size: 8px;
  font-weight: normal;
  color: ${({ color }) => (color ? color : primaryBlack)};
`;

export const Typography = ({ variant, color, onClick, children }: IProps) => {
  return variant === "h1" ? (
    <HeadingOne color={color} onClick={onClick}>
      {children}
    </HeadingOne>
  ) : variant === "h2" ? (
    <HeadingTwo color={color} onClick={onClick}>
      {children}
    </HeadingTwo>
  ) : variant === "h3" ? (
    <HeadingThree color={color} onClick={onClick}>
      {children}
    </HeadingThree>
  ) : variant === "h4" ? (
    <HeadingFour color={color} onClick={onClick}>
      {children}
    </HeadingFour>
  ) : variant === "h5" ? (
    <HeadingFive color={color} onClick={onClick}>
      {children}
    </HeadingFive>
  ) : variant === "h6" ? (
    <HeadingSix color={color} onClick={onClick}>
      {children}
    </HeadingSix>
  ) : (
    <Paragraph color={color} onClick={onClick}>
      {children}
    </Paragraph>
  );
};
