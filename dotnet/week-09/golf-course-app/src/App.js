import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {


  state = {
    courses: []
  }

  componentDidMount() {
    fetch("http://localhost:5000/api/courses")
      .then(resp => resp.json())
      .then(json => {
        console.log({ json })
        this.setState({
          courses: json
        })
      })
  }

  handleSearchTermUpdate = (e) => {
    this.setState({
      term: e.target.value
    })
  }

  search = (e) =>{
    e.preventDefault();
    fetch(`http://localhost:5000/api/search?name=${this.state.term}`)
    .then(resp => resp.json())
    .then(json => {
      console.log({ json })
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
            <form onSubmit={this.search}>
              <input type='search' onChange={this.handleSearchTermUpdate} placeholder="Search for a course..." />
              <button>Search</button>
            </form>
            <ul>
              {this.state.courses.map(course => {
                return <li key={course.id}>{course.name} Rank: {course.rank}</li>
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
