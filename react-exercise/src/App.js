import React from "react";
import { Hello } from "./Components-02";
import { Welcome } from "./Welcome";

export class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome name={<strong>Jimmy</strong>} />
      </div>
    );
  }
}
