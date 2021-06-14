import { colors } from "../../../infrastructure/theme/colors";
import { Button, TextInput } from "react-native-paper";
import styled from "styled-components/native";

export const BGImage = styled.ImageBackground`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const BGCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.3);
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[2]};
`;

export const AuthButton = styled(Button).attrs({
  color: colors.brand.primary,
})``;

export const LoginInput = styled(TextInput)`
  width: 80%;
`;
