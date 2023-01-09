import { View, Text, TouchableOpacity, Image } from "react-native";
import { COLORS } from "../../constants/theme";
import React from "react";

const IconButton = ({ containerStyle, icon, iconStyle, onPress, disabled }) => {
  return (
    <TouchableOpacity
      style={{ ...containerStyle }}
      onPress={onPress}
      disabled={disabled}
    >
      <Image
        source={icon}
        style={{ width: 30, height: 30, tintColor: COLORS.white, ...iconStyle }}
      />
    </TouchableOpacity>
  );
};

export default IconButton;
