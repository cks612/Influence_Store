import React from "react";
import styled from "styled-components";
import { formatDate } from "../../../utils/getFormatDate";

const NewsPressDate = ({ date }: { date: string }) => {
  return (
    <PressDateWrapper>
      <span>{formatDate(date)}</span>
    </PressDateWrapper>
  );
};

export default NewsPressDate;

export const PressDateWrapper = styled.h1`
  display: flex;
  justify-content: flex-end;
  ${({ theme }) => theme.commonFont("0.75em", "900")};
  color: gray;
  padding: 5px 10px;
`;
