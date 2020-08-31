import PropTypes from 'prop-types'
import React from 'react'
import {connect} from 'react-redux'
import {clearSwipesFromSwpiePage, clearSwipesFromMatchPage } from '../../actions/profiles'
import styled from 'styled-components'

const ClearButton = styled.button`
	position: fixed;
	bottom: 5px;
	right: 5px;
`

class ClearButtonWrapper extends React.Component{
	constructor(props){
		super(props)
	}

	clearSwipes = () => {
		if (this.props.currentPage === "SwipeScreen"){
			this.props.clearSwipesFromSwpiePage()
		}
		else if (this.props.currentPage === "MatchScreen"){
			this.props.clearSwipesFromMatchPage()
		}
	}

	render(){
		return (<ClearButton
			 	onClick={this.clearSwipes}>Limpar swipes e matches
				</ClearButton>)
	}
}

function mapDispatchToProps(dispatch) {
	return {
		clearSwipesFromSwpiePage: () => dispatch(clearSwipesFromSwpiePage()),
		clearSwipesFromMatchPage: () => dispatch(clearSwipesFromMatchPage())
	}
}

function mapStateToProps(state){
	return {
		currentPage: state.routes.currentPage
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ClearButtonWrapper)
