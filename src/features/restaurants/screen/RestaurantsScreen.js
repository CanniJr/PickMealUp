import React, { useContext, useState } from "react";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { FavouritesContext } from "../../../services/favourites/favourites.context";

import styled from "styled-components/native";
import { FlatList, TouchableOpacity } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";
import RestaurantInfoCard from "../components/RestaurantInfoCard";
import { SafeArea } from "../../../components/utility/safeArea.component";
import { FavouritesBar } from "../../../components/favourites/favouritesBar";

import { Spacer } from "../../../components/spacer/spacerComponent";
import { Search } from "../components/Search";

const RestaurantsScreen = ({ navigation }) => {
  const { restaurants, isLoading } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);

  const [isToggled, setIsToggled] = useState(false);

  console.log(favourites);

  return (
    <SafeArea>
      <Search
        isFavouritesToggled={isToggled}
        onFavouritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && <FavouritesBar />}
      {isLoading ? (
        <ActivityIndicator animating={true} color={Colors.blue300} size={100} />
      ) : (
        <>
          {!restaurants ? null : (
            <RestaurantList
              data={restaurants}
              renderItem={({ item }) => (
                <>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("Restaurant Detail", {
                        restaurant: item,
                      })
                    }
                  >
                    <Spacer position="bottom" size="large">
                      <RestaurantInfoCard restaurant={item} />
                    </Spacer>
                  </TouchableOpacity>
                </>
              )}
              keyExtractor={(item) => item.name}
            />
          )}
        </>
      )}
    </SafeArea>
  );
};

export default RestaurantsScreen;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 },
})``;
