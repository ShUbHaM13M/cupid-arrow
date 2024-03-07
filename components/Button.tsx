import { Pressable, TextStyle, ViewStyle } from "react-native";
import { Text } from "./Themed";

interface ButtonProps {
  label: string;
  onPress: () => void;
}

export default function Button({ label, onPress }: ButtonProps) {
  return (
    <Pressable style={$container} onPress={onPress}>
      <Text style={$text}>{label}</Text>
    </Pressable>
  );
}

const $container: ViewStyle = {
  backgroundColor: "#FF5069",
  padding: 16,
  width: "90%",
  borderRadius: 40,
  alignItems: "center",
  alignSelf: "center",
};
const $text: TextStyle = {
  fontSize: 18,
  color: "white",
};
