import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { routes } from "../Router";
import Logo from '../../assets/Logo.PNG'
import TestimonyCard from '../../components/testimonyCard'
import Paper from '@material-ui/core/Paper'
import goku from '../../assets/goku.jpg'
import alf from '../../assets/alf.jpg'
import astrodev from '../../assets/astrodev.png'
import Typography from '@material-ui/core/Typography'

const PageWrapper = styled.div`
    width: 100%;
    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-direction: column;
`
const HeaderWrapper = styled.div`
    width: 100%;
    background-color: white;
    display: flex;
    justify-content: space-evenly;
    padding-right: 15px;
    align-items: center;
`
const LogoWrapper = styled.img`
    margin: 0 auto
    width: 240px;
    height: 120px
`
const ButtonHeader = styled(Button)`
    height: 50%
`
const ToolbarWrapper = styled.div`
    width: 100%;
    background-color: #ff7828;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px;
`
const MainWrapper = styled.div`
    background-color: #A9A9A9;
    display: flex;
    flex-direction: column;
    padding-bottom: 50px;
    background-image: url("https://images.wallpaperscraft.com/image/milky_way_starry_sky_galaxy_119519_1920x1080.jpg");
`
const ClickActionWrapper = styled(Paper)`
    align-self: center;
    background-color: white;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center 
`
const ButtonWrapper = styled(Button)`
    width: 50%;
    margin-bottom: 10px;
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
const testimonies = [
  {
    name: "Astrodev",
    pic: astrodev,
    experience: "Agradeço muito a oportunidade de viajar para Saturno com a FutureX. Experiência incrível! Estou tão feliz que vou liberar meus alunos do report de sexta"
  },
  {
    name: "Alf",
    pic: alf,
    experience: "Graças a FutureX pude voltar ao meu planeta natal. Momento muito especial na minha vida! Obrigado Futurex!"
  },
  {
    name: "Goku",
    pic: goku,
    experience: "Sempre viajei pelo espaço, mas nunca desse jeito incrível. Nem Shen-Long poderia realizar um desejo assim. Obrigado FutureX"
  }
]

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  goToList = () => {
    this.props.goToTripsList()
  }

  goToLogin = () => {
    this.props.goToLoginPage()
  }

  render() {
    return (
      <PageWrapper>
        <HeaderWrapper>
          <LogoWrapper src={Logo} alt='Logo' />
          <ButtonHeader
            onClick={this.goToLogin}
          >Login
          </ButtonHeader>
          <div></div>
        </HeaderWrapper>
        <ToolbarWrapper>
          <h1>Venha conhecer o espaço com a gente!</h1>
          <h2>A FutureX tem os melhores pacotes espaciais pelo preço de viajar pelo prórpio planeta</h2>
        </ToolbarWrapper>
        <MainWrapper>
          {testimonies.map((card, index) => {
            return <TestimonyCard
              key={index}
              name={card.name}
              imgProfile={card.pic}
              description={card.experience}
            />
          })}
          <ClickActionWrapper elevation={10}>
            <p>Venha fazer parte do nosso time de tripulantes</p>
            <ButtonWrapper
              color='primary'
              variant="contained"
              onClick={this.goToList} >
              Clique aqui
          </ButtonWrapper>
          </ClickActionWrapper>
        </MainWrapper>
        <FooterWraper>Feito por Vinícius Abuhid</FooterWraper>
      </PageWrapper>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    goToLoginPage: () => dispatch(push(routes.loginPage)),
    goToTripsList: () => dispatch(push(routes.listForUsers))

  };
};
export default connect(null, mapDispatchToProps)(HomePage);
