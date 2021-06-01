import React, { useContext } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";

import { LocationContext } from "../../../services/location/location.context";

export const Search = () => {
  const locationContext = useContext(LocationContext);
  console.log(locationContext);

  return (
    <SearchContainer>
      <Searchbar placeholder="Search location" value={} />
    </SearchContainer>
  );
};

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
