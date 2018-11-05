import React, { Component } from 'react';

class HomePage extends Component {
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
                    <div className="card">
                        {/* <div className="card-image">
                            <figure className="image is-4by3">
                                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
                            </figure>
                        </div> */}
                        <div className="card-content">
                            <div className="media">
                                <div className="media-left">
                                    <figure className="image is-48x48">
                                        <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
                                    </figure>
                                </div>
                                <div className="media-content">
                                    <p className="title is-4">StarBucks</p>
                                    <p className="subtitle is-6">9th and 4th</p>
                                </div>
                            </div>

                            <div className="content">
                               <ul>
                                   <li>Distance: 4.7 miles</li>
                                   <li>Rating:4/5</li>
                                   <li>Hours:9pm -10pm</li>
                               </ul>
                                <br />
                                <a href="/details">more details</a>
                            </div>
                        </div>
                    </div>
                </section>
            </div >
        );
    }
}

export default HomePage;
