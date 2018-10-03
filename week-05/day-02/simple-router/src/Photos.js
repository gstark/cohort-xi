import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'

import Photo from './Photo'

class Photos extends Component {
  render() {
    return (
      <div>
        Photos
        <ul>
          <li>
            <Link to="/photos/1">ONE</Link>
          </li>
          <li>
            <Link to="/photos/2">TWO</Link>
          </li>
        </ul>
        <Switch>
          <Route
            path="/photos/:photo"
            component={route => {
              console.log(route)
              return <Photo photo={route.match.params.photo} />
            }}
          />
        </Switch>
      </div>
    )
  }
}

export default Photos
