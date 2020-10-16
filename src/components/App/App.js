import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import SearchComponent from "../SearchComponent/SearchComponent";
import FavoritesComponent from "../FavoritesComponent/FavoritesComponent";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="appDiv">
        <Router>
          <Route exact path="/">
            <SearchComponent />
          </Route>
          <Route path="/favorites">
            <FavoritesComponent />
          </Route>
        </Router>
      </div>
    );
  }
}

export default App;
