import React from "react";

import Game from "./Game";
import GameLoop from "./GameLoop";

import { didBombHitTargets } from "../functions/collisions";

export default class GameContainer extends React.Component {
  constructor(props) {
    super(props);

    this.framesPerSecond = 50;
    this.width = 80;
    this.height = 300;

    this.state = {
      player: {
        x: this.width / 2,
        y: 100,
        width: 20,
        height: 10
      },
      enemies: [this.createEnemy(this.width / 2, 1)],
      bombs: []
    };
  }

  createEnemy = (x, y) => ({ x, y, width: 20, height: 10 });

  createPlayerBomb = () => ({
    x: this.state.player.x + this.state.player.width / 2,
    y: this.state.player.y - 5,
    radius: 3,
    speed: -1,
    active: true
  });

  playerShoots = () => {
    const bombs = [...this.state.bombs, this.createPlayerBomb()];
    this.setState({ bombs });
  };

  componentDidMount = () => {
    this.gameLoop = GameLoop.start(this.framesPerSecond, () => {
      // const updatedEnemies = this.state.enemies.map(enemy => {
      //   let speed = enemy.speed;
      //   if (enemy.x + enemy.width > this.width || enemy.x < 0)
      //     speed = enemy.speed * -1;
      //   const x = enemy.x + speed;
      //   return { ...enemy, x, speed };
      // });
      // this.setState({ enemies: updatedEnemies });

      // Determine new position of bombs
      // or deactivate it if it left the canvas.
      const updatedBombs = this.state.bombs.map(bomb => {
        if (bomb.y <= 0) return { ...bomb, active: false };
        return { ...bomb, y: bomb.y + bomb.speed };
      });

      const activeBombs = updatedBombs.filter(bomb => bomb.active);

      // Determine the bomb hit anything.
      // If so, the bomb is deactivaed and the object exploded.
      //...

      this.setState({ bombs: activeBombs });
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
        playerShoots={this.playerShoots}
      />
    );
  };
}
