import React from 'react'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { routes } from "../Router";

class LoginPage extends React.Component{
    constructor(props){
        super(props)
    }

    goToList= () => {
        console.log('yoyoyo')
        this.props.goToList()
    }

    render(){
        return(
            <div>
                <button
                onClick = {this.goToList}
                >Faça aqui o seu Login</button>
            </div>
        )
    }
}

const mapsDispatchToProps = dispatch => {
    return{
        goToList: ()=> dispatch(push(routes.listForAdm))
    }
} 

export default connect(null, mapsDispatchToProps)(LoginPage);