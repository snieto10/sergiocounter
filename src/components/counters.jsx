import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 1 },
      { id: 3, value: 2 },
      { id: 4, value: 3 },
      { id: 5, value: 4 },
      { id: 6, value: 5 },
    ],
  };

  handleDelete = (counterId) => {
    let counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  handleAdd = () => {
    let addCounters = this.state.counters;
    let b = [
      ...addCounters,
      {
        id: addCounters[addCounters.length - 1].id + 1,
        value: addCounters[addCounters.length - 1].value + 1,
      },
    ];
    this.setState({ counters: b });
  };

  render() {
    return (
      <React.Fragment>
        <header className="counter-box">
          <button className="button">RESET</button>
          <button onClick={this.handleAdd} className="button">
            ADD
          </button>
        </header>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            counter={counter}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
