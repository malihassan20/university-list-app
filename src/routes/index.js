import React, { Fragment } from "react";
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";

import Home from "../pages/home";
import Universities from "../pages/universities";
import Newsletter from "../pages/newsletter";

const AppRoutes = () => {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/universities" exact>
            <Universities />
          </Route>
          <Route path="/newsletter" exact>
            <Newsletter />
          </Route>
          <Redirect from="*" to="/404" />
        </Switch>
      </Router>
    </Fragment>
  );
};

export default AppRoutes;
