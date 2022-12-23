import { NextPage } from "next";
import React from "react";
import ContentWrapper from "../../components/Content/ContentWrapper";
import LoginPage from "../../components/pages/Login";

const Login: NextPage = () => {
  return (
    <ContentWrapper>
      <LoginPage />
    </ContentWrapper>
  );
};

export default Login;
