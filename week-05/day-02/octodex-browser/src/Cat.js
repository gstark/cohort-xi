import React, { Component } from 'react'

class Cat extends Component {
  clickedCat = event => {
    console.log('Clicked a cat', this.props.number)
  }

  render() {
    return <li onClick={this.clickedCat}>{this.props.name}</li>
  }
}

export default Cat
