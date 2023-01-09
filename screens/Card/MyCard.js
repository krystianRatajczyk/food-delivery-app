import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { FONTS, SIZES, COLORS } from "../../constants/theme";
import icons from "../../constants/icons";
import dummyData from "../../constants/dummyData";
import Header from "../../components/Home/Header";
import IconButton from "../../components/ui/IconButton";
import CardItem from "../../components/Card/CardItem";
import TextButton from "../../components/ui/TextButton";

const MyCard = ({ navigation }) => {
  const [selectedCard, setSelectedCard] = useState(null);

  const renderHeader = () => {
    return (
      <Header
        title="MY CARD"
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
        {dummyData.myCards.map((item, index) => {
          return (
            <CardItem
              key={index}
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

  const renderAddNewCard = () => {
    return (
      <View style={{ marginTop: SIZES.padding }}>
        <Text style={{ ...FONTS.h3 }}>Add New Card</Text>
        {dummyData.allCards.map((item, index) => {
          return (
            <CardItem
              key={`NewCard-${item.id}`}
              item={item}
              isSelected={
                `${selectedCard?.key}-${selectedCard?.id}` ==
                `NewCard-${item.id}`
              }
              onPress={() => setSelectedCard({ ...item, key: "NewCard" })}
            />
          );
        })}
      </View>
    );
  };

  const renderFooter = () => {
    return (
      <View
        style={{
          paddingTop: SIZES.radius,
          paddingBottom: SIZES.padding,
          paddingHorizontal: SIZES.padding,
        }}
      >
        <TextButton
          disabled={!selectedCard}
          buttonContainerStyle={{
            height: 60,
            borderRadius: SIZES.radius,
            backgroundColor:
              selectedCard === null ? COLORS.gray : COLORS.primary,
          }}
          label={selectedCard?.key == "NewCard" ? "Add" : "Place your Order"}
          onPress={() => {
            if (selectedCard?.key === "NewCard") {
              navigation.navigate("AddCard", { selectedCard });
            } else {
              navigation.navigate("Checkout", { selectedCard });
            }
          }}
        />
      </View>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      {/* Header */}
      {renderHeader()}
      {/* Cards */}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          marginTop: SIZES.radius,
          paddingHorizontal: SIZES.padding,
          paddingBottom: SIZES.radius,
        }}
      >
        {/* My cards */}
        {renderMyCards()}
        {/* Add New Card */}
        {renderAddNewCard()}
      </ScrollView>
      {/* Footer */}
      {renderFooter()}
    </View>
  );
};

export default MyCard;
