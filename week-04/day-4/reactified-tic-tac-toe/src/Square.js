import React, { Component } from "react";

class Square extends Component {
  handleClick = event => {
    this.props.whatToDoWhenClicked(this.props.position);
  };

  render() {
    return <td onClick={this.handleClick}>{this.props.choice}</td>;
  }
}

export default Square;
