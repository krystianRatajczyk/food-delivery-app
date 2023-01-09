import { View, Text, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { COLORS, FONTS, SIZES } from "../../constants/theme";
import Header from "../../components/Home/Header";
import IconButton from "../../components/ui/IconButton";
import icons from "../../constants/icons";
import TextButton from "../../components/ui/TextButton";
import Ticket from "../../components/ui/Ticket";
import { connect } from "react-redux";

const Coupon = ({ navigation, coupons, usedCoupons }) => {
  const [selectedTab, setSelectedTab] = useState("Available");
  const [currentList, setCurrentList] = useState(coupons);
  const [disbabled, setDisabled] = useState(false);

  useEffect(() => {
    if (selectedTab === "Available") {
      setCurrentList(coupons);
      setDisabled(false);
    } else {
      setCurrentList(usedCoupons);
      setDisabled(true);
    }
  }, [selectedTab]);



  const renderHeader = () => {
    return (
      <Header
        title="MY COUPONS"
        containerStyle={{
          marginHorizontal: SIZES.padding,
          marginTop: 40,
          alignItems: "center",
        }}
        leftComponent={
          <IconButton
            icon={icons.back}
            iconStyle={{ tintColor: COLORS.gray2, width: 20, height: 20 }}
            containerStyle={{
              width: 40,
              height: 40,
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 1,
              borderRadius: SIZES.radius,
              borderColor: COLORS.gray2,
            }}
            onPress={() => {
              navigation.goBack();
            }}
          />
        }
        rightComponent={<View style={{ width: 40, height: 40 }} />}
      />
    );
  };

  const renderCoupons = () => {
    return (
      <ScrollView
        style={{ paddingHorizontal: SIZES.radius, marginTop: SIZES.radius }}
      >
        {currentList.map((coupon, index) => {
          return (
            <Ticket
              disabled={disbabled}
              key={`MyCoupon-${index}`}
              onPress={() => {
                navigation.navigate("Checkout", {
                  discount: coupon.discount,
                  id: coupon.id,
                });
              }}
            >
              <View
                style={{
                  width: "40%",
                  height: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={coupon.image}
                  resizeMode="contain"
                  style={{ width: "90%", height: "90%" }}
                />
              </View>
              <View
                style={{
                  width: 3,
                  height: "100%",
                  backgroundColor: COLORS.white,
                  marginLeft: 15,
                }}
              />
              <View
                style={{
                  width: "50%",
                  justifyContent: "center",
                  marginLeft: SIZES.radius,
                  flexDirection: "column",
                }}
              >
                <Text
                  style={{
                    ...FONTS.h3,
                    fontWeight: "500",
                    color: COLORS.darkGray,
                  }}
                >
                  {coupon.name}
                </Text>
                <Text
                  style={{
                    ...FONTS.h3,
                    fontWeight: "800",
                    fontSize: 30,
                    paddingTop: SIZES.radius,
                  }}
                >
                  {`${coupon.discount}% Off`}
                </Text>
                <Text
                  style={{
                    ...FONTS.h3,
                    fontWeight: "500",
                    fontSize: 12,
                    color: COLORS.darkGray,
                  }}
                >
                  Valid {coupon.valid_date}
                </Text>
              </View>
            </Ticket>
          );
        })}
      </ScrollView>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      {renderHeader()}
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          paddingHorizontal: SIZES.padding,
          marginTop: SIZES.radius,
        }}
      >
        <TextButton
          label="Available"
          buttonContainerStyle={{
            flex: 1,
            backgroundColor:
              selectedTab == "Available" ? COLORS.primary : COLORS.lightOrange2,
            borderRadius: SIZES.radius,
            paddingVertical: SIZES.base,
            paddingHorizontal: SIZES.padding,
          }}
          labelStyle={{
            ...FONTS.h3,
            color: selectedTab == "Available" ? COLORS.white : COLORS.primary,
          }}
          onPress={() => setSelectedTab("Available")}
        />
        <TextButton
          label="Used"
          buttonContainerStyle={{
            flex: 1,
            backgroundColor:
              selectedTab == "Used" ? COLORS.primary : COLORS.lightOrange2,
            borderRadius: SIZES.radius,
            paddingVertical: SIZES.radius,
            paddingHorizontal: SIZES.padding,
            marginLeft: 20,
          }}
          labelStyle={{
            ...FONTS.h3,
            color: selectedTab == "Used" ? COLORS.white : COLORS.primary,
          }}
          onPress={() => setSelectedTab("Used")}
        />
      </View>
      {renderCoupons()}
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    coupons: state.couponReducer.coupons,
    usedCoupons: state.couponReducer.usedCoupons,
  };
};

export default connect(mapStateToProps, null)(Coupon);
