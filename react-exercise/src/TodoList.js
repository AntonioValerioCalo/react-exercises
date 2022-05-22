import React, { createRef } from "react";

export class TodoList extends React.Component {
  _addedRef = createRef();

  state = {
    name: ["Antonio", "Domenico"],
    getItem:""
  };
  handleInputChange=(event)=>{
    this.setState({
      getItem:event.target.value
    })
    
  }
  
  handleOnClick=()=>{
    this.setState({
      name:[...this.state.name,this.state.getItem ]


    
})
}
 
  render() {
    return (
      <div >
        <h1>Todo List</h1>
        <ul>
          {this.state.name.map((name, index) => (
            <li  key={name + index}>
              {name}
            </li>
          ))}
        </ul>
              <form ref={this._addedRef}>
          <input  type="text"
          value={this.state.getItem}
          onChange={this.handleInputChange}
         
           
          />
          <button type="button" onClick={this.handleOnClick}>
            Add
          </button>
        </form>
      </div>
    );
  }
}
