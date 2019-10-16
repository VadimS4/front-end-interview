import React from "react";

class Piece extends React.Component {
  render() {
    return (
      <circle
        onClick={props => this.props.handlePieceClick(props)}
        cx={this.props.centerX}
        cy={this.props.centerY}
        fill={this.props.player === 1 ? "white" : "red"}
        r={this.props.radius}
      />
    );
  }
}

export default Piece;
