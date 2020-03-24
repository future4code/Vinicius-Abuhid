import React from 'react'

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
console.log(date)

const candidateInfo = [
    {
        label: 'Nome completo',
        name: 'Nome do candidato',
        type: 'text', 
        required: true,
        // pattenr: '[a-zA-Z ]{5,}'
    },
    {
        label: 'Idade',
        name: 'Idade do candidato',
        type: 'number', 
        required: true,
    },
    {
        label: 'Texto de aplicação',
        name: 'Texto de aplicação',
        type: 'text', 
        required: true,
        placeholder: 'Por quê você se considera um bom candidato?'
    },
    {
        label: 'Profissão',
        name: 'Profissão do candidato',
        type: 'text', 
        required: true,
        // pattenr: '.{30,}'
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

export default FormPage