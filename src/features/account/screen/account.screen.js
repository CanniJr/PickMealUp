import React from "react";

import home_bg from "../../../../assets/home_bg.jpg";

import { Spacer } from "../../../components/spacer/spacerComponent";
import {
  BGImage,
  BGCover,
  AccountContainer,
  AuthButton,
  Title,
} from "../component/account.style";

export const AccountScreen = ({ navigation }) => {
  return (
    <BGImage source={home_bg}>
      <BGCover />
      <Title>Pick Meal Up</Title>
      <AccountContainer>
        <AuthButton
          icon="lock-open"
          mode="contained"
          onPress={() => navigation.navigate("login")}
        >
          Login
        </AuthButton>
        <Spacer size="large" />
        <AuthButton
          icon="mail"
          mode="contained"
          onPress={() => navigation.navigate("register")}
        >
          Register
        </AuthButton>
      </AccountContainer>
    </BGImage>
  );
};
