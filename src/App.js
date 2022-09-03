import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navBar";
import Counters from "./components/counters";
import Counter from "./components/counter";

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
