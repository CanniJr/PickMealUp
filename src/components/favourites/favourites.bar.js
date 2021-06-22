import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
// import LinearGradient from "react-native-linear-gradient";
// import ScrollView from "rn-faded-scrollview";
import { Spacer } from "../spacer/spacer.component";
import styled from "styled-components/native";
import { Text } from "../typography/text.component";

import { CompactRestaurantInfo } from "../restaurant/compact.restaurant.info";

export const FavouritesBar = ({ favourites, navigation }) => {
  if (!favourites.length) {
    return (
      <FavouritesWrapper>
        <Text>No Favourites yet 😔</Text>
      </FavouritesWrapper>
    );
  }

  return (
    <FavouritesWrapper>
      <Spacer position="left">
        <Text variant="caption">Your Favorites</Text>
      </Spacer>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((rest) => {
          const key = rest.name;
          return (
            <Spacer key={key} position="left" size="medium">
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Restaurant Detail", {
                    restaurant: rest,
                  })
                }
              >
                <CompactRestaurantInfo restaurant={rest} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};

const FavouritesWrapper = styled.View`
  margin: ${(props) => props.theme.space[2]};
  align-items: center;
`;
