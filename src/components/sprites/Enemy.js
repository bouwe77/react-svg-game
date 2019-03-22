import React from "react";

const Enemy = props => (
  <rect
    width={props.enemy.width}
    height={props.enemy.height}
    x={props.enemy.x}
    y={props.enemy.y}
    fill={props.enemy.color}
  />
);

export default Enemy;
