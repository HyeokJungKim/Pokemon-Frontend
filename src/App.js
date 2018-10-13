import React, { Component } from 'react';
import './App.css';
import LoginContainer from './Containers/LoginContainer'
import GameContainer from './Containers/GameContainer'


import {Switch, Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path='/login' render={(props) => <GameContainer {...props}/>}/>
        <Route path='/' exact render={(props) => <LoginContainer {...props}/>}/>

      </Switch>
    );
  }
}

export default App;
