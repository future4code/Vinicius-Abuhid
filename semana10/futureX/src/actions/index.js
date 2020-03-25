import axios from 'axios'
import connect from 'react-redux'
import {routes} from '../containers/Router'
import { push } from 'connected-react-router'

// export const clearSwipesFromMatchPage = () => async (dispatch) => {
// 	const result = await axios.put(
// 		'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/vinicius/clear'
// 		)
// 	dispatch(getMyMatches())
// 	dispatch(getRandomProfile())
// }

const baseURL = 'https://us-central1-missao-newton.cloudfunctions.net/futureX/vinicius'

export const tripListAction = (tripList) => {
	return {
		type: 'GET_ TRIPS',
		payload: {
			tripList
				}
	}
}

export const getTheTripList = () => async (dispatch) => {
    const result = await axios.get(
        `${baseURL}/trips`
        )
    console.log(result.data.trips)
    dispatch (
        tripListAction(result.data.trips)
    )
}

export const getTripDetails = (tripId) => async (dispatch) => {
    console.log(tripId)
    const result = await axios.get(
        `${baseURL}/trip/${tripId}?=`,
        {headers: {
            auth: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkNmbjZPd0YyOVU5TDJSYzV0UWo1IiwiZW1haWwiOiJhc3Ryb2RldkBnbWFpbC5jb20uYnIiLCJpYXQiOjE1NzMxNDM4Njh9.mmOrfGKlXpE3pIDUZfS3xV5ZwttOI2Exmoci9Sdsxjs'
        }}
    )
    console.log(result.data)
}

export const setLogin = (email, password) => async(dispatch) => {
    console.log(email, password)
    const body = {
        email,
        password
    }
    try{
        const result = await axios.post(`${baseURL}/login`, body,
        {headers :{'Content-Type': 'application/json'}})
        console.log(result.data.token)
        const token = result.data.token
        window.localStorage.setItem('token', token)
        dispatch(push(routes.listForAdm))
    }
    catch(error){
        console.log(error)
    }
}

// export const addNewTrip = (tripData) =>async (dispatch) => {
//     try{
//         const result = await axios.post(`${baseURL}/trips`, tripData)
//         console.log(result.data)
//     }catch(error){
//         console.log(error)
//     }
    

// }