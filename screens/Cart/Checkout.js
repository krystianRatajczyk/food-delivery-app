import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { FONTS, COLORS, SIZES } from "../../constants/theme";
import icons from "../../constants/icons";
import dummyData from "../../constants/dummyData";
import IconButton from "../../components/ui/IconButton";
import Header from "../../components/Home/Header";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import CardItem from "../../components/Card/CardItem";
import FormInput from "../../components/ui/FormInput";
import { connect } from "react-redux";
import FooterTotal from "../../components/Cart/FooterTotal";
import { moveCoupon } from "../../store/coupon/couponActions";

const Checkout = ({ navigation, route, total, moveCoupon }) => {
  const [selectedCard, setSelectedCard] = useState(route.params);
  const [discount, setDiscount] = useState(null);
  const [selectedCouponId, setSelectedCouponId] = useState(null);

  useEffect(() => {
    setDiscount(route.params?.discount);
    setSelectedCouponId(route.params?.id);
  }, [route.params.discount]);

  const renderHeader = () => {
    return (
      <Header
        title="CHECKOUT"
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

  const renderMyCards = () => {
    return (
      <View>
        {selectedCard &&
          dummyData.myCards.map((item, index) => {
            return (
              <CardItem
                key={`MyCard-${item.id}`}
                item={item}
                isSelected={
                  `${selectedCard?.key}-${selectedCard?.id}` ==
                  `MyCard-${item.id}`
                }
                onPress={() => {
                  setSelectedCard({ ...item, key: "MyCard" });
                }}
              />
            );
          })}
      </View>
    );
  };

  const renderDeliveryAddress = () => {
    return (
      <View style={{ marginTop: SIZES.padding }}>
        <Text style={{ ...FONTS.h3 }}>Delivery Address</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: SIZES.radius,
            paddingVertical: SIZES.radius,
            paddingHorizontal: SIZES.padding,
            borderRadius: SIZES.radius,
            borderWidth: 2,
            borderColor: COLORS.lightGray2,
          }}
        >
          <Image source={icons.location1} style={{ width: 40, height: 40 }} />
          <Text
            style={{ marginLeft: SIZES.radius, width: "85%", ...FONTS.body3 }}
          >
            300 Post Street San Francisco, CA
          </Text>
        </View>
      </View>
    );
  };

  const renderCoupon = () => {
    return (
      <View style={{ marginTop: SIZES.padding }}>
        <Text style={{ ...FONTS.h3 }}>Add Coupon</Text>
        <FormInput
          inputContainerStyle={{
            marginTop: 0,
            paddingLeft: SIZES.padding,
            paddingRight: 0,
            borderWidth: 2,
            borderColor: COLORS.lightGray2,
            backgroundColor: COLORS.white,
            overflow: "hidden",
          }}
          placeholder="Coupon Code"
          appendComponent={
            <TouchableOpacity
              style={{
                width: 60,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: COLORS.primary,
              }}
              onPress={() => navigation.navigate("Coupon")}
            >
              <Image
                source={icons.discount}
                style={{ width: 40, height: 40 }}
              />
            </TouchableOpacity>
          }
        />
      </View>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      {/* Header */}
      {renderHeader()}
      {/* Body */}
      <KeyboardAwareScrollView
        keyboardDismissMode="on-drag"
        extraScrollHeight={-200}
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: SIZES.padding,
          paddingBottom: 20,
        }}
      >
        {/* MyCards */}
        {renderMyCards()}
        {/* Delivery Address */}
        {renderDeliveryAddress()}
        {/* Coupon */}
        {renderCoupon()}
      </KeyboardAwareScrollView>
      <FooterTotal
        subTotal={total}
        shippingFee={0.0}
        total={total}
        onPress={() => {
          navigation.replace("Success");
          moveCoupon(selectedCouponId);
        }}
        discount={discount}
      />
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    total: state.cartReducer.total,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    moveCoupon: (id) => {
      return dispatch(moveCoupon(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
