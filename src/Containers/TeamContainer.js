import React, { Component } from 'react';
import {Card} from 'semantic-ui-react'
import {connect} from 'react-redux'
import PokemonCard from '../Components/PokemonCard'

import { DragDropContext, Droppable} from 'react-beautiful-dnd';

class TeamContainer extends Component {

  renderPokemon = () => {
    return this.props.pokemons.map((pokemon, index) => {
      return (
        <PokemonCard
          key={index}
          index={index}
          pokemon={pokemon}/>
      )
    })
  }

  onDragEnd = (result) => {
    console.log(result);
  }

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => {
              return(
                <div className="ui basic segment" ref={provided.innerRef} {...provided.droppableProps}>
                  <Card.Group itemsPerRow={3}>
                    {this.renderPokemon()}
                    {provided.placeholder}
                  </Card.Group>
              </div>
              )
            }
          }
        </Droppable>
      </DragDropContext>
    );
  }
}

const mapStateToProps = ({trainer}) => {
  return {
    pokemons: trainer.pokemons
  }
}

export default connect(mapStateToProps)(TeamContainer);
