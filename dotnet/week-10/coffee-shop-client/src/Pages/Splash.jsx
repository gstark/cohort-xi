import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SplashPage extends Component {
    render() {
        return (
            <section class="hero is-medium is-dark is-bold">
                <div class="hero-body">
                    <div class="container">
                        <h1 class="title">
                            Lets find some coffee shops
                        </h1>
                        <h2 class="subtitle">
                            <Link to="/home">Start</Link>
                        </h2>
                    </div>
                </div>
            </section>
        );
    }
}

export default SplashPage;
