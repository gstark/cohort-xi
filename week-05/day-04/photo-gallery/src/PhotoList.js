import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Data from "./Data.json";

class PhotoList extends Component {
  componentWillMount() {
    if (this.props.bodyClass) {
      this.props.bodyClass(this.props.match.params.category);
    }
  }

  render() {
    console.log(this.props);
    const category_param = this.props.match.params.category;
    const category = Data[category_param];
    return (
      <>
        <section className="section">
          <div className="container">
            <nav class="breadcrumb" aria-label="breadcrumbs">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li className="is-active">
                  <Link to={`/${category_param}`}>{category.title}</Link>
                </li>
              </ul>
            </nav>
          </div>
        </section>
        <article className={category_param}>
          <h1>{category.title}</h1>
          <h2>{category.description}</h2>
          {category.photos.map((photo, index) => {
            return (
              <figure>
                <img src={photo.imageURL} />
                <Link to={`/${category_param}/${index}`}>{photo.title}</Link>
              </figure>
            );
          })}
        </article>
      </>
    );
  }
}

export default PhotoList;
