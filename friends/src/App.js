import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Login from "./components/LoginForm";
import FriendsList from "./components/FriendsList";
import PrivateRoute from "./components/PrivateRoute";

import "./styles.css";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/friends">Friends List</Link>
          </li>
        </ul>
        <Switch>
          <div className="list-container">
            <PrivateRoute
              exact
              path="/friends"
              component={FriendsList}
              className="list-container"
            />
          </div>
          <Route path="/login" component={Login} /> <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
