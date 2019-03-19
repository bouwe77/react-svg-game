import React from "react";

import Player from "./sprites/Player";
import Enemy from "./sprites/Enemy";
import Bomb from "./sprites/Bomb";

export default class Map extends React.Component {
  render() {
    return (
      <g fill="gray" stroke="none">
        {this.props.enemies.map(enemy => (
          <Enemy enemy={enemy} />
        ))}

        <Bomb />
        <Player player={this.props.player} />
      </g>
    );
  }
}
