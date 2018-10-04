import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

class Cat extends Component {
  render() {
    return (
      <li>
        <Link to={`/cats/${this.props.number}`}>{this.props.name}</Link>
      </li>
    )
  }
}

export default Cat
