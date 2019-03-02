import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

// styles
import "./index.css";

// components
import * as ROUTES from "./config/routes";

// pages
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";

const App = () => (
  <Router>
    <div>
      <Route exact path={ROUTES.SIGN_IN} component={Login} />
      <Route path={ROUTES.DASHBOARD} component={Dashboard} />
    </div>
  </Router>
);

ReactDOM.render(<App />, document.getElementById("root"));
