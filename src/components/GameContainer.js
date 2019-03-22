import React from "react";

import Game from "./Game";
import GameLoop from "./GameLoop";

import { game, DIRECTION } from "../functions/constants";
import fac from "../functions/factory";

export default class GameContainer extends React.Component {
  constructor(props) {
    super(props);

    this.factory = new fac();

    this.state = {
      player: this.factory.createPlayer(),
      enemies: [this.factory.createEnemy()],
      bombs: []
    };
  }

  playerShoots = () => {
    const bombs = [
      ...this.state.bombs,
      this.factory.createPlayerBomb(this.state.player)
    ];
    this.setState({ bombs });
  };

  componentDidMount = () => {
    this.gameLoop = GameLoop.start(game.framesPerSecond, () => {
      // const updatedEnemies = this.state.enemies.map(enemy => {
      //   let speed = enemy.speed;
      //   if (enemy.x + enemy.width > this.width || enemy.x < 0)
      //     speed = enemy.speed * -1;
      //   const x = enemy.x + speed;
      //   return { ...enemy, x, speed };
      // });
      // this.setState({ enemies: updatedEnemies });
      // Determine new position of bombs
      // or explode it if it left the canvas.
      // const updatedBombs = this.state.bombs.map(bomb => {
      //   if (bomb.y <= 0) return { ...bomb, active: false };
      //   return { ...bomb, y: bomb.y + bomb.speed };
      // });
      // const remainingBombs = updatedBombs.filter(bomb => !bomb.exploded);
      // this.setState({ bombs: remainingBombs });
    });
  };

  render = () => {
    return (
      <Game
        canvasWidth={game.canvasWidth}
        canvasHeight={game.canvasHeight}
        player={this.state.player}
        enemies={this.state.enemies}
        bombs={this.state.bombs}
        playerShoots={this.playerShoots}
      />
    );
  };
}
