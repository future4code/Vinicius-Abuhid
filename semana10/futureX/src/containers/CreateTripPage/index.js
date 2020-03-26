import React from 'react'
import {push} from 'connected-react-router'
import {connect} from 'react-redux'
import {routes} from '../Router'
import {addNewTrip} from '../../actions/index'

let date = new Date
let day = date.getDate()
let month = date.getMonth()+1
const year = date.getFullYear() 
if(day<10){
    day='0'+day
} 
if(month<10){
    month='0'+month
}
date = year+'-'+month+'-'+day

const tripInfo = [
    {
        label: 'Viagem',
        name: 'name',
        type: 'text', 
        required: true,
        pattenr: '[a-zA-Z ]{5,}'
    },
    {
        label: 'Planeta',
        name: 'planet',
        type: 'select', 
        required: true,
    },
    {
        label: 'Data da viagem',
        name: 'date',
        type: 'date', 
        required: true,
        min: date
    },
    {
        label: 'Descrição da viagem',
        name: 'description',
        type: 'text', 
        required: true,
        pattenr: '.{30,}'
    },
    {
        label: 'Tempo da viagem em dias',
        name: 'durationInDays',
        type: 'number', 
        required: true,
        min: 50
    }
]

class CreateTripPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            form: {}
        }
    }
    
    componentDidMount(){
        const token = window.localStorage.getItem('token')
        if(token === null){
            this.props.goToLogin()
        }
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({ form: { ...this.state.form, [name]: value} });
        console.log(this.state.form)
      };
    
    capturaData =(e) => {
        e.preventDefault();
        console.log(this.state.form)
        this.props.sendNewTrip(this.state.form)

    }

    render(){
        return(
            <div>
                <form onSubmit={this.capturaData}>
                    <h2>Criar nova viagem</h2>
                    {
                        tripInfo.map((field, index) => {
                            if(field.type !== 'select'){
                                return  <div key={index}>
                                            <label>{field.label}</label>
                                            <input 
                                            name={field.name}
                                            type={field.type}
                                            required={field.required}
                                            pattern={field.pattenr}
                                            onChange={this.handleInputChange}
                                            min={field.min}
                                            value={this.state.form[field.name] || ""}
                                            />
                                        </div>
                            }
                            else {
                                return  <div key={index}>
                                            <label>{field.label}</label>
                                            <select 
                                            name={field.name}
                                            type={field.type}
                                            required={field.required}
                                            // pattern={field.pattenr}
                                            onChange={this.handleInputChange}
                                            value={this.state.form[field.name] || ""}
                                            >
                                                <option>Selecione o planeta de destino</option>
                                                <option>Mercúrio</option>
                                                <option>Vênus</option>
                                                <option>Terra</option>
                                                <option>Marte</option>
                                                <option>Júpter</option>
                                                <option>Saturno</option>
                                                <option>Urano</option>
                                                <option>Netuno</option>
                                                <option>Plutão</option>
                                            </select>
                                        </div>
                            }
                        })
                    }
                    <button type="submit">Criar</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return{
        goToLogin: ()=> dispatch(push(routes.loginPage)),
        sendNewTrip: (newTripData)=> dispatch(addNewTrip(newTripData))
    }
}

export default connect(null, mapDispatchToProps)(CreateTripPage);