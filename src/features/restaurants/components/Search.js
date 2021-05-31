import React from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";

export const Search = () => {
  return (
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
  );
};

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
