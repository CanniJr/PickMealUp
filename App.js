import { StatusBar as ExpoStatsBar } from "expo-status-bar";
import React from "react";
import { Text } from "react-native";
import { SafeArea } from "./src/components/utility/safeArea.component";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import RestaurantsScreen from "./src/features/restaurants/screen/RestaurantsScreen";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { restaurantService } from "./src/services/restaurants/restaurants.service";

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  const MapScreen = () => (
    <SafeArea>
      <Text>Map</Text>
    </SafeArea>
  );

  const SettingsScreen = () => (
    <SafeArea>
      <Text>Settings</Text>
    </SafeArea>
  );

  const Tab = createBottomTabNavigator();

  const TAB_ICON = {
    Restaurant: "restaurant",
    Map: "map",
    Settings: "settings",
  };

  const createScreenOptions = ({ route }) => {
    const iconName = TAB_ICON[route.name];
    return {
      tabBarIcon: ({ size, color }) => (
        <Ionicons name={iconName} size={size} color={color} />
      ),
    };
  };

  const MyTabs = () => (
    <Tab.Navigator
      screenOptions={createScreenOptions}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Restaurant" component={RestaurantsScreen} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <MyTabs />
        </NavigationContainer>
      </ThemeProvider>
      <ExpoStatsBar style="auto" />
    </>
  );
}
