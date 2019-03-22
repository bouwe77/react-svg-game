import React from "react";

import Game from "./Game";
import GameLoop from "./GameLoop";

import { createPlayer, createEnemy, createBomb } from "../functions/sprites";

import { game, sprites, DIRECTION } from "../functions/constants";

export default class GameContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      player: this.createPlayer(),
      enemies: [this.createEnemy()],
      bombs: []
    };
  }

  createPlayer = () => {
    const centerX = game.canvasWidth / 2;
    const bottomY = game.canvasHeight - sprites.playerHeight;

    return createPlayer(
      centerX,
      bottomY,
      sprites.playerWidth,
      sprites.playerHeight,
      sprites.playerColor
    );
  };

  createEnemy = () =>
    createEnemy(
      0,
      0,
      sprites.enemyWidth,
      sprites.enemyHeight,
      sprites.enemyColor,
      DIRECTION.RIGHT
    );

  createPlayerBomb = () => {
    const bombX = this.state.player.x + sprites.playerWidth / 2;
    const bombY = this.state.player.y;
    return createBomb(
      bombX,
      bombY,
      sprites.bombRadius,
      sprites.bombColor,
      DIRECTION.UP
    );
  };

  playerShoots = () => {
    const bombs = [...this.state.bombs, this.createPlayerBomb()];
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
