import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import React, { FC } from "react";
import styled from "styled-components";
import { useGetNews } from "../../../hooks/news/useGetNews";
import { FILTER_REGEX } from "../../../utils/FilterRegEx";
import { formatDate } from "../../../utils/getFormatDate";
import NewsImage from "../NewsImage";
import NewsPressDate from "../NewsPressDate";
import NewsTitle from "../NewsTitle";

interface NewsDataProps {
  title: string;
  originallink: string;
  pubDate: string;
}
const NewsCard = ({ item }: { item: NewsDataProps }) => {
  const { title, originallink, pubDate } = item;
  return (
    <CardWrapper>
      <Link href={originallink} target="_blank">
        <NewsImage />
        <NewsTitle title={title} />
        <NewsPressDate date={pubDate} />
      </Link>
    </CardWrapper>
  );
};

export default NewsCard;

const CardWrapper = styled.div`
  border-radius: 20px;
  background: #d5d5d5;
  padding: 10px 10px;

  a {
    all: unset;
  }
`;
