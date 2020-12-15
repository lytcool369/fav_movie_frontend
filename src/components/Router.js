import React, { useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";

import Home from "../routes/Home";
import Movies from "../routes/Movies";
import PreMovies from "../routes/PreMovies";
import Favorite from "../routes/Favorite";

export default () => {
  // 홈 화면을 통해 데이터를 크롤링 하는 동안 헤더를 제어
  const [homeLoading, setHomeLoading] = useState(true);

  return (
    <Router>
      <>
        <Header homeLoading={homeLoading} />
        <Switch>
          <Route
            path="/"
            exact
            render={() => <Home setHomeLoading={setHomeLoading} />}
          />
          <Route path="/movies" component={Movies} />
          <Route path="/premovies" component={PreMovies} />
          <Route path="/favorite" component={Favorite} />
        </Switch>
      </>
    </Router>
  );
};
