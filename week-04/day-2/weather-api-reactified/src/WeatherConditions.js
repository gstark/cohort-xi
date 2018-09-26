import React, { Component } from "react";

class WeatherConditions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      humidityIncreasing: false
    };
  }

  componentWillReceiveProps = newProps => {
    console.log("the component received ", newProps);
    console.log("the component current props is ", this.props);

    if (newProps.humidity > this.props.humidity) {
      this.setState((state, props) => {
        return {
          humidityIncreasing: true
        };
      });
    }
  };

  render() {
    let humidityClass = "normal";

    if (this.state.humidityIncreasing) {
      humidityClass = "increasing";
    }

    return (
      <ul class="weatherconditions">
        <li>
          It is currently {this.props.temp} in {this.props.city}
        </li>
        <li className={humidityClass}>
          With a humidity of {this.props.humidity}
        </li>
        <li>Today's high is {this.props.dayHigh}</li>
        <li>Today's low is {this.props.dayLow}</li>
      </ul>
    );
  }
}

export default WeatherConditions;
