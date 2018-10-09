import React, { Component} from 'react';
import NavBar from '../Components/NavBar'
import { Segment, Container } from 'semantic-ui-react'

class MainContainer extends Component {

  render() {
    return (
      <Segment basic>
        <NavBar/>
        <Container fluid>
          Container
        </Container>
      </Segment>
    );
  }

}

export default MainContainer;
