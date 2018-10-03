import React, { Component } from 'react'
import axios from 'axios'

import Clowder from './Clowder'
import CatInfo from './CatInfo'

class App extends Component {
  constructor(props) {
    super(props)

    // NULL STATE
    this.state = {
      data: []
    }
  }

  componentDidMount = () => {
    this.hereKittyKittyKitty()
  }

  hereKittyKittyKitty = () => {
    axios.get('https://sdg-octodex.herokuapp.com/').then(response => {
      this.setState(response.data)
    })
  }
  render() {
    return (
      <div className="App">
        <Clowder cats={this.state.data} />
        <CatInfo />
      </div>
    )
  }
}

export default App
