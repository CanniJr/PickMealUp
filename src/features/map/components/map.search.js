import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";

import { LocationContext } from "../../../services/location/location.context";

export const MapSearch = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchValue, setSearchValue] = useState(keyword);

  useEffect(() => {
    setSearchValue(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <Searchbar
        icon="map"
        placeholder="Search location"
        value={searchValue}
        onSubmitEditing={() => {
          search(searchValue);
        }}
        onChangeText={(text) => {
          setSearchValue(text);
        }}
      />
    </SearchContainer>
  );
};

const SearchContainer = styled.View`
  position: absolute;
  z-index: 999;
  margin-top: 40px;
  width: 100%;
  padding: ${(props) => props.theme.space[3]};
`;
