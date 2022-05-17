import React from "react";  
import { Welcome } from "./Welcome";

export class InteractiveWelcome extends React.Component{
    state ={
        username:"",
    }

    handleUserNameInputChange = (event)=>{
        this.setState({username:event.target.value})
    }
    render(){
        return (
            <div>
                <Welcome name={this.state.username}/>
                <input name="username" value={this.state.username} onChange={this.handleUserNameInputChange} ></input>
            </div>
        )
    }
}