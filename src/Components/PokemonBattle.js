import React, { Component } from 'react';
import {Container, Image, Button, Segment, Progress, Grid, Header} from 'semantic-ui-react'
import {connect} from 'react-redux'
import ChoosePokemonTeam from '../Containers/ChoosePokemonTeam'
import ChooseItem from '../Containers/ChooseItem'

import {runAway, patchPokeball} from '../Redux/Actions'

class PokemonBattle extends Component {

  constructor(props) {
    super(props);
    let iv = Math.floor(Math.random() * 10) + 2
    let ev = Math.floor(Math.random() * 45) + 5
    let {level} = props.displayedPokemon
    let health = Math.floor((200 + iv + ev) * level / 100) + level + 10
    this.state = {
      initialHealth: health,
      disabled: false,
      showTeam: false,
      showBag: false,
      error: "",
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
    let {pokemonFighting, displayedPokemon, handleExperience} = this.props
    let healthLost = Math.floor(((2 * pokemonFighting.level / 5 + 2) * 40 * pokemonFighting.level/displayedPokemon.level)/50 ) + 2 * Math.floor(Math.random() * 2) +1
    this.setState((prevState) => {
      if (prevState.health - healthLost < 0) {
        handleExperience()
        return {health: 0, disabled: true}
      } else {
        return {health: prevState.health - healthLost, error: ""}
      }
    })
  }

  toggleDisplay = (bool, whichShow) => {
    if (bool) {
      this.setState({[whichShow]: bool, disabled: bool, error: ""})
    } else {
      this.setState({[whichShow]: bool, disabled: bool})
    }
  }

  switchPokemon = () => {
    this.toggleDisplay(true, "showTeam")
  }

  switchToBag = () => {
    this.toggleDisplay(true, "showBag")
  }

  tryCatchPokemon = (ballId) => {
    let {handleCatch, items, patchPokeball} = this.props
    let {initialHealth, health} = this.state
    let ball = items.find(ball=> ball.id === ballId)
    let randomNumber = 255
    switch (ball.name) {
      case "Master Ball":
        handleCatch(ballId)
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
      this.setState({error: "Aargh! Almost had it!"}, () => {patchPokeball(ballId)})
    }
  }

  render() {
    const {displayedPokemon, runAway, firstPokemonId, changePokemonFighting, pokemonFighting} = this.props
    let {disabled, showTeam, showBag, error} = this.state
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
            <Container textAlign='center'>
              <Header as='h2' color='red'>
                {error}
              </Header>
            </Container>
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
                    <Button basic color='green' onClick={this.loseHealth} disabled={disabled}>
                      Attack
                    </Button>
                    <Button basic color='pink' onClick={this.switchToBag} disabled={disabled}>
                      Catch {displayedPokemon.name}
                    </Button>
                  </div>

                  <div className='ui two buttons'>
                    <Button basic color='violet' onClick={this.switchPokemon} disabled={disabled}>
                      Switch Pokemon
                    </Button>
                    <Button basic color='red' onClick={runAway} disabled={disabled}>
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
              toggleDisplay={this.toggleDisplay}
            />
          :
            null
        }
        {showBag
          ?
            <ChooseItem
              toggleDisplay={this.toggleDisplay}
              tryCatchPokemon={this.tryCatchPokemon}
            />
          :
            null
        }
      </Container>

    )
  }
}

const mapStateToProps = ({trainer, pokemons}, ownProps) => {
  const pokemon = pokemons.all.find(pokemon => ownProps.pokemonFighting.name === pokemon.name)
  let items = trainer.items.filter(item => item.name.includes("Ball"))
  return {
    firstPokemonId: pokemon.id,
    pokemonTeam: trainer.pokemonTeam,
    items
  }
}

export default connect(mapStateToProps, {runAway, patchPokeball})(PokemonBattle);
