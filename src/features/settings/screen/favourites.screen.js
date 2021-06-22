import React, { useContext } from "react";
import styled from "styled-components/native";
import { FlatList, TouchableOpacity } from "react-native";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import RestaurantInfoCard from "../../restaurants/components/restaurant.info.card";

import { FavouritesContext } from "../../../services/favourites/favourites.context";

export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);

  return favourites.length ? (
    <FavouritesList
      data={favourites}
      renderItem={({ item }) => (
        <>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Restaurant Detail", {
                restaurant: item,
              })
            }
          >
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          </TouchableOpacity>
        </>
      )}
      keyExtractor={(item) => item.name}
    >
      <Text>{favourites.name}</Text>;
    </FavouritesList>
  ) : (
    <NoFavContainer>
      <Text>No Favourites Yet 😔</Text>
      <Spacer position="bottom" size="large" />
      <Text variant="caption">
        Go to the 'Restaurants' Tab and click on the star icon from a restaurant
        to add them to your favorites.
      </Text>
    </NoFavContainer>
  );
};

const FavouritesList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 },
})``;

const NoFavContainer = styled.View`
  padding: ${(props) => props.theme.space[2]};
  position: absolute;
  align-items: center;
  margin-top: 60%;
`;
