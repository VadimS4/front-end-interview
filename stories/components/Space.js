import React from "react";

class Space extends React.Component {
  constructor() {
    super();
    this.state = {
      x: 0,
      y: 0
    };
  }

  handleSpaceClick = event => {
    // console.log(event.target.x.animVal.value)
    // console.log(event.target.y.animVal.value)
    this.setState({
      x: event.target.x.animVal.value,
      y: event.target.y.animVal.value
    });
  };

  render() {
    console.log(this.state);
    return (
      <rect
        onClick={this.handleSpaceClick}
        fill={this.props.shade ? "green" : "lightgray"}
        height={this.props.size}
        width={this.props.size}
        x={this.props.x}
        y={this.props.y}
      />
    );
  }
}

export default Space;
