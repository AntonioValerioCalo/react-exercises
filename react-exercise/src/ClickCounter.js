
import {useEffect, useState } from "react";
export function ClickCounter(props,{initialValue=0}){
  const [counter, setCounter] = useState(initialValue)
    function handleIncrement(){
      setCounter(c => c + 1)
    }
    useEffect(()=>{
      console.log(`your click:${counter}`)
    },[counter])

  return(
    <div>
      <h2>{counter}</h2>
      <button type="button" onClick={handleIncrement}>increment</button>
    </div>
  )

}







// import React from "react";

// export class ClickCounter extends React.Component {
//   state = {
//     count: 0,
//   };
//   handleClick = () => {
//     this.setState(({ count }) => ({
//       count: count + 1,
//     }));
//   };
//   render() {
//     return (
//       <div>
//         <h3>{this.state.count}</h3>
//         <button onClick={this.handleClick}>increment</button>
//       </div>
//     );
//   }
// }

