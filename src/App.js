import React from "react";
import Main from "./components/Main";
import { BrowserRouter, Router, Switch, Route, Link } from "react-router-dom";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <BrowserRouter>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
      </BrowserRouter>
    </>
  );
}

export default App;
