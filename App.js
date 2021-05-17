import { StatusBar as ExpoStatsBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import RestaurantsScreen from "./src/features/restaurants/screen/RestaurantsScreen";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
        <ExpoStatsBar style="auto" />
      </ThemeProvider>
    </>
  );
}
