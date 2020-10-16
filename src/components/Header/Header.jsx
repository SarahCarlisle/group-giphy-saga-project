import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router";

export class Header extends Component {
  home = () => {
    this.props.history.push("/");
  };

  favorites = () => {
    this.props.history.push("/favorites");
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Babbage GIF Search</h1>
          <nav>
            <ul>
              <li>
                <Button variant="contained" color="primary" onClick={this.home}>
                  Search Gifs
                </Button>
              </li>
              <li>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.favorites}
                >
                  View Favorites
                </Button>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}

export default withRouter(Header);
