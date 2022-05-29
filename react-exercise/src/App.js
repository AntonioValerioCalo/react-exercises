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
import { GithubUser } from "./GithubUser";
import { GithubUserList } from "./GithubUserList";
import { HookCounter } from "./HookCounter";
import HookForm from "./HookForm";
import { UseGithubuser } from "./UseGithubuser";
import { FilteredList } from "./FilteredList";



// const onLogin = (state) => {
//   console.log(state);
// };




export class App extends React.Component {
  state={
    language:"en"
  }
  handleChangeLanguage=(event)=>{
    this.setState({
      language:event.target.value
    })
  }
  render() {
    return (
      <div>
          <select value={this.state.language} onChange={this.handleChangeLanguages}>
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
          <ClickCounter 
          initialValue={0}
          // onCounterChange={function onCounterChange(counter){
            //   console.log(`${counter}`)
            
            // }}
          />
          <ClickTrucker />
          <InteractiveWelcome />
          <Login/>
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
       <GithubUser username="AntonioValerioCalo"/>
        <GithubUserList/>
        {/* <HookCounter/> */}
        <HookForm/>
        <HookCounter/>
       <FilteredList
        users={[
         {id:1,
          name:"Antonio",
          age:28,       
        },
        {
          id:2,
          name:"Verdiana",
          age:27,
        },
        {
          id:3,
          name:"Marta",
          age:8,
        },
        {
          id:4,
          name:"Alex",
          age:5,
        }

      
      
      ]}
       
       />
      </div>
    );
  }
}
Welcome.defaultProps = {
  name: "John",

















  age: 28,
};
