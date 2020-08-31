import PropTypes from 'prop-types'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {AppBar} from '../../components/AppBar'
import {mdiAccountSwitch} from '@mdi/js'
import {updateCurrentPage} from '../../actions/route'
import {Avatar, List, ListItem, ListText, MatchIcon} from './styled'
import { getMyMatches } from '../../actions/profiles'


class MatchScreen extends Component {
	constructor(props){
		super(props)
	}

	componentDidMount() {
		this.props.getAllMatches()
		if (this.props.getMatches) {
			this.props.getMatches()
		}
	}

	render() {
		const {goToSwipeScreen, matches} = this.props

		return (
			<div>
				<AppBar
					leftAction={<MatchIcon
						path={mdiAccountSwitch}
						size={1}
						onClick={goToSwipeScreen}
					/>}
				/>
				<List>
					{this.props.myMatches && this.props.myMatches.map((match) => (
						<ListItem key={match.name}>
							<Avatar src={match.photo}/>
							<ListText>{match.name}</ListText>
						</ListItem>
					))}
				</List>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	myMatches: state.profiles.myMatches
})

const mapDispatchToProps = dispatch => ({
	goToSwipeScreen: () => dispatch(updateCurrentPage('SwipeScreen', false)),
	getAllMatches: () => dispatch(getMyMatches())
})

export default connect(mapStateToProps, mapDispatchToProps)(MatchScreen)
