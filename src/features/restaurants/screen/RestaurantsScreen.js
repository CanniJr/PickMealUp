import React, { useContext } from "react";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

import styled from "styled-components/native";
import { FlatList, Pressable, TouchableOpacity } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";
import RestaurantInfoCard from "../components/RestaurantInfoCard";
import { SafeArea } from "../../../components/utility/safeArea.component";

import { Spacer } from "../../../components/spacer/spacerComponent";
import { Search } from "../components/Search";

const RestaurantsScreen = ({ navigation }) => {
  const { restaurants, isLoading } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      <Search />
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
                      navigation.navigate("Restaurant Detail", item)
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
