import React from "react";

import pancake from "../../../../assets/pancake.jpg";

import { Spacer } from "../../../components/spacer/spacerComponent";
import {
  BGImage,
  BGCover,
  AccountContainer,
  AuthButton,
} from "../component/account.style";

export const AccountScreen = ({ navigation }) => {
  return (
    <BGImage source={pancake}>
      <BGCover />
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
          icon="lock-open"
          mode="contained"
          onPress={() => navigation.navigate("register")}
        >
          Register
        </AuthButton>
      </AccountContainer>
    </BGImage>
  );
};
