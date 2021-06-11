import { StatusBar as ExpoStatsBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
import { MyTabs } from "./src/infrastructure/navigation/app.navigator";
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
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    firebase
      .auth()
      .signInWithEmailAndPassword("testman@mail.com", "test123")
      .then((user) => {
        console.log(user);
        setIsAuthenticated(true);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

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
        <FavouritesContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <MyTabs />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavouritesContextProvider>
      </ThemeProvider>
      <ExpoStatsBar style="auto" />
    </>
  );
}
