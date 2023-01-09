import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";

import { FONTS, SIZES, COLORS } from "../../constants/theme";
import TextButton from "../../components/ui/TextButton";
import AuthLayout from "./AuthLayout";
import OTPInputView from "@twotalltotems/react-native-otp-input";

const Otp = ({ navigation }) => {
  const [timer, setTimer] = useState(60);
  const [isFilled, setIsFilled] = useState(false);
  useEffect(() => {
    let interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer > 0) {
          return prevTimer - 1;
        } else {
          return prevTimer;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <AuthLayout
      title="OTP Authentication"
      subtitle="An Authentication code has been sent to email"
      titleContainerStyle={{ marginTop: SIZES.padding * 2 }}
    >
      {/* Otp inputs */}
      <View style={{ flex: 1, marginTop: SIZES.padding * 2 }}>
        <OTPInputView
          pinCount={4}
          style={{ width: "100%", height: 50 }}
          codeInputFieldStyle={{
            width: 65,
            height: 65,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.lightGray2,
            color: COLORS.black,
            ...FONTS.h3,
          }}
          codeInputHighlightStyle={{
            backgroundColor: COLORS.gray3,
          }}
          editable={true}
          onCodeChanged={(code) => {
            if (code.length < 4) {
              setIsFilled(false);
            }
          }}
          autoFocusOnLoad
          onCodeFilled={(code) => {
            setIsFilled(true);
          }}
        />
        {/* Countdown Timer  */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: SIZES.padding,
          }}
        >
          <Text style={{ color: COLORS.darkGray, ...FONTS.body3 }}>
            Didn't receive code ?
          </Text>
          <TextButton
            label={`Resend (${timer}s)`}
            disabled={timer === 0}
            buttonContainerStyle={{
              marginLeft: SIZES.base,
              backgroundColor: null,
            }}
            labelStyle={{ color: COLORS.primary, ...FONTS.h3 }}
            onPress={() => setTimer(60)}
          />
        </View>
      </View>
      {/* Footer */}
      <View>
        <TextButton
          label="Continue"
          buttonContainerStyle={{
            height: 50,
            alignItems: "center",
            borderRadius: SIZES.radius,
            backgroundColor: isFilled
              ? COLORS.primary
              : COLORS.transparentPrimary,
          }}
          onPress={() => navigation.navigate("CustomDrawer")}
          disabled={!isFilled}
        />
        <View style={{ marginTop: SIZES.padding, alignItems: "center" }}>
          <Text style={{ color: COLORS.darkGray, ...FONTS.body3 }}>
            By signing up you agree to our.
          </Text>
          <TextButton
            label="Terms and Conditions"
            buttonContainerStyle={{ backgroundColor: null }}
            labelStyle={{ color: COLORS.primary, ...FONTS.body3 }}
            onPress={() => console.log("Terms and Conditions")}
          />
        </View>
      </View>
    </AuthLayout>
  );
};

export default Otp;
