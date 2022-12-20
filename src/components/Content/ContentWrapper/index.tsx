import React from "react";
import { StyledContent } from "./styles";

interface ChildrenProps {
  children: React.ReactNode;
}

const ContentWrapper = ({ children }: ChildrenProps) => {
  return <StyledContent>{children}</StyledContent>;
};

export default ContentWrapper;
