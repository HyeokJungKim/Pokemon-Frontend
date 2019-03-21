import React, { Component, Fragment } from 'react';
import ExperienceNotification from './ExperienceNotification'
import {connect} from 'react-redux'
import PokemonBattle from './PokemonBattle'

class NewPokemon extends Component {

  constructor(props) {
    super(props);
    this.state = {
      displayExperience: false
    };
  }

  componentDidMount() {
    this.props.changeExperience()
  }

  toggleDisplay = () => {
    this.setState({displayExperience: true})
  }

  render() {
    const {displayedPokemon, experience} = this.props
    return(
      <Fragment>
        {this.state.displayExperience ?
          <ExperienceNotification
            displayedPokemon={displayedPokemon}
            experience={experience}
          />
            :
          <PokemonBattle
            toggleDisplay={this.toggleDisplay}
            experience={experience}
            displayedPokemon={displayedPokemon}
          />
        }
    </Fragment>)
  }
}


const mapStateToProps = ({pokemons}) => {
  return {
    displayedPokemon: pokemons.displayedPokemon,
  }
}

export default connect(mapStateToProps)(NewPokemon);
