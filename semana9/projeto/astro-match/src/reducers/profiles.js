const initialState = {
    profile: {
      id: "",
      age: "",
      name: "",
      photo: "",
      bio: ""
    },
    myMatches: []
}

const profiles = (state = initialState, action) => {
  switch(action.type){
  case 'GET_PROFILE':
    return {
      ...state,
      profile: action.payload
    }
  case 'DISPLAY_MATCHES':
    return {
      ...state,
      myMatches: action.payload.matchList
    }
  default: 
    return state
}
}

export default profiles
