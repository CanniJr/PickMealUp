import React, { useState, useContext } from "react";
import { View } from "react-native";
import { Text } from "../../../components/typography/textComponent";
import { Spacer } from "../../../components/spacer/spacerComponent";

import home_bg from "../../../../assets/home_bg.jpg";
import { BGImage } from "../component/account.style";

import { AuthContext } from "../../../services/authentication/auth.context";
import {
  LoginInput,
  AccountContainer,
  AuthButton,
} from "../component/account.style";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { onLogin, error } = useContext(AuthContext);

  const submitHandler = () => onLogin(email, password);

  return (
    <BGImage source={home_bg}>
      <Text>Welcome back!</Text>
      <Spacer size="large" />

      <LoginInput
        label="Email"
        value={email}
        textContentType="emailAddress"
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={(text) => setEmail(text)}
      />
      <Spacer size="medium" />
      <LoginInput
        label="Password"
        onChangeText={(text) => setPassword(text)}
        textContentType="password"
        secureTextEntry
        autoCapitalize="none"
        secure
      />
      <Spacer size="large" />
      <AuthButton icon="lock-open" mode="contained" onPress={submitHandler}>
        Log in
      </AuthButton>
      {error.length && <Text variant="error">{error}</Text>}
    </BGImage>
  );
};
