import { View } from "react-native";
import React from "react";
import { COLORS } from "../../constants/theme";

const LineDivider = ({ lineStyle }) => {
  return (
    <View
      style={{
        ...lineStyle,
        backgroundColor: COLORS.lightGray2,
        height: 2,
        width: "100%",
      }}
    />
  );
};

export default LineDivider;
