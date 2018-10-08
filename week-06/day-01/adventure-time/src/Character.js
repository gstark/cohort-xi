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

const Character = () => (
  <>
    <Heading>Finn the Human</Heading>
    <Portrait>
      <img
        src="http://i.cdn.turner.com/v5cache/CARTOON/site/Images/i18/propd_at_char_finn.png"
        alt="Portrait of Finn the Human"
      />
    </Portrait>
    <p>
      Finn is a silly kid who wants to become a great hero one day. He might not
      look too tough, but if there's evil around, he'll slay it. That's his
      deal.
    </p>
  </>
);

export default Character;
