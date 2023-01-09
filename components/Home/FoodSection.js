import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

import { FONTS, SIZES, COLORS } from "../../constants/theme";
import icons from "../../constants/icons";
import dummyData from "../../constants/dummyData";

const FoodSection = ({ title, onPress, children }) => {
  return (
    <View>
      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: SIZES.padding,
          marginTop: 30,
          marginBottom: 20,
        }}
      >
        <Text style={{ flex: 1, ...FONTS.h3, fontWeight: "700" }}>{title}</Text>
        <TouchableOpacity onPress={onPress}>
          <Text style={{ color: COLORS.primary, ...FONTS.body3 }}>
            Show all
          </Text>
        </TouchableOpacity>
      </View>
      {/* Content Section */}
      {children}
    </View>
  );
};

export default FoodSection;
