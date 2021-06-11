import { StatusBar as ExpoStatsBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
import { AuthContextProvider } from "./src/services/authentication/auth.context";
import { Navigation } from "./src/infrastructure/navigation";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import * as firebase from "firebase";

//Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDw8fbwtoUzdyBnBTgeeN7vjgAdVht5Rts",
  authDomain: "pickmealup-8443a.firebaseapp.com",
  projectId: "pickmealup-8443a",
  storageBucket: "pickmealup-8443a.appspot.com",
  messagingSenderId: "549207349307",
  appId: "1:549207349307:web:879889f124b9cce1fd641e",
};

// Initialize Firebase and make sure that firebase app only initiated once.
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
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

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthContextProvider>
          <FavouritesContextProvider>
            <LocationContextProvider>
              <RestaurantsContextProvider>
                <Navigation />
              </RestaurantsContextProvider>
            </LocationContextProvider>
          </FavouritesContextProvider>
        </AuthContextProvider>
      </ThemeProvider>
      <ExpoStatsBar style="auto" />
    </>
  );
}
