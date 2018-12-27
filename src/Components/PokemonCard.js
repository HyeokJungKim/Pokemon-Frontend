import React, { Component } from 'react';
import {Card, Header, Image} from 'semantic-ui-react'

class PokemonCard extends Component {

  render() {
    const {pokemon} = this.props
    const type2 = pokemon.type_2 || ""
    return (
      <Card centered>
      <Card.Content>
        <Image floated='left' src={pokemon.image} />
        <Card.Header>
          <Header textAlign="center">{pokemon.name}</Header>
          <Header as='h4' textAlign="center">Level: {pokemon.level}</Header>
          <Header as='h5' textAlign='center'>
            <span className={`type ${pokemon.type_1}`}>{pokemon.type_1}</span>
            {!!pokemon.type_2 ?
              <span className={`type ${type2}`}>{` ${type2}`}</span>
                :
              null
            }
          </Header>
          <Header as='h6' textAlign="center">
            Experience: {pokemon.experience}
          </Header>
        </Card.Header>
      </Card.Content>
    </Card>
    );
  }

}

export default PokemonCard;
