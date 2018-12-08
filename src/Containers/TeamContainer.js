import React, { Component } from 'react';
import {Segment, Grid} from 'semantic-ui-react'

class TeamContainer extends Component {

  render() {
    return (
      <Segment basic>
        <Grid>
          <Grid.Row>
            <Grid.Column width={10}>

            </Grid.Column>
            <Grid.Column width={6}>

            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}

export default TeamContainer;
