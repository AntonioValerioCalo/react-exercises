
import React from "react";

export class ClickCounter extends React.Component {
  state = {
    count: 0,
  };
  handleClick = () => {
    this.setState(({ count }) => ({
      count: count + 1,
    }));
  };
  render() {
    return (
      <div>
        <h3>{this.state.count}</h3>
        <button onClick={this.handleClick}>increment</button>
      </div>
    );
  }
}

