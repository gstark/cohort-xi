import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import Articles from "./Articles";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Articles />
        <Footer />
      </div>
    );
  }
}

export default App;
