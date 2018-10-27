import React, { Component } from 'react';
import NavBarContainer from './NavBarContainer'
import CanvasContainer from './CanvasContainer'

import WithAuth from '../Auth/WithAuth'
import PokemonAdapter from '../Adapters/PokemonAdapter'

import {connect} from 'react-redux'
import {getAllPokemons} from '../Redux/Actions'

import { Segment, Container } from 'semantic-ui-react'

class GameContainer extends Component {
  componentDidMount() {
    PokemonAdapter.getAllPokemons()
    .then(resp=> {
      this.props.getAllPokemons(resp.data.map(pokemon => pokemon.attributes))
    })
  }

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

export default WithAuth(connect(null, {getAllPokemons})(GameContainer));
