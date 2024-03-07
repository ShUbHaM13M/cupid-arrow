import {
  StatusBar,
  Dimensions,
  Image,
  ImageStyle,
  ViewStyle,
} from "react-native";

import { Text, View } from "./Themed";

const { height, width } = Dimensions.get("screen");

interface ContainerProps {
  children: React.ReactNode;
  styles?: ViewStyle;
}

export default function Container({ children, styles }: ContainerProps) {
  let style = $container;
  if (styles) {
    style = { ...$container, ...styles };
  }
  return (
    <View style={style}>
      <Image style={$image} source={require("@/assets/images/bg.png")} />
      {children}
    </View>
  );
}

const $container: ViewStyle = {
  flex: 1,
  paddingTop: StatusBar.currentHeight || 40,
};

const $image: ImageStyle = {
  width,
  height,
  position: "absolute",
  top: 0,
  left: 0,
};
