import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const List = styled.ul`
  padding-left: 0;
`;

const Character = styled.li`
  list-style: none;
  ${props =>
    props.active &&
    css`
      a:link,
      a:visited {
        color: #fdb825;
      }
    `};
`;

const CharacterList = () => (
  <List>
    <Character active>
      <Link to="/characters/1">Finn the Human</Link>
    </Character>
    <Character>
      <Link to="/characters/2">Jake the Dog</Link>
    </Character>
  </List>
);

export default CharacterList;
