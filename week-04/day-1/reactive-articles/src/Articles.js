import React, { Component } from "react";
import Article from "./Article";

class Articles extends Component {
  render() {
    return (
      <div className="all-main-content">
        <main>
          <Article
            title="Gavin can't spell Artclie"
            content="Gavin can't type on a monday. Thats why. He also went to a party last night"
          />
          <Article
            title="What is wrong with Gavin"
            content="Gavin is tired this morning"
          />
          <Article
            title="Sending Gavin back to school"
            content="If you pay, he will go"
          />
          <Article title="React is cool" content="Hell yeah it is" />
        </main>
      </div>
    );
  }
}

export default Articles;
