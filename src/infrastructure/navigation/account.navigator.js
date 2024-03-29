import React from "react";

import { AccountScreen } from "../../features/account/screen/account.screen";
import { LoginScreen } from "../../features/account/screen/login.screen";
import { RegisterScreen } from "../../features/account/screen/register.screen";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export const AccountNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="main" component={AccountScreen} />
    <Stack.Screen name="login" component={LoginScreen} />
    <Stack.Screen name="register" component={RegisterScreen} />
  </Stack.Navigator>
);
