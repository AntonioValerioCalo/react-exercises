import React from "react";
import { UseForm } from "./UseForm";

const HookForm = () => {
    const{input,print}=UseForm()
  return (
    <div>
      <h1>HookForm</h1>

      <form>
        <input  onChange={input}></input>
        <input type="password" onChange={input}></input>
        <input type="checkbox" onChange={input}></input>
        <button onClick={print}>login</button>
      </form>
    </div>
  );
};

export default HookForm;
