import React from 'react'
import {getTheTripList, sendSubscriptionData} from '../../actions/index'
import {connect} from 'react-redux'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import Logo from '../../assets/Logo2.PNG'
import {push} from 'connected-react-router'
import {routes} from '../Router/index'
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const PageWrapper = styled.div`
    width: 100%;
    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-direction: column;
    height: 100vh;
    position: relative
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
    background-image: url("https://images.wallpaperscraft.com/image/milky_way_starry_sky_galaxy_119519_1920x1080.jpg");
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 100px;
    height: 100%
`
const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    padding: 50px
`
const TitleWrapper = styled.h2`
    color: #ff7828;
    margin-bottom: 40px;
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
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
`

const country_list = ["Selecionar País", "Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla",
"Antigua & Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan",
"Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda",
"Bhutan","Bolivia","Bosnia & Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso",
"Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia",
"Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba","Cyprus","Czech Republic",
"Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador",
"Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland",
"France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana",
"Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana",
"Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland",
"Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic",
"Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg",
"Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius",
"Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia",
"Nepal","Netherlands","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman",
"Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland",
"Portugal","Puerto Rico","Qatar","Romania","Russia","Rwanda","Samoa","San Marino","Saudi Arabia",
"Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa",
"South Korea","Spain","Sri Lanka","St Kitts & Nevis","St Lucia","St Vincent","Sudan","Suriname",
"Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand",
"Timor L'Este","Togo","Tonga","Trinidad & Tobago","Tunisia","Turkey","Turkmenistan","Uganda",
"Ukraine","United Arab Emirates","United Kingdom", "United States of America","Uruguay","Uzbekistan","Venezuela",
"Vietnam","Yemen","Zambia","Zimbabwe"];

const candidateInfo = [
    {
        label: 'Nome completo',
        name: 'name',
        type: 'text', 
        required: true,
        pattern: '[a-zA-Z ]{3,}'
    },
    {
        label: 'Idade',
        name: 'age',
        type: 'number', 
        required: true,
        min: 18
    },
    {
        label: 'Texto de aplicação',
        name: 'applicationText',
        type: 'text', 
        required: true,
        pattern: '.{30,}'
    },
    {
        label: 'Profissão',
        name: 'profession',
        type: 'text', 
        required: true,
        pattern: '[a-zA-Z ]{10,}'
    },
    {
        label: 'País',
        name: 'country',
        type: 'select', 
        required: true
    }
]

class FormPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            form: {},
            tripId: ""
        }
    }

    componentDidMount(){
        this.props.getTrips()
    }

    handleInputChange = (e) => {
        console.log(e.target.value)
        const { name, value } = e.target;
        this.setState({ form: { ...this.state.form, [name]: value} });
    };
    
    handleTripChange = (e) => {
        this.setState({
            tripId: e.target.value
        })
    }

    sendForm =(e) => {
        e.preventDefault();
        this.props.sendSubscription(this.state.form, this.state.tripId)
    }

    goToLogin = () => {
        this.props.goToLoginPage()
    }

    goHome = () => {
        this.props.goToHomePage()
    }

    render(){
        return(
            <PageWrapper>
                <HeaderWrapper>
                    <LogoWrapper
                    onClick={this.goHome}
                    src={Logo}
                    alt='Logo'/>
                    <Button
                    onClick={this.goToLogin}
                    >Login</Button>
                </HeaderWrapper>
                <MainWrapper>
                <FormWrapper onSubmit={this.sendForm}>
                    <TitleWrapper>Formulário de inscrição</TitleWrapper>
                    {
                        candidateInfo.map((field, index) => {
                            if(field.type !== 'select'){
                                return  <FieldWrapper key={index}>
                                            <label>{field.label}</label>
                                            <input
                                            name={field.name}
                                            type={field.type}
                                            required={field.required}
                                            onChange={this.handleInputChange}
                                            pattern= {field.pattern}
                                            min= {field.min}
                                            value={this.state.form[field.name] || ""}
                                            />
                                        </FieldWrapper>
                            }
                            else{
                                return <FieldWrapper key={index}>
                                            <label>{field.label}</label>
                                            <select
                                            name={field.name} 
                                            required={field.required}
                                            onChange={this.handleInputChange}
                                            >
                                            {country_list.map((country, index) => {
                                            return <option key={index} >{country}</option>
                                            })}
                                            </select>
                                        </FieldWrapper>
                            }
                        })
                    }
                    <FieldWrapper>
                        <label>Selecione uma viagem</label>
                        <select 
                        onChange={this.handleTripChange}
                        value={this.state.tripId}
                        >
                        <option>Selecionar Viagem</option>
                        {this.props.allTrips.map((trip, index)=> {
                            return  <option
                                    value={trip.id}
                                    key={index}
                                    >
                                    {trip.name} - {trip.planet}
                                    </option>
                            })}
                        </select>
                    </FieldWrapper>
                    <Button 
                    variant="contained"
                    type="submit">Enviar</Button>
                </FormWrapper>
                </MainWrapper>
                <FooterWraper>Feito por Vinícius Abuhid</FooterWraper>
            </PageWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        allTrips: state.trips.tripList
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        getTrips: ()=> dispatch(getTheTripList()),
        sendSubscription: (userInfo, tripId)=> dispatch(sendSubscriptionData(userInfo,tripId)),
        goToLoginPage: ()=> dispatch(push(routes.loginPage)),
        goToHomePage: ()=> dispatch(push(routes.root))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FormPage)