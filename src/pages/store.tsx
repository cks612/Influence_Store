import React from "react";
import styled from "styled-components";
import StorePage from "../components/pages/Store";

import Search from "../components/Search";

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
