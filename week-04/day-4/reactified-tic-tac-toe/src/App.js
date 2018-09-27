import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Square from "./Square";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      game: [" ", " ", " ", " ", " ", " ", " ", " ", " "]
    };
  }

  handlePlayerChoice = (exOrOh, whereClicked) => {
    const newGame = [
      this.state.game[0],
      this.state.game[1],
      this.state.game[2],
      this.state.game[3],
      this.state.game[4],
      this.state.game[5],
      this.state.game[6],
      this.state.game[7],
      this.state.game[8]
    ];

    newGame[whereClicked] = exOrOh;

    this.setState((state, props) => {
      return {
        game: newGame
      };
    });
  };

  componentDidMount() {
    this.handlePlayerChoice("O", 0);
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>TIC TAC TOE</h1>
        </header>
        <main>
          <table className="board">
            <tr>
              <Square
                whatToDoWhenClicked={this.handlePlayerChoice}
                position={0}
                choice={this.state.game[0]}
              />
              <Square
                whatToDoWhenClicked={this.handlePlayerChoice}
                position={1}
                choice={this.state.game[1]}
              />
              <Square
                whatToDoWhenClicked={this.handlePlayerChoice}
                position={2}
                choice={this.state.game[2]}
              />
            </tr>
            <tr>
              <Square
                whatToDoWhenClicked={this.handlePlayerChoice}
                position={3}
                choice={this.state.game[3]}
              />
              <Square
                whatToDoWhenClicked={this.handlePlayerChoice}
                position={4}
                choice={this.state.game[4]}
              />
              <Square
                whatToDoWhenClicked={this.handlePlayerChoice}
                position={5}
                choice={this.state.game[5]}
              />
            </tr>
            <tr>
              <Square
                whatToDoWhenClicked={this.handlePlayerChoice}
                position={6}
                choice={this.state.game[6]}
              />
              <Square
                whatToDoWhenClicked={this.handlePlayerChoice}
                position={7}
                choice={this.state.game[7]}
              />
              <Square
                whatToDoWhenClicked={this.handlePlayerChoice}
                position={8}
                choice={this.state.game[8]}
              />
            </tr>
          </table>
        </main>

        <footer>
          <button className="reset">NEWGAME</button>
          <h2 />
        </footer>
      </div>
    );
  }
}

export default App;
