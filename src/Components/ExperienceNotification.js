import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Header} from 'semantic-ui-react'

class ExperienceNotification extends Component {

  render() {
    const {displayedPokemon, experience, pokemons} = this.props
    return (
      <Header as="h2" textAlign="center">
        {pokemons.length >= 6 ?
          <div>
            Each pokemon in your team has gained {experience} points!
            <br/>
            {displayedPokemon.name} has been moved to your box!
          </div>
          :
          <div>
            Each pokemon in your team has gained {experience} points!
          </div>
        }
      </Header>
    );
  }

}

const mapStateToProps = ({trainer}) => {
  return {
    pokemons: trainer.pokemonTeam,
  }
}
export default connect(mapStateToProps)(ExperienceNotification);