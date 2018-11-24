import React, { Component, Fragment } from 'react';
import {Image, Card, Header, Button} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {runAway, catchPokemon} from '../Redux/Actions'

class NewPokemon extends Component {

  render() {
    const {displayedPokemon, catchPokemon, runAway} = this.props
    const type2 = displayedPokemon.type_2 || ""
    return(
      <Fragment>
          <Card centered>
          <Card.Content>
            <Image floated='left' src={displayedPokemon.image} />
            <Card.Header>
              <Header textAlign="center">{displayedPokemon.name}</Header>
              <Header as='h4' textAlign="center">Level: {displayedPokemon.level}</Header>
              <Header as='h5' textAlign='center'>
                <span className={`type ${displayedPokemon.type_1}`}>{displayedPokemon.type_1}</span>
                {!!displayedPokemon.type_2 ?
                  <span className={`type ${type2}`}>{` ${type2}`}</span>
                    :
                  null
                }
              </Header>
            </Card.Header>
            <div className='ui two buttons'>
              <Button basic color='green' onClick={() => catchPokemon(displayedPokemon)}>
                Catch
              </Button>
              <Button basic color='red' onClick={runAway}>
                Run Away
              </Button>
            </div>
          </Card.Content>
        </Card>
    </Fragment>)
  }
}

const mapStateToProps = ({pokemons}) => {
  return {displayedPokemon: pokemons.displayedPokemon}
}

export default connect(mapStateToProps, {runAway, catchPokemon})(NewPokemon);
