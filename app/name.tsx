import Button from "@/components/Button";
import Container from "@/components/Container";
import Header from "@/components/Header";
import { Text } from "@/components/Themed";
import { router } from "expo-router";
import { useState } from "react";
import { Image, TextInput, TextStyle, ViewStyle } from "react-native";

export default function VerificationScreen() {
  const [inputFocus, setInputFocus] = useState(false);
  function onContinue() {
    router.push("/login");
  }
  return (
    <Container>
      <Header currentPage={3} totalPages={5} />
      <Text style={$heading}>What’s Your Name?</Text>
      <Text style={$info}>Let's Get to Know Each Other</Text>

      <TextInput
        placeholder="Enter your name"
        placeholderTextColor="#888888"
        onFocus={() => setInputFocus(true)}
        onBlur={() => setInputFocus(false)}
        style={[
          $input,
          {
            borderColor: inputFocus ? "#FF5069" : "transparent",
          },
        ]}
        keyboardType="phone-pad"
      />

      <Button onPress={onContinue} label="Continue"></Button>

      <Image
        style={{ marginTop: 60 }}
        source={require("@/assets/images/name.png")}
      />
    </Container>
  );
}

const $heading: TextStyle = {
  fontSize: 24,
  fontWeight: "700",
  textAlign: "center",
  marginTop: 40,
};

const $info: TextStyle = {
  marginVertical: 20,
  fontSize: 14,
  color: "#333333",
  textAlign: "center",
  maxWidth: "80%",
  alignSelf: "center",
};

const $input: ViewStyle = {
  alignItems: "center",
  width: "90%",
  alignSelf: "center",
  backgroundColor: "white",
  borderRadius: 40,
  flexDirection: "row",
  gap: 10,
  marginVertical: 20,
  padding: 16,
  borderWidth: 1,
};
