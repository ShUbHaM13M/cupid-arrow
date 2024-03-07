import { Image, Pressable, TextStyle, ViewStyle } from "react-native";
import { Text, View } from "./Themed";

interface LoginButtionProps {
  onSwipe: () => void;
}

export default function LoginButton({ onSwipe }: LoginButtionProps) {
  return (
    <Pressable style={$container} onPress={onSwipe}>
      <View style={$iconContainer}>
        <Image source={require("@/assets/images/call.png")} />
      </View>
      <Text style={$loginText}>Login with Phone</Text>
    </Pressable>
  );
}

const $container: ViewStyle = {
  padding: 6,
  width: "84%",
  backgroundColor: "#FF5069",
  borderRadius: 40,
  alignItems: "center",
  flexDirection: "row",
  gap: 20,
};

const $iconContainer: ViewStyle = {
  backgroundColor: "white",
  borderRadius: 40,
  padding: 12,
};

const $loginText: TextStyle = {
  fontSize: 18,
  color: "white",
  flex: 1,
  marginLeft: 10,
};
