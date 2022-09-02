import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <React.Fragment>
        <div className="counter-box">
          <span className={this.getColor()}>{this.state.count}</span>
          <button onClick={this.handleIncrement} className="button">
            +
          </button>
          <button className="button">-</button>
          <button className="button">Delete</button>
        </div>
      </React.Fragment>
    );
  }

  getColor() {
    let classes = "number";
    classes += this.state.count % 2 === 0 ? " blue" : " red";
    return classes;
  }
}

export default Counter;
