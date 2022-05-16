import React from "react";

export class Counter extends React.Component {
  state = {
    count: this.props.initialValue,
  };
  constructor(props) {
    super(props);
    setInterval(() => {
      this.setState((state) => {
        return {
          count: state.count + this.props.incrementBy,
        };
      });
    }, this.props.timeOut);
  }
  render() {
    return <p> count: {this.state.count}</p>;
  }
}
Counter.defaultProps = {
  initialValue: 2,
  timeOut: 1000,
  incrementBy: 2,
};
