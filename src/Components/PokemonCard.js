import React, { Component } from 'react';
import {Card, Header, Image} from 'semantic-ui-react'
import {Draggable} from 'react-beautiful-dnd'
import PokemonCardHeader from './PokemonCardHeader'
import {connect} from 'react-redux'

class PokemonCard extends Component {

  render() {
    const {pokemon, index, canEvolve} = this.props
    return (
      <Draggable draggableId={pokemon.id} index={index}>
        {(provided) => {
          return(
            <div className="ui fluid centered card" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
            <Card.Content>
              <Image floated='left' src={pokemon.image} />
              <Card.Header>
                <PokemonCardHeader pokemon={pokemon}/>
                <Header as='h6' textAlign="center">
                  Experience: {pokemon.experience}
                </Header>
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
  return {canEvolve: pokemon.evolutionLevel > 0 && ownProps.pokemon.level > pokemon.evolutionLevel}
}
export default connect(mapStateToProps)(PokemonCard);
