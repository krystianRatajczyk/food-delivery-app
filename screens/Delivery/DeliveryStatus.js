import { View, Text, ScrollView, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { COLORS, FONTS, SIZES } from "../../constants/theme";
import icons from "../../constants/icons";
import constants from "../../constants/constants";
import Header from "../../components/Home/Header";
import LineDivider from "../../components/ui/LineDivider";
import TextButton from "../../components/ui/TextButton";
import TextIconButton from "../../components/ui/TextIconButton";
import { connect } from "react-redux";
import { setLayoutVisibility } from "../../store/tab/tabActions";

const DeliveryStatus = ({ navigation, setLayoutVisibility }) => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const time = Math.floor(Math.random() * (2500 - 500)) + 500;

    const interval = setInterval(() => {
      if (currentStep < constants.track_order_status.length - 1) {
        setCurrentStep((prevState) => prevState + 1);
      }
    }, time);

    return () => clearInterval(interval);
  }, [currentStep]);

  const renderHeader = () => {
    return (
      <Header
        title="DELIVERY STATUS"
        containerStyle={{
          height: 50,
          marginHorizontal: SIZES.padding,
          marginTop: 40,
        }}
      />
    );
  };

  const renderInfo = () => {
    return (
      <View
        style={{ marginTop: SIZES.radius, paddingHorizontal: SIZES.padding }}
      >
        <Text
          style={{ textAlign: "center", color: COLORS.gray, ...FONTS.body4 }}
        >
          Estimated Delivery
        </Text>
        <Text style={{ textAlign: "center", ...FONTS.h2, fontWeight: "700" }}>
          30 Dec 2022 / 11:30PM
        </Text>
      </View>
    );
  };

  const renderTrackOrder = () => {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
          paddingVertical: SIZES.padding,
          borderRadius: SIZES.radius,
          borderWidth: 2,
          borderColor: COLORS.lightGray2,
          backgroundColor: COLORS.white2,
        }}
      >
        {/* Track Order */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 20,
            paddingHorizontal: SIZES.padding,
          }}
        >
          <Text style={{ ...FONTS.h3 }}>Track Order</Text>
          <Text style={{ color: COLORS.gray, ...FONTS.h3 }}>NY013252</Text>
        </View>
        <LineDivider lineStyle={{ backgroundColor: COLORS.lightGray2 }} />
        {/* Status */}
        <View
          style={{ marginTop: SIZES.padding, paddingHorizontal: SIZES.padding }}
        >
          {constants.track_order_status.map((item, index) => {
            return (
              <View style={{}} key={`StatusList-${index}`}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginVertical: -5,
                  }}
                >
                  <Image
                    source={icons.check_circle}
                    style={{
                      width: 40,
                      height: 40,
                      tintColor:
                        index <= currentStep
                          ? COLORS.primary
                          : COLORS.lightGray1,
                    }}
                  />
                  <View style={{ marginLeft: SIZES.radius }}>
                    <Text style={{ ...FONTS.h3 }}>{item.title}</Text>
                    <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>
                      {item.sub_title}
                    </Text>
                  </View>
                </View>
                {index < constants.track_order_status.length - 1 && (
                  <View>
                    {index < currentStep ? (
                      <View
                        style={{
                          height: 50,
                          width: 3,
                          marginLeft: 18,
                          backgroundColor: COLORS.primary,
                          zIndex: -1,
                        }}
                      ></View>
                    ) : (
                      <Image
                        source={icons.dotted_line}
                        resizeMode="cover"
                        style={{ width: 4, height: 50, marginLeft: 17 }}
                      />
                    )}
                  </View>
                )}
              </View>
            );
          })}
        </View>
      </View>
    );
  };

  const renderFooter = () => {
    return (
      <View style={{ marginTop: SIZES.radius, marginBottom: SIZES.padding }}>
        {currentStep < constants.track_order_status.length - 1 && (
          <View style={{ flexDirection: "row", height: 55 }}>
            {/* Cancel */}
            <TextButton
              buttonContainerStyle={{
                width: "40%",
                borderRadius: SIZES.base,
                backgroundColor: COLORS.lightGray2,
              }}
              label="Cancel"
              labelStyle={{ color: COLORS.primary }}
              onPress={() => {
                setLayoutVisibility(true)
                navigation.navigate("Home");
              }}
            />
            {/* Map View */}
            <TextIconButton
              label="Map View"
              containerStyle={{
                flex: 1,
                marginLeft: SIZES.radius,
                borderRadius: SIZES.base,
                backgroundColor: COLORS.primary,
              }}
              labelStyle={{ color: COLORS.white, ...FONTS.h3 }}
              icon={icons.map}
              iconPosition="LEFT"
              iconStyle={{
                width: 25,
                height: 25,
                marginRight: SIZES.base,
                tintColor: COLORS.white,
              }}
              onPress={() => navigation.navigate("Map")}
            />
          </View>
        )}
        {currentStep === constants.track_order_status.length - 1 && (
          <TextButton
            buttonContainerStyle={{ height: 55, borderRadius: SIZES.base }}
            label="Done"
            onPress={() => {
              setLayoutVisibility(true);
              navigation.navigate("Home");
            }}
          />
        )}
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: SIZES.padding,
        backgroundColor: COLORS.white,
      }}
    >
      {/* Header */}
      {renderHeader()}
      {/* Info */}
      {renderInfo()}
      {/* Track Order */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {renderTrackOrder()}
      </ScrollView>

      {renderFooter()}
    </View>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLayoutVisibility: (selectedTab) => {
      return dispatch(setLayoutVisibility(selectedTab));
    },
  };
};

export default connect(null, mapDispatchToProps)(DeliveryStatus);
