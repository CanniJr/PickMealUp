import React, { useContext, useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { List, Avatar } from "react-native-paper";
import { Text } from "../../../components/typography/text.component";
import { SafeArea } from "../../../components/utility/safe.area.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AuthContext } from "../../../services/authentication/auth.context";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthContext);
  const [photo, setPhoto] = useState(null);

  const getProfilepicture = async () => {
    const photoUri = await AsyncStorage.getItem(` ${user.uid}-photo`);
  };
  useEffect(() => {
    getProfilepicture();
  }, [user]);

  return (
    <SafeArea>
      <AvatarWrapper>
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
          <Avatar.Icon icon="account" size={100} backgroundColor="turquoise" />
          <Spacer position="top" size="medium" />
          <Text>{user.email}</Text>
        </TouchableOpacity>
      </AvatarWrapper>
      <List.Section>
        <SettingsList
          title="Favourites"
          description="View your favourites"
          left={(props) => <List.Icon {...props} color="black" icon="star" />}
          onPress={() => navigation.navigate("Favourites")}
        />
        <SettingsList
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={onLogout}
        />
      </List.Section>
    </SafeArea>
  );
};

// Styled components

const SettingsList = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;

const AvatarWrapper = styled.View`
  align-items: center;
  margin: ${(props) => props.theme.space[3]};
`;