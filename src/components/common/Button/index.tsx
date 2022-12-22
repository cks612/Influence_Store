import React from "react";
import styled from "styled-components";

interface ButtonProps {
  width?: string;
  height?: string;
  border?: string;
  borderRadius?: string;
  background?: string;
  color?: string;
  fontWeight?: string;
  hoverStyles?: HoverStyles;
  handler?: () => void;
  children?: React.ReactNode;
}

interface HoverStyles {
  border?: string;
  background?: string;
  color?: string;
}
const Button = ({
  width,
  height,
  border,
  borderRadius,
  background,
  color,
  fontWeight,
  hoverStyles,
  handler,
  children,
}: ButtonProps) => {
  return (
    <StyledButton
      width={width}
      height={height}
      border={border}
      borderRadius={borderRadius}
      background={background}
      color={color}
      fontWeight={fontWeight}
      hoverStyles={hoverStyles}
      onClick={handler}
    >
      {children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button<ButtonProps>`
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: ${props => props.borderRadius};
  background: ${props => props.background};
  color: ${props => props.color};
  font-weight: ${props => props.fontWeight};
  border: ${props => props.border};
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    border: ${props => props.hoverStyles?.border};
    background: ${props => props.hoverStyles?.background};
    color: ${props => props.hoverStyles?.color};
  }
`;
