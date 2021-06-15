import React, { useState, useContext } from "react";
import { Text } from "../../../components/typography/textComponent";
import { Spacer } from "../../../components/spacer/spacerComponent";
import { ActivityIndicator, Colors } from "react-native-paper";

import home_bg from "../../../../assets/home_bg.jpg";

import { AuthContext } from "../../../services/authentication/auth.context";
import {
  BGImage,
  LoginInput,
  AuthButton,
  ErrorContainer,
} from "../component/account.style";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { onLogin, error, isLoading } = useContext(AuthContext);

  return (
    <BGImage source={home_bg}>
      <Text>Welcome back!</Text>
      {error && (
        <ErrorContainer>
          <Text variant="error">{error}</Text>
        </ErrorContainer>
      )}

      <Spacer size="large" />
      <LoginInput
        label="E-mail"
        value={email}
        textContentType="emailAddress"
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={(text) => setEmail(text)}
      />
      <Spacer size="medium" />
      <LoginInput
        label="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        textContentType="password"
        secureTextEntry
        autoCapitalize="none"
      />
      <Spacer size="large" />
      {!isLoading ? (
        <>
          <AuthButton
            icon="lock-open"
            mode="contained"
            onPress={() => onLogin(email, password)}
          >
            Log in
          </AuthButton>
          <Spacer size="medium" />
          <AuthButton mode="contained" onPress={() => navigation.goBack()}>
            Back
          </AuthButton>
        </>
      ) : (
        <ActivityIndicator animating="true" color={Colors.blue300} />
      )}
    </BGImage>
  );
};
