import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <li class="card unsolved">
        <div class="content">
          <div class="front">{this.props.picture}</div>
          <div class="back" />
        </div>
      </li>
    );
  }
}

export default Card;
