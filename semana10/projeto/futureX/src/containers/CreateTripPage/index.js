import React from 'react'
import { push } from 'connected-react-router'
import { connect } from 'react-redux'
import { routes } from '../Router'
import { addNewTrip } from '../../actions/index'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import Logo from '../../assets/Logo2.PNG'
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import {tripInfo} from '../../assets/info'

const PageWrapper = styled.div`
    width: 100%;
    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
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

class CreateTripPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            form: {}
        }
    }

    componentDidMount() {
        const token = window.localStorage.getItem('token')
        if (token === null) {
            this.props.goToLogin()
        }
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({ form: { ...this.state.form, [name]: value } });
    };

    capturaData = (e) => {
        e.preventDefault();
        this.props.sendNewTrip(this.state.form)

    }

    goHome = () => {
        this.props.goToHomePage()
    }

    logOut = () => {
        localStorage.clear()
        this.props.goToLogin()
    }

    render() {
        return (
            <PageWrapper>
                <HeaderWrapper>
                    <LogoWrapper
                        src={Logo}
                        onClick={this.goHome}
                        alt='Logo' />
                    <Button
                        onClick={this.logOut}>
                        Logout
                    </Button>
                </HeaderWrapper>
                <MainWrapper>
                    <FormWrapper onSubmit={this.capturaData}>
                        <TitleWrapper>Criar nova viagem</TitleWrapper>
                        {
                            tripInfo.map((field, index) => {
                                if (field.type !== 'select') {
                                    return <FieldWrapper key={index}>
                                        <label>{field.label}</label>
                                        <input
                                            name={field.name}
                                            type={field.type}
                                            required={field.required}
                                            onChange={this.handleInputChange}
                                            pattern={field.pattern}
                                            min={field.min}
                                            value={this.state.form[field.name] || ""}
                                        />
                                    </FieldWrapper>
                                }
                                else {
                                    return <FieldWrapper key={index}>
                                        <label>{field.label}</label>
                                        <select
                                            name={field.name}
                                            type={field.type}
                                            required={field.required}
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
    return {
        goToLogin: () => dispatch(push(routes.loginPage)),
        sendNewTrip: (newTripData) => dispatch(addNewTrip(newTripData)),
        goToHomePage: () => dispatch(push(routes.root))
    }
}

export default connect(null, mapDispatchToProps)(CreateTripPage);