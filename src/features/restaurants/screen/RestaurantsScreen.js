import React, { useState, useContext } from "react";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

import styled from "styled-components/native";
import { FlatList } from "react-native";
import { Searchbar, ActivityIndicator, Colors } from "react-native-paper";
import RestaurantInfoCard from "../components/RestaurantInfoCard";
import { SafeArea } from "../../../components/utility/safeArea.component";

import { Spacer } from "../../../components/spacer/spacerComponent";

const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  const { restaurants, isLoading, error } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SearchContainer>
      {isLoading ? (
        <ActivityIndicator animating={true} color={Colors.blue300} size={100} />
      ) : (
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => (
            <>
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </>
          )}
          keyExtractor={(item) => item.name}
        />
      )}
    </SafeArea>
  );
};

export default RestaurantsScreen;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 },
})``;
