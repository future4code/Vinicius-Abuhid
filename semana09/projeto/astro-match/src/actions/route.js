export const updateCurrentPage = (newPage, boolean) => ({
  type: "UPDATE_CURRENT_PAGE",
  payload: {
    newPage, // mesma coisa que newPage: newPage
    renderSwipeScreen: boolean
  }
});
