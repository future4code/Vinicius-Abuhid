import React from 'react'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { routes } from "../Router";
import { setLogin } from '../../actions/index'

const loginInputs = [
    {
        label: 'E-mail:',
        name: 'email',
        type: 'email',
        required: true,
    },
    {
        label: 'Senha:',
        name: 'password',
        type: 'password',
        required: true,
    }
]

class LoginPage extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:{}
        }
    }

    goToList= () => {
        console.log('yoyoyo')
        this.props.goToList()
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.sendLogin(this.state.data.email, this.state.data.password)
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({ data: { ...this.state.data, [name]: value} });
        console.log(this.state.data)
    }
    render(){
        return(
            <div>
                <h2>Bem-vindo</h2>
                    <form onSubmit={this.handleSubmit}>
                        {loginInputs.map((field)=>{
                            return  <div>
                                        <label>{field.label}</label>
                                        <input
                                        type={field.type}
                                        name={field.name}
                                        required={field.required}
                                        onChange={this.handleInputChange}
                                        value={this.state[field.name]}
                                        />
                                    </div>
                        })}
                        <button type='submit'>Enviar</button>
                    </form>
            </div>
        )
    }
}

const mapsDispatchToProps = dispatch => {
    return{
        goToList: ()=> dispatch(push(routes.listForAdm)),
        sendLogin: (email, password)=> dispatch(setLogin(email, password))
    }
} 

export default connect(null, mapsDispatchToProps)(LoginPage);