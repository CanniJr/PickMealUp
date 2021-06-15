import React, { useContext } from "react";
import { Text, Button } from "react-native";
import { SafeArea } from "../../../components/utility/safeArea.component";
import { AuthContext } from "../../../services/authentication/auth.context";

export const SettingsScreen = () => {
  const { onLogout } = useContext(AuthContext);
  return (
    <SafeArea>
      <Text>Settings</Text>
      <Button title="Log out" onPress={() => onLogout()} />
    </SafeArea>
  );
};
