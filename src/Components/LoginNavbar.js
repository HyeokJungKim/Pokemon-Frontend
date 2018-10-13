import React,{Fragment} from 'react';
import { Menu } from 'semantic-ui-react'

const LoginNavbar = ({goLogin,goRegister}) => {

  return (<Fragment>
    <Menu.Item onClick={goLogin}>
      <p>Login</p>
    </Menu.Item>
    <Menu.Item onClick={goRegister}>
      <p>Register</p>
    </Menu.Item>
  </Fragment>
)}

export default LoginNavbar
