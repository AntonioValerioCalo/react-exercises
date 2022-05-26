import { useState } from "react"  

export function Login(){
const [data,setData] = useState({
  username:"",
  password:"",
  remember:false,
})

function handleInput(event){
  const{name,type,value,checked} = event.target

  setData(data=>{
    return{
    ...data,
    [name]:type === "checked" ? checked:value,
    }
  })
}



  return(
    <form>
      <input value={data.username} onChange={handleInput}  name="username"></input>
      <input value={data.password} onChange={handleInput} type="password" name="password"></input>
      <input value={data.remember} onChange={handleInput} type="checkbox" name="remember"/>
      <button >
        login
      </button>
    </form>
  )
} 






// import React,{createRef} from "react";

// export class Login extends React.Component {
// _buttonRef=createRef();
//   state = {
//     username: "",
//     password: "",
//     remember: false,
//   };
//   handleInputChange = (event) => {
//     const value = event.target.value;
//     const name = event.target.name;
//     const type = event.target.type;
//     const checked = event.target.checked;
//     this.setState({
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   handleReset = () => {
//     this.setState({
//       username: "",
//       password: "",
//       remember: false,
//     });
//   };
    
//   render() {
  
//     return (
//       <form  >
//         <input ref={this._buttonRef}
//           name="username"
//           value={this.state.username}
//           onChange={this.handleInputChange}
//         />
//         <input
//           name="password"
//           type="password"
//           value={this.state.password}
//           onChange={this.handleInputChange}
//         />
//         <input
//           name="checkbox"
//           type="checkbox"
//           checked={this.state.remember}
//           onChange={this.handleInputChange}
//         />

//         <button
//        style={{background:this.state.username.length  < 8 ? "red" : "green"}}
//           type="button"
//           // disabled={!(this.state.username && this.state.password)}
//           onClick={() => this.props.handleState(this.state)}
//         >
//           Login
//         </button>
//         <button type="reset" onClick={this.handleReset}>
//           reset
//         </button>
//       </form>
//     );
//   }
// }
