import { Component } from "react";
import React from "react";
import ReactDOM from "react-dom";
class ClassComponent extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }
  count = this.state;
  handleIncrement = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };
  handleDecrement = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  };
  render() {
    return (
      <>
        <p>COUNTER : {this.state.count}</p>
        <button id="Increment" onClick={this.handleIncrement}>
          Increment
        </button>
        <button id="Decrement" onClick={this.handleDecrement}>
          Decrement
        </button>
      </>
    );
  }
}

export default ClassComponent;
