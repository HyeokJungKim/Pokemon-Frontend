import React, { Component } from 'react';
import {Card, Image} from 'semantic-ui-react'
import {connect} from 'react-redux'

class NewPokemon extends Component {

  render() {
    const {displayedPokemon} = this.props
    return (
      <Card centered>
        <Image src={displayedPokemon.image}/>
        <Card.Content>
        {displayedPokemon.name}
        </Card.Content>
      </Card>
    );
  }
}

const mapStateToProps = ({pokemons}) => {
  return {displayedPokemon: pokemons.displayedPokemon}
}

export default connect(mapStateToProps)(NewPokemon);
