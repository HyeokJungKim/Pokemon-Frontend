import React, { Component } from 'react';
import {Segment, Container, Form, Input, Button, Header} from 'semantic-ui-react'

import TrainerAdapter from "../Adapters/TrainerAdapter"

import {initializeTrainer, initializePokemons} from '../Redux/Actions'
import {connect} from 'react-redux'

const initialState = {
  username:"",
  password:"",
  error: ""
}
class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = initialState
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = () => {
    const data = {...this.state}
    delete data["error"]
    TrainerAdapter.login(data)
    .then(json => {
      if(json.error){
        this.setState({error: json.error})
      }else{
        this.props.initializeTrainer(json.data.attributes)
        this.props.initializePokemons(json.included.map((pokemon) => pokemon.attributes))
      }
    })
    this.setState(initialState)
  }

  render() {
    return (
      <Container text>
        {this.state.error}
        <Header textAlign='center'>Pokémon Stay</Header>
        <Segment raised textAlign='center'>
          <Form onSubmit={this.handleSubmit}>
            <Form.Field inline>
              <label>Username:</label>
              <Input name="username" onChange={this.handleChange} value={this.state.username}/>
            </Form.Field>
            <Form.Field inline>
              <label>Password:</label>
              <Input name="password" onChange={this.handleChange} value={this.state.password} type="password"/>
            </Form.Field>
            <Button type="submit">Login</Button>
          </Form>
        </Segment>
      </Container>
    );
  }

}


export default connect(null, {initializeTrainer, initializePokemons})(LoginForm);
