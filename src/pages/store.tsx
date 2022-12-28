import { dehydrate, QueryClient } from "@tanstack/react-query";
import { GetStaticProps, NextPage } from "next";
import React from "react";
import styled from "styled-components";
import StorePage from "../components/pages/Store";
import { fetchStore } from "../hooks/stores/useGetStore";

const Store: NextPage = () => {
  return <StorePage />;
};

export default Store;

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["store"], fetchStore);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
