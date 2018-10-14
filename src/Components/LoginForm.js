import React, { Component } from 'react';
import {Segment, Container, Form, Input, Button, Header} from 'semantic-ui-react'

class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username:"",
      password:"",
      error: ""
    }
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
    return (
      <Container text>
        <Header textAlign='center'>Pokémon Stay</Header>
        <Segment raised textAlign='center'>
          <Form onSubmit={()=>console.log("hue")}>
            <Form.Field inline>
              <label>Username:</label>
              <Input name="username" onChange={this.handleChange}/>
            </Form.Field>
            <Form.Field inline>
              <label>Password:</label>
              <Input name="password" onChange={this.handleChange} type="password"/>
            </Form.Field>
            <Button type="submit">Login</Button>
          </Form>
        </Segment>
      </Container>
    );
  }

}

export default LoginForm;
