import React from 'react'
import {push} from 'connected-react-router'
import {connect} from 'react-redux'
import {routes} from '../Router'
import {addNewTrip} from '../../actions/index'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import Logo from '../../assets/Logo2.PNG'
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';

const PageWrapper = styled.div`
    width: 100%;
    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-direction: column;
    height: 100vh;
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
    background-color: #A9A9A9;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 40px;
    padding-bottom: 100px;
`
const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 15px
`

const FieldWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px
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

    logOut = () => {
        localStorage.clear()
        this.props.goToLogin()
    }

    render(){
        return(
            <PageWrapper>
                <HeaderWrapper>
                    <LogoWrapper src={Logo}/>
                    <Button
                    onClick={this.logOut}>
                    Logout
                    </Button>
                </HeaderWrapper>
                <MainWrapper>
                <h2>Criar nova viagem</h2>
                <FormWrapper onSubmit={this.capturaData}>
                    {
                        tripInfo.map((field, index) => {
                            if(field.type !== 'select'){
                                return  <FieldWrapper key={index}>
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
                                        </FieldWrapper>
                            }
                            else {
                                return  <FieldWrapper key={index}>
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
                                        </FieldWrapper>
                            }
                        })
                    }
                    <Button 
                    variant="contained"
                    type="submit">Criar</Button>
                </FormWrapper>
                </MainWrapper>
                <FooterWraper>Feito por Vinícius Abuhid</FooterWraper>
            </PageWrapper>
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