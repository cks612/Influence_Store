import React, { useEffect } from "react";

import { useSearchStore } from "../../../store";
import ContentWrapper from "../../Content/ContentWrapper";
import Map from "../../Map";
import Search from "../../Search";

const StorePage = () => {
  const {
    searchResult,
    searchText,
    initResult,
    setSearchResult,
    setInitResult,
  } = useSearchStore();

  useEffect(() => {
    setInitResult();
  }, []);

  useEffect(() => {
    if (searchText === "") setSearchResult(initResult);
  }, [searchText, initResult]);

  return (
    <>
      <ContentWrapper>
        <Search />
        <Map initStore={searchText === "" ? initResult : searchResult} />
      </ContentWrapper>
    </>
  );
};

export default StorePage;
