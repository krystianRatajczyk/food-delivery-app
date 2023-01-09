import dummyData from "../../constants/dummyData";
import * as couponActions from "./couponActions";

const initialState = {
  coupons: dummyData.coupons,
  usedCoupons: [],
};

const couponReducer = (state = initialState, action) => {
  switch (action.type) {
    case couponActions.MOVE_COUPON: {
      const movingItem = state.coupons.find(
        (coupon) => coupon.id === action.payload.id
      );
      const newCouponsList = state.coupons.filter(
        (coupon) => coupon.id !== action.payload.id
      );
      const newUsedCouponsList = [...state.usedCoupons, movingItem];
      return {
        coupons: newCouponsList,
        usedCoupons: newUsedCouponsList,
      };
    }

    default:
      return state;
  }
};

export default couponReducer;
