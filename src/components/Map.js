import React from "react";

export default class Map extends React.Component {
  render() {
    return (
      <g fill="gray" stroke="none">
        <rect
          width={this.props.width}
          height={this.props.height}
          x={this.props.playerPosition.x}
          y={this.props.playerPosition.y}
        />
      </g>
    );
  }
}
