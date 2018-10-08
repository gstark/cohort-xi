import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const List = styled.ul`
  padding-left: 0;
`;

const Character = styled.li`
  list-style: none;

  a.active {
    color: #fdb825;
  }
`;

class CharacterList extends React.Component {
  state = {
    characters: []
  };

  componentWillMount() {
    fetch(
      "https://gist.githubusercontent.com/ambethia/b4593aece1b66e6508afee1131ae1bc3/raw/"
    )
      .then(r => r.json())
      .then(data => {
        this.setState({
          characters: data
        });
      });
  }

  render() {
    return (
      <List>
        {this.state.characters.map((character, idx) => (
          <Character key={idx}>
            <NavLink to={`/characters/${idx}`}>{character.name}</NavLink>
          </Character>
        ))}
      </List>
    );
  }
}

export default CharacterList;
