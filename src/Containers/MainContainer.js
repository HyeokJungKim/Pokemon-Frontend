import React, { Component} from 'react';
import NavBar from '../Components/NavBar'
import AboutContainer from './AboutContainer'
import { Segment, Container } from 'semantic-ui-react'

class MainContainer extends Component {
  pathName(){
    switch (this.props.location.pathname) {
      case "/login":
        return "Login"
      case "/register":
        return "Register"
      default:
        return "Container"
    }
  }

  render() {
    return (
      <Segment basic>
        <NavBar {...this.props}/>
        <Container fluid>
          {this.pathName()}
          <AboutContainer/>
        </Container>
      </Segment>
    );
  }

}

export default MainContainer;
