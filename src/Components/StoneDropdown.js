import React, { Component } from 'react';
import {Form, Button} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {stoneEvolve} from '../Redux/Actions'

class StoneDropdown extends Component {

  state={
    chosenStone: this.props.stones.find(stone => stone.quantity > 0) ? this.props.stones.find(stone => stone.quantity > 0).id : 0 
  }

  handleChange = (evt) => {
    this.setState({
      chosenStone: parseInt(evt.target.value)
    })
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    if (this.state.chosenStone > 0){
      this.props.stoneEvolve(this.props.pokemon_id, this.state.chosenStone)
    }
  }

  render() {
    let stones = this.props.stones.map(stone => (
      stone.quantity > 0 
        ? 
      <option key={stone.id} value={stone.id}>{stone.name}</option> 
        :
      <option key={stone.id} value={0} disabled={true}>You need a {stone.name}!</option> 
      ))
    return (
      <Form onSubmit={this.handleSubmit}>
        <select className="ui dropdown" value={this.state.chosenStone} onChange={this.handleChange}>
          {stones}
        </select>
        <Button disabled={this.state.chosenStone === 0} inverted color="green" type="submit">
          Evolve!
        </Button>
      </Form>
    );
  }

}

const mapStateToProps = ({trainer}, ownProps) => {
  return {
    stones: trainer.items.filter(item => item.name.includes("Stone") && ownProps.evolutionLevels.includes(item.stone_id)) 
  }
}

export default connect(mapStateToProps, {stoneEvolve})(StoneDropdown);
