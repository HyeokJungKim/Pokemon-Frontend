import React, { Component } from 'react';
import HomeNavbar from '../Components/HomeNavbar'
import CanvasContainer from './CanvasContainer'
import TeamContainer from './TeamContainer'

import WithAuth from '../Auth/WithAuth'

import { Segment, Container } from 'semantic-ui-react'
import {connect} from 'react-redux';
import {runAway} from '../Redux/Actions';

class GameContainer extends Component {
  state = { activeTab: 'Catch Pokemon' }

  goLogout = () => {
    this.props.history.push("/")
    this.props.resetState()
  }

  handleItemClick = (e, { name }) => {
    this.props.runAway()
    this.setState({ activeTab: name })
  }

  render() {
    const {activeTab} = this.state
    return (
      <Segment basic>
        <HomeNavbar {...this.props} handleItemClick={this.handleItemClick} activeTab={this.state.activeTab}/>
        <Segment attached="bottom">
          <Container fluid>
            {activeTab === "Catch Pokemon" ?
              <CanvasContainer/>
            :
              <TeamContainer/>
          }
          </Container>
        </Segment>
      </Segment>
    );
  }

}

export default connect(null, {runAway})(WithAuth(GameContainer));
