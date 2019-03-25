import React from 'react';
import {connect} from 'react-redux'
import {Card, Container, Header, Icon} from 'semantic-ui-react'
import PokemonBattleCard from '../Components/PokemonBattleCard'

const ChoosePokemonTeam = ({pokemonTeam, changePokemonFighting, toggleTeamChoose}) => {
  return (
    <Container textAlign='center'>
      <Header as='h2'>Choose a Pokemon<Icon link color='red' name='close' size='tiny' onClick={toggleTeamChoose}/></Header>
      <Card.Group centered>
        {pokemonTeam.map(pokemon => (
          <PokemonBattleCard
            key={pokemon.id}
            pokemon={pokemon}
            changePokemonFighting={changePokemonFighting}
            toggleTeamChoose={toggleTeamChoose}
          />
        ))}
      </Card.Group>
    </Container>
  );
}

const mapStateToProps = ({trainer}) => {
  return{
    pokemonTeam: trainer.pokemonTeam
  }
}

export default connect(mapStateToProps)(ChoosePokemonTeam);
