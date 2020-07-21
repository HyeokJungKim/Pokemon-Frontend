import React, { Component } from 'react';
import './App.css';

import {connect} from 'react-redux'
import {initializePokemons} from './Redux/Actions'

import HomeContainer from './Containers/HomeContainer'
import GameContainer from './Containers/GameContainer'
import About from './Components/About'
import LoginForm from './Components/LoginForm'
import RegisterForm from './Components/RegisterForm'

import {Switch, Route, withRouter} from 'react-router-dom'
class App extends Component {

  componentDidMount() {
    this.props.initializePokemons()
  }

  whatToDisplay = (routerProps) => {
    switch (routerProps.location.pathname) {
      case "/login":
        return <LoginForm {...routerProps}/>
      case "/register":
        return <RegisterForm {...routerProps}/>
      case "/":
        return <About/>
      default:
        return <p>404</p>
    }
  }

  decideContainer = (routerProps) => {
    return <HomeContainer {...routerProps} whatToDisplay={this.whatToDisplay}/>
  }


  render() {
    return (
      <Switch>
        <Route path='/login' render={this.decideContainer}/>
        <Route path='/register' render={this.decideContainer}/>
        <Route path='/home' render={(props) => <GameContainer {...props}/>}/>
        <Route path='/' exact render={this.decideContainer}/>
        <Route path='/' render={this.decideContainer}/>

      </Switch>
    );
  }
}

const mapStateToProps = (state) => {
  return {userToken: state.auth.userToken}
}

export default withRouter(connect(mapStateToProps, {initializePokemons})(App))
