import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";

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
  const [searchOption, setSearchOption] = useState({
    option: "",
    value: "",
  });
  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
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
  };

  return (
    <SearchWrapper>
      <Select onChange={handleChange} defaultValue="검색">
        <option disabled>검색</option>
        {SELECT_OPTIONS.map(option => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </Select>
      <Input
        onChange={handleChange}
        name="value"
        placeholder="검색어를 입력하세요"
        value={searchOption.value}
      />
    </SearchWrapper>
  );
};

export default Search;

const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
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
