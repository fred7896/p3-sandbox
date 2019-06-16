import React, { Component } from "react";

// Packages
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Navigate from "./pages/Navigate";
import ApiMeteo from "./components/ApiMeteo";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/naviguer" component={Navigate} />
          <Route path="/meteo" component={ApiMeteo} />
        </Switch>
      </Router>
    );
  }
}

export default App;
