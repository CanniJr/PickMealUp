import React from "react";
import { SvgXml } from "react-native-svg";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Favourite } from "../../../components/favourites/favourites.component";
import star from "../../../../assets/star";
import open from "../../../../assets/open";

import {
  Address,
  RestaurantCardCover,
  RestaurantCard,
  Info,
  Section,
  SectionEnd,
  Ratings,
  Icon,
} from "./restaurant.info.card-style";

const RestaurantInfoCard = ({ restaurant }) => {
  //default values for testing
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://cdn-cajkg.nitrocdn.com/ZJzLelPaQQUYcIzKvveTxTAioLgFVwpU/assets/static/optimized/rev-cd29551/wp-content/uploads/2019/04/mae-mu-pancakes-819x1024.jpg.webp",
    ],
    vicinity = "999 Somewhere Street",
    rating = 4,
    isOpen = true,
    isClosedTemporarily = true,
    placeId,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={10}>
      <Favourite restaurant={restaurant} />
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text>{name}</Text>
        <Section>
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
          <SectionEnd>
            {isClosedTemporarily && <Text variant="error">CLOSED TEMP</Text>}
            <Spacer position="left" size="medium">
              {isOpen ? <SvgXml xml={open} width={20} height={20} /> : null}
            </Spacer>
            <Spacer position="left" size="medium">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{vicinity}</Address>
      </Info>
    </RestaurantCard>
  );
};

export default RestaurantInfoCard;

//----Styled Components---- MOVED TO ITS OWN FILE//
