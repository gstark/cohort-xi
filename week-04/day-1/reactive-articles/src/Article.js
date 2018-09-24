import React, { Component } from "react";

class Article extends Component {
  render() {
    console.log(this.props);

    return (
      <article className="intro-article">
        <h2 className="article-title">{this.props.title}</h2>
        <p>{this.props.content}</p>
        <a className="read-more" href="#">
          read more about {this.props.title}
        </a>
        <div className="read-more-underline" />
      </article>
    );
  }
}

export default Article;
