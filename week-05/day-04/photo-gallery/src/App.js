import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CategoryList from "./CategoryList";
import PhotoList from "./PhotoList";
import PhotoDetail from "./PhotoDetail";

class App extends Component {
  state = {
    bodyClass: null
  };

  setBodyClass = name => {
    this.setState({ bodyClass: name });
  };

  render() {
    return (
      <Router>
        <div className={this.state.bodyClass}>
          <section class="section">
            <div class="container">
              <h1 class="title">Things I like</h1>
              <p class="subtitle">
                A Photo Gallery by <strong>Jason L Perry</strong>
              </p>
            </div>
          </section>
          <Switch>
            <Route exact path="/" component={CategoryList} />
            <Route
              path="/:category"
              render={props => (
                <PhotoList {...props} bodyClass={this.setBodyClass} />
              )}
            />
            <Route path="/:category/:index" component={PhotoDetail} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
