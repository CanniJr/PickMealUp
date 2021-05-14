import { StatusBar as ExpoStatsBar } from "expo-status-bar";
import React from "react";
import { StatusBar, StyleSheet, Text, View, SafeAreaView } from "react-native";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.Container}>
        <View style={styles.searchContainer}>
          <Text>Search</Text>
        </View>
        <View style={styles.listContainer}>
          <Text>List</Text>
        </View>
      </SafeAreaView>

      <ExpoStatsBar />
    </>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  searchContainer: {
    padding: 15,
    backgroundColor: "green",
  },
  listContainer: {
    padding: 15,
    flex: 1,
    backgroundColor: "blue",
  },
});
