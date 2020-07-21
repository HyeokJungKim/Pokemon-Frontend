import React, { Component } from 'react';
import {Card, Image, Button, Container} from 'semantic-ui-react'
import {Draggable} from 'react-beautiful-dnd'
import PokemonCardHeader from './PokemonCardHeader'
import StoneDropdown from './StoneDropdown'

import {connect} from 'react-redux'

import {evolvePokemon} from '../Redux/Actions'

class PokemonCard extends Component {

  state = {
    displayButton: true
  }

  displayEvolveButton = () => {
    let {evolutionLevels, pokemon} = this.props
    const evolutionLevel = evolutionLevels[0]

    const canEvolve = pokemon.level >= evolutionLevel
    const regularEvolution = evolutionLevel > 0
    const hasEvolution = evolutionLevel !== 0
    if ((hasEvolution && canEvolve && regularEvolution) || evolutionLevel === -6) {
      return (
        <Button inverted color="green" onClick={this.handleEvolution}>
          Evolve!
        </Button>
      )
    } else if(hasEvolution && !regularEvolution){
      return (
        <Button inverted color="green" onClick={this.stoneEvolution}>
          Evolve!
        </Button>
      )
    } else if(!canEvolve){
      return (
        <Button disabled>
          {`Needs to be level ${evolutionLevel} to evolve.`}
        </Button>
      )
    }
  }

  handleEvolution = () => {
    const {pokemon, evolvePokemon} = this.props
    evolvePokemon(pokemon.id)
  }

  stoneEvolution = () => {
    this.setState((prevState) => ({displayButton: !prevState.displayButton}))
  }

  render() {
    const {pokemon, index, evolutionLevels} = this.props
    return (
      <Draggable draggableId={pokemon.id} index={index}>
        {(provided) => {
          return(
            <div className="ui fluid centered card" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
            <Card.Content>
              <Image floated='left' src={pokemon.image} />

              <Card.Header>
                <PokemonCardHeader pokemon={pokemon}/>
                <Container textAlign="center">
                  <p>
                    Experience: {pokemon.experience}
                  </p>
                  {this.state.displayButton ? this.displayEvolveButton() : <StoneDropdown pokemon_id={pokemon.id} evolutionLevels={evolutionLevels}/>}
                </Container>
              </Card.Header>
            </Card.Content>
          </div>
        )}
      }
    </Draggable>
    );
  }
}

const mapStateToProps = ({pokemons}, ownProps) => {
  const pokemon = pokemons.all.find(pokemon => ownProps.pokemon.name === pokemon.name)
  return {
    evolutionLevels: pokemon.evolutionLevels,
   }
}

export default connect(mapStateToProps, {evolvePokemon})(PokemonCard);
