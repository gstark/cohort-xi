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
            <button className="button is-dark">
              <span role="img" aria-label="Coffee Cup">
                ☕️️️️️️
              </span>
            </button>
            <button className="button is-dark">
              <span role="img" aria-label="Coffee Cup">
                ☕️️️️️️
             </span>
            </button>
            <button className="button is-dark">
              <span role="img" aria-label="Coffee Cup">
                ☕️️️️️️
            </span>
            </button>
            <button className="button is-dark">
              <span role="img" aria-label="Coffee Cup">☕️️️️️️</span>
            </button>
            <button className="button is-dark">
              <span role="img" aria-label="Coffee Cup">
                ☕️️️️️️
            </span>
            </button>
           
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
              return <li><article class="media">
                <figure class="media-left">
                  <p class="image is-64x64">
                    <img src="https://bulma.io/images/placeholders/128x128.png" />
                  </p>
                </figure>
                <div class="media-content">
                  <div class="content">
                    <p>
                      {review.content}
                    </p>
                    <br />
                    <p>
                      {review.createAt}
                    </p>
                  </div>
                  <nav class="level is-mobile">
                    <div class="level-left">
                      <a class="level-item">
                        <span class="icon is-small"><i class="fas fa-reply"></i></span>
                      </a>
                      <a class="level-item">
                        <span class="icon is-small"><i class="fas fa-retweet"></i></span>
                      </a>
                      <a class="level-item">
                        <span class="icon is-small"><i class="fas fa-heart"></i></span>
                      </a>
                    </div>
                  </nav>
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
