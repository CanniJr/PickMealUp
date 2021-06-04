import React from "react";
import { Text, View } from "react-native";

export const RestaurantDetails = ({ route }) => {
  const { name, vicinity, rating, photos } = route.params;
  return (
    <View>
      <Text>{name}</Text>
      <Text>{vicinity}</Text>
      <Text>Restaurant Details</Text>
    </View>
  );
};
