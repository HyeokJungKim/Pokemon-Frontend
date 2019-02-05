import React from 'react';
import { Segment, Container } from 'semantic-ui-react'

import LoginForm from '../Components/LoginForm'
import RegisterForm from '../Components/RegisterForm'

import NavBarContainer from './NavBarContainer'

const FormContainer = (props) => {
  return (
    <Segment basic>
      <NavBarContainer {...props}/>
      <Container fluid>
        {props.location.pathname === "/login" ? <LoginForm {...props}/> : <RegisterForm/>}
      </Container>
    </Segment>
  );
}

export default FormContainer;
