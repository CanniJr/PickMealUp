import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";

import { LocationContext } from "../../../services/location/location.context";

export const RestaurantSearch = ({
  isFavouritesToggled,
  onFavouritesToggle,
}) => {
  const { keyword, search } = useContext(LocationContext);
  const [searchValue, setSearchValue] = useState(keyword);

  useEffect(() => {
    setSearchValue(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <Searchbar
        icon={isFavouritesToggled ? "star" : "star-outline"}
        iconColor={isFavouritesToggled ? "red" : "gray"}
        onIconPress={onFavouritesToggle}
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
  padding: ${(props) => props.theme.space[3]};
`;
