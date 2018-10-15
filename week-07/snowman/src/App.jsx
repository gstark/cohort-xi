import React, { Component } from 'react'
import snowman_0 from './snowman/step_0.png'
import snowman_1 from './snowman/step_1.png'
import snowman_2 from './snowman/step_2.png'
import snowman_3 from './snowman/step_3.png'
import snowman_4 from './snowman/step_4.png'
import snowman_5 from './snowman/step_5.png'
import snowman_6 from './snowman/step_6.png'
import snowman_7 from './snowman/step_7.png'
import './App.css'
import Words from './Words.json'
import LetterButton from './LetterButton.jsx'

class App extends Component {
	constructor(props) {
		super(props)
		this.snowmen = [
			snowman_0,
			snowman_1,
			snowman_2,
			snowman_3,
			snowman_4,
			snowman_5,
			snowman_6,
			snowman_7
		]
		this.state = {
			lettersChosen: [],
			randomWord: Words[Math.floor(Math.random() * Words.length)]
		}
		console.log(this.state.randomWord)
	}
	correctGuessCount = () => {
		return this.state.randomWord.split('').filter((letter, index) => {
			return this.state.lettersChosen.includes(letter)
		}).length
	}

	letterChosen = letter => {
		this.state.lettersChosen.push(letter)
		this.setState({
			lettersChosen: this.state.lettersChosen
		})
	}

	render() {
		console.log(this.correctGuessCount())
		const letters = [
			'a',
			'b',
			'c',
			'd',
			'e',
			'f',
			'g',
			'h',
			'i',
			'j',
			'k',
			'l',
			'm',
			'n',
			'o',
			'p',
			'q',
			'r',
			's',
			't',
			'u',
			'v',
			'w',
			'x',
			'y',
			'z'
		]
		return (
			<div className="App">
				<img src={this.snowmen[this.correctGuessCount()]} />
				<ul className="randomWord">
					{this.state.randomWord.split('').map((letter, index) => {
						return (
							<li key={index}>
								{this.state.lettersChosen.includes(letter) ? letter : '_'}
							</li>
						)
					})}
				</ul>
				<ul className="letterButtons">
					{letters.map(letter => {
						return (
							<li key={letter}>
								<LetterButton
									letter={letter}
									letterChosen={this.letterChosen}
									disabled={this.state.lettersChosen.includes(letter)}
								/>
							</li>
						)
					})}
				</ul>
			</div>
		)
	}
}

export default App
