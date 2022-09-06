import React, { Component } from "react";

class Counter extends Component {
  render() {
    console.log("Counter -  Rendered");
    return (
      <React.Fragment>
        <div className="counter-box">
          <span className={this.getColor()}>{this.props.counter.value}</span>
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="button"
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrease(this.props.counter)}
            className="button"
          >
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
    classes += this.props.counter.value % 2 === 0 ? " blue" : " red";
    return classes;
  }
}

export default Counter;
