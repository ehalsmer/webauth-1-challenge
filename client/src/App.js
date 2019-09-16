import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import Login from "./login";
import Nav from "./nav";
import Welcome from "./welcome";

function App() {
  return (
    <Router>
      <div className="app">
        <Route path="/" component={Nav} />
        <Route exact path="/" component={Welcome} />
        <Route path="/login" component={Login} />
      </div>
    </Router>
  );
}

export default App;
