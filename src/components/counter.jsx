import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value,
  };

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  handleDecrease = () => {
    this.setState({ value: this.state.value - 1 });
  };

  render() {
    return (
      <React.Fragment>
        <div className="counter-box">
          <span className={this.getColor()}>{this.state.value}</span>
          <button onClick={this.handleIncrement} className="button">
            +
          </button>
          <button onClick={this.handleDecrease} className="button">
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="button"
          >
            Delete
          </button>
        </div>
      </React.Fragment>
    );
  }

  getColor() {
    let classes = "number";
    classes += this.state.value % 2 === 0 ? " blue" : " red";
    return classes;
  }
}

export default Counter;
