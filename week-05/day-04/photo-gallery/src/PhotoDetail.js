import React, { Component } from "react";
import { Link } from "react-router-dom";
import Data from "./Data.json";

class PhotoDetail extends Component {
  render() {
    const category_param = this.props.match.params.category;
    const category = Data[category_param];
    const index = this.props.match.params.index;
    const photo = category.photos[index];
    return (
      <>
        <section className="section">
          <div className="container">
            <nav class="breadcrumb" aria-label="breadcrumbs">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to={`/${category_param}`}>{category.title}</Link>
                </li>
                <li className="is-active">
                  <Link to={`/${category_param}/${index}`}>{photo.title}</Link>
                </li>
              </ul>
            </nav>
          </div>
        </section>
        <article>
          <h1>{photo.title}</h1>
          <img src={photo.imageURL} />
          <a href={photo.sourceURL}> Source</a>
        </article>
      </>
    );
  }
}

export default PhotoDetail;
