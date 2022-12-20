import { dehydrate, QueryClient } from "@tanstack/react-query";
import type { GetStaticProps, NextPage } from "next";
import MainPage from "../components/pages/Main";
import { useGetNews } from "../hooks/news/useGetNews";

const Home: NextPage = () => {
  return <MainPage />;
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["news"], useGetNews);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
