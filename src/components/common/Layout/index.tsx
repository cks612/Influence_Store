import React from "react";
import styled from "styled-components";
import Footer from "../Footer";
import Gnb from "../Gnb";

interface ChildrenProps {
  children: React.ReactNode;
}

const Layout = ({ children }: ChildrenProps) => {
  return (
    <StyledLayout>
      <Gnb />
      {children}
      <Footer />
    </StyledLayout>
  );
};

export default Layout;

const StyledLayout = styled.main`
  position: relative;
  max-width: 950px;
  padding-top: 10px;
  margin: 0 auto;
`;
