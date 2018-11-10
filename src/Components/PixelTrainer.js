import React,{Component} from 'react'
import {getRandom} from '../Redux/Actions'
import {connect} from 'react-redux'

class PixelTrainer extends Component{

  componentDidMount() {
    if(Math.random() < 0.5){
      this.props.getRandom()
    }
  }

  render(){
    const {name} = this.props
    return(
      <div className={`pixel ${name}`}>
        <div className={`pixel trainer`}></div>
      </div>
    )
  }
}

export default connect(null, {getRandom})(PixelTrainer)
