import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import AuthLayout from "./AuthLayout";
import { FONTS, SIZES, COLORS } from "../../constants/theme";
import icons from "../../constants/icons";
import utils from "../../utils/Utils";
import FormInput from "../../components/ui/FormInput";
import TextButton from "../../components/ui/TextButton";

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const isEnabelSendEmail = () => {
    return email != "" && emailError == "";
  };

  return (
    <AuthLayout
      title="Password Recovery"
      subtitle="Please enter your email address ro recovery your password"
      titleContainerStyle={{ marginTop: SIZES.padding * 2 }}
      backButton
      backButtonOnPress={() => navigation.goBack()}
    >
      {/* Form Input */}
      <View style={{ flex: 1, marginTop: SIZES.padding * 2 }}>
        <FormInput
          label="email"
          keyboardType="email-address"
          autoCompleteType="email"
          onChange={(value) => {
            utils.validateEmail(value, setEmailError);
            setEmail(value);
          }}
          errorMsg={emailError}
          appendComponent={
            <View style={{ justifyContent: "center" }}>
              <Image
                source={
                  email === "" || (email !== "" && emailError === "")
                    ? icons.correct
                    : icons.cancel
                }
                style={{
                  width: 20,
                  height: 20,
                  tintColor:
                    email === ""
                      ? COLORS.gray
                      : email != "" && emailError === ""
                      ? COLORS.green
                      : COLORS.red,
                }}
              />
            </View>
          }
        />
      </View>
      {/* Button */}
      <TextButton
        label="Send Email"
        buttonContainerStyle={{
          height: 55,
          alignItems: "center",
          marginTop: SIZES.padding,
          borderRadius: SIZES.radius,
          backgroundColor: isEnabelSendEmail()
            ? COLORS.primary
            : COLORS.transparentPrimary,
        }}
        disabled={!isEnabelSendEmail()}
        onPress={() => navigation.goBack()}
      />
    </AuthLayout>
  );
};

export default ForgotPassword;
