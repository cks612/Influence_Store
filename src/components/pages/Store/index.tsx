import React, { ChangeEvent, useEffect, useState } from "react";
import { Store, useGetStore } from "../../../hooks/stores/useGetStore";
import { useSearchStore } from "../../../store";
import Map from "../../Map";

const StorePage = () => {
  const [text, setText] = useState("");
  const { data } = useGetStore();
  const {
    searchResult,
    searchText,
    initResult,
    setSearchResult,
    setSearchText,
    setInitResult,
  } = useSearchStore();

  const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
    setSearchText(event.target.value);
  };

  const searchHandler = () => {
    setSearchResult(
      data?.filter((item: Store) => item.CMPNM_NM?.includes(text))
    );
  };

  useEffect(() => {
    setInitResult();
  }, []);

  // useEffect(() => {
  //   if (searchText === "") return setSearchResult(initResult);
  // }, [searchText, initResult]);

  return (
    <>
      <button onClick={searchHandler}>검색</button>
      <input type="text" onChange={inputHandler} />
      <Map initStore={searchText === "" ? initResult : searchResult} />
    </>
  );
};

export default StorePage;
