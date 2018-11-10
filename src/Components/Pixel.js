import React, { PureComponent } from 'react';

class Pixel extends PureComponent {

  render() {
    return (
      <div className={`pixel ${this.props.name}`}/>
    );
  }

}

export default Pixel;
