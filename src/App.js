import React, { Component } from 'react';
import './App.css';

import {connect} from 'react-redux'
import {initializePokemons} from './Redux/Actions'

import HomeContainer from './Containers/HomeContainer'
import FormContainer from './Containers/FormContainer'
import GameContainer from './Containers/GameContainer'

import {Switch, Route, withRouter} from 'react-router-dom'
class App extends Component {

  componentDidMount() {
    this.props.initializePokemons()
  }

  render() {
    return (
      <Switch>
        <Route path='/login' render={(props) => <FormContainer {...props}/>}/>
        <Route path='/register' render={(props) => <FormContainer {...props}/>}/>
        <Route path='/home' render={(props) => <GameContainer {...props}/>}/>
        <Route path='/' exact render={(props) => <HomeContainer {...props}/>}/>
      </Switch>
    );
  }
}

const mapStateToProps = (state) => {
  return {userToken: state.auth.userToken}
}

export default withRouter(connect(mapStateToProps, {initializePokemons})(App))
