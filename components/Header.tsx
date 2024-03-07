import { Image, ImageStyle, Pressable, ViewStyle } from "react-native";
import { View } from "./Themed";
import { router } from "expo-router";

interface HeaderProps {
  currentPage: number;
  totalPages: number;
}

export default function Header({ currentPage, totalPages }: HeaderProps) {
  function onBackPress() {
    router.back();
  }
  const progressWidth = (currentPage / totalPages) * 100;
  return (
    <View style={$container}>
      <Pressable style={$backButton} onPress={onBackPress}>
        <Image source={require("@/assets/images/back.png")} />
      </Pressable>
      <View style={$progressContainer}>
        <View style={[$progress, { width: progressWidth }]}></View>
      </View>
    </View>
  );
}
const $backButton: ViewStyle = {
  position: "absolute",
  left: 16,
};

const $container: ViewStyle = {
  backgroundColor: "transparent",
  padding: 16,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
};
const $progressContainer: ViewStyle = {
  height: 8,
  borderRadius: 20,
  backgroundColor: "#FFE9F1",
  width: 180,
  overflow: "hidden",
};
const $progress: ViewStyle = {
  backgroundColor: "#FF5069",
  height: 8,
};
