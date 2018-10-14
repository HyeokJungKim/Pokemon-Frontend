import React, { Component } from 'react';
import './App.css';

import {connect} from 'react-redux'

import HomeContainer from './Containers/HomeContainer'
import FormContainer from './Containers/FormContainer'

import {Switch, Route, withRouter} from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <Switch>
        <Route path='/login' render={(props) => <FormContainer {...props}/>}/>
        <Route path='/register' render={(props) => <FormContainer {...props}/>}/>

        <Route path='/' exact render={(props) => <HomeContainer {...props}/>}/>
      </Switch>
    );
  }
}

const mapStateToProps = (state) => {
  return {userToken: state.userToken}
}

export default withRouter(connect(mapStateToProps)(App))
