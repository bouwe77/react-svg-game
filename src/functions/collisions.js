export const didBombHitTarget = (bomb, target) => {
  const bombCoordinates = [createCoordinateString(bomb.x, bomb.y)];
  const targetCoordinates = [createCoordinateString(target.x, target.y)];

  return targetCoordinates.some(r => bombCoordinates.indexOf(r) >= 0);
};

const createCoordinateString = (x, y) => `(${x},${y})`;
