import React, { useState, useContext } from "react";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { ActivityIndicator, Colors } from "react-native-paper";

import home_bg from "../../../../assets/home_bg.jpg";

import { AuthContext } from "../../../services/authentication/auth.context";
import {
  BGImage,
  LoginInput,
  AuthButton,
  ErrorContainer,
  Title,
} from "../components/account.style";

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");

  const { onRegister, error, isLoading } = useContext(AuthContext);

  return (
    <BGImage source={home_bg}>
      <Title>Pick Meal Up</Title>
      {error && (
        <ErrorContainer>
          <Text variant="error">{error}</Text>
        </ErrorContainer>
      )}

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
        value={password}
        onChangeText={(text) => setPassword(text)}
        textContentType="password"
        secureTextEntry
        autoCapitalize="none"
      />
      <Spacer size="medium" />
      <LoginInput
        label="Repeat Password"
        value={repeatedPassword}
        onChangeText={(text) => setRepeatedPassword(text)}
        textContentType="password"
        secureTextEntry
        autoCapitalize="none"
      />
      <Spacer size="large" />
      {!isLoading ? (
        <>
          <AuthButton
            icon="mail"
            mode="contained"
            onPress={() => onRegister(email, password, repeatedPassword)}
          >
            Register
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
