const initialState = {
    tripList: [],
    tripDetails: {}
}

const trips = (state = initialState, action) => {
  switch(action.type){
  case 'GET_ TRIPS':
    return {
      ...state, tripList: action.payload.tripList
    }
  case 'GET_ TRIPS_DETAILS':
    return{
      ...state, tripDetails: action.payload.tripDetails
    }
  default: 
    return state
}
}

export default trips