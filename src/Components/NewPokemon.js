import React, { Component, Fragment } from 'react';
import ExperienceNotification from './ExperienceNotification'
import {connect} from 'react-redux'
import {catchPokemon} from '../Redux/Actions'

import PokemonBattle from './PokemonBattle'

class NewPokemon extends Component {

  constructor(props) {
    super(props);
    this.state = {
      displayExperience: false,
      pokemonFighting: props.pokemonTeam[0]
    };
  }

  componentDidMount() {
    this.props.changeExpAndMoney()
  }

  handleCatch = (ballId) => {
    const {displayedPokemon, catchPokemon, token, pokemonTeam, experience, money} = this.props
    let canFitOnTeam = pokemonTeam.length < 6
    this.setState({displayExperience: true}, () => {
      catchPokemon(displayedPokemon, token, experience, ballId, canFitOnTeam, money)
    })
  }

  changePokemonFighting = (id) => {
    let pokemon = this.props.pokemonTeam.find(pokemon => pokemon.id === id)
    this.setState({pokemonFighting: pokemon})
  }

  render() {
    const {displayedPokemon, experience, money} = this.props
    return(
      <Fragment>
        {this.state.displayExperience ?
          <ExperienceNotification
            displayedPokemon={displayedPokemon}
            experience={experience}
            money={money}
          />
            :
          <PokemonBattle
            handleCatch={this.handleCatch}
            displayedPokemon={displayedPokemon}
            pokemonFighting={this.state.pokemonFighting}
            changePokemonFighting={this.changePokemonFighting}
          />
        }
    </Fragment>)
  }
}


const mapStateToProps = ({pokemons, auth, trainer}) => {
  return {
    displayedPokemon: pokemons.displayedPokemon,
    token: auth.userToken,
    pokemonTeam: trainer.pokemonTeam,
  }
}

export default connect(mapStateToProps, {catchPokemon})(NewPokemon);
