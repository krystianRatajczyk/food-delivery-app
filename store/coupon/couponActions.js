export const MOVE_COUPON = "MOVE_COUPON";

export const moveCouponSuccess = (id) => ({
  type: MOVE_COUPON,
  payload: { id },
});

export const moveCoupon = (id) => {
  return (dispatch) => {
    dispatch(moveCouponSuccess(id));
  };
};
