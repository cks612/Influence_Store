import React from "react";
import styled from "styled-components";
import FindStorePage from "../components/pages/FindStore";
import Search from "../components/Search";

const FindStore = () => {
  return (
    <FindStoreWrapper>
      <Search />
      <FindStorePage />;
    </FindStoreWrapper>
  );
};

export default FindStore;

const FindStoreWrapper = styled.div``;
