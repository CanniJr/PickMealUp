import React, { useState } from "react";
import styled from "styled-components/native";
import { StatusBar, View, SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";
import RestaurantInfoCard from "../components/RestaurantInfoCard";

const RestaurantScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SearchContainer>
      <ListContainer>
        <RestaurantInfoCard />
      </ListContainer>
    </SafeArea>
  );
};

export default RestaurantScreen;

const SafeArea = styled.SafeAreaView`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}
`;

const SearchContainer = styled.View`
  padding: 15px;
`;

const ListContainer = styled.View`
  padding: 15px;
  flex: 1;
  background-color: blue;
`;
