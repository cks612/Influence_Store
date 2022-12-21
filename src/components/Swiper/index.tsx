import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ContentTitle from "../Content/ContentTitle";
import { v4 as uuid_v4 } from "uuid";
import { useQuery } from "@tanstack/react-query";
import { useGetNews } from "../../hooks/news/useGetNews";
import NewsCard from "../News/NewsCard";

interface NewsDataProps {
  title: string;
  originallink: string;
  pubDate: string;
}

const NewsSwiper = () => {
  const { data: NewsData } = useQuery(["news"], useGetNews);

  return (
    <>
      <ContentTitle>오늘의 선한 영향력 뉴스를 확인해보세요!</ContentTitle>
      <Swiper
        grabCursor={true}
        slidesPerView={"auto"}
        width={100}
        scrollbar={{ draggable: true }}
        className="mySwiper"
      >
        {NewsData.items.map((item: NewsDataProps) => (
          <SwiperSlide key={uuid_v4()}>
            <NewsCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default NewsSwiper;
