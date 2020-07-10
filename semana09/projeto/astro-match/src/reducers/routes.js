const initialState = {
  currentPage: "SwipeScreen",
  renderSwipeScreen: true
};

export default (state = initialState, action) => {

  switch (action.type) {
    case "UPDATE_CURRENT_PAGE":
      return {  ...state,
                currentPage: action.payload.newPage,
                renderSwipeScreen: action.payload.renderSwipeScreen        
      }
    default:
      return state;
  }
}
