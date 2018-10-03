import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class Clowder extends Component {
  render() {
    return (
      <aside>
        <ul>
          <li>{this.props.cats[0].name}</li>
          <li>{this.props.cats[1].name}</li>
          <li>{this.props.cats[2].name}</li>
          <li>{this.props.cats[3].name}</li>
          <li>{this.props.cats[4].name}</li>
        </ul>
      </aside>
    )
  }
}

export default Clowder
