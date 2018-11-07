import React, { Component } from "react";
import "./App.css";
// import SplashPage from './Pages/Splash'
import HomePage from "./Pages/Home";
import Location from "./Pages/Location";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <nav
            className="navbar is-dark"
            role="navigation"
            aria-label="main navigation"
          >
            <div className="navbar-brand">
              <a className="navbar-item" href="/">
                Coffee Ship, Sail the Java Seas.
              </a>
            </div>

            {/* <div id="navbarBasicExample" className="navbar-menu">


                    </div> */}

            {/* <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <a className="button is-primary">
                                    <strong>Sign up</strong>
                                </a>
                                <a className="button is-light">
                                    Log in
                               </a>
                            </div>
                        </div>
                    </div> */}
          </nav>

          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/location/:id" exact component={Location} />
            {/* <Route path="/home" exact component={HomePage}/> */}
          </Switch>
        </>
      </Router>
    );
  }
}

export default App;
