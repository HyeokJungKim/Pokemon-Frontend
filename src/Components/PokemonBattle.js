import React, { Component } from 'react';
import {Image, Card, Button} from 'semantic-ui-react'
import {connect} from 'react-redux'
import PokemonCardHeader from './PokemonCardHeader'
import {runAway, catchPokemon} from '../Redux/Actions'

class PokemonBattle extends Component {

  handleCatch = () => {
    const {displayedPokemon, catchPokemon, token, experience, canFitOnTeam, toggleDisplay} = this.props
    toggleDisplay()
    catchPokemon(displayedPokemon, token, experience, canFitOnTeam)
  }

  render() {
    const {displayedPokemon, runAway} = this.props
    return(
        <Card centered>
        <Card.Content>
          <Image floated='left' src={displayedPokemon.image} />
          <Card.Header>
            <PokemonCardHeader pokemon={displayedPokemon}/>
          </Card.Header>
          <div className='ui two buttons'>
            <Button basic color='green' onClick={this.handleCatch}>
              Catch
            </Button>
            <Button basic color='red' onClick={runAway}>
              Run Away
            </Button>
          </div>
        </Card.Content>
      </Card>
    )
  }
}

const mapStateToProps = ({pokemons, auth, trainer}) => {
  return {
    token: auth.userToken,
    canFitOnTeam: trainer.pokemonTeam.length < 6
  }
}

export default connect(mapStateToProps, {runAway, catchPokemon})(PokemonBattle);
