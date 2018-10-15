import React, { Component } from 'react'
import snowman_0 from './snowman/step_0.png'
import './App.css'
import Words from './Words.json'
import LetterButton from './LetterButton.jsx'

class App extends Component {
  render() {
    const randomWord = Words[Math.floor(Math.random() * Words.length)]
    console.log(randomWord)
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
        <img src={snowman_0} />
        <ul>
          {randomWord.split('').map((letter, index) => {
            return <li key={index}>_</li>
          })}
        </ul>
        <ul>
          {letters.map(letter => {
            return (
              <li key={letter}>
                <LetterButton letter={letter} />
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default App
