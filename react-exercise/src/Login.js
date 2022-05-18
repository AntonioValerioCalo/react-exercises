import React from "react";

export class Login extends React.Component {

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
      [name]: type === "checkbox" ? checked : value,
    });
  };

  handleReset=()=>{
    this.setState({
        username:"",
        password: "",
        remember:false,
    })
  }

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
        <button type="reset" onClick={this.handleReset} >reset</button>
      </form>
    );
  }
}
