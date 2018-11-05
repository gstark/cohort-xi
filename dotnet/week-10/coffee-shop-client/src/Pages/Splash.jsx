import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SplashPage extends Component {
    render() {
        return (
            <div>
                Lets find some Coffee
                <Link to="/home">Begin</Link>
            </div>
        );
    }
}

export default SplashPage;
