import React, { Component } from 'react';
import axios from 'axios';


export class Home extends Component {
 
  state ={
    newPlayerName:""
  }

  handleNewPlayerNameChange = (e) =>{
    this.setState({
      newPlayerName:e.target.value
    })
  }

  addPlayerToGame = (e) => {
    e.preventDefault();
    axios 
      .post("/api/players",{playerName:this.state.newPlayerName})
      .then(json => {
        console.log({json});
      })
  }

  render() {
    return (
      <div>
        <h1>Init Tracker</h1>
        <section>
          <button>sort</button>
          <form onSubmit={this.addPlayerToGame}> 
            <input placeholder="Add new player" onChange={this.handleNewPlayerNameChange}/>
            <button>Add player</button>
          </form>
        </section>
        <section>
          <ul>
            <li>
              <span>Paul</span>
              <span> <input placeholder="init" /> </span>
              <span><button>remove</button></span>
            </li>
            <li>
              <span>Jimmy</span>
              <span> <input placeholder="init" /> </span>
              <span><button>remove</button></span>
            </li><li>
              <span>Sarah</span>
              <span> <input placeholder="init" /> </span>
              <span><button>remove</button></span>
            </li><li>
              <span>Lynn</span>
              <span> <input placeholder="init" /> </span>
              <span><button>remove</button></span>
            </li>
          </ul>
        </section>
      </div>
    );
  }
}
