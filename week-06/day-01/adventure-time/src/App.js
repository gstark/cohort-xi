import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Character from "./Character";
import CharacterList from "./CharacterList";
import Home from "./Home";
import NotFound from "./NotFound";

class App extends React.Component {
  render() {
    return (
      <Router>
        <>
          <h1>
            <Link to="/">Adventure Time</Link>
          </h1>
          <CharacterList />
          <main>
            <Switch>
              <Route path="/characters/:id" component={Character} />
              <Route exact path="/" component={Home} />
              <Route component={NotFound} />
            </Switch>
          </main>
        </>
      </Router>
    );
  }
}

export default App;
