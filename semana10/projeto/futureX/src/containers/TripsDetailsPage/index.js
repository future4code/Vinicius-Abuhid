import React from 'react'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { routes } from '../Router/index'
import { selectACandidate } from '../../actions/index'
import styled from 'styled-components'
import Logo from '../../assets/Logo2.PNG'
import Button from '@material-ui/core/Button'
import CandidateCard from '../../components/candidateCard'
import Paper from '@material-ui/core/Paper'

const PageWrapper = styled.div`
    width: 100%;
    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-direction: column;
    position: relative;
    min-height: 100vh
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
    min-height: 94vh;
`
const MessageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
    background-color: white;
    padding: 50px
`
const TripInfoWrapper = styled(Paper)`
    background-color: white;
    padding: 15px;
    margin-bottom: 30px
`

const TitleWrapper = styled.h2`
    text-align: center;
    color: #ff7828
`
const CandidateListWrapper = styled(Paper)`
    background-color: white;
    padding: 15px;
    margin-top: 10px;
    margin-bottom: 30px;
    h3{
        color: #ff7828
        text-align: center;
    }
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
    height: 06vh
`
const BackButtonWrapper = styled.p`
    &:hover {
        color: #ff7828
    }
`
class TripsDetailsPage extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const token = window.localStorage.getItem('token')
        if (token === null) {
            this.props.goToLogin()
        }
    }

    selectATrip = () => {
        this.props.goToList()
    }

    getTripandCandidateId = (candidateId, tripId) => {
        this.props.selectACandidate(candidateId, tripId)
    }

    goHome = () => {
        this.props.goToHomePage()
    }

    goToLogin = () => {
        this.props.goToLoginPage()
    }

    logOut = () => {
        localStorage.clear()
        this.props.goToLogin()
    }

    render() {
        let tripDetailsScreen = "";

        if (Object.keys(this.props.tripDetails).length === 0) {
            tripDetailsScreen =
                <MessageWrapper>
                    <p>Por favor selecione uma viagem</p>
                    <BackButtonWrapper onClick={this.selectATrip}>
                        <u>lista de viagens</u>
                    </BackButtonWrapper>
                </MessageWrapper>
        }
        else {
            tripDetailsScreen =
                <div>
                    <TripInfoWrapper elevation={10}>
                        <TitleWrapper>{this.props.tripDetails.name}</TitleWrapper>
                        <p>{this.props.tripDetails.description}</p>
                        <p>Planeta: {this.props.tripDetails.planet}</p>
                        <p>Data: {this.props.tripDetails.date}</p>
                        <p>Duração em dias terráqueos: {this.props.tripDetails.durationInDays}</p>
                    </TripInfoWrapper>
                    <CandidateListWrapper>
                        <h3>Inscrições</h3>
                        {this.props.tripDetails.candidates.map((candidate, index) => {
                            return <CandidateCard
                                candidate={candidate}
                                button={<Button
                                    onClick={() => this.getTripandCandidateId(candidate.id,
                                        this.props.tripDetails.id)}>
                                    Selecionar Candidato
                                            </Button>}
                            />
                        })}
                    </CandidateListWrapper>
                    <CandidateListWrapper>
                        <h3>Candidatos aprovados</h3>
                        {this.props.tripDetails.approved.map((candidate, index) => {
                            return <CandidateCard
                                candidate={candidate}
                            />
                        })}
                    </CandidateListWrapper>
                </div>
        }
        return (
            <PageWrapper>
                <HeaderWrapper>
                    <LogoWrapper
                        src={Logo}
                        onClick={this.goHome}
                        alt='Logo' />
                    <Button>
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
    return {
        goToLogin: () => dispatch(push(routes.loginPage)),
        goToList: () => dispatch(push(routes.listForAdm)),
        selectACandidate: (candidateId, tripId) => dispatch(selectACandidate(candidateId, tripId)),
        goToHomePage: () => dispatch(push(routes.root))
    }
}

const mapStateToProps = (state) => {
    return {
        tripDetails: state.trips.tripDetails
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TripsDetailsPage);