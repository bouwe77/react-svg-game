import React from "react";

const Bomb = props => (
  <circle
    cx={props.bomb.x}
    cy={props.bomb.y}
    r={props.bomb.radius}
    fill="red"
  />
);

export default Bomb;
