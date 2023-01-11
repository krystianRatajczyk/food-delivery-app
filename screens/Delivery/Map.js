import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Platform,
  Dimensions,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS, FONTS, SIZES } from "../../constants/theme";
import icons from "../../constants/icons";
import images from "../../constants/images";
import dummyData from "../../constants/dummyData";
import constants from "../../constants/constants";
import utils from "../../utils/Utils";
import { GOOGLE_API_KEY } from "../../api_key";
import IconButton from "../../components/ui/IconButton";

const Map = ({ navigation }) => {
  const mapView = useRef();
  const [region, setRegion] = useState(null);
  const [toLoc, setToLoc] = useState(null);
  const [fromLoc, setFromLoc] = useState(null);
  const [angle, setAngle] = useState(null);
  const [isReady, setIsReady] = useState(false);
  const [duration, setDuration] = useState("");
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    let initialRegion = {
      latitude: 51.89236463182122,
      longitude: 18.9518905762967,
      latitudeDelta: 0.015,
      longitudeDelta: 0.015,
    };
    let destination = {
      latitude: 51.89541617418414,
      longitude: 18.95922060465229,
    };

    setToLoc(destination);
    setFromLoc(
      dummyData.fromLocs[
        Math.floor(Math.random() * (dummyData.fromLocs.length - 1))
      ]
    );
    setRegion(initialRegion);
  }, []);

  const renderMap = () => {
    return (
      <MapView
        ref={mapView}
        style={{ flex: 1 }}
        initialRegion={region}
        provider={PROVIDER_GOOGLE}
      >
        {fromLoc && (
          <Marker
            key={"FromLoc"}
            coordinate={fromLoc}
            tracksViewChanges={false}
            icon={icons.navigator1}
            rotation={angle}
            anchor={{ x: 0.5, y: 0.5 }}
          />
        )}
        {toLoc && (
          <Marker
            key={"ToLoc"}
            coordinate={toLoc}
            tracksViewChanges={false}
            icon={icons.location_pin}
            anchor={{ x: 0.5, y: 0.5 }}
          />
        )}
        <MapViewDirections
          origin={fromLoc}
          destination={toLoc}
          apikey={GOOGLE_API_KEY}
          strokeWidth={5}
          strokeColor={COLORS.primary}
          optimizeWaypoints={true}
          onReady={(result) => {
            setDistance(result.distance.toFixed(2));
            setDuration(Math.ceil(result.duration));

            if (isReady) {
              // Fit the map based on the route
              mapView.current.fitToCoordinates(result.coordinates, {
                edgePadding: {
                  right: SIZES.width * 0.1,
                  bottom: 400,
                  left: SIZES.width * 0.1,
                  top: SIZES.height * 0.1,
                },
              });
              // Reposition the navigator
              if (result.coordinates.length >= 2) {
                let angle = utils.calculateAngle(result.coordinates);
                setAngle(angle);
              }

              setIsReady(true);
            }
          }}
        />
      </MapView>
    );
  };

  const renderHeaderButtons = () => {
    return (
      <>
        <IconButton
          icon={icons.back}
          iconStyle={{ tintColor: COLORS.gray2, width: 20, height: 20 }}
          containerStyle={{
            position: "absolute",
            top: SIZES.padding * 2,
            left: SIZES.padding,
            ...styles.buttonStyle,
          }}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <View
          style={{
            position: "absolute",
            top: SIZES.padding * 2,
            right: SIZES.padding,
          }}
        >
          <IconButton
            icon={icons.globe}
            containerStyle={{ ...styles.buttonStyle }}
            iconStyle={{ tintColor: COLORS.gray2, width: 20, height: 20 }}
            onPress={() => {}}
          />
          <IconButton
            icon={icons.focus}
            containerStyle={{ ...styles.buttonStyle, marginTop: SIZES.radius }}
            iconStyle={{ tintColor: COLORS.gray2, width: 20, height: 20 }}
            onPress={() => {}}
          />
        </View>
      </>
    );
  };

  const renderInfo = () => {
    return (
      <View
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
        }}
      >
        {/* Linear Gradient */}
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          colors={[COLORS.transparent, COLORS.gray2]}
          style={{
            position: "absolute",
            top: -20,
            left: 0,
            right: 0,
            height: Platform.OS === "ios" ? 200 : 50,
          }}
        />
        {/* Info Container */}
        <View
          style={{
            padding: SIZES.padding,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            backgroundColor: COLORS.white,
          }}
        >
          {/* Delivery Time */}
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={icons.clock}
              style={{ width: 40, height: 40, tintColor: COLORS.black }}
            />
            <View style={{ marginLeft: SIZES.padding }}>
              <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>
                Your delivery time
              </Text>
              <Text style={{ ...FONTS.body3, fontWeight: "700" }}>
                {duration} minutes | {distance} km
              </Text>
            </View>
          </View>
          {/* Address */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: SIZES.padding,
            }}
          >
            <Image
              source={icons.focus}
              style={{ width: 40, height: 40, tintColor: COLORS.black }}
            />
            <View style={{ marginLeft: SIZES.padding }}>
              <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>
                Your Address
              </Text>
              <Text style={{ ...FONTS.h3 }}>{dummyData.myProfile.address}</Text>
            </View>
          </View>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              height: 70,
              marginTop: SIZES.padding,
              borderRadius: SIZES.radius,
              paddingHorizontal: SIZES.radius,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: COLORS.primary,
            }}
          >
            <Image
              source={images.profile}
              style={{ width: 40, height: 40, borderRadius: 5 }}
            />
            <View style={{ flex: 1, marginLeft: SIZES.radius }}>
              <Text style={{ color: COLORS.white, ...FONTS.h3 }}>
                Krystian Ratajczyk
              </Text>
              <Text style={{ color: COLORS.white, ...FONTS.body4 }}>
                Delivery Man
              </Text>
            </View>
            <View
              style={{
                height: 40,
                width: 40,
                alignItems: "center",
                justifyContent: "center",
                borderWidth: 1,
                borderRadius: 5,
                borderColor: COLORS.white,
                backgroundColor: COLORS.transparentWhite1,
              }}
            >
              <Image source={icons.call} style={{ width: 30, height: 30 }} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Map */}
      {renderMap()}
      {/* Header Buttons */}
      {renderHeaderButtons()}
      {/* Footer / Info */}
      {renderInfo()}
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  buttonStyle: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: SIZES.radius,
    borderColor: COLORS.gray2,
    backgroundColor: COLORS.white,
  },
});
