import React, { useState } from "react";

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
import { CarDetails } from "./CarDetails";



// const onLogin = (state) => {
//   console.log(state);
// };




export function App () {
  const [language,setLanguage] = useState("en")
 const handleChangeLanguage=(event)=>{
    setLanguage(
      event.target.value
    )
  }
 
    return (
      <div>
          <select value={language} onChange={handleChangeLanguage}>
          <option value="en" >English</option>
            <option value="it">Italiano</option>
            <option value="de" >Deutsch</option>
          </select>
          
         <LanguageContext.Provider value={language}>
          <DisplayLanguage/>
          </LanguageContext.Provider>
          
          </div> 
    )
    } 