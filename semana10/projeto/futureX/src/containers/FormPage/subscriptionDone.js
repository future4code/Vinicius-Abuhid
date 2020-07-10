import React from 'react'
import { connect } from 'react-redux'
import {routes} from '../Router/index'
import {push} from 'connected-react-router'
import styled from 'styled-components'
import Logo from '../../assets/Logo2.PNG'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'

const PageWrapper = styled.div`
    width: 100%;
    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-direction: column;
    height: 100vh;
    position: relative
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
    background-image: url("https://images.wallpaperscraft.com/image/milky_way_starry_sky_galaxy_119519_1920x1080.jpg");
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 100px;
    height: 100%
`
const MessageWrapper = styled(Paper)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
    background-color: white;
    padding: 50px
`

const FooterWraper = styled.footer`
    background-color: #ff7828;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    color: white;
    font-weight: bold;
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
`
const BackButtonWrapper = styled.p`
    &:hover {
        color: #ff7828
    }
`
class SubscriptionDone extends React.Component{
    
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
                    src={Logo}
                    alt='Logo'/>
                    <Button
                    onClick={this.goToLogin}
                    >Login</Button>
                </HeaderWrapper>
                <MainWrapper>
                <MessageWrapper>
                    <p>Parabéns! A sua inscrição foi efetivada com sucesso!</p>
                    <BackButtonWrapper
                    onClick={this.goToTripList}>
                    <u>Voltar para a lista de viagens</u>
                    </BackButtonWrapper>
                </MessageWrapper>
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