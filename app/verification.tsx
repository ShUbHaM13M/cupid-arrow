import Button from "@/components/Button";
import Container from "@/components/Container";
import Header from "@/components/Header";
import OTPInput from "@/components/OTPInput";
import { Text } from "@/components/Themed";
import { router } from "expo-router";
import { useState } from "react";
import { Image, Pressable, TextStyle } from "react-native";

export default function VerificationScreen() {
  const [otp, setOtp] = useState(Array.from({ length: 4 }, (a, b) => ""));
  function onResendPress() {
    setOtp((prev) => prev.map(() => ""));
  }
  function onVerifyPress() {
    if (otp.join("") === "5154") {
      router.push("/name");
    }
  }
  return (
    <Container>
      <Header currentPage={2} totalPages={5} />
      <Text style={$heading}>Verification Code</Text>
      <Text style={$info}>
        Please enter code we just send to{"\n"}
        <Text style={[$info, { fontWeight: "700" }]}>+91 99292 77633</Text>
      </Text>

      <OTPInput otp={otp} setOtp={setOtp} />

      <Text style={[$info, { marginVertical: 20, marginBottom: 40 }]}>
        Didn’t receive OTP? {"\n"}
        <Pressable onPress={onResendPress}>
          <Text style={{ color: "#FF5069" }}>Resend Code</Text>
        </Pressable>
      </Text>

      <Button onPress={onVerifyPress} label="Verify"></Button>

      <Image
        style={{ marginTop: 60 }}
        source={require("@/assets/images/verification.png")}
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
