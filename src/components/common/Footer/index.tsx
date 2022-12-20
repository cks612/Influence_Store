import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      ©
      <a href="https://github.com/cks612" target="_blank" rel="noreferrer">
        voyageDev, dogsocks
      </a>
      , Built with Next.js ALL RIGHTS RESERVED
    </FooterContainer>
  );
};

export default Footer;

export const FooterContainer = styled.footer`
  ${({ theme }) => theme.commonPadding("32px", "24px")};
  color: ${({ theme }) => theme.text4};
  font-size: 14px;
  text-align: center;

  a {
    all: unset;
    text-decoration: underline;
    cursor: pointer;
  }
`;
