import React from "react";
import { Text } from "react-native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import RestaurantsScreen from "../../features/restaurants/screen/RestaurantsScreen";
import { RestaurantDetails } from "../../features/restaurants/screen/RestaurantDetails";

const RestaurantStack = createStackNavigator();

const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
      }}
      headerMode="none"
      initialRouteName="Restaurants"
    >
      <RestaurantStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name="Restaurant Detail"
        component={RestaurantDetails}
      />
    </RestaurantStack.Navigator>
  );
};

export default RestaurantsNavigator;
