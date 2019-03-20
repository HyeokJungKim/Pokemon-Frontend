import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react'

import NewPokemon from './NewPokemon'
import Pixel from './Pixel'
import PixelTrainer from './PixelTrainer'

import {connect} from 'react-redux'
import {getRandom} from '../Redux/Actions'

class Canvas extends Component {

  constructor(props) {
    super(props);
    this.state = {
      trainer: 128,
      blueprint: [
        "TLGrass", "TopGrass", "TRGrass", "CenterWater", "TLGrass", "TopGrass", "VRoad", "TopGrass", "TreeLMid", "TreeRMid", "TempleWall", "TempleWall", "TempleWall", "TempleWall", "TempleSymbol", "TempleBot",
        "HRoad", "HRoad", "HRoad", "Bridge", "HRoad", "HRoad", "BRRoad", "BotGrass", "TreeLBase", "TreeRBase", "TempleBot", "TempleWindow", "TempleDoor", "TempleBR", "SFlowers", "RightGrass",
        "BLGrass", "BotGrass", "BRGrass", "CenterWater", "BLGrass","StairTL","StairTR","TempleBot","TempleWall","TempleWall","CenterGrass","CenterGrass","CenterGrass","CenterGrass","CenterGrass","CenterGrass",
        "TempleL","TempleWall","TempleWall","WaterfallTop","TempleWall","StairL","StairR","GrassRock","TempleBot","TempleBot","CenterGrass","CenterGrass","CenterGrass","CenterGrass","BotGrass","BotGrass",
        "TempleBot","TempleBot","TempleBot","WaterfallBot","GrassHorizontal","StairL","StairR","BRGrass","LeftGrass","CenterGrass","CenterGrass","CenterGrass","CenterGrass","RightGrass","WaterTopRock","WaterTopRock",
        "LeftGrass","CenterGrass","PinkFlowers2","CenterWater","TempleBot","StairL","StairR","TempleBot","LeftGrass","CenterGrass","CenterGrass","CenterGrass","CenterGrass","RightGrass","CenterWater","TLGrass",
        "BLGrass","CenterGrass","PinkFlowers2","CenterWater","LeftGrass","StairBL","StairBR","CenterGrass","CenterGrass","CenterGrass","CenterGrass","CenterGrass","CenterGrass","RightGrass","CenterWater","LeftGrass",
        "StairTop","LeftGrass","PinkFlowers2","CenterWater","LeftGrass","CenterGrass","CenterGrass","CenterGrass","CenterGrass","CenterGrass","CenterGrass","CenterGrass","CenterGrass","RightGrass","CenterWater","LeftGrass",
        "StairBot","BLGrass","PinkFlowers3","CenterWater","SandGrassT","SandGrassT","SandTR2","SandT","SandTR","CenterGrass","CenterGrass","CenterGrass","CenterGrass","CenterGrass","Bridge","CenterGrass",
        "WaterTopRock","WaterTopRock","WaterTopRock","CenterWater","CenterWater","CenterWater","SandBL","SandWaterB","SandGrassTR2","CenterGrass","CenterGrass","CenterGrass","CenterGrass","RightGrass","ShadowWater","LeftGrass",
        "DarkWaterT","DarkWaterT","DarkWaterT","DarkWaterT","DarkWaterT","DarkWaterT","DarkWaterTR","CenterWater","SandWaterBL","SandGrassT","SandGrassTR","CenterGrass","SandGrassTL","SandGrassT","CenterWater","SandGrassT",
        "DarkWater","DarkWater","DarkWater","DarkWater","DarkWater","DarkWater","DarkWaterL","CenterWater","CenterWater","CenterWater","SandGrassL","BotGrass","SandGrassR","CenterWater","CenterWater","CenterWater",
        "DarkWaterTL2","DarkWaterB","DarkWaterB","DarkWaterB","DarkWaterTR2","DarkWater","DarkWaterL","CenterWater","CenterWater","CenterWater","SandGrassBL","VBridge","SandGrassBR","CenterWater","CenterWater","CenterWater",
        "DarkWaterL","CenterWater","CenterWater","CenterWater","DarkWaterR","DarkWater","DarkWaterBL2","DarkWaterT","DarkWaterT","DarkWaterT","DarkWaterT","VBridge","DarkWaterT","DarkWaterT","DarkWaterT","DarkWaterT",
        "DarkWaterL","CenterWater","CenterWater","CenterWater","DarkWaterR","BridgeEndL","Bridge","Bridge","Bridge","Bridge","Bridge","CenterBridge","Bridge","Bridge","BridgeEndR","DarkWater",
        "DarkWaterBR","CenterWater","CenterWater","CenterWater","DarkWaterR","BridgeWater2","BridgeWater","BridgeWater","BridgeWater","BridgeWater","BridgeWater","BotBridge","BridgeWater","BridgeWater","BridgeWater3","DarkWater"
      ],
      experience: 0,
    };
  }

  componentDidMount() {
    document.addEventListener("keydown", this.moveTrainer, false)
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.moveTrainer, false)
  }

  changeExperience = () => {
    this.setState({
      experience: Math.floor(Math.random() * 200 ) + 50
    })
  }

  findRandom = () => {
    if(Math.random() < 0.20){
      this.props.getRandom()
    }
  }

  moveTrainer = (e) => {
    if(this.props.noPokemonOnDisplay){
      const position = this.state.trainer
      const modulo = position % 16
      switch (e.code) {
        case "KeyW":
          if(position > 15 ){
            this.setState((prevState) =>
              {return {trainer: prevState.trainer - 16}}, this.findRandom
            )
          }
          break;
        case "KeyS":
          if(position < 240){
            this.setState((prevState) =>
              {return {trainer: prevState.trainer + 16}}, this.findRandom
            )
          }
          break;
        case "KeyA":
          if(modulo !== 0){
            this.setState((prevState) =>
              {return {trainer: prevState.trainer - 1}}, this.findRandom
            )
          }
          break;
        case "KeyD":
          if(modulo !== 15){
            this.setState((prevState) =>
              {return {trainer: prevState.trainer + 1}}, this.findRandom
            )
          }
          break;
        default:
          break;
      }
    }

  }

  render() {
    return (
      <Segment basic>
        {this.props.noPokemonOnDisplay ?
        <div id="canvas">
          {
            this.state.blueprint.map((name,index)=> {
              if(index === this.state.trainer){
                return <PixelTrainer key={index} name={name} />
              }else{
                return <Pixel key={index} name={name}/>
              }
            })
          }
        </div>
          :
        <NewPokemon
          changeExperience={this.changeExperience}
          experience={this.state.experience}
        />
        }
      </Segment>
    )
  }

}

const mapStateToProps = ({pokemons}) => {
  return {
    noPokemonOnDisplay: !pokemons.displayedPokemon.name,
  }
}

export default connect(mapStateToProps, {getRandom})(Canvas);
