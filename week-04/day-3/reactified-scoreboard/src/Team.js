import React, { Component } from "react";

class Team extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      score: 0
    };
  }

  addOne = event => {
    this.setState((state, props) => {
      return {
        score: state.score + 1
      };
    });
  };

  subtractOne = event => {
    this.setState((state, props) => {
      if (state.score === 0) {
        return {};
      }

      return {
        score: state.score - 1
      };
    });
  };

  handleChangingName = event => {
    let name = event.target.value;

    this.setState((state, props) => {
      return {
        name: name
      };
    });
  };

  render() {
    const teamClassName = `team${this.props.number}`;

    return (
      <div className={teamClassName}>
        <h2 className="team">{this.state.name}</h2>
        <figure className="score">{this.state.score}</figure>
        <ul>
          <li>
            Update team {this.props.number}
            <input
              className="teamname"
              value={this.state.name}
              onChange={this.handleChangingName}
            />
          </li>
          <li>
            Update Team {this.props.number} Score
            <button className="add" onClick={this.addOne}>
              Add 1
            </button>
            <button className="subtract" onClick={this.subtractOne}>
              Subtract 1
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

export default Team;
