import React, { Component} from 'react';
import NavBarContainer from './NavBarContainer'
import AboutContainer from './AboutContainer'
import { Segment, Container } from 'semantic-ui-react'

class LoginContainer extends Component {

  render() {
    return (
      <Segment basic>
        <NavBarContainer {...this.props}/>
        <Container fluid>
          <AboutContainer/>
        </Container>
      </Segment>
    );
  }

}

export default LoginContainer;
