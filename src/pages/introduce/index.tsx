import { NextPage } from "next";
import React from "react";
import ContentWrapper from "../../components/Content/ContentWrapper";
import IntroducePage from "../../components/pages/Introduce/IntroducePage";

const Introduce: NextPage = () => {
  return (
    <ContentWrapper>
      <IntroducePage />
    </ContentWrapper>
  );
};

export default Introduce;
