import React, { useRef, useState, useEffect } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Text } from "../../../components/typography/text.component";
import { Camera } from "expo-camera";
import styled from "styled-components/native";

// export const CameraScreen = () => null;
export const CameraScreen = () => {
  const [hasPermission, setHasPermission] = useState("");
  const cameraRef = useRef();

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
    <ProfileCamera
      ref={(camera) => (cameraRef.current = camera)}
      type={Camera.Constants.Type.front}
    />
  );
};

const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
`;
