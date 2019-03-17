import React, { Component } from 'react';
import './App.css';

import {connect} from 'react-redux'
import {initializePokemons, initializeItems} from './Redux/Actions'

import HomeContainer from './Containers/HomeContainer'
import GameContainer from './Containers/GameContainer'
import About from './Components/About'
import LoginForm from './Components/LoginForm'
import RegisterForm from './Components/RegisterForm'

import {Switch, Route, withRouter} from 'react-router-dom'
class App extends Component {

  componentDidMount() {
    this.props.initializePokemons()
    this.props.initializeItems()
  }

  whatToDisplay = (props) => {
    switch (props.location.pathname) {
      case "/login":
        return <LoginForm {...props}/>
      case "/register":
        return <RegisterForm {...props}/>
      case "/":
        return <About/>
      default:
        return <p>404</p>
    }
  }

  render() {
    return (
      <Switch>
        <Route path='/login' render={(props) => <HomeContainer {...props} whatToDisplay={this.whatToDisplay}/>}/>
        <Route path='/register' render={(props) => <HomeContainer {...props} whatToDisplay={this.whatToDisplay} />}/>
        <Route path='/home' render={(props) => <GameContainer {...props}/>}/>
        <Route path='/' exact render={(props) => <HomeContainer {...props} whatToDisplay={this.whatToDisplay}/>}/>
        <Route path='/' render={(props) => <HomeContainer {...props} whatToDisplay={this.whatToDisplay}/>}/>

      </Switch>
    );
  }
}

const mapStateToProps = (state) => {
  return {userToken: state.auth.userToken}
}

export default withRouter(connect(mapStateToProps, {initializePokemons, initializeItems})(App))
