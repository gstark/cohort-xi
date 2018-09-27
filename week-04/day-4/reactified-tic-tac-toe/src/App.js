import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Square from "./Square";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      game: [" ", " ", " ", " ", " ", " ", " ", " ", " "],
      whoseTurnIsIt: "O",
      winningMessage: ""
    };
  }

  resetGame = () => {
    this.setState({
      game: [" ", " ", " ", " ", " ", " ", " ", " ", " "],
      whoseTurnIsIt: "O",
      winningMessage: ""
    });
  };

  determineWinner = game => {
    if (
      game[0] !== " " &&
      game[1] !== " " &&
      game[2] !== " " &&
      game[3] !== " " &&
      game[4] !== " " &&
      game[5] !== " " &&
      game[6] !== " " &&
      game[7] !== " " &&
      game[8] !== " "
    ) {
      this.setState({ winningMessage: "DRAW" });
    }
    if (
      (game[0] === "X" && game[1] === "X" && game[2] === "X") ||
      (game[3] === "X" && game[4] === "X" && game[5] === "X") ||
      (game[6] === "X" && game[7] === "X" && game[8] === "X") ||
      (game[0] === "X" && game[3] === "X" && game[6] === "X") ||
      (game[1] === "X" && game[4] === "X" && game[7] === "X") ||
      (game[2] === "X" && game[5] === "X" && game[8] === "X") ||
      (game[0] === "X" && game[3] === "X" && game[6] === "X") ||
      (game[0] === "X" && game[4] === "X" && game[8] === "X") ||
      (game[2] === "X" && game[4] === "X" && game[6] === "X")
    ) {
      this.setState({ winningMessage: "X wins" });
    }
    if (
      (game[0] === "O" && game[1] === "O" && game[2] === "O") ||
      (game[3] === "O" && game[4] === "O" && game[5] === "O") ||
      (game[6] === "O" && game[7] === "O" && game[8] === "O") ||
      (game[0] === "O" && game[3] === "O" && game[6] === "O") ||
      (game[1] === "O" && game[4] === "O" && game[7] === "O") ||
      (game[2] === "O" && game[5] === "O" && game[8] === "O") ||
      (game[0] === "O" && game[3] === "O" && game[6] === "O") ||
      (game[0] === "O" && game[4] === "O" && game[8] === "O") ||
      (game[2] === "O" && game[4] === "O" && game[6] === "O")
    ) {
      this.setState({ winningMessage: "O wins" });
    }
  };

  handlePlayerChoice = whereClicked => {
    // If this winningMessage is anything other than the empty string
    //
    // OR
    //
    //this square is anything other than a space, GTFO
    //
    if (
      this.state.winningMessage !== "" ||
      this.state.game[whereClicked] !== " "
    ) {
      return;
    }

    this.setState((state, props) => {
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

      newGame[whereClicked] = state.whoseTurnIsIt;

      this.determineWinner(newGame);

      let newWhoseTurnIsIt;
      if (state.whoseTurnIsIt === "X") {
        newWhoseTurnIsIt = "O";
      } else {
        newWhoseTurnIsIt = "X";
      }

      return {
        game: newGame,
        whoseTurnIsIt: newWhoseTurnIsIt
      };
    });
  };

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
          <button onClick={this.resetGame}>NEWGAME</button>
          <h2>{this.state.winningMessage}</h2>
        </footer>
      </div>
    );
  }
}

export default App;
