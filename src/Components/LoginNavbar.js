import React,{Fragment} from 'react';
import { Menu } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
const LoginNavbar = () => {

  return (<Fragment>
    <Link to="/login">
      <Menu.Item className="loginButtons">
        <p>Login</p>
      </Menu.Item>
    </Link>
    <Link to="/register">
      <Menu.Item className="loginButtons">
        <p>Register</p>
      </Menu.Item>
    </Link>
  </Fragment>
)}

export default LoginNavbar
