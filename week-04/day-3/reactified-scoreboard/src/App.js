import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Team from "./Team";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My Score Board</h1>

        <main>
          <Team number="1" />
          <Team number="2" />
        </main>
      </div>
    );
  }
}

export default App;
