import React, { Component } from "react";

class PriceRange extends Component {
  render() {
    return <h3>{"$".repeat(this.props.priceRange + 1)}</h3>;
  }
}

export default PriceRange;
