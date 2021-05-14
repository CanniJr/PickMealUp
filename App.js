import { StatusBar as ExpoStatsBar } from "expo-status-bar";
import React from "react";
import RestaurantScreen from "./src/features/restaurants/screen/RestaurantScreen";

export default function App() {
  return (
    <>
      <RestaurantScreen />
      <ExpoStatsBar style="auto" />
    </>
  );
}
