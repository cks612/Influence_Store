import React from "react";
import ContentWrapper from "../../Content/ContentWrapper";
import NewsSwiper from "../../Swiper";
import MainFeed from "./MainFeed";

const MainPage = () => {
  return (
    <>
      <ContentWrapper>
        <NewsSwiper />
        <MainFeed />
      </ContentWrapper>
    </>
  );
};

export default MainPage;
