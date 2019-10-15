import React from "react";

class Piece extends React.Component {
  constructor() {
    super();
    this.state = {
      cx: 0,
      cy: 0
    };
  }

  handlePieceClick = event => {
    event.preventDefault();

    if (this.props.player === 1) {
      console.log("White");
      console.log(event.target.cx.animVal.value);
      console.log(event.target.cy.animVal.value);
    } else {
      console.log("Red");
      console.log(event.target.cx.animVal.value);
      console.log(event.target.cy.animVal.value);
    }

    this.setState({
      cx: event.target.cx.animVal.value,
      cy: event.target.cy.animVal.value
    });
  };

  render() {
    console.log(this.state);
    return (
      <circle
        onClick={this.handlePieceClick}
        cx={this.props.centerX}
        cy={this.props.centerY}
        fill={this.props.player === 1 ? "white" : "red"}
        r={this.props.radius}
      />
    );
  }
}

export default Piece;
