import React from "react";

export default class ButtonMove extends React.Component {
  move = () => {
    this.props.move();
  };

  render = () => <button onClick={this.move}>{this.props.text}</button>;
}
