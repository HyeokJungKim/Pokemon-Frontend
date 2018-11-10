import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react'
import Pixel from './Pixel'
import PixelTrainer from './PixelTrainer'


class Canvas extends Component {

  constructor(props) {
    super(props);
    this.state = {
      trainer: 128,
      blueprint: [
        "TLGrass", "TopGrass", "TRGrass", "Water", "TLGrass", "TopGrass", "VRoad", "TopGrass", "TreeLMid", "TreeRMid", "TempleWall", "TempleWall", "TempleWall", "TempleWall", "TempleSymbol", "TempleBot",
        "HRoad", "HRoad", "HRoad", "Bridge", "HRoad", "HRoad", "BRRoad", "BotGrass", "TreeLBase", "TreeRBase", "TempleBot", "TempleWindow", "TempleDoor", "TempleBR", "SFlowers", "RightGrass",
        "BLGrass", "BotGrass", "BRGrass", "Water", "BLGrass","StairTL","StairTR","TempleBot","TempleWall","TempleWall","CenterGrass","CenterGrass","CenterGrass","CenterGrass","CenterGrass","CenterGrass",
        "TempleL","TempleWall","TempleWall","WaterfallTop","TempleWall","StairL","StairR","Rock","TempleBot","TempleBot","CenterGrass","CenterGrass","CenterGrass","CenterGrass","BotGrass","BotGrass",
        "TempleBot","TempleBot","TempleBot","WaterfallBot","GrassHorizontal","StairL","StairR","BRGrass","LeftGrass","CenterGrass","CenterGrass","CenterGrass","CenterGrass","RightGrass","WaterTopRock","WaterTopRock",
        "LeftGrass","CenterGrass","PinkFlowers2","Water","TempleBot","StairL","StairR","TempleBot","LeftGrass","CenterGrass","CenterGrass","CenterGrass","CenterGrass","RightGrass","Water","TLGrass",
        "BLGrass","CenterGrass","PinkFlowers2","Water","LeftGrass","StairBL","StairBR","CenterGrass","CenterGrass","CenterGrass","CenterGrass","CenterGrass","CenterGrass","RightGrass","Water","LeftGrass",
        "StairTop","LeftGrass","PinkFlowers2","Water","LeftGrass","CenterGrass","CenterGrass","CenterGrass","CenterGrass","CenterGrass","CenterGrass","CenterGrass","CenterGrass","RightGrass","Water","LeftGrass",
        "StairBot","BLGrass","PinkFlowers3","Water","SandGrassT","SandGrassT","SandTR2","SandT","SandTR","CenterGrass","CenterGrass","CenterGrass","CenterGrass","CenterGrass","Bridge","CenterGrass",
        "WaterTopRock","WaterTopRock","WaterTopRock","Water","Water","Water","SandBL","SandWaterB","SandGrassTR2","CenterGrass","CenterGrass","CenterGrass","CenterGrass","RightGrass","ShadowWater","LeftGrass",
        "DarkWaterT","DarkWaterT","DarkWaterT","DarkWaterT","DarkWaterT","DarkWaterT","DarkWaterTR","Water","SandWaterBL","SandGrassT","SandGrassTR","CenterGrass","SandGrassTL","SandGrassT","Water","SandGrassT",
        "DarkWater","DarkWater","DarkWater","DarkWater","DarkWater","DarkWater","DarkWaterL","Water","Water","Water","SandGrassL","BotGrass","SandGrassR","Water","Water","Water",
        "DarkWaterTL2","DarkWaterB","DarkWaterB","DarkWaterB","DarkWaterTR2","DarkWater","DarkWaterL","Water","Water","Water","SandGrassBL","VBridge","SandGrassBR","Water","Water","Water",
        "DarkWaterL","Water","Water","Water","DarkWaterR","DarkWater","DarkWaterBL2","DarkWaterT","DarkWaterT","DarkWaterT","DarkWaterT","VBridge","DarkWaterT","DarkWaterT","DarkWaterT","DarkWaterT",
        "DarkWaterL","Water","Water","Water","DarkWaterR","BridgeEndL","Bridge","Bridge","Bridge","Bridge","Bridge","CenterBridge","Bridge","Bridge","BridgeEndR","DarkWater",
        "DarkWaterBR","Water","Water","Water","DarkWaterR","BridgeWater2","BridgeWater","BridgeWater","BridgeWater","BridgeWater","BridgeWater","BotBridge","BridgeWater","BridgeWater","BridgeWater3","DarkWater"
      ]
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
        if(position < 240){
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

  render() {
    return (
      <Segment basic>
        <div id="canvas">
        {this.state.blueprint.map((name,index)=> {
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
