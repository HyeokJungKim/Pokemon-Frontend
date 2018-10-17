import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

const WithAuth = (WrappedComponent) => {

  class AuthComp extends Component{
    render(){
      if(this.props.userToken){
        return(<WrappedComponent {...this.props}/>)
      } else if(this.props.loading){
        return null
      } else{
        return <Redirect to="/"/>
      }
    }
  }
  return connect(mapStateToProps)(AuthComp)
}

const mapStateToProps = (state) => {
  return {
    userToken: state.userToken,
    loading: state.loading
  }
}

export default WithAuth
