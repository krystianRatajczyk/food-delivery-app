import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
} from "react-native";

import { FONTS, SIZES, COLORS } from "../../constants/theme";
import icons from "../../constants/icons";
import dummyData from "../../constants/dummyData";
import HorizontalFoodCard from "../../components/Home/HorizontalFoodCard";
import FoodSection from "../../components/Home/FoodSection";
import VerticalFoodCard from "../../components/Home/VerticalFoodCard";
import FilterModal from "./FilterModal";

import { connect } from "react-redux";
import { setLayoutVisibility } from "../../store/tab/tabActions";

const Home = ({ navigation, layoutVisibility, setLayoutVisibility }) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(1);
  const [selectedMenuType, setSelectedMenuType] = useState(1);
  const [menuList, setMenuList] = useState([]);

  const [recommends, setRecommends] = useState([]);

  const [popular, setPopular] = useState([]);

  const [showFilterModal, setShowFilterModal] = useState(false);

  const handleChangeCategory = (categoryId, menuTypeId) => {
    let selectedRecommend = dummyData.menu.find((a) => a.name == "Recommended");
    let selectedMenu = dummyData.menu.find((a) => a.id === menuTypeId);
    let selectedPopular = dummyData.menu.find((a) => a.name == "Popular");

    setPopular(
      selectedPopular?.list.filter((a) => a.categories.includes(categoryId))
    );

    setRecommends(
      selectedRecommend?.list.filter((a) => a.categories.includes(categoryId))
    );

    setMenuList(
      selectedMenu?.list.filter((a) => a.categories.includes(categoryId))
    );
  };

  useEffect(() => {
    handleChangeCategory(selectedCategoryId, selectedMenuType);
  }, []);

  const renderSearch = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          height: 40,
          alignItems: "center",
          marginHorizontal: SIZES.padding,
          marginVertical: SIZES.base,
          paddingHorizontal: SIZES.radius,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.lightGray2,
        }}
      >
        {/* Icon */}
        <Image
          source={icons.search}
          style={{ width: 20, height: 20, tintColor: COLORS.black }}
        />
        {/* Text input */}
        <TextInput
          style={{ flex: 1, marginLeft: SIZES.radius, ...FONTS.body3 }}
          placeholder="Search food..."
        />
        {/* Filter button */}
        <TouchableOpacity
          onPress={() => {
            setShowFilterModal(true);
          }}
        >
          <Image
            source={icons.filter}
            style={{ width: 20, height: 20, tintColor: COLORS.black }}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const renderMenuTypes = () => {
    return (
      <FlatList
        horizontal
        data={dummyData.menu}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ marginTop: 30, marginBottom: 20 }}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              style={{
                marginLeft: SIZES.padding,
                marginRight:
                  index === dummyData.menu.length - 1 ? SIZES.padding : 0,
              }}
              onPress={() => {
                setSelectedMenuType(item.id);
                handleChangeCategory(selectedCategoryId, item.id);
              }}
            >
              <Text
                style={{
                  color:
                    selectedMenuType === item.id
                      ? COLORS.primary
                      : COLORS.black,
                  ...FONTS.h3,
                  fontWeight: "700",
                }}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    );
  };

  const renderRecommendedSection = () => {
    return (
      <FoodSection
        title="Recommended"
        onPress={() => console.log("SHOW ALL RECOMMENDED")}
      >
        <FlatList
          data={recommends}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return (
              <HorizontalFoodCard
                containerStyle={{
                  height: 180,
                  width: SIZES.width * 0.85,
                  marginLeft: index == 0 ? SIZES.padding : 18,
                  marginRight:
                    index == recommends.length - 1 ? SIZES.padding : 0,
                  paddingRight: SIZES.radius,
                  alignItems: "center",
                }}
                imageStyle={{ marginTop: 35, height: 150, width: 150 }}
                item={item}
                onPress={() => {
                  setLayoutVisibility(false);
                  navigation.navigate("FoodDetail", { item: item });
                }}
              />
            );
          }}
        />
      </FoodSection>
    );
  };

  const renderPopularSection = () => {
    return (
      <FoodSection
        title="Popular Near You"
        onPress={() => console.log("SHOW ALL POPULAR ITEMS")}
      >
        <FlatList
          data={popular}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return (
              <VerticalFoodCard
                containerStyle={{
                  marginLeft: index == 0 ? SIZES.padding : 18,
                  marginRight: index == popular.length - 1 ? SIZES.padding : 0,
                }}
                item={item}
                onPress={() => {
                  setLayoutVisibility(false);
                  navigation.navigate("FoodDetail", { item: item });
                }}
              />
            );
          }}
        />
      </FoodSection>
    );
  };

  const renderFoodCategories = () => {
    return (
      <FlatList
        data={dummyData.categories}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ index, item }) => {
          return (
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                height: 55,
                marginTop: SIZES.padding,
                marginLeft: index == 0 ? SIZES.padding : SIZES.radius,
                marginRight:
                  index == dummyData.categories.length - 1 ? SIZES.padding : 0,

                paddingHorizontal: 8,
                borderRadius: SIZES.radius,
                backgroundColor:
                  selectedCategoryId == item.id
                    ? COLORS.primary
                    : COLORS.lightGray2,
              }}
              onPress={() => {
                setSelectedCategoryId(item.id);
                handleChangeCategory(item.id, selectedMenuType);
              }}
            >
              <Image
                source={item.icon}
                style={{ marginTop: 5, height: 50, width: 50 }}
              />
              <Text
                style={{
                  marginRight: SIZES.base,
                  color:
                    selectedCategoryId == item.id
                      ? COLORS.white
                      : COLORS.darkGray,
                  ...FONTS.h3,
                  fontWeight: "700",
                }}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    );
  };

  const renderDeliveryTo = () => {
    return (
      <View
        style={{ marginTop: SIZES.padding, marginHorizontal: SIZES.padding }}
      >
        <Text style={{ color: COLORS.primary, ...FONTS.body3 }}>
          DELIVERY TO
        </Text>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            marginTop: SIZES.base,
            alignItems: "center",
          }}
        >
          <Text style={{ ...FONTS.h3 }}>{dummyData?.myProfile?.address}</Text>
          <Image
            source={icons.down_arrow}
            style={{ marginLeft: SIZES.base, height: 20, width: 20 }}
          />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {/* Search  */}
      {renderSearch()}
      {showFilterModal && (
        <FilterModal
          isVisible={showFilterModal}
          onClose={() => setShowFilterModal(false)}
        />
      )}
      {/* List  */}
      <FlatList
        data={menuList}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            {/* Delivery To */}
            {renderDeliveryTo()}
            {/* Food Categories */}
            {renderFoodCategories()}
            {/* Popular */}
            {renderPopularSection()}
            {/* Recommended */}
            {renderRecommendedSection()}
            {/* Menu Type */}
            {renderMenuTypes()}
          </View>
        }
        renderItem={({ item }) => {
          return (
            <HorizontalFoodCard
              containerStyle={{
                height: 130,
                alignItems: "center",
                marginHorizontal: SIZES.padding,
                marginBottom: SIZES.radius,
              }}
              imageStyle={{ marginTop: 20, height: 110, width: 110 }}
              item={item}
              onPress={() => {
                setLayoutVisibility(false);
                navigation.navigate("FoodDetail", { item: item });
              }}
            />
          );
        }}
        ListFooterComponent={<View style={{ height: 200 }}></View>}
      />
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    layoutVisibility: state.tabReducer.layoutVisibility,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLayoutVisibility: (selectedTab) => {
      return dispatch(setLayoutVisibility(selectedTab));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
