import React, { PureComponent } from 'react';
import PokemonCard from '../Components/PokemonCard'
import {Card} from 'semantic-ui-react'
import {Droppable} from 'react-beautiful-dnd';

class PokemonContainer extends PureComponent {

  renderPokemon = () => {
    return this.props.pokemons.map((pokemon, index) => {
      return (
        <PokemonCard
          key={index}
          index={index}
          pokemon={pokemon}
        />
      )
    })
  }

  render() {
    return (
      <Droppable droppableId={this.props.droppableId}>
        {(provided) => {
          return(
            <div className="ui basic segment" ref={provided.innerRef} {...provided.droppableProps}>
              <Card.Group>
                {this.renderPokemon()}
                {provided.placeholder}
              </Card.Group>
            </div>
          )}
        }
      </Droppable>
    );
  }

}

export default PokemonContainer;
