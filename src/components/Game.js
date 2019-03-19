import React from "react";

import Map from "./Map";

import keyboard from "../keyboard";
import GameLoop from "./GameLoop";

export default class Game extends React.Component {
  constructor(props) {
    super(props);

    this.width = 80;
    this.height = 300;

    this.state = {
      player: {
        x: 10,
        y: 10
      },
      enemies: [
        { x: 50, y: 1, width: 20, height: 15, speed: 2 }
        // { x: 1, y: 1, width: 20, height: 15, speed: 1 }
      ]
    };
  }

  componentDidMount = () => {
    const framesPerSecond = 50;
    this.gameLoop = GameLoop.start(framesPerSecond, () => {
      const updatedEnemies = this.state.enemies.map(enemy => {
        let speed = enemy.speed;
        if (enemy.x + enemy.width > this.width || enemy.x <= 0) speed *= -1;
        let x = enemy.x + speed;
        return { ...enemy, x, speed };
      });

      //this.setState({ enemies: updatedEnemies });
    });
  };

  render = () => {
    return (
      <div>
        <svg width={this.width} height={this.height}>
          <Map
            width="10"
            height="10"
            player={this.state.player}
            enemies={this.state.enemies}
          />
        </svg>
      </div>
    );
  };
}
