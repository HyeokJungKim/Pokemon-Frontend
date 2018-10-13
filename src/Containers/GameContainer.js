import React, { Component } from 'react';
import NavBarContainer from './NavBarContainer'
import CanvasContainer from './CanvasContainer'
import { Segment, Container } from 'semantic-ui-react'

class GameContainer extends Component {

  render() {
    return (
      <Segment basic>
        <NavBarContainer {...this.props}/>
        <Container fluid>
          <CanvasContainer/>
        </Container>
      </Segment>
    );
  }

}

export default GameContainer;
