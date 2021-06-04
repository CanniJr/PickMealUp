import React from "react";
import { SvgXml } from "react-native-svg";

import { Text } from "../../../components/typography/textComponent";
import { Spacer } from "../../../components/spacer/spacerComponent";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import pricetag from "../../../../assets/pricetag";

import {
  Address,
  RestaurantCardCover,
  RestaurantCard,
  Info,
  Section,
  SectionEnd,
  Ratings,
  Icon,
  Ratings as Price,
} from "../components/RestaurantInfoCard.style";

export const RestaurantdetailCard = ({ restaurant }) => {
  const { name, icon, priceLevel, rating, isOpen, photos, vicinity, placeId } =
    restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  const priceArray = Array.from(new Array(Math.floor(priceLevel)));

  return (
    <RestaurantCard>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text>{name}</Text>
        <Price>
          {priceArray.map(
            (
              _,
              i // using the index as part of the key to make a unique key for each component.
            ) => (
              <SvgXml
                key={`star-${placeId}-${i}`}
                xml={pricetag}
                width={20}
                height={15}
              />
            )
          )}
        </Price>
        <Ratings>
          {ratingArray.map(
            (
              _,
              i // using the index as part of the key to make a unique key for each component.
            ) => (
              <SvgXml
                key={`star-${placeId}-${i}`}
                xml={star}
                width={20}
                height={20}
              />
            )
          )}
        </Ratings>
      </Info>
    </RestaurantCard>
  );
};
