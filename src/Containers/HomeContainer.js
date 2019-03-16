import React from 'react';
import NavBarContainer from './NavBarContainer'

import { Segment, Container } from 'semantic-ui-react'

const HomeContainer = (props) => {
    return (
      <Segment basic>
        <NavBarContainer />
        <Container fluid>
          {props.whatToDisplay(props)}
        </Container>
      </Segment>
    );
}

export default HomeContainer;
