import React from "react";

import Map from "./Map";
import ButtonShoot from "./ButtonShoot";
import ButtonMove from "./ButtonMove";

export default class Game extends React.Component {
  render = () => {
    return (
      <div>
        <svg width={this.props.canvasWidth} height={this.props.canvasHeight}>
          <Map
            player={this.props.player}
            enemies={this.props.enemies}
            bombs={this.props.bombs}
          />
        </svg>
        <div>
          <ButtonMove text="<<" move={this.props.playerMoveLeft} />
          <ButtonShoot shoot={this.props.playerShoots} />
          <ButtonMove text=">>" move={this.props.playerMoveRight} />
        </div>
      </div>
    );
  };
}
