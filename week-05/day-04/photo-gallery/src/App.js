import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import CategoryList from './CategoryList'
import PhotoList from './PhotoList'
import PhotoDetail from './PhotoDetail'
import './App.css'

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<header>
						<h1>Things I like:</h1>
						<h2>A Photo Gallery by Jason L Perry</h2>
					</header>
					<nav>
						<ul>
							<li><Link to="/">home</Link></li>
						</ul>
					</nav>
					<Switch>
						<Route exact path='/' component={CategoryList} />
						<Route exact path='/:category' component={PhotoList} />
						<Route path='/:category/:index' component={PhotoDetail} />
					</Switch>
				</div>
			</Router>
		)
	}
}

export default App
