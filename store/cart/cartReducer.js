import * as cartActionsTypes from "./cartActions";

const initialState = {
  cartList: [],
  total: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case cartActionsTypes.SET_QTY_TO_CART: {
      const totalCost = action.payload.item.price * action.payload.item.qty;

      const cartItemIndex = state.cartList.findIndex(
        (item) => item.id === action.payload.item.id
      );//check if there is existing product
      

      if (cartItemIndex > -1) {
        const prevQty = state.cartList[cartItemIndex].qty; //get previous quantity
        const changedItem = {
          ...action.payload.item,
          qty:
            action.payload.action === "ADD"
              ? prevQty + action.payload.item.qty
              : prevQty - action.payload.item.qty,
        };// create new object with new quantity
        const newCartItemList = [...state.cartList];
        newCartItemList[cartItemIndex] = changedItem;
        //replace newly created object in place with index

        return {
          cartList: [...newCartItemList],
          total:
            action.payload.action === "ADD"
              ? state.total + totalCost
              : state.total - totalCost,
        };
      } else {
        return {
          cartList: [...state.cartList, action.payload.item],
          total: state.total + totalCost,
        };
      }
    }
    case cartActionsTypes.DELETE_FROM_CART: {
      const totalCost = action.payload.item.price * action.payload.item.qty;
      const newCartList = state.cartList.filter(
        (cartItem) => cartItem.id !== action.payload.item.id
      );
      //FILTERING CARTLIST SO THAT ELEMENTS WHICH ONLY ARE NOT EQUAL TO ID ARE PASSING FURTHER

      return {
        cartList: [...newCartList],
        total: state.total - totalCost,
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
