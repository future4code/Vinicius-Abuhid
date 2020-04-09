import React from 'react'
import styled from 'styled-components'

const MainWrapper = styled.div`
    align-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const FormWrapper = styled.form`

`
const FieldsWrapper = styled.div`
    display: flex;
    justify-content: center;
`
export const ButtonWrapper = styled.button`
`
export const InputWrapper = styled.input`
`
export const SelectWrapper = styled.select`
`

class AddNewTaskBar extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <MainWrapper>
                <FormWrapper onSubmit={this.props.submitInfo}>
                    <h3>Adicionar nova tarefa</h3>
                    <FieldsWrapper>
                        <InputWrapper
                        type='text' 
                        placeholder='escreva a nova tarefa aqui' 
                        onChange={this.props.saveInfo}
                        value={this.props.taskValue}
                        name='text'
                        />
                        <SelectWrapper
                        onChange={this.props.saveInfo}
                        value={this.props.chosenDayValue}
                        name='day'
                        >
                            <option>Selecione o dia da semana</option>
                            <option>Segunda-feira</option>
                            <option>Terça-feira</option>
                            <option>Quarta-feira</option>
                            <option>Quinta-feira</option>
                            <option>Sexta-feira</option>
                            <option>Sábado</option>
                            <option>Domingo</option>
                        </SelectWrapper>
                        <ButtonWrapper type='onSubmmit'>Adicionar</ButtonWrapper>
                    </FieldsWrapper>
                </FormWrapper>
            </MainWrapper>
        )
    }
}

export default AddNewTaskBar;