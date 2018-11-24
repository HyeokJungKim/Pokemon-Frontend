import React, { Component } from 'react';
import {Image, Card, Header} from 'semantic-ui-react'
import {connect} from 'react-redux'

class NewPokemon extends Component {

  render() {
    const {displayedPokemon} = this.props
    return (
      <Card centered>
        <Card.Content>
          <Image floated='left' src={displayedPokemon.image} />
          <Card.Header>
            <Header textAlign="center">{displayedPokemon.name}</Header>
            {displayedPokemon.type_1}
            {displayedPokemon.type_2}
          </Card.Header>
        </Card.Content>
      </Card>
    );
  }
}

const mapStateToProps = ({pokemons}) => {
  return {displayedPokemon: pokemons.displayedPokemon}
}

export default connect(mapStateToProps)(NewPokemon);
