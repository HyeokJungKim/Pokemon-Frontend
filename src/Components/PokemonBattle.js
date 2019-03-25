import React, { Component } from 'react';
import {Container, Image, Button, Segment, Progress, Grid, Header} from 'semantic-ui-react'
import {connect} from 'react-redux'
import ChoosePokemonTeam from '../Containers/ChoosePokemonTeam'
import ChooseItem from '../Containers/ChooseItem'

import {runAway, patchPokeball} from '../Redux/Actions'

class PokemonBattle extends Component {

  constructor(props) {
    super(props);
    let iv = Math.floor(Math.random() * 12)
    let ev = Math.floor(Math.random() * 46) + 5
    let {level} = props.displayedPokemon
    let health = Math.floor((200 + iv + ev) * level / 100) + level + 10
    this.state = {
      initialHealth: health,
      disabled: false,
      showTeam: false,
      showBag: false,
      health
    }
  }

  progressBar = () => {
    let {health, initialHealth} = this.state
    let percentage = health/initialHealth * 100
    if (percentage > 50) {
      return <Progress percent={percentage} success/>
    } else if(percentage <= 50 && percentage > 10){
      return <Progress percent={percentage} warning/>
    } else if(percentage < 10 && percentage > 0){
      return <Progress percent={percentage} error/>
    }
  }

  loseHealth = () => {
    let {pokemonFighting, displayedPokemon, runAway} = this.props
    let healthLost = Math.floor(((2 * pokemonFighting.level / 5 + 2) * 40 * pokemonFighting.level/displayedPokemon.level)/50 ) + 2 * Math.floor(Math.random() * 2) +1
    this.setState((prevState) => {
      if (prevState.health - healthLost < 0) {
        setTimeout(runAway, 1000)
        return {health: 0, disabled: true}
      } else {
        return {health: prevState.health - healthLost}
      }
    })
  }

  toggleTeamChoose = () => {
    this.setState((prevState) => {
      return {showTeam: !prevState.showTeam, disabled: !prevState.disabled}
    })
  }

  toggleBag = () => {
    this.setState((prevState) => {
      return {showBag: !prevState.showBag, disabled: !prevState.disabled}
    })
  }

  tryCatchPokemon = (ballId) => {
    let {handleCatch, items, token, patchPokeball} = this.props
    let {initialHealth, health} = this.state
    let ball = items.find(ball=> ball.id === ballId)
    let randomNumber = 255
    switch (ball.name) {
      case "Master Ball":
        handleCatch()
        break;
      case "Poke Ball":
        randomNumber = Math.floor(Math.random() * 200) + 55
        break;
      case "Great Ball":
        randomNumber = Math.floor(Math.random() * 150) + 50
        break;
      case "Ultra Ball":
        randomNumber = Math.floor(Math.random() * 100) + 50
        break;
      default:
        return;
    }

    let hpFactor = Math.floor(((initialHealth * 255) / 8) / (health / 4))
    if (hpFactor > 255) {
      hpFactor = 255
    }

    if (hpFactor > randomNumber) {
      handleCatch(ballId)
    } else{
      patchPokeball(token, ballId)
    }
  }

  render() {
    const {displayedPokemon, runAway, firstPokemonId, changePokemonFighting, pokemonFighting} = this.props
    let {disabled, showTeam, showBag} = this.state
    return(
      <Container>
        <Segment basic>
          <Grid stackable>

            <Grid.Row>
              <Grid.Column width={10}>
                <Segment basic clearing id="pokemon-info" >
                  <Header as='h2' floated='left'>
                    {displayedPokemon.name}
                  </Header>
                  <Header as='h3' floated='right'>
                    Level: {displayedPokemon.level}
                  </Header>
                </Segment>
                {this.progressBar()}
              </Grid.Column>

              <Grid.Column width={6}>
                <Image floated='right' src={displayedPokemon.image} spaced />
              </Grid.Column>

            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={6}>
                <Image centered src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${firstPokemonId}.png`}/>
                <Segment basic clearing id="pokemon-info">
                  <Header as='h2' floated='left'>
                    {pokemonFighting.name}
                  </Header>
                  <Header as='h3' floated='right'>
                    Level: {pokemonFighting.level}
                  </Header>
                </Segment>
              </Grid.Column>

              <Grid.Column width={10}>
                <Segment basic padded>
                  <div className='ui two buttons'>
                    <Button basic color='grey' onClick={this.loseHealth} disabled={disabled}>
                      Attack
                    </Button>
                    <Button basic color='grey' onClick={this.toggleBag} disabled={disabled}>
                      Catch {displayedPokemon.name}
                    </Button>
                  </div>

                  <div className='ui two buttons'>
                    <Button basic color='grey' onClick={this.toggleTeamChoose} disabled={disabled}>
                      Switch Pokemon
                    </Button>
                    <Button basic color='grey' onClick={runAway} disabled={disabled}>
                      Run Away
                    </Button>
                  </div>
                </Segment>

              </Grid.Column>
            </Grid.Row>
          </Grid>

        </Segment>
        {showTeam
          ?
            <ChoosePokemonTeam
              changePokemonFighting={changePokemonFighting}
              toggleTeamChoose={this.toggleTeamChoose}
            />
          :
            null
        }
        {showBag
          ?
            <ChooseItem
              toggleBag={this.toggleBag}
              tryCatchPokemon={this.tryCatchPokemon}
            />
          :
            null
        }
      </Container>

    )
  }
}

const mapStateToProps = ({trainer, pokemons, auth}, ownProps) => {
  const pokemon = pokemons.all.find(pokemon => ownProps.pokemonFighting.name === pokemon.name)
  let items = trainer.items.filter(item => item.name.includes("Ball"))
  return {
    firstPokemonId: pokemon.id,
    pokemonTeam: trainer.pokemonTeam,
    token: auth.userToken,
    items
  }
}

export default connect(mapStateToProps, {runAway, patchPokeball})(PokemonBattle);
