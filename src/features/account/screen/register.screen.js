import React from "react";
import { Text } from "react-native";

import home_bg from "../../../../assets/home_bg.jpg";
import { BGImage } from "../component/account.style";

export const RegisterScreen = () => {
  return (
    <BGImage source={home_bg}>
      <Text>RegisterScreen</Text>
    </BGImage>
  );
};
