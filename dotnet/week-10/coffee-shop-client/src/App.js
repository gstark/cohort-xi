import React, { Component } from 'react';
import './App.css';
import SplashPage from './Pages/Splash'
import HomePage from './Pages/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



class App extends Component {
  render() {
    return (
    <Router>
      <Switch>
        <Route path="/" exact component={SplashPage}/>
        <Route path="/home" exact component={HomePage}/>
      </Switch>
    </Router>
    );
  }
}

export default App;
