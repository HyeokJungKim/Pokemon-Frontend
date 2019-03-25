import React from 'react';
import {Card, Image} from 'semantic-ui-react'
import PokemonCardHeader from './PokemonCardHeader'

const PokemonBattleCard = ({pokemon, changePokemonFighting, toggleDisplay}) => {
  const handleClick = () => {
    changePokemonFighting(pokemon.id)
    toggleDisplay(false, "showTeam")
  }

  return (
    <Card onClick={handleClick}>
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
