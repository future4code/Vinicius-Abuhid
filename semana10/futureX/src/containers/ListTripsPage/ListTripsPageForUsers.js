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

class ListTripsPageForUsers extends React.Component{
    constructor(props){
        super(props)
    }

    goToForm = () => {
        console.log('testeee')
        this.props.goToFormPage()
    }

    render(){
        return(
            <div>
                <p>Ola viajante</p>
                <button 
                    onClick={this.goToForm} >
                    cadastrar
                </button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return{
        goToFormPage: () => dispatch(push(routes.formPage))
    }
}

export default connect(null, mapDispatchToProps)(ListTripsPageForUsers);

// const mapDispatchToProps = dispatch => {
//     return{
//         goToCreatePage: () => dispatch(push(routes.createTrip))
//     }
// } 