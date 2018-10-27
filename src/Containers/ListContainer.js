import React, {Component, Fragment} from 'react';

import {connect} from 'react-redux'

import {List, Header} from 'semantic-ui-react'

import PokemonPreview from '../Components/PokemonPreview'

class ListContainer extends Component {

  render() {
    return (
      <Fragment>
        <Header as='h2' textAlign='center'>Pokémon Team</Header>
        <List verticalAlign='middle'>
          {this.props.pokemons.map(pokemon => <PokemonPreview key={pokemon.id} pokemon={pokemon}/>)}
        </List>
      </Fragment>
    );
  }

}

const mapStateToProps = (state) => {
  return {pokemons: state.pokemons}
}

export default connect(mapStateToProps)(ListContainer);
