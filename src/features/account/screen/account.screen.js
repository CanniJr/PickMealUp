import React from "react";
import LottieView from "lottie-react-native";

import home_bg from "../../../../assets/home_bg.jpg";

import { Spacer } from "../../../components/spacer/spacerComponent";
import {
  BGImage,
  BGCover,
  AccountContainer,
  AuthButton,
  Title,
  AnimationWrapper,
} from "../components/account.style";

export const AccountScreen = ({ navigation }) => {
  return (
    <BGImage source={home_bg}>
      <BGCover />
      <AnimationWrapper>
        <LottieView
          key="animation"
          resizeMode="cover"
          autoPlay
          loop
          source={require("../../../../assets/pickup.json")}
          //
        />
      </AnimationWrapper>
      <Title>Pick Meal Up</Title>
      <AccountContainer>
        <AuthButton
          icon="lock-open"
          mode="contained"
          onPress={() => navigation.navigate("login")}
        >
          Login
        </AuthButton>
        <Spacer size="large" />
        <AuthButton
          icon="mail"
          mode="contained"
          onPress={() => navigation.navigate("register")}
        >
          Register
        </AuthButton>
      </AccountContainer>
    </BGImage>
  );
};

// To fetch lottie from remote site

// const [lottie, setLottie] = useState("");
// useEffect(() => {
//   fetch("https://assets4.lottiefiles.com/packages/lf20_bHVEVT.json")
//     .then((resp) => resp.json())
//     .then((data) => setLottie(data));
// }, []);
