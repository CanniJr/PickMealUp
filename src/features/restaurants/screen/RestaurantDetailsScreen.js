import React from "react";
import { View } from "react-native";
import { RestaurantdetailCard } from "../components/RestaurantDetailCard";

export const RestaurantDetailsScreen = ({ route }) => {
  const restaurantDetails = route.params;
  return (
    <View>
      <RestaurantdetailCard restaurant={restaurantDetails} />
    </View>
  );
};
