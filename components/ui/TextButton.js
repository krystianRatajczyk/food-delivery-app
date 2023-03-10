import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../../constants/theme";

const TextButton = ({
  label,
  labelStyle,
  label2 = "",
  label2Style,
  buttonContainerStyle,
  onPress,
  disabled,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.primary,
        ...buttonContainerStyle,
      }}
    >
      <Text style={{ color: COLORS.white, ...FONTS.h3, ...labelStyle }}>
        {label}
      </Text>
      {label2 !== "" && (
        <Text
          style={{
            flex: 1,
            textAlign: "right",
            color: COLORS.white,
            ...FONTS.h3,
            ...label2Style,
          }}
        >
          {label2}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default TextButton;
