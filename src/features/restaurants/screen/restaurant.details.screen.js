import React, { useState } from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";

import { SafeArea } from "../../../components/utility/safe.area.component";
import RestaurantInfoCard from "../components/restaurant.info.card";

export const RestaurantDetailsScreen = ({ route }) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  const { restaurant } = route.params;

  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Section title="Menus">
          <List.Accordion
            title="Breakfast"
            left={(props) => <List.Icon {...props} icon="food-croissant" />}
            expanded={breakfastExpanded}
            onPress={() => setBreakfastExpanded(!breakfastExpanded)}
          >
            <List.Item title="Chocolate Croissant" />
            <List.Item title="Egg Sandwich" />
          </List.Accordion>

          <List.Accordion
            title="Lunch"
            left={(props) => <List.Icon {...props} icon="food" />}
            expanded={lunchExpanded}
            onPress={() => setLunchExpanded(!lunchExpanded)}
          >
            <List.Item title="Burger w/ fries" />
            <List.Item title="Nasi Goreng(Fried rice)" />
          </List.Accordion>
          <List.Accordion
            title="Dinner"
            left={(props) => <List.Icon {...props} icon="noodles" />}
            expanded={dinnerExpanded}
            onPress={() => setDinnerExpanded(!dinnerExpanded)}
          >
            <List.Item title="Salmon Teriyaki" />
            <List.Item title="Chicken Parmesan" />
          </List.Accordion>
          <List.Accordion
            title="Beverages"
            left={(props) => <List.Icon {...props} icon="beer" />}
            expanded={drinksExpanded}
            onPress={() => setDrinksExpanded(!drinksExpanded)}
          >
            <List.Item title="Ginger Ale" />
            <List.Item title="Beer" />
            <List.Item title="Ice Cold Water" />
          </List.Accordion>
        </List.Section>
      </ScrollView>
    </SafeArea>
  );
};
