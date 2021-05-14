import React, { useState } from "react";
import { StatusBar, View, Text, SafeAreaView, StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";

const RestaurantScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.searchContainer}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
      <View style={styles.listContainer}>
        <Text>List</Text>
      </View>
    </SafeAreaView>
  );
};

export default RestaurantScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  searchContainer: {
    padding: 15,
  },
  listContainer: {
    padding: 15,
    flex: 1,
    backgroundColor: "blue",
  },
});
