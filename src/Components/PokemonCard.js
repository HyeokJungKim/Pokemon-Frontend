import React, { Component } from 'react';
import {Card, Image, Button, Container} from 'semantic-ui-react'
import {Draggable} from 'react-beautiful-dnd'
import PokemonCardHeader from './PokemonCardHeader'
import {connect} from 'react-redux'
import {evolvePokemon} from '../Redux/Actions'

class PokemonCard extends Component {

  displayEvolveButton = () => {
    const {evolutionLevel, pokemon} = this.props
    const canEvolve = pokemon.level >= evolutionLevel
    const hasEvolution = evolutionLevel > 0
    if (canEvolve && hasEvolution) {
      return (
        <Button inverted color="green" onClick={this.handleEvolution}>
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

  render() {
    const {pokemon, index} = this.props
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
                  {this.displayEvolveButton()}
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
    evolutionLevel: pokemon.evolutionLevel,
   }
}

export default connect(mapStateToProps, {evolvePokemon})(PokemonCard);
