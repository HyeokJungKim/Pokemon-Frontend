import React from 'react';
import { Menu, Image, Header } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import LoginNavbar from '../Components/LoginNavbar'

import {connect} from 'react-redux'

const NavBarContainer = ({userToken}) => {

  const conditionalRoute = () => {
    return userToken ? "/home" : "/"
  }

  return (
    <Menu size="mini" secondary>
      <Menu.Item>
        <Link to={conditionalRoute()}>
          <Header className="logo" >
            <Image src="https://i.ebayimg.com/images/g/KuAAAOSwxzdaC7eN/s-l500.jpg" avatar/>
            Pokémon Stay
          </Header>
        </Link>
      </Menu.Item>

      <Menu.Menu position="right">
        <LoginNavbar/>
      </Menu.Menu>
    </Menu>
  );

}

const mapStateToProps = ({auth}) => {
  return {userToken: auth.userToken}
}

export default connect(mapStateToProps)(NavBarContainer);
