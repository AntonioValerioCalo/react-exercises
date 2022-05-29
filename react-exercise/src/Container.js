import React from "react";



export class Container extends React.Component {
  render() {
    return (
      
      <div  className="containerStyle">
        <div className="div container-title">{this.props.title}</div>
        <div>{this.props.children}</div>
      </div>
    );
  }
}
