import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {


  state = {
    courses:[]
  }

  componentDidMount() {
    fetch("http://localhost:5000/api/courses")
      .then(resp => resp.json())
      .then(json => {
        console.log({json})
        this.setState({
          courses: json
        })
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <section>
           <ul>
             {this.state.courses.map(course => {
               return <li key={course.id}>{course.name}</li>
             })}
             </ul>
          </section>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
