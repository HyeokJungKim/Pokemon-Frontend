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
          {this.props.pokemons.map((pokemon, index) => <PokemonPreview key={index} pokemon={pokemon}/>)}
        </List>
      </Fragment>
    );
  }

}

const mapStateToProps = (state) => {
  return {pokemons: state.trainer.pokemons}
}

export default connect(mapStateToProps)(ListContainer);
