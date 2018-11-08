import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import config from '../Config';

class HomePage extends Component {
  state = {
    locations: []
  };

  componentDidMount() {
    let _url = config.API_URL;
    console.log(this.props);
    if (this.props.match.params.searchterm) {
      _url += `/search?searchTerm=${this.props.match.params.searchterm}`;
    } else {
      _url += `/locations`;
    }
    axios.get(_url).then(json => {
      console.log({ json });
      this.setState({
        locations: json.data
      });
    });
  }

  render() {
    return (
      <div>
        <section className="coffee-shop-list">
          {this.state.locations.map(shop => {
            return (
              <div className="card" key={shop.id}>
                {/* <div className="card-image">
                        <figure className="image is-4by3">
                            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
                        </figure>
                    </div> */}
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <figure className="image is-48x48">
                        <img src={shop.imageUrl} alt={shop.franchise.brand} />
                      </figure>
                    </div>
                    <div className="media-content">
                      <p className="title is-4">{shop.franchise.brand}</p>
                      <p className="subtitle is-6">
                        {shop.address} {shop.city} {shop.state} {shop.zip}
                      </p>
                    </div>
                  </div>

                  <div className="content">
                    <ul>
                      {/* <li>Distance: 4.7 miles</li> */}
                      <li>
                        Rating:
                        {shop.rating}
                        /5
                      </li>
                      {/* <li>Hours:9pm -10pm</li> */}
                    </ul>
                    <br />
                    <Link to={`/location/${shop.id}`}>More Details</Link>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    );
  }
}

export default HomePage;
