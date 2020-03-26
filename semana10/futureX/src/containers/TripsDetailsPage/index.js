import React from 'react'
import {connect} from 'react-redux'
import {push} from 'connected-react-router'
import {routes} from '../Router/index'
import {selectACandidate} from '../../actions/index'

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

    render(){
        let tripDetailsScreen = "";

        if(Object.keys(this.props.tripDetails).length === 0 ){
            tripDetailsScreen = 
                <div>
                    <p>Por favor selecione uma viagem</p>
                    <p onClick={this.selectATrip}>
                    <u>lista de viagens</u>
                    </p>
                </div>
        }
        else{
            tripDetailsScreen = 
                <div>
                    <h3>{this.props.tripDetails.name}</h3>
                    <h4>inscrições</h4>
                    <ul>
                        {this.props.tripDetails.candidates.map((candidate, index)=>{
                             return     <li key={index}>
                                            {candidate.name}
                                            <button 
                                            onClick=
                                            {()=> this.getTripandCandidateId(candidate.id,
                                                this.props.tripDetails.id)}
                                            >
                                            Selecionar candidato
                                            </button>
                                        </li>
                        })}
                    </ul>
                    <h4>candidatos aprovados</h4>
                    <ul>
                        {this.props.tripDetails.approved.map((candidate, index)=>{
                             return     <li key={index}>
                                            {candidate.name}
                                        </li>
                        })}
                    </ul>
                </div>
        }
        return(
            <div>
                {tripDetailsScreen}
            </div>
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