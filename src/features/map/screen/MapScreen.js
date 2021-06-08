import React, { useContext } from "react";
import MapView from "react-native-maps";
import styled from "styled-components";
import { LocationContext } from "../../../services/location/location.context";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { MapSearch } from "../components/MapSearch";

export const MapScreen = () => {
  const { location } = useContext(LocationContext);
  const { restaurants } = useContext(RestaurantsContext);

  return (
    <>
      <MapSearch />
      <Map>
        {restaurants.map((restaurant) => {
          return null;
        })}
      </Map>
    </>
  );
};

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;
