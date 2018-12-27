import React, { Component } from 'react';
import {Segment, Card} from 'semantic-ui-react'
import {connect} from 'react-redux'
import PokemonCard from '../Components/PokemonCard'

class TeamContainer extends Component {

  renderPokemon = () => {
    return this.props.pokemons.map((pokemon) => {
      return (
        <PokemonCard pokemon={pokemon}/>
      )
    })
  }

  render() {
    return (
      <Segment basic>
        <Card.Group itemsPerRow={3}>
          {this.renderPokemon()}
        </Card.Group>
      </Segment>
    );
  }
}

const mapStateToProps = ({trainer}) => {
  return {
    pokemons: trainer.pokemons.slice(0,6)
  }
}

export default connect(mapStateToProps)(TeamContainer);
