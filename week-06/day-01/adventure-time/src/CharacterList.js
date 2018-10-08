import React from "react";
import { Link } from "react-router-dom";

const CharacterList = () => (
  <ul>
    <li>
      <Link to="/characters/1">Finn the Human</Link>
    </li>
    <li>
      <Link to="/characters/2">Jake the Dog</Link>
    </li>
  </ul>
);

export default CharacterList;
