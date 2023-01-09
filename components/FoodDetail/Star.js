import { Image, StyleSheet } from "react-native";
import React from "react";
import icons from "../../constants/icons";

const Star = ({ starColor, iconStyle }) => {
  return (
    <Image
      source={icons.star}
      style={{
        tintColor: starColor,
        ...styles.rateIcon,
        ...iconStyle,
      }}
    />
  );
};

export default Star;

const styles = StyleSheet.create({
  rateIcon: {
    height: 15,
    width: 15,
  },
});
