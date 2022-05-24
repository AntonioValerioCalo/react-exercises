import React from "react";

import { ClickCounter } from "./ClickCounter";
import { Login } from "./Login";
import { ClickTrucker } from "./ClickTrucker";
import { Hello } from "./Components-02";
import { Counter } from "./Counter";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Welcome } from "./Welcome";
import { UncontrolledLogin } from "./UncontrolledComponentLogin";
import { TodoList } from "./TodoList";
import { Container } from "./Container";
import { DisplayLanguage } from "./DisplayLanguage";



const onLogin = (state) => {
  console.log(state);
};




export class App extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <DisplayLanguage/>
        <Hello title="helloooooooooooooo"/>
        </Container>
        <Welcome name="John" otherAge={64} />
        <Counter />
        <ClickCounter />
        <ClickTrucker />
        <InteractiveWelcome />
        <Login handleState={onLogin} />
        <UncontrolledLogin/>
        <TodoList
          render={getName=>{
          const [...name]= getName
          return(
            <ul>
              <li>{name}</li>
            </ul>
          )
          }}
        ></TodoList> 
      </div>
    );
  }
}
Welcome.defaultProps = {
  name: "John",
  age: 28,
};
