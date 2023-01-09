import * as tabActionsTypes from "./tabActions";

const initialState = {
  selectedTab: "Home",
  layoutVisibility: true,
};

const tabReducer = (state = initialState, action) => {
  switch (action.type) {
    case tabActionsTypes.SET_SELECTED_TAB: {
      return {
        ...state,
        selectedTab: action.payload.selectedTab,
      };
    }
    case tabActionsTypes.TOGGLE_LAYOUT_VISIBILITY: {
      return {
        ...state,
        layoutVisibility: action.payload.state,
      };
    }
    default:
      return state;
  }
};

export default tabReducer;
