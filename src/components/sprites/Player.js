import React from "react";

const Player = props => (
  <rect
    width="20"
    height="10"
    x={props.player.x}
    y={props.player.y}
    fill="Black"
  />
);

export default Player;
