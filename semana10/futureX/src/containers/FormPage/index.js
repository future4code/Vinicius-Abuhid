import React from 'react'

const country_list = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla",
"Antigua &; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan",
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
"Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela",
"Vietnam","Yemen","Zambia","Zimbabwe"];

const candidateInfo = [
    {
        label: 'Nome completo',
        name: 'Nome do candidato',
        type: 'text', 
        required: true,
        pattenr: '[a-zA-Z ]{3,}'
    },
    {
        label: 'Idade',
        name: 'Idade do candidato',
        type: 'number', 
        required: true,
        min: 18
    },
    {
        label: 'Texto de aplicação',
        name: 'Texto de aplicação',
        type: 'text', 
        required: true,
        placeholder: 'Por quê você se considera um bom candidato?',
        pattenr: '.{30,}'
    },
    {
        label: 'Profissão',
        name: 'Profissão do candidato',
        type: 'text', 
        required: true,
        pattenr: '[a-zA-Z ]{10,}'
    },
    {
        label: 'País',
        name: 'País do candidato',
        type: 'select', 
        required: true
    },
    {
        label: 'Em qual viagem você gostaria de embarcar',
        name: 'id das viagens',
        type: 'select', 
        required: true
    }
]

class FormPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            form: {}
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
    }

    render(){
        return(
            <div>
                <form onSubmit={this.capturaData}>
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
                            else if(field.name === 'País do candidato') {
                                return <div>
                                            <label>{field.label}</label>
                                            <select 
                                            name={field.name} 
                                            required={field.required}
                                            >
                                            {country_list.map((country, index) => {
                                            return <option key={index} >{country}</option>
                                            })}
                                            </select>
                                        </div>
                            }            
                            else{
                                return  <div>
                                            <label>{field.label}</label>
                                            <select name={field.name} ></select>
                                        </div>
                            }
                        })
                    }
                    <button type="submit">Enviar</button>
                </form>
            </div>
        )
    }
}

export default FormPage