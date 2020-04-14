const initialState = {
  postList: [],
  postChoose: ""
}

const posts = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_POSTS':
      return {
        ...state, postList: action.payload.posts
      }
    case 'SEND_ID':
      return {
        ...state, postChoose: action.payload.postInfo
      }
    default:
      return state
  }
}

export default posts
