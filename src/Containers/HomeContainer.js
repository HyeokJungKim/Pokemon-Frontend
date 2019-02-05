import React from 'react';
import NavBarContainer from './NavBarContainer'
import About from '../Components/About'
import { Segment, Container } from 'semantic-ui-react'

const HomeContainer = (props) => {
    return (
      <Segment basic>
        <NavBarContainer {...props}/>
        <Container fluid>
          <About/>
        </Container>
      </Segment>
    );
}

export default HomeContainer;
