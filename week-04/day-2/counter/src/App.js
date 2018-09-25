import React, { Component } from "react";
import "./App.css";
import NumberDisplay from "./NumberDisplay";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myIncreasingNumber: 12,
      myDecreasingNumber: 12
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        myIncreasingNumber: this.state.myIncreasingNumber + 1,
        myDecreasingNumber: this.state.myDecreasingNumber - 1
      });
    }, 1000);
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <NumberDisplay theNumber={this.state.myIncreasingNumber} />
        <NumberDisplay theNumber={this.state.myDecreasingNumber} />
      </div>
    );
  }
}

export default App;
