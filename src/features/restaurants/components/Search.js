import React, { useContext, useState } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";

import { LocationContext } from "../../../services/location/location.context";

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchValue, setSearchValue] = useState(keyword)


  return (
    <SearchContainer>
      <Searchbar
      placeholder="Search location" 
      value={searchValue} 
      onSubmitEditing={() => {
        search(searchValue)
      }} 
      onChangeText={(text) => {
        setSearchValue(text)
      }}/>
    </SearchContainer>
  );
};


const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
