import { dehydrate, QueryClient } from "@tanstack/react-query";
import { GetStaticProps, NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <div>
        <h1>Home</h1>
      </div>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["news"]);

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
};
