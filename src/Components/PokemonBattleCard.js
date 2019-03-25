import React from 'react';
import {Card, Image} from 'semantic-ui-react'
import PokemonCardHeader from './PokemonCardHeader'

const PokemonBattleCard = ({pokemon, changePokemonFighting, toggleTeamChoose}) => {
  return (
    <Card onClick={() => {
      changePokemonFighting(pokemon.id)
      toggleTeamChoose()
    }}>
      <Card.Content>
        <Image floated='left' src={pokemon.image} />
        <Card.Header>
          <PokemonCardHeader pokemon={pokemon}/>
        </Card.Header>
      </Card.Content>
    </Card>
  );

}

export default PokemonBattleCard;
