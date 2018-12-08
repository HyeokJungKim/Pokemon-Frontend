import React, { Component } from 'react';
import { Menu, Image, Header } from 'semantic-ui-react'

import LoginNavbar from '../Components/LoginNavbar'

import {connect} from 'react-redux'

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
          <LoginNavbar goLogin={this.goLogin} goRegister={this.goRegister}/>
        </Menu.Menu>
      </Menu>
    );
  }

}

const mapStateToProps = (state) => {
  return {userToken: state.auth.userToken}
}

export default connect(mapStateToProps)(NavBarContainer);
