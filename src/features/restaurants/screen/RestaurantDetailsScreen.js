import React from "react";
import { List } from "react-native-paper";
import { SafeArea } from "../../../components/utility/safeArea.component";
import RestaurantInfoCard from "../components/RestaurantInfoCard";

export const RestaurantDetailsScreen = ({ route }) => {
  const { restaurant } = route.params;
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} type="detail" />
    </SafeArea>
  );
};
