import React, { Component } from "react";

class WeatherConditions extends Component {
  render() {
    return (
      <ul class="weatherconditions">
        <li>
          It is currently {this.props.temp} in {this.props.city}
        </li>
        <li>With a humidity of {this.props.humidity}</li>
        <li>Today's high is {this.props.dayHigh}</li>
        <li>Today's low is {this.props.dayLow}</li>
      </ul>
    );
  }
}

export default WeatherConditions;
