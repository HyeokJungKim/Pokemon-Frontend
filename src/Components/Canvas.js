import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react'
import Pixel from './Pixel'
import PixelTrainer from './PixelTrainer'


class Canvas extends Component {

  constructor(props) {
    super(props);
    this.state = {
      trainer: 128
    };
  }

  componentDidMount() {
    document.addEventListener("keydown", this.moveTrainer, false)
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.moveTrainer, false)
  }

  moveTrainer = (e) => {
    const position = this.state.trainer
    const modulo = position % 16
    switch (e.code) {
      case "KeyW":
        if(position > 15 ){
          this.setState((prevState) =>
            {return {trainer: prevState.trainer - 16}}
          )
        }
        break;
      case "KeyS":
        if(position<240){
          this.setState((prevState) =>
            {return {trainer: prevState.trainer + 16}}
          )
        }
        break;
      case "KeyA":
        if(modulo !== 0){
          this.setState((prevState) =>
            {return {trainer: prevState.trainer - 1}}
          )
        }
        break;
      case "KeyD":
        if(modulo !== 15){
          this.setState((prevState) =>
            {return {trainer: prevState.trainer + 1}}
          )
        }
        break;
      default:
        break;
    }
  }

  renderArray = () => {
    return(
      [
        "TLGrass", "TopGrass", "TRGrass", "Water", "TLGrass", "TopGrass", "VRoad", "TopGrass", "TreeLMid", "TreeRMid", "TempleWall", "TempleWall", "TempleWall", "TempleWall", "TempleSymbol", "TempleBot",
        "HRoad", "HRoad", "HRoad", "Bridge", "HRoad", "HRoad", "BRRoad", "BotGrass", "TreeLBase", "TreeRBase", "TempleBot", "TempleWindow", "TempleDoor", "TempleBR", "SFlowers", "RightGrass",
        "BLGrass", "BotGrass", "BRGrass", "Water", "BLGrass","StairTL","StairTR","TempleBot","TempleWall","TempleWall","CenterGrass","","","","","",
        "TempleL","TempleWall","TempleWall","WaterfallTop","TempleWall","StairL","StairR","Rock","TempleBot","TempleBot","CenterGrass","","","","","",
        "TempleBot","TempleBot","TempleBot","WaterfallBot","GrassHorizontal","StairL","StairR","BRGrass","LeftGrass","","","","","","WaterTopRock","WaterTopRock",
        "LeftGrass","CenterGrass","PinkFlowers2","Water","TempleBot","StairL","StairR","TempleBot","LeftGrass","","","","","","Water","",
        "BLGrass","CenterGrass","PinkFlowers2","Water","LeftGrass","StairBL","StairBR","CenterGrass","CenterGrass","","","","","","Water","",
        "StairTop","LeftGrass","PinkFlowers2","Water","LeftGrass","CenterGrass","CenterGrass","CenterGrass","CenterGrass","","","","","","Water","",
        "StairBot","BLGrass","PinkFlowers3","Water","SandGrassT","SandGrassT","SandTR2","SandT","SandTR","","","","","","Bridge","",
        "WaterTopRock","WaterTopRock","WaterTopRock","Water","Water","Water","SandBL","SandWaterB","SandGrassTR2","","","","","","ShadowWater","",
        "","","","","","","","","SandWaterBL","SandGrassT","SandGrassTR","CenterGrass","SandGrassTL","SandGrassT","Water","SandGrassT",
        "","","","","","","","","","","SandGrassL","CenterGrass","SandGrassR","","","",
        "","","","","","","","","","","SandGrassBL","SandGrassT","SandGrassBR","","","",
        "","","","","","","","","","","","","","","","",
        "","","","","","","","","","","","","","","","",
        "","","","","","","","","","","","","","","",""
      ]
    )
  }

  render() {
    return (
      <Segment basic>
        <div id="canvas">
        {this.renderArray().map((name,index)=> {
          if(index === this.state.trainer){
            return <PixelTrainer key={index} name={name} />
          }else{
            return <Pixel key={index} name={name}/>
          }
        })}
        </div>
      </Segment>
    )
  }

}

export default Canvas;
