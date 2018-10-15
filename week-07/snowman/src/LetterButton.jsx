import React, { Component } from 'react'

class LetterButton extends Component {
  state = {}
  _letterChoice = event => {
    console.log(this.props.letter)
  }
  render() {
    return <button onClick={this._letterChoice}>{this.props.letter}</button>
  }
}

export default LetterButton
