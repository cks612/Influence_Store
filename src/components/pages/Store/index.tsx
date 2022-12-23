import React, { ChangeEvent, useEffect, useState } from "react";
import {
  fetchStore,
  Store,
  useGetStore,
  getStore,
} from "../../../hooks/stores/useGetStore";
import { useSearchStore } from "../../../store";
import Map from "../../Map";

const StorePage = () => {
  const [text, setText] = useState("");
  const { data } = useGetStore();
  const { setSearchResult, setSearchText } = useSearchStore();

  const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const searchHandler = () => {
    setSearchResult(
      data?.filter((item: Store) => item.CMPNM_NM?.includes(text))
    );
    setSearchText(text);
  };

  return (
    <>
      <button onClick={searchHandler}>검색</button>
      <input type="text" onChange={inputHandler} />
      <Map store={data} />
    </>
  );
};

export default StorePage;
