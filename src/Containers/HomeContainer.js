import React, { Component} from 'react';
import NavBarContainer from './NavBarContainer'
import About from '../Components/About'
import { Segment, Container } from 'semantic-ui-react'

class HomeContainer extends Component {

  render() {
    return (
      <Segment basic>
        <NavBarContainer {...this.props}/>
        <Container fluid>
          <About/>
        </Container>
      </Segment>
    );
  }

}

export default HomeContainer;
