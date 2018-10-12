import React, { Component } from 'react';
import { Menu, Image, Header } from 'semantic-ui-react'

class NavBar extends Component {

  goLogin = () => {
    this.props.history.push("/login")
  }

  goRegister = () => {
    this.props.history.push("/register")
  }

  goHome = () => {
    this.props.history.push("/")
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
          <Menu.Item onClick={this.goLogin}>
            <p>Login</p>
          </Menu.Item>
          <Menu.Item onClick={this.goRegister}>
            <p>Register</p>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }

}

export default NavBar;
