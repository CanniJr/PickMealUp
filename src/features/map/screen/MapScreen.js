import React, { useContext, useEffect, useState } from "react";
import MapView from "react-native-maps";
import styled from "styled-components";
import { LocationContext } from "../../../services/location/location.context";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { MapSearch } from "../components/MapSearch";

export const MapScreen = () => {
  const { location } = useContext(LocationContext);
  const { restaurants } = useContext(RestaurantsContext);
  // console.log(location)
  const { lat, lng, viewport } = location;

  const [latDelta, setLatDelta] = useState(0); // determines the zoom level on render

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);

  return (
    <>
      <MapSearch />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant) => {
          return (
            <MapView.Marker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
            />
          );
        })}
      </Map>
    </>
  );
};

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;
