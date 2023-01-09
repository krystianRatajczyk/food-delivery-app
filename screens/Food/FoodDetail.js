import { View, Text, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import { FONTS, COLORS, SIZES } from "../../constants/theme";
import icons from "../../constants/icons";
import { useRoute } from "@react-navigation/native";
import Header from "../../components/Home/Header";
import IconButton from "../../components/ui/IconButton";
import CartQuantityButton from "../../components/Home/CartQuantityButton";
import { connect } from "react-redux";

import { setLayoutVisibility } from "../../store/tab/tabActions";
import { setQtyToCart } from "../../store/cart/cartActions";

import IconLabel from "../../components/ui/IconLabel";
import dummyData from "../../constants/dummyData";
import TextButton from "../../components/ui/TextButton";
import LineDivider from "../../components/ui/LineDivider";
import images from "../../constants/images";
import Rating from "../../components/FoodDetail/Rating";
import StepperInput from "../../components/FoodDetail/StepperInput";

const FoodDetail = ({
  navigation,
  setLayoutVisibility,
  setQtyToCart,
  cartList,
}) => {
  const route = useRoute();
  const foodItem = route.params?.item;

  const [selectedSize, setSelectedSize] = useState("");
  const [qty, setQty] = useState(1);

  const renderHeader = () => {
    return (
      <Header
        title="DETAILS"
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
              setLayoutVisibility(true);
              navigation.goBack();
            }}
          />
        }
        rightComponent={
          <CartQuantityButton
            quantity={cartList.length}
            onPress={() => navigation.navigate("MyCart")}
          />
        }
      />
    );
  };

  const renderDetail = () => {
    return (
      <View
        style={{
          marginTop: SIZES.radius,
          marginBottom: SIZES.padding,
          paddingHorizontal: SIZES.padding,
        }}
      >
        {/* Food Card */}
        <View
          style={{
            height: 190,
            borderRadius: 15,
            backgroundColor: COLORS.lightGray2,
          }}
        >
          {/* Calories and Favourite */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: SIZES.base,
              paddingHorizontal: SIZES.radius,
            }}
          >
            {/* Calories */}
            <View style={{ flexDirection: "row" }}>
              <Image
                source={icons.calories}
                style={{ width: 30, height: 30 }}
              />
              <Text style={{ color: COLORS.darkGray2, ...FONTS.body4 }}>
                {foodItem.calories} calories
              </Text>
            </View>
            {/* Favourite */}
            <Image
              source={icons.love}
              style={{
                width: 20,
                height: 20,
                tintColor: foodItem?.isFavourite ? COLORS.primary : COLORS.gray,
              }}
            />
          </View>
          {/* Food Image */}
          <Image
            source={foodItem.image}
            resizeMode="contain"
            style={{ height: 170, width: "100%" }}
          />
        </View>
        {/* Food info */}
        <View style={{ marginTop: SIZES.padding }}>
          {/* Name and description */}
          <Text style={{ ...FONTS.h1, fontWeight: "700" }}>
            {foodItem.name}
          </Text>
          <Text
            style={{
              marginTop: SIZES.base,
              color: COLORS.darkGray,
              textAlign: "justify",
              ...FONTS.body3,
            }}
          >
            {foodItem.description}
          </Text>
          {/* Ratings, Duration, Shipping */}
          <View style={{ flexDirection: "row", marginTop: SIZES.padding }}>
            {/* Ratings */}
            <IconLabel
              containerStyle={{
                backgroundColor: COLORS.primary,
              }}
              icon={icons.star}
              label="4.5"
              labelStyle={{ color: COLORS.white }}
            />
            {/* Duration */}
            <IconLabel
              containerStyle={{
                marginLeft: SIZES.radius,
                paddingHorizontal: 0,
                alignItems: "center",
              }}
              icon={icons.clock}
              iconStyle={{ tintColor: COLORS.black }}
              label="30 mins"
              labelStyle={{ fontWeight: "700" }}
            />

            {/* Shipping */}
            <IconLabel
              containerStyle={{
                marginLeft: SIZES.radius,
                paddingHorizontal: 0,
                alignItems: "center",
              }}
              icon={icons.dollar}
              iconStyle={{ tintColor: COLORS.black }}
              label="Free Shipping"
              labelStyle={{ fontWeight: "700" }}
            />
          </View>
          {/* SIZES */}
          <View
            style={{
              flexDirection: "row",
              marginTop: SIZES.padding,
              alignItems: "center",
            }}
          >
            <Text style={{ fontWeight: "700", ...FONTS.h3 }}>Sizes:</Text>
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                marginLeft: SIZES.padding,
              }}
            >
              {dummyData.sizes.map((item, index) => {
                return (
                  <TextButton
                    key={`Sizes-${index}`}
                    buttonContainerStyle={{
                      width: 55,
                      height: 55,
                      margin: SIZES.base,
                      borderWidth: 1,
                      borderRadius: SIZES.radius,
                      borderColor:
                        selectedSize == item.id ? COLORS.primary : COLORS.gray2,
                      backgroundColor:
                        selectedSize == item.id ? COLORS.primary : null,
                    }}
                    label={item.label}
                    labelStyle={{
                      color:
                        selectedSize == item.id ? COLORS.white : COLORS.gray2,
                      ...FONTS.body2,
                    }}
                    onPress={() => setSelectedSize(item.id)}
                  />
                );
              })}
            </View>
          </View>
        </View>
      </View>
    );
  };

  const renderRestaurant = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          marginVertical: SIZES.padding,
          paddingHorizontal: SIZES.padding,
          alignItems: "center",
        }}
      >
        <Image
          source={images.profile}
          style={{ width: 50, height: 50, borderRadius: SIZES.radius }}
        />
        {/* Info */}
        <View
          style={{
            flex: 1,
            marginLeft: SIZES.radius,
            justifyContent: "center",
          }}
        >
          <Text style={{ ...FONTS.h3 }}>[RestaurantName]</Text>
          <Text style={{ color: COLORS.gray, ...FONTS.body3, fontSize: 14 }}>
            1.2KM away from you
          </Text>
        </View>
        {/* Ratings */}
        <Rating rating={2} iconStyle={{ marginLeft: 3 }} />
      </View>
    );
  };

  const renderFooter = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          height: 120,
          alignItems: "center",
          paddingBottom: SIZES.radius,
          paddingHorizontal: SIZES.radius,
        }}
      >
        {/* StepperInput */}
        <StepperInput
          value={qty}
          onAdd={() => setQty((prevQty) => prevQty + 1)}
          onMinus={() => qty > 1 && setQty((prevQty) => prevQty - 1)}
        />
        {/* TextButton */}
        <TextButton
          buttonContainerStyle={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            height: 60,
            marginLeft: SIZES.radius,
            paddingHorizontal: SIZES.radius,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.primary,
          }}
          label="Add to cart"
          label2={`$${foodItem.price * qty}`}
          onPress={() => {
            setQtyToCart({ ...foodItem, qty: qty }, "ADD");
            navigation.navigate("MyCart");
          }}
        />
      </View>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      {/* Header */}
      {renderHeader()}
      {/* Body */}
      <ScrollView>
        {/* Food Detail */}
        {renderDetail()}

        <LineDivider lineStyle={{ backgroundColor: "red" }} />
        {/* Restaurant */}
        {renderRestaurant()}
      </ScrollView>
      {/* Footer */}
      <LineDivider />
      {renderFooter()}
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    cartList: state.cartReducer.cartList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLayoutVisibility: (selectedTab) => {
      return dispatch(setLayoutVisibility(selectedTab));
    },
    setQtyToCart: (item, action) => {
      return dispatch(setQtyToCart(item, action));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FoodDetail);
