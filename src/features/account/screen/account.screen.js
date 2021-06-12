import React from "react";
import { Text } from "../../../components/typography/textComponent";
import home_bg from "../../../../assets/home_bg.jpg";

import { BGContainer, BGImage } from "./account.style";

export const AccountScreen = () => {
  return (
    <BGContainer>
      <BGImage source={home_bg}>
        <Text>AccountScreen</Text>
      </BGImage>
    </BGContainer>
  );
};
