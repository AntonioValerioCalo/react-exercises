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
import {Link, Route,Routes} from "react-router-dom";
import { ShowGithubUser } from "./ShowGithubUser";
import {Nested} from "./Nested";



// const onLogin = (state) => {
//   console.log(state);
// };




export function App () {

 
    return (
      <div>

 

        <Routes>
          
           <Route path="/" element={<InteractiveWelcome name="Antonio" age={70}/>}/>
           {/* <Route path="/counter" element={<Counter/>}/> */}
           <Route path="/user:/item"  element={<GithubUserList/>}>
            <Route path="Nested" element={<Nested/>}/>
            <Route index element={<p>add a user and select it!</p>}/>
          </Route>
           <Route path="/Login" element={<Login/>}/>
           {/* <Route path="*" element={
             <div>
             <p>
             doesn't exist
             </p>
             <Link to="/user:Antonio"></Link>
             </div>
            }
          /> */}
        </Routes>
         
           <Link to="/user:/Item">Profile</Link>
        
          </div>
    ) 
}
//to create a button for navigate use useNavigate