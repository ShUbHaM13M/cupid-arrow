import Container from "@/components/Container";
import { router } from "expo-router";
import { useEffect } from "react";
import { Image, ImageStyle, ViewStyle } from "react-native";

export default function SplashScreen() {
  useEffect(() => {
    let timeout = setTimeout(() => {
      router.replace("/login");
    }, 2000);
    return () => {
      clearTimeout(timeout);
    };
  });

  return (
    <Container styles={$container}>
      <Image style={$logo} source={require("@/assets/images/logo.png")} />
    </Container>
  );
}

const $container: ViewStyle = {
  justifyContent: "center",
  alignItems: "center",
};

const $logo: ImageStyle = {
  width: 220,
  height: 82,
};
