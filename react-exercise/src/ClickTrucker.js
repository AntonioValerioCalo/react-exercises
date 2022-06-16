import React from "react";

export class ClickTrucker extends React.Component {
  state = {
    trucker: "",
  };

  eventHandler = (event) => {
    this.setState({
      trucker: event.target.name,
    });
  };
  render(){
      return(
          <div>
            
              <h1> trucker:{this.state.trucker }</h1>
              <button onClick={this.eventHandler} name="first">first</button>
              <button onClick={this.eventHandler} name="second">second</button>
              <button onClick={this.eventHandler} name="third">third</button>
          </div>
      )

      
  }
}
