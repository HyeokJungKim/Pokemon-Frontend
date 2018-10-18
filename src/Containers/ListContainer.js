import React, {Fragment} from 'react';

import {connect} from 'react-redux'

import {List, Header} from 'semantic-ui-react'

import PokemonPreview from '../Components/PokemonPreview'

const ListContainer = ({pokemons}) => {
  return(
    <Fragment>
      <Header as='h2' textAlign='center'>Pokémon Team</Header>
      <List verticalAlign='middle'>
        {pokemons.map(pokemon => <PokemonPreview key={pokemon.id} pokemon={pokemon}/>)}
      </List>
    </Fragment>
  )
}

const mapStateToProps = (state) => {
  return {pokemons: state.pokemons}
}

export default connect(mapStateToProps)(ListContainer);
