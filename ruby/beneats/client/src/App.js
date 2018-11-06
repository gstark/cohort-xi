import React, { Component } from "react";

class App extends Component {
  state = {
    restaurants: []
  };

  componentDidMount() {
    fetch("/api/restaurants")
      .then(r => r.json())
      .then(restaurants => {
        this.setState({ restaurants });
      });
  }

  render() {
    return (
      <div className="App">
        <ul>
          {this.state.restaurants.map(r => (
            <li key={r.id}>{r.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
