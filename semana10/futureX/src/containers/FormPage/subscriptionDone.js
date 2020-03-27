import React from 'react'
import { connect } from 'react-redux'
import {routes} from '../Router/index'
import {push} from 'connected-react-router'
import styled from 'styled-components'
import Logo from '../../assets/Logo2.PNG'
import Button from '@material-ui/core/Button'

const PageWrapper = styled.div`
    width: 100%;
    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-direction: column;
    height: 100vh;
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
const MainWrapper = styled.div`
    background-color: #A9A9A9;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 40px;
    padding-bottom: 100px;
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
const BackButtonWrapper = styled.p`
    &:hover {
        color: #ff7828
    }
`
class SubscriptionDone extends React.Component{
    constructor(props){
        super(props)
    }
    
    goToTripList = () => {
        this.props.backToTripList()
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
                <MainWrapper>
                <p>Parabéns! A sua inscrição foi efetivada com sucesso!</p>
                <BackButtonWrapper
                onClick={this.goToTripList}>
                <u>Voltar para a lista de viagens</u>
                </BackButtonWrapper>
                </MainWrapper>
                <FooterWraper>Feito por Vinícius Abuhid</FooterWraper>
            </PageWrapper>    
        )
    }
}

const mapDispatchtoProps = (dispatch) => {
    return{
        backToTripList: ()=> (dispatch(push(routes.listForUsers))),
        goToLoginPage: ()=> dispatch(push(routes.loginPage)),
        goToHomePage: ()=> dispatch(push(routes.root))
    }
}

export default connect(null, mapDispatchtoProps)(SubscriptionDone)