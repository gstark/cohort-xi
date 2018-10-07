import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Data from "./Data.json";

class CategoryList extends Component {
  render() {
    return (
      <>
        <section className="section">
          <div className="container">
            <nav class="breadcrumb" aria-label="breadcrumbs">
              <ul>
                <li className="isActive">
                  <Link to="/">Home</Link>
                </li>
              </ul>
            </nav>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="columns">
              {Object.keys(Data).map(category => {
                return (
                  <div className="column">
                    <h3>
                      <Link to={`/${category}`}>{Data[category].title}</Link>
                    </h3>
                    <p>{Data[category].description}</p>
                    <img src={Data[category].photos[0].imageURL} />
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default CategoryList;
