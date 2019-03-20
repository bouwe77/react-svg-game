import React from "react";

import Game from "./Game";

export default class GameContainer extends React.Component {
  constructor(props) {
    super(props);

    this.width = 80;
    this.height = 300;
    let speed = 1;

    const playerWidth = 20;
    this.state = {
      player: {
        x: this.width / 2,
        y: 100,
        width: playerWidth,
        height: 10
      },
      enemies: [{ x: 0, y: 1, width: 20, height: 10, speed }],
      bombs: [{ x: 3, y: 90 }, { x: 13, y: 80 }]
    };
  }

  componentDidMount = () => {
    const framesPerSecond = 50;
    this.gameLoop = GameLoop.start(framesPerSecond, () => {
      const updatedEnemies = this.state.enemies.map(enemy => {
        let speed = enemy.speed;
        if (enemy.x + enemy.width > this.width || enemy.x <= 0)
          speed = enemy.speed * -1;
        let x = enemy.x + speed;
        return { ...enemy, x, speed };
      });

      this.setState({ enemies: updatedEnemies });
    });
  };

  render = () => {
    return (
      <Game
        width={this.width}
        height={this.height}
        player={this.state.player}
        enemies={this.state.enemies}
        bombs={this.state.bombs}
      />
    );
  };
}
