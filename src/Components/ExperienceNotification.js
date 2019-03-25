import React from 'react';
import {connect} from 'react-redux'
import {Header} from 'semantic-ui-react'

const ExperienceNotification = ({displayedPokemon, experience, greaterThanSix, money}) => {
  return (
    <Header as="h2" textAlign="center">
      {greaterThanSix ?
        <div>
          Each pokemon in your team has gained {experience} points!
          <br/>
          {displayedPokemon.name} has been moved to your box!
          <br/>
          You gained ${money}!
        </div>
        :
        <div>
          Each pokemon in your team has gained {experience} points!
          <br/>
          You gained ${money}!
        </div>
      }
    </Header>
  );
}

const mapStateToProps = ({trainer}) => {
  return {
    greaterThanSix: trainer.pokemonTeam.length >= 6,
  }
}
export default connect(mapStateToProps)(ExperienceNotification);
