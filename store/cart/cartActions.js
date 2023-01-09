export const SET_QTY_TO_CART = "SET_QTY_TO_CART";
export const DELETE_FROM_CART = "DELETE_FROM_CART";

export const setQtyToCartSuccess = (item, action) => ({
  type: SET_QTY_TO_CART,
  payload: { item: item, action: action },
});

export const setQtyToCart = (item, action) => {
  return (dispatch) => {
    dispatch(setQtyToCartSuccess(item, action));
  };
};

export const deleteFromCartSuccess = (item) => ({
  type: DELETE_FROM_CART,
  payload: { item },
});

export const deleteFromCart = (item) => {
  return (dispatch) => {
    dispatch(deleteFromCartSuccess(item));
  };
};
