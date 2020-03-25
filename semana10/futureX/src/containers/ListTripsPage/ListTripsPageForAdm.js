import React from 'react'
import {connect} from 'react-redux'
import {push} from 'connected-react-router'
import {routes} from '../Router'
import {getTheTripList, getTripDetails} from '../../actions/index'

class ListTripsPageForAdm extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.getTrips()
    }

    goToCreate = () => {
        this.props.goToCreatePage()
    }

    catchAndgoToDetails = (tripId) => {
        console.log(tripId)
        this.props.catchTripDetails(tripId)
        this.props.goToTripsInfoPage()
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
                                    onClick={()=>this.catchAndgoToDetails(trip.id)}>
                                    Ver Informações
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
        goToTripsInfoPage: ()=> dispatch(push(routes.tripsDetails)),
    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(ListTripsPageForAdm);
