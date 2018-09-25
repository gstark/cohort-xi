import React, { Component } from "react";
import "./App.css";

import WeatherConditions from "./WeatherConditions";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchWeather: {
        temp: "UNKNOWN",
        humidity: "UNKNOWN",
        dayHigh: "UNKNOWN",
        dayLow: "UNKNOWN",
        city: "Chicago"
      },
      tampaWeather: {
        temp: "UNKNOWN",
        humidity: "UNKNOWN",
        dayHigh: "UNKNOWN",
        dayLow: "UNKNOWN",
        city: "Tampa"
      }
    };
  }

  // When this component appears on the HTML
  componentDidMount() {
    this.fetchTheWeather(this.state.searchWeather.city).then(json => {
      this.setState({
        searchWeather: {
          humidity: json.main.humidity,
          temp: json.main.temp,
          dayHigh: json.main.temp_max,
          dayLow: json.main.temp_min,
          city: this.state.searchWeather.city
        }
      });
    });
    this.fetchTheWeather(this.state.tampaWeather.city).then(json => {
      this.setState({
        tampaWeather: {
          humidity: json.main.humidity,
          temp: json.main.temp,
          dayHigh: json.main.temp_max,
          dayLow: json.main.temp_min,
          city: this.state.tampaWeather.city
        }
      });
    });
  }

  fetchTheWeather = city => {
    // 5 get the value from the input field and request that data be 'fetched' by the API
    return fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=imperial&APPID=fc44c2946ba0817cb79fc8eb3a06b9d2"
    ).then(response => {
      return response.json();
    });
  };

  handleSearch = event => {
    this.fetchTheWeather("Orlando");
  };

  render() {
    return (
      <div>
        <header>
          <h1> Welcome to the Weather API for {this.state.city}</h1>
          <h2 />
        </header>
        <main>
          <p>search for local weather by city or zip</p>
          <input
            class="search"
            value={this.state.city}
            title="Input your zip code or city name here"
          />
          <button
            onClick={this.handleSearch}
            class="search-button"
            title="Click me to search for weather"
          >
            search
          </button>
          <WeatherConditions
            temp={this.state.searchWeather.temp}
            humidity={this.state.searchWeather.humidity}
            dayHigh={this.state.searchWeather.dayHigh}
            dayLow={this.state.searchWeather.dayLow}
            city={this.state.searchWeather.city}
          />
          <WeatherConditions
            temp={this.state.tampaWeather.temp}
            humidity={this.state.tampaWeather.humidity}
            dayHigh={this.state.tampaWeather.dayHigh}
            dayLow={this.state.tampaWeather.dayLow}
            city={this.state.tampaWeather.city}
          />
        </main>
      </div>
    );
  }
}

export default App;
