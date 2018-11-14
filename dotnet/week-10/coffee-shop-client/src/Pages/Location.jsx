import React, { Component } from "react";
import axios from "axios";
import PriceRange from "./Components/PriceRange";

import config from '../Config';

class Location extends Component {
  state = {
    showReviewForm:true,
    profile: {},
    location: {
      imageUrl: "https://placebear.com/128/128",
      averageRating: 0,
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
    axios.post(
        `${config.API_URL}/locations/${this.props.match.params.id}/reviews`, {
      content: this.state.newReview,
      reviewerName: this.state.profile.name,
      reviewerPhoto: this.state.profile.picture
    }, {
      headers:{
        "Authorization":"Bearer " + this.props.auth.getAccessToken()
      }
    }).then(json => {
      this.getReviews();
    })
  }

  getReviews = () => {
    axios
      .get(`${config.API_URL}/locations/${this.props.match.params.id}/reviews`)
      .then(json => {
        this.setState({
          reviews: json.data
        })
      })
  }

  disableReviewForm = () => {
    this.setState({
      showReviewForm:false
    })
  }

  checkIfUserLeftAReview = () => {
    // GET /api/locations/id/reviews/userid
    axios
      .get(`${config.API_URL}/locations/${this.props.match.params.id}/reviews/${this.state.profile.sub}`)
      .then(json => {
        console.log({ json });
        if (json.data.wasFound) {
          this.disableReviewForm();
        }
      })
  }

  addUserToState = () => {
    this.props.auth.getProfile((err, profile) => {
      this.setState({ profile });
      this.checkIfUserLeftAReview();
    })
  }
  componentDidMount() {
    axios
      .get(`${config.API_URL}/locations/${this.props.match.params.id}`)
      .then(json => {
        this.setState({ location: json.data });
      });
    this.getReviews();
    this.addUserToState();
  }

  addRating = (rating) => {
    axios
      .post(`${config.API_URL}/locations/${this.props.match.params.id}/ratings`, {
        score: rating
      })
      .then(json => {
        let _data = { ...this.state.location };
        _data.averageRating = json.data.rating;
        this.setState({
          location: _data
        })
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
              {Math.round(this.state.location.averageRating * 100) / 100}/5
            <span role="img" aria-label="Coffee Cup">
                ☕️️️️️️
            </span>
            </h3>
          </section>
        </section>
        <section className="middle-section">

          <section>
            <fieldset className="rating">
              <input type="radio" id="star5" name="rating" value="5" onChange={() => this.addRating(5)} /><label className="full" htmlFor="star5" title="Awesome - 5 stars"></label>
              <input type="radio" id="star4" name="rating" value="4" onChange={() => this.addRating(4)} /><label className="full" htmlFor="star4" title="Pretty good - 4 stars"></label>
              <input type="radio" id="star3" name="rating" value="3" onChange={() => this.addRating(3)} /><label className="full" htmlFor="star3" title="Meh - 3 stars"></label>
              <input type="radio" id="star2" name="rating" value="2" onChange={() => this.addRating(2)} /><label className="full" htmlFor="star2" title="Kinda bad - 2 stars"></label>
              <input type="radio" id="star1" name="rating" value="1" onChange={() => this.addRating(1)} /><label className="full" htmlFor="star1" title="Sucks big time - 1 star"></label>
            </fieldset>

            {/* {[1, 2, 3, 4, 5].map(num => {
              return <button key={num} className="button is-dark" onClick={() => this.addRating(num)}>
                <span role="img" aria-label="Coffee Cup">
                  ☕️️️️️️
              </span>
              </button>
            })} */}
          </section>
        </section>
        <section className="bottom-section">
          {this.props.auth.isAuthenticated() && this.state.showReviewForm &&  <form onSubmit={this.submitReview}>
            <header>Leave a review as {this.state.profile.name}</header>
            <textarea onChange={this.onReviewChange} placeholder={`Leave a review for  ${this.state.location.franchise.brand}`} />
            <button className="button is-primary add-review-button">
              Submit
            </button>
          </form>
          }
          <ul>
            {this.state.reviews.map(review => {
              return <li key={review.id} ><article className="media">
                <figure className="media-left">
                  <p className="image is-64x64">
                    <img src={review.reviewerPhoto} alt="some place holder" />
                  </p>
                </figure>
                <div className="media-content">
                  <div className="content">
                    <p>
                      {review.content}
                      {review.createdAt}
                      reviewed by: {review.reviewerName}
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
