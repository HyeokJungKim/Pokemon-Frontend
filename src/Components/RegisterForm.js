import React, { Component } from 'react';
import {Segment, Container, Form, Input, Button, Header} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {initializeToken, login} from '../Redux/Actions'
import TrainerAdapter from '../Adapters/TrainerAdapter'

const initialState = {
  username:"",
  password:"",
  password_confirmation: "",
  error: ""
}

class RegisterForm extends Component {

  constructor(props) {
    super(props);
    this.state = initialState
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    TrainerAdapter.register(this.state)
    .then(json => {
      if(json.error){
        this.setState({error: json.error})
      }else{
        localStorage.setItem("token", json.token)
        this.props.initializeToken(json.token)
        this.props.login(json.id, json.token)
        this.props.history.push("/home")
      }
    })
    this.setState(initialState)

  }

  render() {
    return (
      <Container text>
        {this.state.error}
        <Header textAlign='center'>Register</Header>
        <Segment raised textAlign='center'>
          <Form onSubmit={this.handleSubmit}>
            <Form.Field inline>
              <label>Username:
                <Input name="username" onChange={this.handleChange} value={this.state.username}/>
              </label>
            </Form.Field>
            <Form.Field inline>
              <label>Password:
                <Input name="password" onChange={this.handleChange} value={this.state.password} type="password"/>
              </label>
            </Form.Field>
            <Form.Field inline>
              <label>Confirm Password:
                <Input name="password_confirmation" onChange={this.handleChange} value={this.state.password_confirmation} type="password"/>
              </label>
            </Form.Field>
            <Button type="submit">Register</Button>
          </Form>
        </Segment>
      </Container>
    );
  }
}

export default connect(null, {initializeToken, login})(RegisterForm);
