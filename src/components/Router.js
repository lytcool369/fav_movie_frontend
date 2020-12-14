import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";

import Favorite from "../routes/Favorite";
import Movies from "../routes/Movies";
import PreMovies from "../routes/PreMovies";

export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        {/* <Route path="/" exact component={Home} /> */}
        <Route path="/movies" component={Movies} />
        <Route path="/premovies" component={PreMovies} />
        <Route path="/favorite" component={Favorite} />
      </Switch>
    </>
  </Router>
);
