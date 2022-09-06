import React, { Component } from "react";
import RedCounter from "./redcounter";

class RedCounters extends Component {
  render() {
    return (
      <React.Fragment>
        <header className="counter-boxred">
          <button onClick={this.props.onReset} className="button">
            RESET
          </button>
          <button onClick={this.props.onAdd} className="button">
            ADD
          </button>
        </header>
        {this.props.counters.map((counter) => (
          <RedCounter
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            onDecrease={this.props.onDecrease}
            counter={counter}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default RedCounters;
