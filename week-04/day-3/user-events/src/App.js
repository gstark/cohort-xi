import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonText: "Please CLICK ME!"
    };
  }

  handleClickingOnTheButton = () => {
    this.setState({
      buttonText: "Nice, thanks for clicking me"
    });
  };

  handleRightClickingOnTheButton = event => {
    this.setState({
      buttonText: "Cool, thanks for right clicking me"
    });
    event.preventDefault();
  };

  handleGoogleLink = event => {
    this.setState({
      buttonText: "Wow, google"
    });
    event.preventDefault();
  };

  render = () => {
    return (
      <div className="App">
        <div onClick={this.handleClickingOnTheButton}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <a onClick={this.handleGoogleLink} href="http://google.com">
          Google
        </a>
        <button
          onClick={this.handleClickingOnTheButton}
          onContextMenu={this.handleRightClickingOnTheButton}
        >
          {this.state.buttonText}
        </button>
      </div>
    );
  };
}

export default App;
