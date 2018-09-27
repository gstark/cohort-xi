import React, { Component } from "react";
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
      cards: []
    };
  }

  componentWillMount() {
    let newCards = [];

    // Generate 12 pairs of cards
    for (let count = 0; count < 12; count++) {
      // Pick a random number between 0 and the number of symbols
      let randomIndex = Math.floor(Math.random() * SYMBOLS.length);

      // push that symbol based card TWICE (so there are pairs)
      newCards.push({
        picture: SYMBOLS[randomIndex],
        solved: false,
        hidden: true
      });
      newCards.push({
        picture: SYMBOLS[randomIndex],
        solved: false,
        hidden: true
      });
    }

    // Shuffle the newCards!
    for (let i = newCards.length - 1; i > 1; i -= 1) {
      let j = Math.floor(Math.random() * i);
      let firstCard = newCards[i];
      let secondCard = newCards[j];
      newCards[i] = secondCard;
      newCards[j] = firstCard;
    }

    this.setState({
      cards: newCards
    });
  }

  checkForMatch = (firstCard, secondCard) => {
    if (firstCard.picture === secondCard.picture) {
      firstCard.solved = true;
      secondCard.solved = true;
    }
    firstCard.hidden = true;
    secondCard.hidden = true;
    this.setState({
      cards: this.state.cards
    });
  };

  flipCard = position => {
    let revealedCards = this.state.cards.filter(card => {
      let keep = card.hidden === false;
      return keep;
    });

    // If there are two or more cards flipped, GTFO
    if (revealedCards.length >= 2) {
      return;
    }

    const cards = this.state.cards;
    const card = cards[position];

    // If the card is already solved, GTFO
    if (card.solved) {
      return;
    }

    // duplicate the cards
    let newCards = cards.slice(0, cards.length - 1);
    newCards[position].hidden = false;

    this.setState({
      cards: newCards
    });

    if (revealedCards.length === 1) {
      setTimeout(() => {
        this.checkForMatch(revealedCards[0], card);
      }, 2000);
    }
  };

  render() {
    let cards = this.state.cards.map((card, index) => {
      return (
        <Card
          key={index}
          position={index}
          whatToDoWhenClicked={this.flipCard}
          hidden={card.hidden}
          picture={card.picture}
          solved={card.solved}
        />
      );
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
