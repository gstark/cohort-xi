import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import CategoryList from './CategoryList'
import PhotoList from './PhotoList'
import PhotoDetail from './PhotoDetail'

class App extends Component {
	render() {
		return (
			<div className="App">
				<header>
					<h1>Things I like:</h1>
					<h2>A Photo Gallery by Jason L Perry</h2>
				</header>
				<nav>
					<ul>
						<li>home</li>
					</ul>
				</nav>
				<CategoryList />
				<PhotoList />
				<PhotoDetail />
			</div>
		)
	}
}

export default App
