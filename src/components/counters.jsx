import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <React.Fragment>
        <header className="counter-box">
          <button onClick={this.props.onReset} className="button">
            RESET
          </button>
          <button onClick={this.props.onAdd} className="button">
            ADD
          </button>
        </header>
        {this.props.counters.map((counter) => (
          <Counter
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

export default Counters;
