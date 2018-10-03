import React, { Component } from 'react'
import axios from 'axios'

import Clowder from './Clowder'
import CatInfo from './CatInfo'

class App extends Component {
  constructor(props) {
    super(props)

    // NULL STATE
    this.state = {
      data: [],
      selectedCatNumber: 36
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

  adoptCat = number => {
    this.setState({ selectedCatNumber: number })
  }

  render() {
    const currentCat = this.state.data.find(cat => {
      return cat.number === this.state.selectedCatNumber
    })

    console.log('the array of cats is ', this.state.data)
    console.log('the current cat index is ', this.state.selectedCatIndex)
    console.log('the current cat is ', currentCat)

    return (
      <div className="App">
        <Clowder cats={this.state.data} adoptCat={this.adoptCat} />
        <CatInfo cat={currentCat} />
      </div>
    )
  }
}

export default App
