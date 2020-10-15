import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Babbage GIF Search</h1>
          <nav>
            <ul>
              <li><Link to="/">Search Gifs</Link></li>
              <li><Link to="/favorites">View Favorites</Link></li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
