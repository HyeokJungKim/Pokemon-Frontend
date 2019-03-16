import React, { Component, Fragment } from 'react';
import {Image, Card, Button} from 'semantic-ui-react'
import {connect} from 'react-redux'
import ExperienceNotification from './ExperienceNotification'
import PokemonCardHeader from './PokemonCardHeader'
import {runAway, catchPokemon} from '../Redux/Actions'

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
    const {displayedPokemon, catchPokemon, runAway, token, experience, canFitOnTeam} = this.props
    return(
      <Fragment>
        {this.state.displayExperience ?
          <ExperienceNotification displayedPokemon={displayedPokemon} experience={experience}/>
            :
            <Card centered>
            <Card.Content>
              <Image floated='left' src={displayedPokemon.image} />
              <Card.Header>
                <PokemonCardHeader pokemon={displayedPokemon}/>
              </Card.Header>
              <div className='ui two buttons'>
                <Button basic color='green' onClick={() => {
                    this.toggleDisplay()
                    catchPokemon(displayedPokemon, token, experience, canFitOnTeam)
                  }
                }>
                  Catch
                </Button>
                <Button basic color='red' onClick={runAway}>
                  Run Away
                </Button>
              </div>
            </Card.Content>
          </Card>
        }
    </Fragment>)
  }
}

const mapStateToProps = ({pokemons, auth, trainer}) => {
  return {
    displayedPokemon: pokemons.displayedPokemon,
    token: auth.userToken,
    canFitOnTeam: trainer.pokemonTeam.length < 6
  }
}

export default connect(mapStateToProps, {runAway, catchPokemon})(NewPokemon);
