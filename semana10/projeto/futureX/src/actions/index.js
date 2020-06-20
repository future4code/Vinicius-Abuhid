import axios from 'axios'
import connect from 'react-redux'
import {routes} from '../containers/Router'
import { push, replace } from 'connected-react-router'

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
    try{
        const result = await axios.post(`${baseURL}/trips`, newTripData, 
    {headers: {
        'Content-Type': 'application/json',
        auth: token}})
        dispatch(replace(routes.newTripAdded))
    }catch(error){
        console.log(error)
    }
}

export const deleteTrip = (tripId) => async (dispatch) => {
    try{
        const result = await axios.delete(`${baseURL}/trips/${tripId}`, {
            headers: {'Content-Type': 'application/json'}
        })
        dispatch(getTheTripList())
    }
    catch(error){
        console.log(error)
    }
}

export const getTheTripList = () => async (dispatch) => {
    try
    {const result = await axios.get(
        `${baseURL}/trips`
        )
    dispatch (
        tripListAction(result.data.trips)
    )}
    catch(error){
        console.log(error)
    }
}
 
export const getTripDetails = (tripId) => async (dispatch) => {
    try{
    const result = await axios.get(
        `${baseURL}/trip/${tripId}?=`,
        {headers: {
            auth: token
        }}
    )
    dispatch(
        tripDetailsAction(result.data.trip)
    )
    dispatch(push(routes.tripsDetails))
    }
    catch(error){
        console.log(error)
    }
}

export const selectACandidate = (candidateId, tripId) => async (dispatch) => {
    const body = {
        approve: 'true'
    }
    try{
        const result = await axios.put(`${baseURL}/trips/${tripId}/candidates/${candidateId}/decide`,
    body, {headers:{'Content-Type': 'application/json',auth: token}})
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
    try {
        const result = await axios.post(`${baseURL}/trips/${tripId}/apply`, userInfo)
        console.log(result.data)
        dispatch(replace(routes.subscriptionDone))
    }
    catch(error){
        console.log(error)
        alert('Cadastro não efetivado. Tente novamente mais tarde...')
    }
}

export const setLogin = (email, password) => async(dispatch) => {
    const body = {
        email,
        password
    }
    try{
        const result = await axios.post(`${baseURL}/login`, body,
        {headers :{'Content-Type': 'application/json'}})
        const token = result.data.token
        window.localStorage.setItem('token', token)
        dispatch(push(routes.listForAdm))
    }
    catch(error){
        console.log(error)
    }
}