import React, { useState } from "react";
import "../css/App.css";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import Signup from "../components/signup-page";
import Login from "../components/login-page";
import Home from "../components/home";
import Notfound from "../components/notfound";
import { Header } from "../components/header";
import { Profile } from "../components/profile";

function App() {
   const [setPath] = useState();
  return (
    <Router>
      {<Header setPath={setPath} />}

      <Switch>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/*">
          <Notfound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
