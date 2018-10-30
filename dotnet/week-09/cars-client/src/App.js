import React, { Component } from 'react';

import {
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle, 
  Navbar, NavbarBrand,
 
} from 'reactstrap';

import './App.css';

class App extends Component {

  state = {
    cars: []
  }

  componentDidMount() {
    fetch('http://localhost:5000/api/cars')
      .then(resp => resp.json())
      .then(cars => {
        this.setState({ cars })
      })
  }

  render() {
    return (
      <div className="App">
        <Navbar color="dark" light expand="md">
          <NavbarBrand href="/" color="dark"> My Cars</NavbarBrand>
        </Navbar>
s
        <ul>
          {this.state.cars.map(car => {
            return <li><Card>
              <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
              <CardBody>
                <CardTitle>{car.year} {car.make} {car.model}</CardTitle>
                <CardSubtitle>${car.price}</CardSubtitle>
              </CardBody>
            </Card>
            </li>
          })}
        </ul>


      </div>
    );
  }
}

export default App;
