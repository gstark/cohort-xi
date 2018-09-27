import React, { Component } from "react";

class Card extends Component {
  handleClick = event => {
    this.props.whatToDoWhenClicked(this.props.position);
  };

  render() {
    const solvedClass = this.props.solved ? "solved" : "unsolved";
    const flippedClass = this.props.hidden ? "flipped" : "";

    return (
      <li
        onClick={this.handleClick}
        className={`card ${flippedClass} ${solvedClass}`}
      >
        <div className="content">
          <div className="front">{this.props.picture}</div>
          <div className="back" />
        </div>
      </li>
    );
  }
}

export default Card;
