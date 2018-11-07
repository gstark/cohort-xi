import React, { Component } from "react";
import axios from "axios";

class Location extends Component {
  componentDidMount() {
    axios
      .get(`https://localhost:5001/api/location/${this.props.match.params.id}`)
      .then(json => {
        console.log(json);
      });
  }

  render() {
    return (
      <div>
        <section className="top-section">
          <img src="http://placekitten.com/200/200" />
          {/* {"*"
            .repeat(25)
            .split("")
            .map(() => {
              const x = Math.floor(Math.random() * 100) + 400;
              const y = Math.floor(Math.random() * 100) + 300;
              return <img src={`http://placekitten.com/${x}/${y}`} />;
            })} */}
          <section className="information">
            <h1>Starbucks</h1>
            <h3>123 fake street</h3>
            <h3>$$</h3>
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
