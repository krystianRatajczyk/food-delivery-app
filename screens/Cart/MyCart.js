import { View, Text, Image, StyleSheet } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { FONTS, SIZES, COLORS } from "../../constants/theme";
import Header from "../../components/Home/Header";
import IconButton from "../../components/ui/IconButton";
import icons from "../../constants/icons";
import { SwipeListView } from "react-native-swipe-list-view";
import StepperInput from "../../components/FoodDetail/StepperInput";
import FooterTotal from "../../components/Cart/FooterTotal";
import { connect } from "react-redux";
import { setQtyToCart, deleteFromCart } from "../../store/cart/cartActions";

const MyCart = ({
  navigation,
  cartList,
  deleteFromCart,
  setQtyToCart,
  total,
}) => {
  //Render
  const renderHeader = () => {
    return (
      <Header
        title="MY CART"
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

  const renderCartList = () => {
    if (!cartList.length) {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ ...FONTS.h3 }}>No items in the cart</Text>
        </View>
      );
    }
    return (
      <SwipeListView
        data={cartList}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          marginTop: SIZES.radius,
          paddingHorizontal: SIZES.padding,
          paddingBottom: SIZES.padding * 2,
        }}
        disableRightSwipe={true}
        rightOpenValue={-75}
        renderItem={({ item, rowMap }) => {
          return (
            <View
              style={{
                height: 100,
                backgroundColor: COLORS.lightGray2,
                ...styles.cartItemContainer,
              }}
            >
              {/* Food Image */}
              <View style={{ width: 90, height: 100, marginLeft: -10 }}>
                <Image
                  source={item.image}
                  resizeMode="contain"
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    top: 10,
                  }}
                />
              </View>
              {/* Food info */}
              <View style={{ flex: 1 }}>
                <Text style={{ ...FONTS.body3 }}>{item.name}</Text>
                <Text style={{ color: COLORS.primary, ...FONTS.h3 }}>
                  ${item.price}
                </Text>
              </View>
              {/* Quantity */}
              <StepperInput
                containerStyle={{
                  height: 50,
                  width: 125,
                  backgroundColor: COLORS.white,
                }}
                value={item.qty}
                onAdd={() => {
                  setQtyToCart({ ...item, qty: 1 }, "ADD");
                }}
                onMinus={() => {
                  if (item.qty > 1) {
                    setQtyToCart({ ...item, qty: 1 }, "REMOVE");
                  }
                }}
              />
            </View>
          );
        }}
        renderHiddenItem={({ item, rowMap }) => {
          return (
            <IconButton
              containerStyle={{
                flex: 1,
                justifyContent: "flex-end",
                backgroundColor: COLORS.primary,
                ...styles.cartItemContainer,
              }}
              icon={icons.delete_icon}
              iconStyle={{ marginRight: 10 }}
              onPress={() => {
                deleteFromCart(item);
              }}
            />
          );
        }}
      />
    );
  };
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      {/* Header */}
      {renderHeader()}
      {/* Cart List */}
      {renderCartList()}
      {/* Footer */}
      {cartList.length !== 0 && (
        <FooterTotal
          subTotal={total}
          shippingFee={0.0}
          total={total}
          onPress={() => navigation.navigate("MyCard")}
        />
      )}
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    cartList: state.cartReducer.cartList,
    total: state.cartReducer.total,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setQtyToCart: (item, action) => {
      return dispatch(setQtyToCart(item, action));
    },
    deleteFromCart: (item) => {
      return dispatch(deleteFromCart(item));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyCart);

const styles = StyleSheet.create({
  cartItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: SIZES.radius,
    paddingHorizontal: SIZES.radius,
    borderRadius: SIZES.radius,
  },
});
