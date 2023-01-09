export const SET_SELECTED_TAB = "SET_SELECTED_TAB";
export const TOGGLE_LAYOUT_VISIBILITY = "TOGGLE_LAYOUT_VISIBILITY";

export const setSelectedTabSuccess = (selectedTab) => ({
  type: SET_SELECTED_TAB,
  payload: { selectedTab },
});

export const setSelectedTab = (selectedTab) => {
  return (dispatch) => {
    dispatch(setSelectedTabSuccess(selectedTab));
  };
};

export const setLayoutVisibilitySuccess = (state) => ({
  type: TOGGLE_LAYOUT_VISIBILITY,
  payload: { state },
});

export const setLayoutVisibility = (state) => {
  return (dispatch) => {
    dispatch(setLayoutVisibilitySuccess(state));
  };
};
