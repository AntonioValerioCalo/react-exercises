import React from "react";  

export class DisplayLanguage extends React.Component{
    state={
        language:"en"
    }
    handleOption=(event)=>{
       this.setState({
           language:event.target.value
       })
    }
     render(){
       return(
           <select value={this.state.language} onChange={this.handleOption}>
                 <option value="en">English</option>
                 <option value="de">Deutsch</option>
                 <option value="it">Italiano</option>
             </select>
       )
   }
}