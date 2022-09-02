import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navBar";
import Counters from "./components/counters";

class App extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Counters />
      </React.Fragment>
    );
  }
}

export default App;
