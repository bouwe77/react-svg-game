import { createPlayer, createEnemy, createBomb } from "./sprites";
import { game, sprites, DIRECTION } from "./constants";

export default class factory {
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

  createPlayerBomb = player => {
    const bombX = player.x + sprites.playerWidth / 2;
    const bombY = player.y;
    return createBomb(
      bombX,
      bombY,
      sprites.bombRadius,
      sprites.bombColor,
      DIRECTION.UP
    );
  };
}
