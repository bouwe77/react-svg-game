import React from "react";

import Map from "./Map";

import keyboard from "../keyboard";
import GameLoop from "./GameLoop";

export default class Game extends React.Component {
  constructor(props) {
    super(props);

    this.width = 80;
    this.height = 300;
    this.speed = 1;

    this.state = {
      player: {
        x: 10,
        y: 100
      },
      enemies: [
        { x: 50, y: 1, width: 20, height: 15 },
        { x: 1, y: 1, width: 20, height: 15 }
      ],
      bombs: [{ x: 1, y: 90 }]
    };
  }

  componentDidMount = () => {
    const framesPerSecond = 50;
    this.gameLoop = GameLoop.start(framesPerSecond, () => {
      const updatedEnemies = this.state.enemies.map(enemy => {
        let speed = this.speed;
        if (enemy.x + enemy.width > this.width || enemy.x <= 0)
          speed = this.speed * -1;
        let x = enemy.x + speed;
        return { ...enemy, x };
      });

      this.setState({ enemies: updatedEnemies });
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
            bombs={this.state.bombs}
          />
        </svg>
      </div>
    );
  };
}
