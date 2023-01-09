import { View, Text } from "react-native";
import React from "react";
import { FONTS } from "../../constants/theme";

const Header = ({
  containerStyle,
  title,
  leftComponent,
  rightComponent,
  titleStyle,
}) => {
  return (
    <View style={{ flexDirection: "row", ...containerStyle, height: 60 }}>
      {/* left */}
      {leftComponent}
      {/* title */}
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ ...FONTS.h3, fontWeight: "700", ...titleStyle }}>
          {title}
        </Text>
      </View>
      {/* right */}
      {rightComponent}
    </View>
  );
};

export default Header;
