import React from "react";

const Bomb = props => (
  <circle cx={props.bomb.x} cy={props.bomb.y} r="3" fill="red" />
);

export default Bomb;
