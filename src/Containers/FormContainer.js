import React, { Component } from 'react';
import { Segment, Container } from 'semantic-ui-react'

import LoginForm from '../Components/LoginForm'
import RegisterForm from '../Components/RegisterForm'

import NavBarContainer from './NavBarContainer'

class FormContainer extends Component {

  render() {
    return (
      <Segment basic>
        <NavBarContainer {...this.props}/>
        <Container fluid>
          {this.props.location.pathname === "/login" ? <LoginForm {...this.props}/> : <RegisterForm/>}
        </Container>
      </Segment>
    );
  }

}

export default FormContainer;
