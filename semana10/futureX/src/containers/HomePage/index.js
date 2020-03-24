import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { routes } from "../Router";

const HomeWrapper = styled.form`
  width: 100%;
  height: 100vh;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
`;

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

  // handleFieldChange = event => {
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   });
  // };

  render() {
    // const { email, password } = this.state;

    return (
      <HomeWrapper>
        <button 
          onClick={this.goToList} >
          Viajante
        </button>
        <button
          onClick={this.goToLogin} >
          Administrador
        </button>
      </HomeWrapper>
      // <LoginWrapper>
      //   <TextField
      //     onChange={this.handleFieldChange}
      //     name="email"
      //     type="email"
      //     label="E-mail"
      //     value={email}
      //   />
      //   <TextField
      //     onChange={this.handleFieldChange}
      //     name="password"
      //     type="password"
      //     label="Password"
      //     value={password}
      //   />
      //   <Button>Login</Button>
      // </LoginWrapper>
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
