import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { routes } from "../Router";
import Logo from '../../assets/Logo.PNG'
import TestimonyCard from '../../components/testimonyCard'

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
    padding-right: 15px
`
const LogoWrapper = styled.img`
    margin: 0 auto
    width: 350px;
    height: 175px
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
    padding-bottom: 15px;
    background-image: url("https://essium.co/wp-content/uploads/2019/07/deep-space-background-with-nebulae.jpg");
    background-repeat: no-repeat;
`
const ButtonWrapper = styled(Button)`
    width: 50%;
    align-self: center;
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
  {name: "Astrodev",
  pic:"https://ca.slack-edge.com/TLAVDH7C2-UQ3PFH9ED-0aab714b9d14-512",
  experience:"Agradeço muito a oportunidade de viajar para Saturno com a FutureX. Experiência incrível! Estou tão feliz que vou liberar meus alunos do report de sexta"},
  {name:"Alf",
  pic:"https://i.correiobraziliense.com.br/w1l9Zv60rbKklC29Q0usnb6tb-s=/675x/smart/imgsapp2.correiobraziliense.com.br/app/noticia_127983242361/2018/08/03/699039/20180802200345271599o.jpg",
  experience:"Graças a FutureX pude voltar ao meu planeta natal. Momento muito especial na minha vida! Obrigado Futurex!"},
  {name:"Goku",
  pic:"https://cdn.ome.lt/_1KF0rLSFPxVwCR-u5XA6Mc-k4E=/1200x630/smart/extras/conteudos/goku3.jpg",
  experience:"Sempre viajei pelo espaço, mas nunca desse jeito incrível. Nem Shen-Long poderia realizar um desejo assim. Obeigado FutureX"}
]

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  goToList = ()=> {
    this.props.goToTripsList()
    console.log('teste')
  }

  goToLogin = () => {
    console.log('essa feeera')
    this.props.goToLoginPage()
  }

  render() {
    return (
      <PageWrapper>
        <HeaderWrapper>
          <LogoWrapper src={Logo}/>
          <Button
          onClick={this.goToLogin}
          >Login
          </Button>
          <div></div>
        </HeaderWrapper>
        <ToolbarWrapper>
            <h1>Venha conhecer o espaço com a gente!</h1>
            <h2>A FutureX tem os melhores pacotes espaciais pelo preço de viajar pelo prórpio planeta</h2>
        </ToolbarWrapper>
        <MainWrapper>
          {testimonies.map((card, index)=> {
            return  <TestimonyCard
                    key={index}
                    name={card.name}
                    imgProfile={card.pic}
                    description={card.experience}
                    />
          })}
          <ButtonWrapper
          variant="contained" 
          onClick={this.goToList} >
          Conheça nossos pacotes e venha se inscrever para ser parte do nosso time de trpulates!
        </ButtonWrapper>  
        </MainWrapper>
        <FooterWraper>Feito por Vinícius Abuhid</FooterWraper>
      </PageWrapper>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    goToTripsList: () => dispatch(push(routes.listForUsers)),
    goToLoginPage: () => dispatch(push(routes.loginPage))
  };
};
export default connect(null, mapDispatchToProps)(HomePage);
