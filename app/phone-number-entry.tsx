import Button from "@/components/Button";
import Container from "@/components/Container";
import Header from "@/components/Header";
import { Text, View } from "@/components/Themed";
import { router } from "expo-router";
import { Image, TextInput, TextStyle, ViewStyle } from "react-native";

export default function PhoneNumberEntryScreen() {
  function onContinuePress() {
    router.push("/verification");
  }
  return (
    <Container>
      <Header currentPage={1} totalPages={5} />
      <Text style={$heading}>My Number Is</Text>
      <Text style={$info}>
        We'll need your phone number to send an OTP for verification.
      </Text>
      <View style={$inputContainer}>
        <Image source={require("@/assets/images/india.png")} />
        <Text>+91</Text>
        <Image source={require("@/assets/images/arrow-down.png")} />
        <View style={$separator}></View>
        <TextInput
          placeholder="Enter phone number"
          placeholderTextColor="#888888"
          style={$input}
          keyboardType="phone-pad"
        />
      </View>
      <Button label="Continue" onPress={onContinuePress}></Button>
      <Image
        style={{ marginTop: 100 }}
        source={require("@/assets/images/phone-screen.png")}
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
  marginTop: 10,
  fontSize: 14,
  color: "#333333",
  textAlign: "center",
  maxWidth: "80%",
  alignSelf: "center",
};

const $inputContainer: ViewStyle = {
  marginVertical: 30,
  alignItems: "center",
  width: "90%",
  alignSelf: "center",
  backgroundColor: "white",
  borderRadius: 40,
  flexDirection: "row",
  gap: 10,
  padding: 8,
};
const $input: ViewStyle = {
  flex: 1,
};
const $separator: ViewStyle = {
  height: "100%",
  width: 1,
  backgroundColor: "#D8D8D8",
};
