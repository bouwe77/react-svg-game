import React from "react";

export default class Button extends React.Component {
  shoot = () => {
    this.props.shoot();
  };

  render = () => <button onClick={this.shoot}>shoot!</button>;
}
