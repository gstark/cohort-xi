import React, { Component } from 'react';
import axios from 'axios';
class HomePage extends Component {


    state = {
        locations: []
    }

    componentDidMount() {
        axios.get('https://localhost:5001/api/locations')
            .then(json => {
                console.log({ json });
                this.setState({
                    locations: json.data
                })
            })
    }

    render() {
        return (
            <div>
                <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="/">
                            Coffee Ship, Sail the Java Seas.
                        </a>

                    </div>

                    {/* <div id="navbarBasicExample" className="navbar-menu">


                    </div> */}

                    {/* <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <a className="button is-primary">
                                    <strong>Sign up</strong>
                                </a>
                                <a className="button is-light">
                                    Log in
                               </a>
                            </div>
                        </div>
                    </div> */}
                </nav>

                <form className="search-form">
                    <div className="field has-addons">
                        <div className="control">
                            <input className="input" type="text" placeholder="Find a coffee harbor" />
                        </div>
                        <div className="control">
                            <a className="button is-info">
                                Search
                             </a>
                        </div>
                        <div className="control">
                            <a className="button is-primary">
                                Near me
                             </a>
                        </div>
                    </div>
                </form>

                <section className="coffee-shop-list">
                    {this.state.locations.map(shop => {
                        return <div className="card" key={shop.id}>
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
                                        <p className="subtitle is-6">{shop.address} {shop.city} {shop.state} {shop.zip}</p>
                                    </div>
                                </div>

                                <div className="content">
                                    <ul>
                                        {/* <li>Distance: 4.7 miles</li> */}
                                        <li>Rating:{shop.rating}/5</li>
                                        {/* <li>Hours:9pm -10pm</li> */}
                                    </ul>
                                    <br />
                                    <a href="/details">more details</a>
                                </div>
                            </div>
                        </div>
                    })}
                </section>
            </div >
        );
    }
}

export default HomePage;
