import React from "react";

import { Hello } from "./Components-02";
import { Counter } from "./Counter";
import { Welcome } from "./Welcome";

export class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome name="John" otherAge={64} />
        <Counter />
      </div>
    );
  }
}
Welcome.defaultProps = {
  name: "John",
  age: 28,
};
