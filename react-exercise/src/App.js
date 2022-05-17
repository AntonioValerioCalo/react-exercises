import React from "react";


import { ClickCounter } from "./ClickCounter";

import { ClickTrucker } from "./ClickTrucker";
import { Hello } from "./Components-02";
import { Counter } from "./Counter";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Welcome } from "./Welcome";

export class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome name="John" otherAge={64} />
        <Counter />
        <ClickCounter/>
        <ClickTrucker/>
        <InteractiveWelcome/>
      </div>
    );
  }
}
Welcome.defaultProps = {
  name: "John",
  age: 28,
};
