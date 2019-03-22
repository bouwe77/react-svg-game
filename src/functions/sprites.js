export const createPlayer = (x, y, width, height, color) =>
  createRectangle(x, y, width, height, color);

export const createEnemy = (x, y, width, height, color, direction) => {
  let enemy = createRectangle(x, y, width, height, color);
  return { ...enemy, direction };
};

export const createBomb = (x, y, radius, color, direction) => {
  let bomb = createCircle(x, y, radius, color);
  return { ...bomb, direction };
};

const createRectangle = (x, y, width, height, color) => {
  let sprite = createSprite(x, y, color);
  return { ...sprite, width, height };
};

const createCircle = (x, y, radius, color) => {
  let sprite = createSprite(x, y, color);
  return { ...sprite, radius };
};

const createSprite = (x, y, color) => ({ x, y, color, exploded: false });
