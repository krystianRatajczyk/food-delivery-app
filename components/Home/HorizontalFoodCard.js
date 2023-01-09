import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

import { FONTS, COLORS, SIZES } from "../../constants/theme";
import icons from "../../constants/icons";

const HorizontalFoodCard = ({ containerStyle, imageStyle, item, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.lightGray2,
        ...containerStyle,
      }}
      onPress={onPress}
    >
      {/* Image */}
      <Image source={item.image} style={imageStyle} />
      {/* Info */}
      <View style={{ flex: 1 }}>
        {/* Name */}
        <Text style={{ ...FONTS.h3, fontWeight: "700" }}>{item.name}</Text>
        {/* Description */}
        <Text
          style={{
            color: COLORS.darkGray2,
            ...FONTS.body4,
            maxHeight: "30%",
            maxWidth: "90%",
          }}
        >
          {item.description}
        </Text>
        {/* Price */}
        <Text style={{ marginTop: SIZES.base, ...FONTS.h2, fontWeight: "700" }}>
          ${item.price}
        </Text>
      </View>
      {/* Calories */}
      <View
        style={{
          flexDirection: "row",
          position: "absolute",
          top: 5,
          right: SIZES.radius,
        }}
      >
        <Image source={icons.calories} style={{ width: 30, height: 30 }} />
        <Text style={{ color: COLORS.darkGray2, ...FONTS.body5 }}>
          {item.calories} Calories
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default HorizontalFoodCard;
