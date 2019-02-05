import React from 'react';
import { Container, Header } from 'semantic-ui-react'

const About = () => {
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

export default About;
