import React, {Fragment} from 'react';
import {Header} from 'semantic-ui-react'

const PokemonCardHeader = ({pokemon}) => {
  let type2 = pokemon.type_2 || ""
  return (
    <Fragment>
      <Header textAlign="center">{pokemon.name}</Header>
      <Header as='h4' textAlign="center">Level: {pokemon.level}</Header>
      <Header as='h5' textAlign='center'>
        <span className={`type ${pokemon.type_1}`}>{pokemon.type_1}</span>
        {!!pokemon.type_2 ?
          <span className={`type ${type2}`}>{` ${type2}`}</span>
            :
          null
        }
      </Header>
    </Fragment>
)}

export default PokemonCardHeader;
