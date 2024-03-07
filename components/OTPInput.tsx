import { TextInput, ViewStyle } from "react-native";
import { View } from "./Themed";
import { useState } from "react";

interface OTPInputProps {
  otp: Array<string>;
  setOtp: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function OTPInput({ otp, setOtp }: OTPInputProps) {
  return (
    <View style={$container}>
      {otp.map((value, index) => {
        return (
          <TextInput
            key={index}
            onChangeText={(v) =>
              setOtp((prev) => {
                return prev.map((p, i) => {
                  if (i === index) return v;
                  return p;
                });
              })
            }
            value={value}
            style={$input}
            placeholder="-"
            placeholderTextColor="black"
            keyboardType="number-pad"
          />
        );
      })}
    </View>
  );
}

const $container: ViewStyle = {
  flexDirection: "row",
  gap: 20,
  justifyContent: "center",
  backgroundColor: "transparent",
};
const $input: ViewStyle = {
  height: 56,
  width: 56,
  paddingLeft: 24,
  backgroundColor: "white",
  borderRadius: 40,
};
