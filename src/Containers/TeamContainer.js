import React, { Component } from 'react';
import {Segment, Grid} from 'semantic-ui-react'

import {connect} from 'react-redux'
import PokemonTeamContainer from './PokemonTeamContainer'
import PokemonBoxContainer from './PokemonBoxContainer'

import { DragDropContext} from 'react-beautiful-dnd';

class TeamContainer extends Component {

  onDragEnd = (result) => {

    const {destination, source, draggableId} = result
    const {pokemonBox, pokemonTeam} = this.props

    if (!destination) {
      return;
    } else if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    } else if(destination.droppableId === "pokemonTeam"){
      if(pokemonTeam.length >= 6){
        console.log("Invalid Move Because Too Many Pokemons");
      } else{
        console.log(result, "valid move");
      }
    } else if(destination.droppableId === "pokemonBox"){
      if (pokemonTeam.length === 1) {
        console.log("Invalid Move Because You Need One Pokemon");
      } else {
        console.log("valid move", result);
      }
    }
    // POKEMON BEING HELD ID = draggableId

    // if (!destination) {
    //   return;
    // }  else {
    //   if (destination.droppableId === source.droppableId){
    //
    //     if(destination.droppableId === "pokemon-Box"){
    //       let destination_id = pokemonBox[destination.index]
    //       let source_id = pokemonBox[source.index]
    //       // console.log(source_id, destination_id)
    //     }
    //     else{
    //       let destination_id = pokemonTeam[destination.index]
    //       let source_id = pokemonTeam[source.index]
    //       // console.log(source_id, destination_id)
    //
    //     }
    //
    //   } else {
    //     if(destination.droppableId === "pokemon-Box"){
    //       let destination_id = pokemonBox[destination.index]
    //       let source_id = pokemonTeam[source.index]
    //       // console.log(source_id, destination_id)
    //
    //     } else {
    //       let source_id = pokemonBox[destination.index]
    //       let destination_id = pokemonTeam[source.index]
    //       // console.log(source_id, destination_id)
    //
    //     }
    //
    //   }
    //
    // }

  }

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Segment basic>
          <Grid divided>
            <Grid.Row>
              <Grid.Column width={6}>
                <PokemonTeamContainer pokemons={this.props.pokemonTeam}/>
              </Grid.Column>
              <Grid.Column width={10}>
                <PokemonBoxContainer pokemons={this.props.pokemonBox}/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </DragDropContext>
    );
  }
}

const mapStateToProps = ({trainer}) => {
  return {
    pokemonTeam: trainer.pokemonTeam,
    pokemonBox: trainer.pokemonBox
  }
}

export default connect(mapStateToProps)(TeamContainer);
