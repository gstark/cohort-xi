import React, { Component } from "react";
import "./App.css";
// import SplashPage from './Pages/Splash'
import HomePage from "./Pages/Home";
import Location from "./Pages/Location";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

class App extends Component {
  state = {
    redirect: false
  };

  handleSearchTermUpdate = e => {
    this.setState({ searchTerm: e.target.value });
  };
  handleSearch = e => {
    e.preventDefault();
    this.setState({
      redirect: true
    });
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to={`/search/${this.state.searchTerm}`} />;
    }
  };
  componentDidMount() {
    this.setState({
      redirect: false
    });
  }

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
          <form onSubmit={this.handleSearch} className="search-form">
            <div className="field has-addons">
              <div className="control">
                <input
                  onChange={this.handleSearchTermUpdate}
                  className="input"
                  type="text"
                  placeholder="Find a coffee harbor"
                />
              </div>
              <div className="control">
                <a className="button is-info">Search</a>
              </div>
              <div className="control">
                <a className="button is-primary">Near me</a>
              </div>
            </div>
          </form>

          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/location/:id" exact component={Location} />
            <Route path="/search/:searchterm" exact component={HomePage} />
            {/* <Route path="/home" exact component={HomePage}/> */}
            {this.renderRedirect()}
          </Switch>
        </>
      </Router>
    );
  }
}

export default App;
