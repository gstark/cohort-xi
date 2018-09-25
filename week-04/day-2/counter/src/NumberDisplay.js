import React, { Component } from "react";

class NumberDisplay extends Component {
  render() {
    console.log(
      "I am the child component and my this.props.theNumber is ",
      this.props.theNumber
    );
    return (
      <ul>
        <li>{this.props.theNumber}</li>
      </ul>
    );
  }
}

export default NumberDisplay;
