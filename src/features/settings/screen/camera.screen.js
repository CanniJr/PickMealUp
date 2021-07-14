import React, { useRef, useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
import styled from "styled-components/native";

// export const CameraScreen = () => null;
export const CameraScreen = () => {
  const [hasPermission, setHasPermission] = useState("");
  const cameraRef = useRef();
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
