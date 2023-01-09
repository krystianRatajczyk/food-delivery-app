import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
import { COLORS } from "../constants/theme";
import FoodDetail from "../screens/Food/FoodDetail";
import Home from "../screens/Home/Home";
import MyCart from "../screens/Cart/MyCart";
import MyCard from "../screens/Card/MyCard";
import AddCard from "../screens/Card/AddCard";
import Checkout from "../screens/Cart/Checkout";
import Success from "../screens/Cart/Success";
import DeliveryStatus from "../screens/Delivery/DeliveryStatus";
import Map from "../screens/Delivery/Map";
import Coupon from "../screens/Coupon/Coupon";

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <View style={{ flex: 1 }}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          cardStyle: {
            backgroundColor: COLORS.white,
          },
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="FoodDetail" component={FoodDetail} />
        <Stack.Screen name="MyCart" component={MyCart} />
        <Stack.Screen name="MyCard" component={MyCard} />
        <Stack.Screen name="AddCard" component={AddCard} />
        <Stack.Screen name="Checkout" component={Checkout} />
        <Stack.Screen name="Coupon" component={Coupon} />
        <Stack.Screen name="DeliveryStatus" component={DeliveryStatus} />
        <Stack.Screen name="Success" component={Success} />
        <Stack.Screen name="Map" component={Map} />
      </Stack.Navigator>
    </View>
  );
}

export default HomeStack;
