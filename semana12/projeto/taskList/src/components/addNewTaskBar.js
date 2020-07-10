import React from 'react'
import styled from 'styled-components'
import {Input, Select, MenuItem, Button} from '@material-ui/core'

const MainWrapper = styled.div`
    align-self: center;
    font-family: 'Roboto', sans-serif;
    border-right: 2px ridge grey;
    border-left: 2px ridge grey;
    border-top: 2px ridge grey;
    width: 100%;
    height: 15vh;
`
export const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const FieldsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`
export const ButtonWrapper = styled.button`
    margin: 5px
`
export const InputWrapper = styled(Input)`
    margin: 5px;
    width: 200px
`
export const SelectWrapper = styled.select`
    margin: 5px 10px 5px 5px;
`

const AddNewTaskBar = (props) =>{

        return(
            <MainWrapper>
                <FormWrapper onSubmit={props.submitInfo}>
                    <h2>Adicionar nova tarefa</h2>
                    <FieldsWrapper>
                        <InputWrapper
                        type='text' 
                        placeholder='escreva a nova tarefa aqui' 
                        onChange={props.saveInfo}
                        value={props.taskValue}
                        name='text'
                        required
                        />
                        <SelectWrapper
                        onChange={props.saveInfo}
                        value={props.chosenDayValue}
                        name='day'
                        required
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
                        <Button variant="contained" type='onSubmmit'>Adicionar</Button>
                    </FieldsWrapper>
                </FormWrapper>
            </MainWrapper>
        )
}

export default AddNewTaskBar;