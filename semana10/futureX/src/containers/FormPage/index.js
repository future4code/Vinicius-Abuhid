import React from 'react'
import {getTheTripList, sendSubscriptionData} from '../../actions/index'
import {connect} from 'react-redux'

const country_list = ["","Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla",
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
        pattenr: '[a-zA-Z ]{3,}'
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
        placeholder: 'Por quê você se considera um bom candidato?',
        pattenr: '.{30,}'
    },
    {
        label: 'Profissão',
        name: 'profession',
        type: 'text', 
        required: true,
        pattenr: '[a-zA-Z ]{10,}'
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
        const { name, value } = e.target;
        this.setState({ form: { ...this.state.form, [name]: value} });
    };
    
    handleTripChange = (e) => {
        console.log(e.target.value)
        this.setState({
            tripId: e.target.value
        })
        console.log(this.state.tripId)
    }

    sendForm =(e) => {
        e.preventDefault();
        this.props.sendSubscription(this.state.form, this.state.tripId)
        
    }

    render(){
        return(
            <div>
                <form onSubmit={this.sendForm}>
                    <h2>Formulário de inscrição</h2>
                    {
                        candidateInfo.map((field, index) => {
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
                                            placeholder={field.placeholder}
                                            value={this.state.form[field.name] || ""}
                                            />
                                        </div>
                            }
                            else{
                                return <div key={index}>
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
                                        </div>
                            }
                        })
                    }
                    <div>
                        <label>Selecione uma viagem</label>
                        <select 
                        onChange={this.handleTripChange}
                        value={this.state.tripId}
                        >
                        {this.props.allTrips.map((trip, index)=> {
                            return  <option
                                    value={trip.id}
                                    key={index}
                                    >
                                    {trip.name} - {trip.planet}
                                    </option>
                            })}
                        </select>
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            </div>
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
        sendSubscription: (userInfo, tripId)=> dispatch(sendSubscriptionData(userInfo,tripId))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FormPage)