import React from "react";
import { Provider, connect } from "react-redux";
import thunk from "redux-thunk";
import { MuiThemeProvider, CssBaseline, Toolbar } from "@material-ui/core";
import theme from "../../style/theme";
import Router from "../Router";
import { createBrowserHistory } from "history";
import { createStore, applyMiddleware, compose } from "redux";
import { generateReducers } from "../../reducers";
import { routerMiddleware, push } from "connected-react-router";
import { routes } from "../Router";
import {getTheTripList} from '../../actions/index'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input';
import Search from '@material-ui/icons/Search'
import Share from '@material-ui/icons/Share'
import TripCard from '../../components/TripCard'
import Logo from '../../assets/Logo2.PNG'

const PageWrapper = styled.div`
    width: 100%;
    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-direction: column;
`
const HeaderWrapper = styled.div`
    width: 100%;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 15px
`
const LogoWrapper = styled.img`
    width: 120px;
    height: 50px
`

const ToolbarWrapper = styled.div`
    width: 100%;
    background-color: #ff7828;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px
`
const SearchWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items:center;
    width: 30%;
`
const MainWrapper = styled.div`
    background-color: #A9A9A9;
    display: flex;
    flex-direction: column;
    padding-bottom: 15px
`
const FooterWraper = styled.footer`
    background-color: #ff7828;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    color: white;
    font-weight: bold;
`
const ButtonWrapper = styled(Button)`
    width: 20%;
    align-self: center;
    margin-bottom: 10px
`

class ListTripsPageForUsers extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.getTrips()
    }

    goToForm = () => {
        this.props.goToFormPage()
    }

    goToLogin = () => {
        this.props.goToLoginPage()
    }

    goHome = () => {
        this.props.goToHomePage()
    }

    render(){
        return(
            <PageWrapper>
                <HeaderWrapper>
                    <LogoWrapper
                    onClick={this.goHome}
                    src={Logo}/>
                    <Button
                    onClick={this.goToLogin}
                    >Login</Button>
                </HeaderWrapper>
                <ToolbarWrapper>
                    <SearchWrapper>
                        <label>Buscar viagem:</label>
                        <Input type='text'/>
                        <Search/>
                    </SearchWrapper>
                </ToolbarWrapper>
                <MainWrapper>
                {this.props.allTrips.map((trip, index)=>{
                    return  <TripCard 
                            trip={trip}
                            buttonText='Candidatar'
                            buttonFunction={this.goToForm}
                            key={index}
                            icon ={<Share/>}
                            />
                })}
                <ButtonWrapper
                variant="contained"
                onClick={this.goHome}
                > 
                HomePage
                </ButtonWrapper>
                </MainWrapper>
                <FooterWraper>Feito por Vinícius Abuhid</FooterWraper>
            </PageWrapper>
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
        getTrips: ()=> dispatch(getTheTripList()),
        goToLoginPage: ()=> dispatch(push(routes.loginPage)),
        goToHomePage: ()=> dispatch(push(routes.root))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListTripsPageForUsers);