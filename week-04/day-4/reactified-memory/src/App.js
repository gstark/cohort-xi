import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Card from "./Card";
const SYMBOLS = [
  "👹",
  "💩",
  "🤖",
  "🎩",
  "🍑",
  "🍍",
  "👾",
  "🎼",
  "🏹",
  "🎣",
  "⛵",
  "⌚",
  "📱",
  "🔫",
  "💣",
  "🎉",
  "🎎",
  "🃏",
  "🀄",
  "🎴",
  "👁",
  "☠",
  "⌛",
  "🍬",
  "🍭",
  "🍫",
  "🍿",
  "🍩",
  "🍪",
  "🍓",
  "🍈",
  "🍒",
  "🌹",
  "🌷",
  "🌼",
  "🌸",
  "💐",
  "🍄",
  "🌰",
  "🎃",
  "🐚",
  "🐾",
  "🐉",
  "🐲",
  "🌵",
  "🎄",
  "🌲",
  "🌳",
  "🌴",
  "🌱",
  "🌿",
  "☘",
  "🍀",
  "🎍",
  "🎋",
  "🍃",
  "🍂",
  "🍁",
  "🌾",
  "🚣",
  "🛀",
  "🏄",
  "🏇",
  "🏊",
  "⛹",
  "🏋",
  "🚴",
  "🚵"
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: ["🍿", "🍩", "🛀"]
    };
  }

  render() {
    return (
      <div className="App">
        <h1>MEMORY</h1>
        <ul className="board">
          <Card picture={this.state.cards[0]} />
          <Card picture={this.state.cards[1]} />
          <Card picture={this.state.cards[2]} />
        </ul>
      </div>
    );
  }
}

export default App;
