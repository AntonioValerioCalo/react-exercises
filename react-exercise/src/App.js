import React from "react";
import { Age } from "./Age";
import { Hello } from "./Components-02";
import { Welcome } from "./Welcome";

export class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome name="John" otherAge={64} />
      </div>
    );
  }
}
Welcome.defaultProps = {
  name: "John",
  age: 28,
};
