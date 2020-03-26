import React from 'react'
import { connect } from 'react-redux'
import {routes} from '../Router/index'
import {push} from 'connected-react-router'

class NewTripAdded extends React.Component{
    constructor(props){
        super(props)
    }
    
    goToTripList = () => {
        this.props.backToTripList()
    }

    render(){
        return(
            <div>
                <p>Viagem cadastrada com sucesso!</p>
                <p
                onClick={this.goToTripList}>
                <u>Voltar para a lista de viagens</u>
                </p>
            </div>    
        )
    }
}

const mapDispatchtoProps = (dispatch) => {
    return{
        backToTripList: ()=> (dispatch(push(routes.listForAdm)))
    }
}

export default connect(null, mapDispatchtoProps)(NewTripAdded)