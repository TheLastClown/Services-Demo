import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

// styles
import "./index.css";

// components
import * as ROUTES from "./config/routes";
import Firebase, { FirebaseContext } from "./components/Firebase";

// pages
import Home from "./pages/home";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";

const App = () => (
  <Router>
    <div>
      <Route exact path={ROUTES.LANDING} component={Home} />
      <Route exact path={ROUTES.SIGN_IN} component={Login} />
      <Route path={ROUTES.DASHBOARD} component={Dashboard} />
    </div>
  </Router>
);

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById("root"),
);
