import { colors } from "../../../infrastructure/theme/colors";
import { Button, TextInput } from "react-native-paper";
import styled from "styled-components/native";
import { Text } from "../../../components/typography/text.component";

export const BGImage = styled.ImageBackground`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const BGCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.2);
`;

export const Title = styled(Text)`
  font-size: 30px;
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

export const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;

export const AnimationWrapper = styled.View`
  position: absolute;
  height: 55%;
  width: 100%;
  top: -130px;
  left: 12px;
`;
