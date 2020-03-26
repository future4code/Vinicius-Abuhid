import axios from 'axios'
import connect from 'react-redux'
import {routes} from '../containers/Router'
import { push } from 'connected-react-router'

const baseURL = 'https://us-central1-missao-newton.cloudfunctions.net/futureX/vinicius'
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQ5Ym8zaFVhYzh6bGVVU0tmTmJEIiwiZW1haWwiOiJ2aW5pY2l1c2FidWhpZEBnbWFpbC5jb20iLCJpYXQiOjE1ODUxNzYzNzl9.2EqwHE4HsQByvlw0dghmXnZoSIG5cMOLNK2nkj1VkMs'

export const tripListAction = (tripList) => {
	return {
		type: 'GET_ TRIPS',
		payload: {
			tripList
				}
	}
}

export const tripDetailsAction = (tripDetails) => {
	return {
		type: 'GET_ TRIPS_DETAILS',
		payload: {
			tripDetails
				}
	}
}

export const addNewTrip = (newTripData) =>async (dispatch) => {
    console.log(newTripData)
    try{
        const result = await axios.post(`${baseURL}/trips`, newTripData, 
    {headers: {
        'Content-Type': 'application/json',
        auth: token}})
        console.log(result.data)
        dispatch(push(routes.newTripAdded))
    }catch(error){
        console.log(error)
    }
}

export const deleteTrip = (tripId) => async (dispatch) => {
    console.log(tripId)
    try{
        const result = await axios.delete(`${baseURL}/trips/${tripId}`, {
            headers: {'Content-Type': 'application/json'}
        })
        console.log(result.data)
        dispatch(getTheTripList())
    }
    catch(error){
        console.log(error)
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
            auth: token
        }}
    )
    console.log(result.data.trip)
    dispatch(
        tripDetailsAction(result.data.trip)
    )
    dispatch(push(routes.tripsDetails))
}

export const selectACandidate = (candidateId, tripId) => async (dispatch) => {
    console.log(candidateId, tripId)
    const body = {
        approve: 'true'
    }
    try{
        const result = await axios.put
    (`${baseURL}/trips/${tripId}/candidates/${candidateId}/decide`,
    body,
    {headers:{
        'Content-Type': 'application/json',
        auth: token
    }})
    console.log(result.data)
    dispatch(
        getTripDetails(tripId)
    )
    }
    catch(error){
        console.log(error)
    }
}

export const sendSubscriptionData = (userInfo, tripId) => async(dispatch) => {
    console.log(userInfo, tripId)
    try {
        const result = await axios.post(`${baseURL}/trips/${tripId}/apply`, userInfo)
        console.log(result.data)
        dispatch(push(routes.subscriptionDone))
    }
    catch(error){
        console.log(error)
        alert('Cadastro não efetivado. Tente novamente mais tarde...')
    }
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