import React, { useContext, useState } from "react";
import { Text } from "../../components/typography/textComponent";
import { AppNavigator } from "./app.navigator";
import { AuthContext } from "../../services/authentication/auth.context";

export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return isAuthenticated ? (
    <AppNavigator />
  ) : (
    <Text>You're not logged in! 🙃</Text>
  );
};
