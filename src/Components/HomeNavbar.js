import React, { Component } from 'react';

import { Menu } from 'semantic-ui-react';
import {connect} from 'react-redux';
import {resetState} from '../Redux/Actions';

class HomeNavbar extends Component {

  goLogout = () => {
    this.props.history.push("/")
    this.props.resetState()
  }

  render() {
    const {handleItemClick, activeTab} = this.props
    return (
      <Menu tabular attached="top">
        <Menu.Item name='Catch Pokemon' active={activeTab === 'Catch Pokemon'} onClick={handleItemClick} />
          <Menu.Item
            name='Manage Team'
            active={activeTab === 'Manage Team'}
            onClick={handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item onClick={this.goLogout}>
              <p>Logout</p>
            </Menu.Item>
          </Menu.Menu>
      </Menu>
    );
  }

}

export default connect(null, {resetState})(HomeNavbar);
