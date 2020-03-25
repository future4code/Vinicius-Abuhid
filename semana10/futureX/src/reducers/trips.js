const initialState = {
    tripList: [],
    candidateDetails: [] 
    // {
    //   id: "",
    //   name: "",
    //   description: "",
    //   planet: "",
    //   durationInDays: "",
    //   date: ""
    // }
}

const trips = (state = initialState, action) => {
  switch(action.type){
  case 'GET_ TRIPS':
    console.log(action.payload.tripList)
    return {
      tripList: action.payload.tripList
    }
  default: 
    return state
}
}

export default trips