import React from "react";

import Player from "./sprites/Player";
import Enemy from "./sprites/Enemy";
import Bomb from "./sprites/Bomb";

export default class Map extends React.Component {
  render() {
    return (
      <g fill="gray" stroke="none">
        {this.props.enemies.map((enemy, index) => (
          <Enemy key={"e" + index} enemy={enemy} />
        ))}
        {this.props.bombs.map((bomb, index) => (
          <Bomb key={"b" + index} bomb={bomb} />
        ))}

        <Player player={this.props.player} />
      </g>
    );
  }
}
