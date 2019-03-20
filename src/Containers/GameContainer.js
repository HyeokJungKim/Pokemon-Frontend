import React, { Component } from 'react';
import HomeNavbar from '../Components/HomeNavbar'
import CanvasContainer from './CanvasContainer'
import TeamContainer from './TeamContainer'
import PokeMartContainer from './PokeMartContainer'
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
    this.setState({ activeTab: name })
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.activeTab === "Catch Pokemon"){
      this.props.runAway()
    }
  }

  containerToDisplay = () => {
    switch (this.state.activeTab) {
      case "Catch Pokemon":
        return <CanvasContainer/>
      case "Manage Team":
        return <TeamContainer/>
      case "Poke Mart":
        return <PokeMartContainer/>
      default:
        return <CanvasContainer/>
    }
  }
  render() {
    return (
      <Segment basic>
        <HomeNavbar {...this.props} handleItemClick={this.handleItemClick} activeTab={this.state.activeTab}/>
        <Segment attached="bottom">
          <Container fluid>
            {this.containerToDisplay()}
          </Container>
        </Segment>
      </Segment>
    );
  }

}

export default connect(null, {runAway})(WithAuth(GameContainer));
