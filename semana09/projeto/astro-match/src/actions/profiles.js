import axios from 'axios'
import { connect } from 'react-redux';

export const getNewProfile = (profile) => { 
	return {
	type: "GET_PROFILE",
	payload: {
		id: profile.id,
		age: profile.age,
		name: profile.name,
		photo: profile.photo,
		bio: profile.bio
	}
  }
};

export const displayMyMatches = (matchList) => {
	return {
		type: 'DISPLAY_MATCHES',
		payload: {
			matchList
				}
	}
}

export const clearSwipesFromSwpiePage = () => async (dispatch) => {
	const result = await axios.put(
		'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/vinicius/clear'
		)
	dispatch(getRandomProfile())
}

export const clearSwipesFromMatchPage = () => async (dispatch) => {
	const result = await axios.put(
		'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/vinicius/clear'
		)
	dispatch(getMyMatches())
	dispatch(getRandomProfile())
}

export const getMyMatches = () => async (dispatch) => {
	const result = await axios.get(
		'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/vinicius/matches'
		)
	const teste = displayMyMatches(result.data.matches)
	dispatch (
		displayMyMatches(teste.payload.matchList)
	)
}

export const getRandomProfile = () => async (dispatch) => {
	const result = await axios.get(
		'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/vinicius/person'
		)
	getNewProfile(result.data.profile)
	dispatch(getNewProfile(result.data.profile))
}

export const choseOne = (id) => async (dispatch) => {
	const body = {
		id,
		choice: true
	}
	const result = await axios.post(
		'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/vinicius/choose-person', 
		body	
	)
}

