import React, { Component } from 'react';
import axios from 'axios';


export class Home extends Component {

  state = {
    newPlayerName: "",
    players: []
  }

  componentDidMount() {
    this.getPlayers();
  }

  getPlayers = () => {
    axios
      .get("/api/players")
      .then(json => {
        this.setState({
          players: json.data
        })
      })
  }

  handleNewPlayerNameChange = (e) => {
    this.setState({
      newPlayerName: e.target.value
    })
  }

  addPlayerToGame = (e) => {
    e.preventDefault();
    axios
      .post("/api/players", { playerName: this.state.newPlayerName })
      .then(json => {
        console.log({ json });
        this.setState({
          players: this.state.players.concat(json.data)
        })
      })
  }

  deletePlayer = (playerId) => {
    axios
    .delete("/api/players/" + playerId)
    .then(json => {
      this.setState({
        players: this.state.players.filter(player => player.id != playerId)
      })
    })
  }

  render() {
    return (
      <div>
        <h1>Init Tracker</h1>
        <section>
          <button>sort</button>
          <form onSubmit={this.addPlayerToGame}>
            <input placeholder="Add new player" onChange={this.handleNewPlayerNameChange} />
            <button>Add player</button>
          </form>
        </section>
        <section>
          <ul>
            {this.state.players.map(player => {
              return <li key={player.id}>
                <span>{player.playerName}</span>
                <span> <input placeholder="init" /> </span>
                <span><button onClick={() => this.deletePlayer(player.id)}>remove</button></span>
              </li>
            })}
          </ul>
        </section>
      </div>
    );
  }
}
