import React,{Component} from 'react'

class PixelTrainer extends Component{

  render(){
    const {name} = this.props
    return(
      <div className={`pixel ${name}`}>
        <div className={`pixel trainer`}></div>
      </div>
    )
  }
}

export default PixelTrainer
