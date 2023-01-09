import { combineReducers } from "redux";

import cartReducer from "./cart/cartReducer";
import couponReducer from "./coupon/couponReducer";
import tabReducer from "./tab/tabReducer";

export default combineReducers({
  tabReducer: tabReducer,
  cartReducer: cartReducer,
  couponReducer: couponReducer
});
