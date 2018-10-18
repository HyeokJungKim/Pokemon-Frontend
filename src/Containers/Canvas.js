import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react'

class Canvas extends Component {

  render() {
    return (
      <Segment basic>
        <div id="canvas">
          <div className="pixel"></div>
          <div className="pixel"></div>
          <div className="pixel"></div>
          <div className="pixel"></div>
          <div className="pixel"></div>
          <div className="pixel"></div>
          <div className="pixel"></div>
          <div className="pixel"></div>
        </div>
      </Segment>
    )
  }

}

export default Canvas;
