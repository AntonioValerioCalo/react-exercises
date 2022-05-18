import React from "react";
import { createRef } from "react";

export class Login extends React.Component {
  _formRef = createRef();
  state = {
    username: "",
    password: "",
    remember: false,
  };
  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    const type = event.target.type;
    const checked = event.target.checked;
    this.setState({
      [name]: type === "checked" ? checked : value,
    });
  };

  render() {
    return (
      <form>
        <input
          name="username"
          value={this.state.username}
          onChange={this.handleInputChange}
        />
        <input
          name="password"
          type="password"
          value={this.state.password}
          onChange={this.handleInputChange}
        />
        <input
          name="checkbox"
          type="checkbox"
          checked={this.state.remember}
          onChange={this.handleInputChange}
        />

        <button
          type="button"
          disabled={!(this.state.username && this.state.password)}
          onClick={() => this.props.handleState(this.state)}
        >
          Login
        </button>
      </form>
    );
  }
}


