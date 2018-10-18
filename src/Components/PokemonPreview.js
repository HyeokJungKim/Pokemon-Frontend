import React, { Component } from 'react';
import {List, Image} from 'semantic-ui-react'

class PokemonPreview extends Component {

  render() {
    const {pokemon} = this.props
    return (
      <List.Item className={`pokemonTile ${pokemon.type_1}`}>
        <Image size='tiny' src={pokemon.image}/>
          <List.Content>
            <List.Header>{pokemon.name}</List.Header>
            <List.Content>Level: {pokemon.level}</List.Content>
          </List.Content>
      </List.Item>
    );
  }

}

export default PokemonPreview;
