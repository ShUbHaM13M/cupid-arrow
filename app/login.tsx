import Container from "@/components/Container";
import LoginButton from "@/components/LoginButton";
import { Text } from "@/components/Themed";
import { router } from "expo-router";
import { Image, ImageStyle, TextStyle, ViewStyle } from "react-native";

export default function Login() {
  function onLoginSwipe() {
    router.push("/phone-number-entry");
  }

  return (
    <Container styles={$container}>
      <Image style={$logo} source={require("@/assets/images/logo.png")} />
      <Image
        style={$login_banner}
        source={require("@/assets/images/login_banner.png")}
      />
      <Text style={$title}>Discover Love where your story begins.</Text>
      <Text style={$content}>
        Join us to discover your ideal partner and ignite the sparks of romance
        in your journey.
      </Text>
      <LoginButton onSwipe={onLoginSwipe} />
      <Text style={$footerText}>
        Don’t have an account?
        <Text style={{ color: "#FF5069" }}> Sign Up</Text>
      </Text>
    </Container>
  );
}

const $container: ViewStyle = {
  alignItems: "center",
  gap: 28,
};

const $logo: ImageStyle = {
  width: 115,
  height: 43,
};

const $login_banner: ImageStyle = {
  width: "100%",
};

const $title: TextStyle = {
  fontSize: 24,
  textAlign: "center",
  maxWidth: "90%",
  fontWeight: "700",
};

const $content: TextStyle = {
  fontSize: 16,
  color: "#333333",
  maxWidth: "80%",
  textAlign: "center",
};

const $footerText: TextStyle = {
  fontSize: 14,
  textAlign: "center",
};
