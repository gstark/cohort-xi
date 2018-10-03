import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Home from './Home'
import CatHQ from './CatHQ'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/cats" component={CatHQ} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
