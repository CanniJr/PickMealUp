import React from "react";
import { Text } from "react-native";

import home_bg from "../../../../assets/home_bg.jpg";
import { BGContainer, BGImage } from "./account.style";

export const RegisterScreen = () => {
  return (
    <BGContainer>
      <BGImage source={home_bg}>
        <Text>RegisterScreen</Text>
      </BGImage>
    </BGContainer>
  );
};
