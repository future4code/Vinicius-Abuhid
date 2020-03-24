import PropTypes from 'prop-types'
import React, {Component} from 'react'
import UserSwipeCard from '../../components/UserSwipeCard'
import {AppBar} from '../../components/AppBar'
import {ButtonsWrapper, ContentWrapper, SwipeScreenWrapper, MatchIcon, OptionButton} from './styled'
import {connect} from 'react-redux'
import {mdiAccountMultipleCheck} from '@mdi/js'
import {swipeLeft, swipeRight} from '../../components/UserSwipeCard/styled'
import {updateCurrentPage} from '../../actions/route'
import {Loader} from '../../components/Loader'
import { getRandomProfile, choseOne } from '../../actions/profiles'

export class SwipeScreen extends Component {
	constructor(props) {
		super(props)
		this.state = {
			currentAnimation: null,
		}
	}

	componentDidMount() {
		if (this.props.renderOrnot){
		this.props.showProfiles()}
		// if (!this.props.profileToSwipe && this.props.getProfileToSwipe) {
		// 	this.props.getProfileToSwipe()
		// }
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (prevProps.profileToSwipe !== this.props.profileToSwipe) {
			this.setState({currentAnimation: null})
		}
	}

	onChooseOption = (option) => () => {
		if (option === 'like'){
			this.props.likedProfile(this.props.profileID)
		}
		let currentAnimation = option === 'dislike' ? swipeRight : swipeLeft
		
		if (this.state.currentAnimation === null) {
			this.setState({currentAnimation: currentAnimation})
		}

		if (this.props.profileToSwipe) {
			this.props.likedProfile(this.props.profileToSwipe.id, option === 'like')
		}
		this.props.showProfiles()
	}

	render() {
		const {profileToSwipe, goToMatchScreen} = this.props
		const {currentAnimation} = this.state

		return (
			<SwipeScreenWrapper>
				<AppBar
					rightAction={<MatchIcon
						size={1.5}
						path={mdiAccountMultipleCheck}
						onClick={goToMatchScreen}
					/>}
				/>
				<ContentWrapper>
					{currentAnimation !== null && (<Loader/>)}
					{profileToSwipe ? <UserSwipeCard
						userToSwipe={profileToSwipe}
						animationDirection={currentAnimation}
					/> : (<Loader/>)}
					<ButtonsWrapper>
						<OptionButton onClick={this.onChooseOption('dislike')} option="dislike">X</OptionButton>
						<OptionButton onClick={this.onChooseOption('like')} option="like">♥️</OptionButton>
					</ButtonsWrapper>
				</ContentWrapper>
			</SwipeScreenWrapper>
		)
	}
}

const mapStateToProps = (state) => ({
	profileToSwipe: state.profiles.profile,
	profileID: state.profiles.profile.id,
	currentPage: state.routes.currentPage,
	renderOrnot: state.routes.renderSwipeScreen
})

const mapDispatchToProps = (dispatch) => {
	return {
		goToMatchScreen: () => dispatch(updateCurrentPage('MatchScreen')),
		showProfiles: () => dispatch(getRandomProfile()),
		likedProfile: (id)=> dispatch(choseOne(id))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SwipeScreen)
