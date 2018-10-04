import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './Home'
import About from './About'
import Photos from './Photos'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <header>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/photos">Photos</Link>
            </header>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/photos" component={Photos} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App
