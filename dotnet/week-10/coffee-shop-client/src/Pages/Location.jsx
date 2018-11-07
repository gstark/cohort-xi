import React, { Component } from "react";
import axios from "axios";
import PriceRange from "./Components/PriceRange";

class Location extends Component {
  state = {
    location: {
      franchise: {}
    }
  };

  componentDidMount() {
    axios
      .get(`https://localhost:5001/api/locations/${this.props.match.params.id}`)
      .then(json => {
        this.setState({ location: json.data });
      });
  }

  render() {
    return (
      <div>
        <section className="top-section">
          <figure class="image is-128x128">
            <img
              alt={this.state.location.franchise.brand}
              src={this.state.location.imageUrl}
            />
          </figure>
          {/* {"*"
            .repeat(25)
            .split("")
            .map(() => {
              const x = Math.floor(Math.random() * 100) + 400;
              const y = Math.floor(Math.random() * 100) + 300;
              return <img src={`http://placekitten.com/${x}/${y}`} />;
            })} */}
          <section className="information">
            <h1>{this.state.location.franchise.brand}</h1>
            <h3>{this.state.location.address}</h3>
            <PriceRange priceRange={this.state.location.priceRange} />
            <h3>{this.state.location.franchise.isLocal}</h3>
          </section>
        </section>
        <section className="middle-section">
          <section>
            4/5
            <span role="img" aria-label="Coffee Cup">
              ☕️️️️️️
            </span>
          </section>
          <section>
            <input type="range" min="1" max="5" step="0.5" />
            <button className="button is-primary add-rating-button">
              Add Rating
            </button>
          </section>
        </section>
        <section className="bottom-section">
          <form>
            <header>Reviews!?!?!</header>
            <textarea />
            <button className="button is-primary add-review-button">
              Submit
            </button>
          </form>
          <ul>
            <li>Review: This place is amazing!!!</li>
            <li>Review: This place is a dump!!!</li>
            <li>Review: This place is the beez kneez!!!</li>
            <li>Review: This place is horrid!!!</li>
          </ul>
        </section>
      </div>
    );
  }
}

export default Location;
