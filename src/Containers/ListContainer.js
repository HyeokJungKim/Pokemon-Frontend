import React, {Fragment} from 'react';

import {connect} from 'react-redux'

import {List, Header} from 'semantic-ui-react'

import PokemonPreview from '../Components/PokemonPreview'

const ListContainer = (props) => {

    return (
      <Fragment>
        <Header as='h2' textAlign='center'>Pokémon Team</Header>
        <List verticalAlign='middle'>
          {props.pokemons.map((pokemon, index) => <PokemonPreview key={`${pokemon.name} ${index}`} pokemon={pokemon}/>)}
        </List>
      </Fragment>
    );

}

const mapStateToProps = ({trainer}) => {
  return {pokemons: trainer.pokemonTeam}
}

export default connect(mapStateToProps)(ListContainer);
