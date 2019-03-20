import React from "react";

const Player = props => (
  <rect
    width={props.player.width}
    height={props.player.height}
    x={props.player.x}
    y={props.player.y}
    fill="Black"
  />
);

export default Player;
