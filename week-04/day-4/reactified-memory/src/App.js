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
      cards: ["🍿", "🍩", "🛀", "🍿", "🍩", "🛀"]
    };
  }

  render() {
    let cards = this.state.cards.map(card => {
      return <Card picture={card} />;
    });

    return (
      <div className="App">
        <h1>MEMORY</h1>
        <ul className="board">{cards}</ul>
      </div>
    );
  }
}

export default App;
