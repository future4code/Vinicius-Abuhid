import React from 'react'
import {connect} from 'react-redux'
import {push} from 'connected-react-router'
import {routes} from '../Router/index'
import {selectACandidate} from '../../actions/index'
import styled from 'styled-components'
import Logo from '../../assets/Logo2.PNG'
import Button from '@material-ui/core/Button'
import CandidateCard from '../../components/candidateCard'

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
    padding-top: 20px;
    padding-bottom: 100px;
`
const TitleWrapper = styled.h2`
    text-align: center;
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
class TripsDetailsPage extends React.Component{
    constructor(props){
        super(props)
    }
    
    componentDidMount(){
        const token = window.localStorage.getItem('token')
        if(token === null){
            this.props.goToLogin()
        }
    }

    selectATrip = () => {
        this.props.goToList()
    }

    getTripandCandidateId = (candidateId, tripId) => {
        this.props.selectACandidate(candidateId, tripId)
    }

    logOut = () => {
        localStorage.clear()
        this.props.goToLogin()
    }

    render(){
        let tripDetailsScreen = "";

        if(Object.keys(this.props.tripDetails).length === 0 ){
            tripDetailsScreen = 
                <div>
                    <p>Por favor selecione uma viagem</p>
                    <BackButtonWrapper onClick={this.selectATrip}>
                    <u>lista de viagens</u>
                    </BackButtonWrapper>
                </div>
        }
        else{
            tripDetailsScreen = 
                <div>
                    <TitleWrapper>{this.props.tripDetails.name}</TitleWrapper>
                    <p>{this.props.tripDetails.description}</p>
                    <p>Planeta: {this.props.tripDetails.planet}</p>
                    <p>Data: {this.props.tripDetails.date}</p>
                    <p>Duração em dias terráqueos: {this.props.tripDetails.durationInDays}</p>
                    <h3>Inscrições</h3>
                        {this.props.tripDetails.candidates.map((candidate, index)=>{
                             return     <CandidateCard 
                                        candidate={candidate}
                                        button= {<Button
                                        onClick ={()=> this.getTripandCandidateId(candidate.id,
                                            this.props.tripDetails.id)}>
                                        Selecionar Candidato
                                        </Button>}
                                        />
                                        // <li key={index}>
                                        //     {candidate.name}
                                        //     <Button 
                                        //     onClick=
                                        //     {()=> this.getTripandCandidateId(candidate.id,
                                        //         this.props.tripDetails.id)}
                                        //     >
                                        //     Selecionar candidato
                                        //     </Button>
                                        // </li>
                        })}
                    <h3>Candidatos aprovados</h3>
                        {this.props.tripDetails.approved.map((candidate, index)=>{
                             return     <CandidateCard 
                                        candidate={candidate}
                                        />
                                        // <li key={index}>
                                        //     {candidate.name}
                                        // </li>
                        })}
                </div>
        }
        return(
            <PageWrapper>
                <HeaderWrapper>
                <LogoWrapper src={Logo}/>
                    <Button
                    onClick={this.logOut}
                    >
                    Logout
                    </Button>
                </HeaderWrapper>
                <MainWrapper>
                    {tripDetailsScreen}
                </MainWrapper>
                <FooterWraper>Feito por Vinícius Abuhid</FooterWraper>
            </PageWrapper>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        goToLogin: () => dispatch(push(routes.loginPage)),
        goToList: () => dispatch(push(routes.listForAdm)),
        selectACandidate: (candidateId, tripId)=> dispatch(selectACandidate(candidateId, tripId))
    }
}

const mapStateToProps = (state) => {
    return{
        tripDetails: state.trips.tripDetails
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TripsDetailsPage);