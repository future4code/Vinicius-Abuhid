import React from 'react'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { routes } from "../Router";
import { setLogin } from '../../actions/index'
import styled from 'styled-components'
import Logo from '../../assets/Logo2.PNG'
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input';

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
background-image: url("https://images.wallpaperscraft.com/image/milky_way_starry_sky_galaxy_119519_1920x1080.jpg");;
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
`

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
        this.props.goToList()
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.sendLogin(this.state.data.email, this.state.data.password)
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({ data: { ...this.state.data, [name]: value} });
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
                </HeaderWrapper>
                <MainWrapper>
                    <FormWrapper onSubmit={this.handleSubmit}>
                    <TitleWrapper>Bem-vindo</TitleWrapper>
                        {loginInputs.map((field, index)=>{
                            return  <FieldWrapper key={index}>
                                        <label>{field.label}</label>
                                        <Input
                                        type={field.type}
                                        name={field.name}
                                        required={field.required}
                                        onChange={this.handleInputChange}
                                        value={this.state[field.name]}
                                        />
                                    </FieldWrapper>
                        })}
                        <Button 
                        variant="contained"
                        type='submit'>
                        Enviar
                        </Button>
                    </FormWrapper>
                </MainWrapper>
                <FooterWraper>Feito por Vinícius Abuhid</FooterWraper>
            </PageWrapper>
        )
    }
}

const mapsDispatchToProps = dispatch => {
    return{
        goToList: ()=> dispatch(push(routes.listForAdm)),
        sendLogin: (email, password)=> dispatch(setLogin(email, password)),
        goToHomePage: ()=> dispatch(push(routes.root))
    }
} 

export default connect(null, mapsDispatchToProps)(LoginPage);