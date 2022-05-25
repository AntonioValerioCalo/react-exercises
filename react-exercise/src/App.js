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
import { LanguageContext } from "./LanguageContext";
import { Sum } from "./Sum";



const onLogin = (state) => {
  console.log(state);
};




export class App extends React.Component {
  state={
    language:"it"
  }
  handleChangeLanguage=(event)=>{
    this.setState({
      language:event.target.value,
    })
  }
  render() {
    return (
      <div>
          <select value={this.state.language} onChange={this.handleChangeLanguage}>
          <option value="en" >English</option>
            <option value="it">Italiano</option>
            <option value="de" >Deutsch</option>
          </select>
          
        <LanguageContext.Provider value={this.state.language}>
          <DisplayLanguage/>
        </LanguageContext.Provider>

        <Container>
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
        <Sum
             number={[1,2,3,4,5]}     
        /> 
      </div>
    );
  }
}
Welcome.defaultProps = {
  name: "John",

















  age: 28,
};
