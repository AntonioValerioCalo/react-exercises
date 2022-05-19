import React, { createRef } from "react";

export class UncontrolledLogin extends React.Component {
  _formRef = createRef();
  handleForm = (event) => {
    event.preventDefault();
    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;
    const remember = event.target.elements.remember.cheked;
    console.log({
      username,
      password,
      remember,
    });
  };
   componentDidMount=(event)=>{
       this._formRef.current.focus()
   }

  render() {
    return (
      <div>
        <h1>Uncontrolled Components</h1>
        <form  onSubmit={this.handleForm}>
          <input type="text" ref={this._formRef} name="username" />
          <input type="password" name="password" />
          <input type="checkbox" name="remember" />
          <button type="submit" disabled={this.disabledButton}>
            login
          </button>
          <button type="reset">reset</button>
        </form>
      </div>
    );
  }
}
