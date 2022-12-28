import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";
import { useGetStore } from "../../hooks/stores/useGetStore";
import { useDebounce } from "../../hooks/utils/useDebounce";
import { useSearchStore } from "../../store";
import Button from "../Common/Button";

// 식당 데이터 가져와서 필터링 해서 업종명 가져오기
const SELECT_OPTIONS = [
  { value: "식음료", name: "식음료" },
  { value: "생활", name: "생활" },
  { value: "학원", name: "학원" },
  { value: "식당", name: "식당" },
  { value: "교육", name: "교육" },
  { value: "기타", name: "기타" },
];

const Search = () => {
  const { data } = useGetStore();
  const { setSearchResult, setSearchText } = useSearchStore();

  const [categoryForSearch, setCategoryForSearch] = useState("검색");
  const [searchOption, setSearchOption] = useState({
    option: "식음료",
    value: "",
  });

  const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
    setSearchText(event.target.value);
  };

  const searchHandler = () => {
    setSearchResult(
      data?.filter((item: Store) => item.CMPNM_NM?.includes(text))
    );
  };

  const handleToChangeSearchOption = useDebounce(
    (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
      const { name, value } = e.target;

      if (name) {
        setSearchOption(prev => ({
          ...prev,
          [name]: value,
        }));
      } else {
        setSearchOption(prev => ({
          ...prev,
          option: value,
          value: "",
        }));
      }
    },
    200
  );

  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setCategoryForSearch(value);
  };

  const handleToSearch = () => {
    if (categoryForSearch === "검색") {
      alert("검색할 카테고리를 선택해주세요");
      return false;
    }
    if (categoryForSearch === "업종") {
      console.log(searchOption, categoryForSearch);
    }
    if (categoryForSearch === "주소" && searchOption.value.length === 0) {
      alert("검색어를 입력해주세요");
      return false;
    } else {
      console.log(searchOption, categoryForSearch);
    }
  };

  return (
    <SearchWrapper>
      <Select onChange={handleCategoryChange} defaultValue="검색">
        <option disabled>검색</option>
        <option>업종</option>
        <option>주소</option>
      </Select>

      {categoryForSearch === "업종" ? (
        <Select onChange={handleToChangeSearchOption}>
          {SELECT_OPTIONS.map(option => (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          ))}
        </Select>
      ) : (
        <Input
          onChange={handleToChangeSearchOption}
          name="value"
          placeholder="검색어를 입력하세요"
        />
      )}

      <Button
        width="190px"
        height="50px"
        border="2px solid #5278ff"
        borderRadius="4px"
        background="transparent"
        color="#5278ff"
        fontWeight="700"
        hoverStyles={{
          border: " 2px solid #fff",
          background: "#5278ff",
          color: "#fff",
        }}
        handler={handleToSearch}
      >
        검색
      </Button>
    </SearchWrapper>
  );
};

export default Search;

const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const Select = styled.select`
  width: 20%;
  padding: 10px;
  font-size: inherit;
  border: 1px solid;
  border-radius: 4px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

const Input = styled.input`
  width: 20%;
  padding: 10px;
  border: 1px solid;
  border-radius: 4px;
`;
