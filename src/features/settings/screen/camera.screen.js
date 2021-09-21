import React, { useRef, useState, useEffect, useContext } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Text } from "../../../components/typography/text.component";
import { Camera } from "expo-camera";

import { AuthContext } from "../../../services/authentication/auth.context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styled from "styled-components/native";

// export const CameraScreen = () => null;
export const CameraScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState("");
  const cameraRef = useRef();
  const { user } = useContext(AuthContext);

  // camera action are outisde of React Native, so use await
  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.curent.takePictureAsync();
      console.log(photo);
      AsyncStorage.setItem(` ${user.uid}-photo`, photo.uri);
      navigation.goBack();
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <TouchableOpacity onPress={snap}>
      <ProfileCamera
        ref={(camera) => (cameraRef.current = camera)}
        type={Camera.Constants.Type.front}
      />
    </TouchableOpacity>
  );
};

const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
`;
