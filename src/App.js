import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Nav from "./Components/Nav";
import Index from "./Components/Index";
import Docs from "./Components/Docs";
import Tutorial from "./Components/Tutorial";
import Blog from "./Components/Blog";
import Community from "./Components/Community";
const GlobalStyle = createGlobalStyle`
  ${reset}
`;

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <BrowserRouter>
        <Nav />
        <Route path="/" exact component={Index} />
        <Route path="/docs" exact component={Docs} />
        <Route path="/tutorial" exact component={Tutorial} />
        <Route path="/blog" exact component={Blog} />
        <Route path="/community" exact component={Community} />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
