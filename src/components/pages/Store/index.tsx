import React from "react";
import { useGetStore } from "../../../hooks/stores/useGetStore";
import Map from "../../Map";

const StorePage = () => {
  const { data } = useGetStore();

  return <Map />;
};

export default StorePage;
