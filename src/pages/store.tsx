import { dehydrate, QueryClient } from "@tanstack/react-query";
import { GetStaticProps } from "next";
import React from "react";
import styled from "styled-components";
import StorePage from "../components/pages/Store";

import Search from "../components/Search";
import { fetchStore } from "../hooks/stores/useGetStore";

const Store = () => {
  return (
    <StoreWrapper>
      <Search />
      <StorePage />
    </StoreWrapper>
  );
};

export default Store;

const StoreWrapper = styled.div``;

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["news"], fetchStore);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
