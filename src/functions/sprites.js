export const spriteConstants = {
  // player
  playerWidth: 20,
  playerHeight: 10,

  // enemies
  enemyWidth: 20,
  enemyHeight: 10,
  enemySpeed: 1,

  // bombs
  bombRadius: 3,
  bombSpeed: 1
};

export const createPlayer = (x, y, width, height) =>
  createRectangle(x, y, width, height);

export const createEnemy = (x, y, width, height) =>
  createRectangle(x, y, width, height);

export const createBomb = (x, y, radius, direction) => {
  let bomb = createCircle(x, y, radius);
  return { ...bomb, direction, exploded: false };
};

const createRectangle = (x, y, width, height) => ({ x, y, width, height });

const createCircle = (x, y, radius) => ({ x, y, radius });
