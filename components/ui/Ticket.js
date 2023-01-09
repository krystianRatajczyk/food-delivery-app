import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../constants/theme";

const Ticket = ({ children, onPress, disabled }) => {
  console.log(disabled)
  return (
    <TouchableOpacity
      disabled={disabled}
      style={{
        width: "100%",
        height: 140,
        backgroundColor: "#F5F5F8",
        borderRadius: SIZES.radius,
        overflow: "hidden",
        marginTop: SIZES.radius,
      }}
      onPress={onPress}
    >
      {/* Dot */}
      <View
        style={{
          ...styles.dot,
          top: 50,
          left: -15,
          position: "absolute",
        }}
      />
      {/* Three dots */}
      <View
        style={{
          flexDirection: "column",
          justifyContent: "space-between",
          position: "absolute",
          right: -15,
          paddingVertical: SIZES.radius,
          height: "100%",
        }}
      >
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </View>
      <View
        style={{
          flex: 1,
          marginHorizontal: 20,
          flexDirection: "row",
        }}
      >
        {children}
      </View>
    </TouchableOpacity>
  );
};

export default Ticket;

const styles = StyleSheet.create({
  dot: {
    width: 30,
    height: 30,
    backgroundColor: COLORS.white,
    borderRadius: 15,
  },
});
