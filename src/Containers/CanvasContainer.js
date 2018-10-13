import React, { Component } from 'react';
import {Segment, Grid} from 'semantic-ui-react'

class CanvasContainer extends Component {

  render() {
    return (
      <Segment basic>
        <Grid>
          <Grid.Row>
            <Grid.Column width={10}>
              CANVAS
            </Grid.Column>

            <Grid.Column width={6}>
              POKEDEX
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }

}

export default CanvasContainer;
