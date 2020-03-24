import React from 'react'
import {connect} from 'react-redux'
import {push} from 'connected-react-router'
import {routes} from '../Router'

class ListTripsPageForAdm extends React.Component{
    constructor(props){
        super(props)
    }

    goToCreate = () => {
        this.props.goToCreatePage()
    }

    render(){
        return(
            <div>
                <p>Olaaoooo Adm</p>
                <button 
                onClick={this.goToCreate}>
                Criar Trip</button>
                <button>Analisar incrições</button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return{
        goToCreatePage: () => dispatch(push(routes.createTrip))
    }
} 

export default connect(null, mapDispatchToProps)(ListTripsPageForAdm);
