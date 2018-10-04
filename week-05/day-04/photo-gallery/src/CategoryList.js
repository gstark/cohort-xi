import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Data from './Data.json'

class CategoryList extends Component {
	render() {
		return (
			<main>
				{
					Object.keys(Data).map(category => {
						return <aside className="panda">
							<h3><Link to={`/${category}`}>{Data[category].title}</Link></h3>
							<p>
								{Data[category].description}
							</p>
							<img src={Data[category].photos[0].imageURL} />
						</aside>

					})
				}
			</main>
		)
	}
}

export default CategoryList
