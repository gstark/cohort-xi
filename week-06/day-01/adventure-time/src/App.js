import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Character from "./Character";
import CharacterList from "./CharacterList";
import Home from "./Home";
import NotFound from "./NotFound";
import styled from "styled-components";

const Header = styled.header`
  text-align: center;

  a {
    display: block;
    background-image: url(http://adventure-time.ambethia.surge.sh/620c287086c98bf550c3ee956174e20f.png);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    height: 240px;

    span {
      opacity: 0;
    }
  }
`;

const Main = styled.main`
  display: flex;
  max-width: 960px;
  margin: auto;

  > aside {
    flex: 1;
  }

  > section {
    flex: 4;
  }
`;

class App extends React.Component {
  render() {
    return (
      <Router>
        <>
          <Header>
            <h1>
              <Link to="/">
                <span>Adventure Time</span>
              </Link>
            </h1>
          </Header>
          <Main>
            <aside>
              <CharacterList />
            </aside>
            <section>
              <Switch>
                <Route path="/characters/:id" component={Character} />
                <Route exact path="/" component={Home} />
                <Route component={NotFound} />
              </Switch>
            </section>
          </Main>
        </>
      </Router>
    );
  }
}

export default App;
