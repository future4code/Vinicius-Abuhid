import React from "react";
import { Provider, connect } from "react-redux";
import thunk from "redux-thunk";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import theme from "../../style/theme";
import Router from "../Router";
import { createBrowserHistory } from "history";
import { createStore, applyMiddleware, compose } from "redux";
import { generateReducers } from "../../reducers";
import { routerMiddleware, push } from "connected-react-router";
import { routes } from "../Router";
import {getTheTripList} from '../../actions/index'

class ListTripsPageForUsers extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.getTrips()
    }

    goToForm = () => {
        console.log('testeee')
        this.props.goToFormPage()
    }

    render(){
        return(
            <div>
                <p>Ola viajante</p>
                <ul>{this.props.allTrips.map((trip, index)=>{
                    return <li key={index}>{trip.name}</li>
                })}
                </ul>
                <button 
                    onClick={this.goToForm} >
                    cadastrar
                </button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        allTrips: state.trips.tripList
    }
}

const mapDispatchToProps = dispatch => {
    return{
        goToFormPage: () => dispatch(push(routes.formPage)),
        getTrips: ()=> dispatch(getTheTripList())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListTripsPageForUsers);