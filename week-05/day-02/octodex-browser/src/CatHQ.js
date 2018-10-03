import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import axios from 'axios'

import Clowder from './Clowder'
import CatInfo from './CatInfo'

class CatHQ extends Component {
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
    return (
      <div className="CatHQ">
        <Clowder cats={this.state.data} adoptCat={this.adoptCat} />
        <Switch>
          <Route
            path={`/cats/:catNumberFromTheURL`}
            component={route => {
              return (
                <CatInfo
                  catNumberFromTheURL={route.match.params.catNumberFromTheURL}
                  cats={this.state.data}
                />
              )
            }}
          />
        </Switch>
      </div>
    )
  }
}

export default CatHQ
