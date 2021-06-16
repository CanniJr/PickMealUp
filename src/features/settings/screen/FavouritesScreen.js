import React, { useContext } from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import { FlatList, TouchableOpacity } from "react-native";

import { FavouritesContext } from "../../../services/favourites/favourites.context";

export const FavouritesScreen = () => {
  const { favourites } = useContext(FavouritesContext);
  //   console.log(favourites);

  return (
    <FavouritesList
      data={favourites}
      renderItem={({ item }) => console.log(item)}
    >
      <Text>{favourites.name}</Text>;
    </FavouritesList>
  );
};

const FavouritesList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 },
})``;
