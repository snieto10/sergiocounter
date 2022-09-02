import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="nav">
          <h1 className="inline">Counter Blue:</h1>
          <h1 className="inline">Counter Red: </h1>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;
