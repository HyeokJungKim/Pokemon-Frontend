import React,{Fragment} from 'react';
import { Menu } from 'semantic-ui-react'

const LoginNavbar = ({goLogout}) => {

  return (
    <Fragment>
      <Menu.Item onClick={goLogout}>
        <p>Logout</p>
      </Menu.Item>
    </Fragment>
)}

export default LoginNavbar
