import React from "react";

import styled from "styled-components";

const Heading = styled.h2`
  font-family: "Bubblegum Sans", sans-serif;
  font-size: 3rem;
  text-align: center;
`;

const Portrait = styled.figure`
  text-align: center;
  margin: 0;
`;

class Character extends React.Component {
  state = {
    name: null,
    image: null,
    details: null
  };

  componentWillMount() {
    this.updateCharacter();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.updateCharacter();
    }
  }

  updateCharacter() {
    fetch(
      "https://gist.githubusercontent.com/ambethia/b4593aece1b66e6508afee1131ae1bc3/raw/"
    )
      .then(r => r.json())
      .then(data => {
        this.setState({ ...data[this.props.match.params.id] });
      });
  }
  render() {
    return this.state.name ? (
      <>
        <Heading>{this.state.name}</Heading>
        <Portrait>
          <img src={this.state.image} alt={`Portrait of ${this.state.name}`} />
        </Portrait>
        <p>{this.state.details}</p>
      </>
    ) : (
      <Heading>Loading...</Heading>
    );
  }
}

export default Character;
