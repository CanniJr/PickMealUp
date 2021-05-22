import React from "react";
import styled from "styled-components/native";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

const RestaurantInfoCard = ({ restaurant = {} }) => {
  //default values for testing
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://cdn-cajkg.nitrocdn.com/ZJzLelPaQQUYcIzKvveTxTAioLgFVwpU/assets/static/optimized/rev-cd29551/wp-content/uploads/2019/04/mae-mu-pancakes-819x1024.jpg.webp",
    ],
    address = "999 Somewhere Street",
    rating = 4,
    isOpen = true,
    isClosedTemporarily,
  } = restaurant;

  return (
    <RestaurantCard elevation={10}>
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <Title>Some Restaurant</Title>
    </RestaurantCard>
  );
};

export default RestaurantInfoCard;

//----Styled Components----//
const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  padding: ${(props) => props.theme.sizes.md};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.ui.tertiary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.ui.quaternary};
`;
