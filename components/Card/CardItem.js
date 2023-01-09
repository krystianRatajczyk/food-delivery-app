import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { FONTS, COLORS, SIZES } from "../../constants/theme";
import icons from "../../constants/icons";

const CardItem = ({ item, isSelected, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: "row",
        height: 100,
        alignItems: "center",
        marginTop: SIZES.radius,
        paddingHorizontal: SIZES.padding,
        borderWidth: 2,
        borderRadius: SIZES.radius,
        borderColor: isSelected ? COLORS.primary : COLORS.lightGray2,
      }}
    >
      <View
        style={{
          width: 60,
          height: 45,
          alignItems: "center",
          justifyContent: "center",
          borderWidth: 2,
          borderRadius: SIZES.radius,
          borderColor: COLORS.lightGray2,
        }}
      >
        <Image
          source={item.icon}
          style={{ width: 35, height: 35 }}
          resizeMode="contain"
        />
      </View>
      {/* Name */}
      <Text style={{ flex: 1, marginLeft: SIZES.radius, ...FONTS.h3 }}>
        {item.name}
      </Text>
      <Image
        source={isSelected ? icons.check_on : icons.check_off}
        style={{ width: 25, height: 25 }}
      />
    </TouchableOpacity>
  );
};

export default CardItem;
