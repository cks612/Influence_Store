import { useQuery, useQueryClient } from "@tanstack/react-query";

import React from "react";
import { useGetNews } from "../../../hooks/news/useGetNews";

const MainPage = () => {
  const cache = useQueryClient();

  const { data } = useQuery(["news"], useGetNews);
  // const data = cache.getQueryData(["news"]);
  // console.log(cache);
  // console.log(data);
  console.log(data);

  return <div>fucking shit</div>;
};

export default MainPage;
