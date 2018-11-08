import React, { Component } from "react";
import axios from "axios";
import PriceRange from "./Components/PriceRange";

class Location extends Component {
  state = {
    location: {
      imageUrl: "https://placebear.com/128/128",
      franchise: {
        brand: "..."
      },
    },
    reviews: []
  };

  onReviewChange = (e) => {
    this.setState({
      newReview: e.target.value
    })
  }

  submitReview = (e) => {
    e.preventDefault();
    axios.post(`https://localhost:5001/api/locations/${this.props.match.params.id}/reviews`, {
      content: this.state.newReview
    }).then(json => {
      this.getReviews();
    })
  }

  getReviews = () => {
    axios
      .get(`https://localhost:5001/api/locations/${this.props.match.params.id}/reviews`)
      .then(json => {
        this.setState({
          reviews: json.data
        })
      })
  }

  componentDidMount() {
    axios
      .get(`https://localhost:5001/api/locations/${this.props.match.params.id}`)
      .then(json => {
        this.setState({ location: json.data });
      });
    this.getReviews();
  }

  addRating = (rating) => {
    axios
      .post(`https://localhost:5001/api/locations/${this.props.match.params.id}/ratings`, {
        score: rating
      })
      .then(json => {
        console.log({json});
      })
  }

  render() {
    return (
      <div>
        <section className="top-section">
          <figure className="image is-128x128">
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
            <h3>
              {this.state.location.franchise.isLocal === true
                ? "Local"
                : "National"}
            </h3>
            <h3>
              {this.state.location.rating}/5
            <span role="img" aria-label="Coffee Cup">
                ☕️️️️️️
            </span>
            </h3>
          </section>
        </section>
        <section className="middle-section">

          <section>
            {[1, 2, 3, 4, 5].map(num => {
              return <button key={num} className="button is-dark" onClick={() => this.addRating(num)}>
                <span role="img" aria-label="Coffee Cup">
                  ☕️️️️️️
              </span>
              </button>
            })}
          </section>
        </section>
        <section className="bottom-section">
          <form onSubmit={this.submitReview}>
            <header>Reviews!?!?!</header>
            <textarea onChange={this.onReviewChange} placeholder={`Leave a review for ${this.state.location.franchise.brand}`} />
            <button className="button is-primary add-review-button">
              Submit
            </button>
          </form>
          <ul>
            {this.state.reviews.map(review => {
              return <li key={review.id} ><article className="media">
                <figure className="media-left">
                  <p className="image is-64x64">
                    <img src="https://bulma.io/images/placeholders/128x128.png" alt="some place holder"/>
                  </p>
                </figure>
                <div className="media-content">
                  <div className="content">
                    <p>
                      {review.content}
                    </p>
                    <br />
                    <p>
                      {review.createAt}
                    </p>
                  </div>
                </div>
              </article></li>
            })}
          </ul>
        </section>
      </div>
    );
  }
}

export default Location;
