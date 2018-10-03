import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div>
        Welcome Click
        <Link to="/cats">here</Link>
        to go to the cats
      </div>
    )
  }
}

export default Home
