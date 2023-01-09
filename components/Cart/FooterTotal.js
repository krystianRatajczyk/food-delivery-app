import { View, Text, Platform } from "react-native";
import React from "react";

import { FONTS, COLORS, SIZES } from "../../constants/theme";
import { LinearGradient } from "expo-linear-gradient";
import LineDivider from "../ui/LineDivider";
import TextButton from "../ui/TextButton";

const FooterTotal = ({ subTotal, shippingFee, total, onPress, discount }) => {
  
  return (
    <View>
      {/* Shadow */}
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={[COLORS.transparent, COLORS.lightGray1]}
        style={{
          position: "absolute",
          top: -15,
          left: 0,
          right: 0,
          height: Platform.OS === "ios" ? 200 : 50,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        }}
      />
      {/* Order Details */}
      <View
        style={{
          padding: SIZES.padding,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: COLORS.white,
        }}
      >
        {/* Subtotal */}
        <View style={{ flexDirection: "row" }}>
          <Text style={{ flex: 1, ...FONTS.body3, fontWeight: "700" }}>
            Subtotal
          </Text>
          <Text style={{ ...FONTS.h3, fontWeight: "700" }}>
            ${subTotal.toFixed(2)}
          </Text>
        </View>
        {/* Shipping fee */}
        <View
          style={{
            flexDirection: "row",
            marginTop: SIZES.base,
            marginBottom: !discount ? SIZES.radius : null,
          }}
        >
          <Text style={{ flex: 1, ...FONTS.body3, fontWeight: "700" }}>
            Shipping Fee
          </Text>
          <Text style={{ ...FONTS.h3 }}>${shippingFee.toFixed(2)}</Text>
        </View>
        {discount && (
          <View
            style={{
              flexDirection: "row",
              marginTop: SIZES.base,
              marginBottom: SIZES.radius,
            }}
          >
            <Text style={{ flex: 1, ...FONTS.body3, fontWeight: "700" }}>
              Discount: {discount} %
            </Text>
            <Text style={{ ...FONTS.h3, color: COLORS.green }}>
              ${((discount / 100) * total).toFixed(2)}
            </Text>
          </View>
        )}

        {/* Line */}
        <LineDivider />
        {/* Total */}
        <View style={{ flexDirection: "row", marginTop: SIZES.padding }}>
          <Text style={{ flex: 1, ...FONTS.h2, fontWeight: "800" }}>
            Total:
          </Text>
          <Text style={{ ...FONTS.h2, fontWeight: "800" }}>
            $
            {discount
              ? (total - (discount / 100) * total).toFixed(2)
              : total.toFixed(2)}
          </Text>
        </View>
        {/* Button */}
        <TextButton
          buttonContainerStyle={{
            height: 60,
            marginTop: SIZES.padding,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.primary,
          }}
          label="Place your Order"
          onPress={onPress}
        />
      </View>
    </View>
  );
};

export default FooterTotal;
