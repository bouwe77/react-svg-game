import React from "react";

import Map from "./Map";

import keyboard from "../keyboard";
import GameLoop from "./GameLoop";

export default class Game extends React.Component {
  constructor(props) {
    super(props);

    this.width = 640;
    this.height = 480;

    this.state = {
      playerPosition: {
        x: 10,
        y: 10
        // x: this.height / 2,
        // y: this.width / 2
      }
    };
  }

  componentDidMount = () => {
    this.gameLoop = GameLoop.start(50, () => {
      let xOffset = 0;
      let yOffset = 0;

      if (keyboard.hasKeyDown("j")) {
        xOffset -= 5;
      }
      if (keyboard.hasKeyDown("l")) {
        xOffset += 5;
      }
      if (keyboard.hasKeyDown("k")) {
        yOffset -= 5;
      }
      if (keyboard.hasKeyDown("i")) {
        yOffset += 5;
      }

      if (xOffset > 0 || yOffset > 0) console.log(xOffset, yOffset);

      this.setState({
        playerPosition: {
          x: this.state.playerPosition.x + xOffset,
          y: this.state.playerPosition.y + yOffset
        }
      });
    });
  };

  render = () => {
    return (
      <svg width={this.width} height={this.height}>
        <Map
          width="10"
          height="10"
          playerPosition={this.state.playerPosition}
        />
      </svg>
    );
  };
}
