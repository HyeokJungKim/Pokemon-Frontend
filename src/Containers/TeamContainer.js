import React, { Component } from 'react';
import {Segment, Grid} from 'semantic-ui-react'

import {connect} from 'react-redux'
import {movePokemon} from '../Redux/Actions'
import PokemonContainer from './PokemonContainer'

import { DragDropContext} from 'react-beautiful-dnd';

class TeamContainer extends Component {

  handleDrag = (result) => {
    const {destination, source, draggableId} = result
    const {pokemonBox, pokemonTeam, userToken} = this.props
    let position = 0
    if (!destination){return}
    else if (destination.droppableId === source.droppableId && destination.index === source.index) {return}

    else if(destination.droppableId === "pokemonTeam"){
      if(pokemonTeam.length >= 6 && source.droppableId === "pokemonBox"){
        console.log("Invalid Move Because Too Many Pokemons");
      } else if (source.droppableId === "pokemonTeam") {
        position = pokemonTeam[destination.index].position
        this.props.movePokemon(draggableId, position, userToken)
      } else {
        if (destination.index === pokemonTeam.length) {
          position = pokemonTeam[pokemonTeam.length - 1].position + 1
        } else {
          position = pokemonTeam[destination.index].position
        }
        this.props.movePokemon(draggableId, position, userToken, true)
      }


    } else if(destination.droppableId === "pokemonBox"){
      if (pokemonTeam.length === 1 && source.droppableId === "pokemonTeam") {
      } else if(source.droppableId === "pokemonBox"){
        position = pokemonBox[destination.index].position
        this.props.movePokemon(draggableId, position, userToken)
      }
      else {
        if (destination.index === pokemonBox.length) {
          position = pokemonBox[pokemonBox.length - 1].position + 1
        } else {
          position = pokemonBox[destination.index].position - 1
        }
        this.props.movePokemon(draggableId, position, userToken, true)
      }
    }
  }

  render() {
    return (
      <DragDropContext onDragEnd={this.handleDrag}>
        <Segment basic>
          <Grid divided stackable>
            <Grid.Row>
              <Grid.Column width={6}>
                <PokemonContainer pokemons={this.props.pokemonTeam} droppableId={"pokemonTeam"}/>
              </Grid.Column>
              <Grid.Column width={10}>
                <PokemonContainer pokemons={this.props.pokemonBox} droppableId={"pokemonBox"}/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </DragDropContext>
    );
  }
}

const mapStateToProps = ({trainer, auth}) => {
  return {
    pokemonTeam: trainer.pokemonTeam,
    pokemonBox: trainer.pokemonBox,
    userToken: auth.userToken
  }
}

export default connect(mapStateToProps, {movePokemon})(TeamContainer);
