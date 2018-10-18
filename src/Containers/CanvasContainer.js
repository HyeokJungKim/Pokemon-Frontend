import React, { Component } from 'react';
import {Segment, Grid} from 'semantic-ui-react'

import ListContainer from './ListContainer'
import Canvas from './Canvas'
class CanvasContainer extends Component {

  render() {
    return (
      <Segment basic>
        <Grid>
          <Grid.Row>
            <Grid.Column width={10}>
              <Canvas/>
            </Grid.Column>

            <Grid.Column width={6}>
              <ListContainer/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }

}

export default CanvasContainer;
