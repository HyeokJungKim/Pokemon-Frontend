import React, { Component, Fragment } from 'react';
import ExperienceNotification from './ExperienceNotification'
import {connect} from 'react-redux'
import {catchPokemon, patchExperience} from '../Redux/Actions'

import PokemonBattle from './PokemonBattle'

class NewPokemon extends Component {

  constructor(props) {
    super(props);
    this.state = {
      displayExperience: false,
      pokemonFighting: props.pokemonTeam[0],
      catchingPokemon: true,
    };
  }

  componentDidMount() {
    this.props.changeExpAndMoney()
  }

  handleCatch = (ballId) => {
    const {displayedPokemon, catchPokemon, pokemonTeam, experience, money} = this.props
    let canFitOnTeam = pokemonTeam.length < 6
    this.setState({displayExperience: true}, () => {
      catchPokemon(displayedPokemon, experience, ballId, canFitOnTeam, money)
    })
  }

  handleExperience = () => {
    const {patchExperience, experience, money} = this.props
    this.setState({catchingPokemon: false, displayExperience: true}, () => {
      patchExperience(experience, money)
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
            catchingPokemon={this.state.catchingPokemon}
          />
            :
          <PokemonBattle
            handleCatch={this.handleCatch}
            handleExperience={this.handleExperience}
            displayedPokemon={displayedPokemon}
            pokemonFighting={this.state.pokemonFighting}
            changePokemonFighting={this.changePokemonFighting}
          />
        }
    </Fragment>)
  }
}


const mapStateToProps = ({pokemons, trainer}) => {
  return {
    displayedPokemon: pokemons.displayedPokemon,
    pokemonTeam: trainer.pokemonTeam,
  }
}

export default connect(mapStateToProps, {catchPokemon, patchExperience})(NewPokemon);
