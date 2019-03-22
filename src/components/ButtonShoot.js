import React from "react";

export default class ButtonShoot extends React.Component {
  shoot = () => {
    this.props.shoot();
  };

  render = () => <button onClick={this.shoot}>shoot!</button>;
}
