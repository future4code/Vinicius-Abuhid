import React from 'react'
import {connect} from 'react-redux'
import {push} from 'connected-react-router'
import {routes} from '../Router'
import {getTheTripList, getTripDetails, deleteTrip} from '../../actions/index'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input';
import Search from '@material-ui/icons/Search'
import TripCard from '../../components/TripCard'
import Logo from '../../assets/Logo2.PNG'
import Delete from '@material-ui/icons/Delete'

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

class ListTripsPageForAdm extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        const token = window.localStorage.getItem('token')
        if(token === null){
            this.props.goToLogin()
        }
        this.props.getTrips()
    }

    goToCreate = () => {
        this.props.goToCreatePage()
    }

    catchTripIdForDetails = (tripId) => {
        this.props.catchTripDetails(tripId)
    }

    catchTripIdForDelete = (tripId) => {
        let result = window.confirm('Tem certeza que deseja apagar essa viagem?');
        if(result){
            this.props.delTrip(tripId)
        }
    }

    goHome = () => {
        this.props.goToHomePage()
    }

    logOut = () => {
        localStorage.clear()
        this.props.goToLogin()
    }

    render(){
        return(
            <PageWrapper>
                 <HeaderWrapper>
                    <LogoWrapper
                    onClick={this.goHome}
                    src={Logo}/>
                    <Button
                    onClick={this.logOut}
                    >Logout</Button>
                </HeaderWrapper>
                <ToolbarWrapper>
                    <SearchWrapper>
                        <label>Buscar viagem:</label>
                        <Input type='text'/>
                        <Search/>
                    </SearchWrapper>
                </ToolbarWrapper>
                <MainWrapper>
                    {this.props.allTrips.map((trip, index)=> {
                        return  <TripCard 
                                trip={trip}
                                buttonText='Ver mais Detalhes'
                                buttonFunction={()=>this.catchTripIdForDetails(trip.id)}
                                key={index}
                                icon={<Delete 
                                onClick={()=>this.catchTripIdForDelete(trip.id)}/>}
                                >
                                </TripCard>
                    })}
                <ButtonWrapper
                variant="contained" 
                onClick={this.goToCreate}>
                Criar Trip</ButtonWrapper>
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
        getTrips: ()=> dispatch(getTheTripList()),
        goToCreatePage: () => dispatch(push(routes.createTrip)),
        catchTripDetails: (tripId) => dispatch(getTripDetails(tripId)),
        goToLogin: ()=> dispatch(push(routes.loginPage)),
        delTrip : (tripId)=> dispatch(deleteTrip(tripId)),
        goToHomePage: ()=> dispatch(push(routes.root))
    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(ListTripsPageForAdm);
