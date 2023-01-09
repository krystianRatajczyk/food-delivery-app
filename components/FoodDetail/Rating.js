import { View, StyleSheet, Image } from "react-native";
import React from "react";
import { COLORS } from "../../constants/theme";
import icons from "../../constants/icons";
import Star from "./Star";

const Rating = ({
  rating,
  iconStyle,
  activeColor = COLORS.orange,
  inActiveColor = COLORS.lightOrange3,
}) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push("STAR_FILLED");
    }
    for (let i = 0; i < 5 - rating; i++) {
      stars.push("STARS_OUTLINED");
    }

    return stars.map((item, index) => {
      if (item === "STAR_FILLED") {
        return (
          <Star key={index} starColor={activeColor} iconStyle={iconStyle} />
        );
      } else {
        return (
          <Star key={index} starColor={inActiveColor} iconStyle={iconStyle} />
        );
      }
    });
  };

  return <View style={{ flexDirection: "row" }}>{renderStars()}</View>;
};

export default Rating;

const styles = StyleSheet.create({
  rateIcon: {
    height: 15,
    width: 15,
  },
});
