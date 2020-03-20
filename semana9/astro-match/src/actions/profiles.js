import axios from 'axios'

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
			matchList: ""
				}
	}
}

export const clearSwipes = () => async (dispatch) => {
	const result = await axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/vinicius/clear')
	console.log(result.data)
	dispatch(getRandomProfile())
}

export const getMyMatches = () => async (dispatch) => {
	const result = await axios.get(
		'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/vinicius/matches')
	console.log(result.data.matches)
	console.log(result.data)
	dispatch (
		displayMyMatches(result.data.matches)
	)
}

export const getRandomProfile = () => async (dispatch) => {
	const result = await axios.get(
		'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/vinicius/person'
		)
	console.log(result.data.profile)
	dispatch(getNewProfile(result.data.profile))
}

export const choseOne = (id) => async (dispatch) => {
	console.log(id)
	const body = {
		id,
		choice: true
	}
	const result = await axios.post(
		'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/vinicius/choose-person', 
		body	
	)
	console.log(result)
}