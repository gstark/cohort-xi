import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      team1score: 0,
      team2score: 0,
      team1name: "Team One",
      team2name: "Team Two"
    };
  }

  addOneToTeamOne = event => {
    this.setState((state, props) => {
      return {
        team1score: state.team1score + 1
      };
    });
  };

  subtractOneFromTeamOne = event => {
    this.setState((state, props) => {
      if (state.team1score === 0) {
        return {};
      }

      return {
        team1score: state.team1score - 1
      };
    });
  };

  addOneToTeamTwo = event => {
    this.setState((state, props) => {
      return {
        team2score: state.team2score + 1
      };
    });
  };

  subtractOneFromTeamTwo = event => {
    this.setState((state, props) => {
      if (state.team2score === 0) {
        return {};
      }

      return {
        team2score: state.team2score - 1
      };
    });
  };

  render() {
    return (
      <div className="App">
        <h1>My Score Board</h1>

        <main>
          <div className="team1">
            <h2 className="team">{this.state.team1name}</h2>
            <figure className="score">{this.state.team1score}</figure>
            <ul>
              <li>
                Update team 1 <input className="teamname" />
                <button className="update">Update</button>
              </li>
              <li>
                Update Team 1 Score
                <button className="add" onClick={this.addOneToTeamOne}>
                  Add 1
                </button>
                <button
                  className="subtract"
                  onClick={this.subtractOneFromTeamOne}
                >
                  Subtract 1
                </button>
              </li>
            </ul>
          </div>
          <div className="team2">
            <h2 className="team">{this.state.team2name}</h2>
            <figure className="score">{this.state.team2score}</figure>
            <ul>
              <li>
                Update team 2 <input className="teamname" />
                <button className="update">Update</button>
              </li>
              <li>
                Update Team 2 Score
                <button className="add" onClick={this.addOneToTeamTwo}>
                  Add 1
                </button>
                <button
                  className="subtract"
                  onClick={this.subtractOneFromTeamTwo}
                >
                  Subtract 1
                </button>
              </li>
            </ul>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
