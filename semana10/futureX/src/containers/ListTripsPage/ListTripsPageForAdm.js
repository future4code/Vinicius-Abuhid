import React from 'react'
import {connect} from 'react-redux'
import {push} from 'connected-react-router'
import {routes} from '../Router'
import {getTheTripList, getTripDetails, deleteTrip} from '../../actions/index'

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

    render(){
        return(
            <div>
                <p>Olaaaaa Adm</p>
                <ul>
                    {this.props.allTrips.map((trip, index)=> {
                        return  <li key={index}>
                                    <p>{trip.name}</p>
                                    <button
                                    onClick={()=>this.catchTripIdForDetails(trip.id)}>
                                    Ver Informações
                                    </button>
                                    <button
                                    onClick={()=>this.catchTripIdForDelete(trip.id)}>
                                    Deletar viagem
                                    </button>
                                </li>
                    })}
                </ul>
                <button 
                onClick={this.goToCreate}>
                Criar Trip</button>
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
        getTrips: ()=> dispatch(getTheTripList()),
        goToCreatePage: () => dispatch(push(routes.createTrip)),
        catchTripDetails: (tripId) => dispatch(getTripDetails(tripId)),
        goToLogin: ()=> dispatch(push(routes.loginPage)),
        delTrip : (tripId)=> dispatch(deleteTrip(tripId))
    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(ListTripsPageForAdm);
