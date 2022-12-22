import React, { ChangeEvent, useState } from "react";
import { Store, useGetStore } from "../../../hooks/stores/useGetStore";
import Map from "../../Map";

const StorePage = () => {
  const [text, setText] = useState("");
  const { data } = useGetStore();

  const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <>
      <input type="text" onChange={inputHandler} />
      <Map
        store={data?.filter((item: Store) => item.CMPNM_NM?.includes(text))}
      />
    </>
  );
};

export default StorePage;
