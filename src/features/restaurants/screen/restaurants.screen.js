import React, { useContext, useState } from "react";
import styled from "styled-components/native";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { FadeInView } from "../../../components/animations/fade.animation";
import { FlatList, TouchableOpacity } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";
import RestaurantInfoCard from "../components/restaurant.info.card";
import { SafeArea } from "../../../components/utility/safe.area.component";
import { FavouritesBar } from "../../../components/favourites/favourites.bar";

import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantSearch } from "../components/restaurant.search";

const RestaurantsScreen = ({ navigation }) => {
  const { restaurants, isLoading } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);

  const [isToggled, setIsToggled] = useState(false);

  return (
    <SafeArea>
      <RestaurantSearch
        isFavouritesToggled={isToggled}
        onFavouritesToggle={() => setIsToggled(!isToggled)}
      />
      {/* Favourites Bar */}
      {isToggled && (
        <FavouritesBar navigation={navigation} favourites={favourites} />
      )}
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
                      <FadeInView>
                        <RestaurantInfoCard restaurant={item} />
                      </FadeInView>
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
