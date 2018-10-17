import React, { Component } from 'react';
import { Menu, Image, Header } from 'semantic-ui-react'

import LoginNavbar from '../Components/LoginNavbar'
import LogoutNavbar from '../Components/LogoutNavbar'

import {connect} from 'react-redux'
import {resetState} from '../Redux/Actions'

class NavBarContainer extends Component {

  goLogin = () => {
    this.props.history.push("/login")
  }

  goRegister = () => {
    this.props.history.push("/register")
  }

  goHome = () => {
    if(this.props.userToken){
      this.props.history.push("/home")
    } else {
      this.props.history.push("/")
    }
  }

  goLogout = () => {
    this.props.history.push("/")
    this.props.resetState()
  }

  render() {
    return (
      <Menu size="mini" secondary>
        <Menu.Item>
          <Header className="logo" onClick={this.goHome}>
            <Image src="https://i.ebayimg.com/images/g/KuAAAOSwxzdaC7eN/s-l500.jpg" avatar/>
            Pokémon Stay
          </Header>
        </Menu.Item>

        <Menu.Menu position="right">
          {this.props.userToken === ""
            ?
            <LoginNavbar goLogin={this.goLogin} goRegister={this.goRegister}/>
              :
            <LogoutNavbar goLogout={this.goLogout}/>
          }

        </Menu.Menu>
      </Menu>
    );
  }

}

const mapStateToProps = (state) => {
  return {userToken: state.userToken}
}

export default connect(mapStateToProps, {resetState})(NavBarContainer);
