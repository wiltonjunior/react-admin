import React from "react";
import ReactDOM from "react-dom";
import { ToastContainer } from "react-toastify";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// core components
import Admin from "@layouts/Admin.js";
import { UserProvider } from "@contexts/User";
import Load, { LoadProvider } from "@contexts/Load";

import "@css/material-dashboard-react.css?v=1.8.0";
import "@sass/global.scss";

const hist = createBrowserHistory();

ReactDOM.render(
  <UserProvider>
    <LoadProvider>
      <Router history={hist}>
        <Switch>
          <Route path="/admin" component={Admin} />
          <Redirect from="/" to="/admin/dashboard" />
        </Switch>
      </Router>
      <ToastContainer />
      <Load />
    </LoadProvider>
  </UserProvider>,
  document.getElementById("root")
);
