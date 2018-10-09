import React, { Component } from 'react';
import { Menu, Image, Header } from 'semantic-ui-react'
class NavBar extends Component {

  render() {
    return (
      <Menu size="mini" stackable secondary>
        <Menu.Item>
          <Header>
            <Image src="https://i.ebayimg.com/images/g/KuAAAOSwxzdaC7eN/s-l500.jpg" avatar></Image>
            Pokemon Stay
          </Header>
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item>
            <p>About</p>
          </Menu.Item>
          <Menu.Item>
            <p>Login</p>
          </Menu.Item>
          <Menu.Item>
            <p>Register</p>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }

}

export default NavBar;
