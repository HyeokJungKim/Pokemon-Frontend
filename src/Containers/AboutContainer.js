import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react'

class AboutContainer extends Component {

  render() {
    return (
      <Container text textAlign='center'>
        <Header as='h1'>
          Pokémon Stay
        </Header>
        <p>Pokémon Go, but without the Go!</p>
        <p>No mo' Pokémon Go. Play Pokémon Stay!</p>
      </Container>
    );
  }

}

export default AboutContainer;
