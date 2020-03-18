import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

// react router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";

export default function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Switch>
        <Route exact path="/">
          <Register />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        
      </Switch>
    </Router>
  );
}
