const initialState = {
    profile: {
      id: "",
      age: "",
      name: "",
      photo: "",
      bio: ""
    },
    myMatches: ''
}

const profiles = (state = initialState, action) => {
  switch(action.type){
  case 'GET_PROFILE':
    console.log(state.myMatches)
    return {
      profile: action.payload
    }
  case 'DISPLAY_MATCHES':
    console.log(action.payload.matchList)
    return {
      ...state,
      myMatches: action.payload.matchList
    }
  default: 
    return state
}
}

export default profiles
