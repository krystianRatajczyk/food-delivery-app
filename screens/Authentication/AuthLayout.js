import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { FONTS, SIZES, COLORS } from "../../constants/theme";
import images from "../../constants/images";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import icons from "../../constants/icons";

const AuthLayout = ({
  title,
  subtitle,
  titleContainerStyle,
  children,
  backButton,
  backButtonOnPress,
}) => {
  return (
    <View
      style={{
        flex: 1,
        paddingVertical: SIZES.padding,
        backgroundColor: COLORS.white,
      }}
    >
      <KeyboardAwareScrollView
        keyboardDismissMode="on-drag"
        contentContainerStyle={{
          flex: 1,
          paddingHorizontal: SIZES.padding,
        }}
      >
        {/* App icon */}
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          {backButton && (
            <TouchableOpacity
              onPress={backButtonOnPress}
              style={{ position: "absolute", left: 0 }}
            >
              <Image
                source={icons.back}
                style={{ width: 30, height: 30, tintColor: 'black' }}
              />
            </TouchableOpacity>
          )}
          <Image
            source={images.logo_02}
            resizeMode="contain"
            style={{ height: 100, width: 200 }}
          />
        </View>
        {/* Title and subtitle */}
        <View style={{ marginTop: SIZES.padding, ...titleContainerStyle }}>
          <Text style={{ textAlign: "center", ...FONTS.h2, fontWeight: "800" }}>
            {title}
          </Text>
          <Text
            style={{
              textAlign: "center",
              color: COLORS.darkGray,
              marginTop: SIZES.base,
              ...FONTS.body3,
            }}
          >
            {subtitle}
          </Text>
        </View>
        {/* Content */}
        {children}
      </KeyboardAwareScrollView>
    </View>
  );
};

export default AuthLayout;
