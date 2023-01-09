import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

import { COLORS, FONTS } from "../../constants/theme";

const TextIconButton = ({
  containerStyle,
  label,
  labelStyle,
  icon,
  iconStyle,
  onPress,
  iconPosition,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        ...containerStyle,
      }}
    >
      {iconPosition === "LEFT" && (
        <Image
          source={icon}
          style={{
            marginLeft: 5,
            width: 20,
            height: 20,
            tintColor: COLORS.black,
            ...iconStyle,
          }}
        />
      )}
      <Text style={{ ...FONTS.body3, ...labelStyle }}>{label}</Text>
      {iconPosition === "RIGHT" && (
        <Image
          source={icon}
          style={{
            marginLeft: 5,
            width: 20,
            height: 20,
            tintColor: COLORS.black,
            ...iconStyle,
          }}
        />
      )}
    </TouchableOpacity>
  );
};

export default TextIconButton;
