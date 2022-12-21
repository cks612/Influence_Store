import React from "react";
import styled from "styled-components";
import { FILTER_REGEX } from "../../../utils/FilterRegEx";

const NewsTitle = ({ title }: { title: string }) => {
  return (
    <TitleWrapper>
      {title
        .replaceAll(FILTER_REGEX, "")
        .replaceAll("&apos;", "")
        .replaceAll("&quot;", "")}
    </TitleWrapper>
  );
};

export default NewsTitle;

export const TitleWrapper = styled.h1`
  ${({ theme }) => theme.commonFont("0.7em", "900")};
  ${({ theme }) => theme.commonPadding("5px", "5px")};
  display: -webkit-box;
  height: 15px;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  white-space: normal;
`;
