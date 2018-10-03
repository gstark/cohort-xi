import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class Clowder extends Component {
  render() {
    return (
      <aside>
        <ul>
          {this.props.cats.map(cat => {
            return <li>{cat.name}</li>
          })}
        </ul>
      </aside>
    )
  }
}

export default Clowder
