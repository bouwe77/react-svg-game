import React from "react";

import Map from "./Map";
import Button from "./Button";

export default class Game extends React.Component {
  render = () => {
    return (
      <div>
        <svg width={this.props.width} height={this.props.height}>
          <Map
            player={this.props.player}
            enemies={this.props.enemies}
            bombs={this.props.bombs}
          />
        </svg>

        <Button shoot={this.props.playerShoots} />
      </div>
    );
  };
}
