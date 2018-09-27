import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

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
  render() {
    return (
      <div className="App">
        <h1>MEMORY</h1>
        <ul className="board">
          <li class="card unsolved">
            <div class="content">
              <div class="front">🍿</div>
              <div class="back" />
            </div>
          </li>
          <li class="card  unsolved">
            <div class="content">
              <div class="front">🍩</div>
              <div class="back" />
            </div>
          </li>
          <li class="card  unsolved">
            <div class="content">
              <div class="front">🛀</div>
              <div class="back" />
            </div>
          </li>
          <li class="card  unsolved">
            <div class="content">
              <div class="front">🛀</div>
              <div class="back" />
            </div>
          </li>
          <li class="card  unsolved">
            <div class="content">
              <div class="front">🛀</div>
              <div class="back" />
            </div>
          </li>
          <li class="card  unsolved">
            <div class="content">
              <div class="front">🛀</div>
              <div class="back" />
            </div>
          </li>
          <li class="card  unsolved">
            <div class="content">
              <div class="front">🛀</div>
              <div class="back" />
            </div>
          </li>
          <li class="card  unsolved">
            <div class="content">
              <div class="front">🛀</div>
              <div class="back" />
            </div>
          </li>
          <li class="card  unsolved">
            <div class="content">
              <div class="front">🛀</div>
              <div class="back" />
            </div>
          </li>
          <li class="card  unsolved">
            <div class="content">
              <div class="front">🛀</div>
              <div class="back" />
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
