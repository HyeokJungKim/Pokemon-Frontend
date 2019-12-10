import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Dropdown } from 'semantic-ui-react'

class StoneDropdown extends Component {
  render() {
    console.log(this.props);
    return (
      <Dropdown>

      </Dropdown>
    );
  }

}

const mapStateToProps = ({trainer}) => {
  return {
    items: trainer.items.filter(item => item.name.includes("Stone"))
  }
}

export default connect(mapStateToProps)(StoneDropdown);
