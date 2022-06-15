import { useState } from "react";
import { useParams } from "react-router-dom";
import { GithubUser } from "./GithubUser";

export function GithubUserList(){
    const {item}=useParams()
    const [newData, setnewData]=useState("")
    const[data , setData]=useState([])
   const  handleAdd = () => {
       setData(prev =>[...prev,newData])
       setnewData("")
       
    
   }
return(
    <div><ul>
        {data.map((item,id)=>(<li key={id}><GithubUser username={item}/></li>))}
         <li>{item}</li>
    </ul>
        <form  >
            <input
             
            value={newData}
            onChange={e=>setnewData(e.target.value)}
            
            
            />
           <button onClick={handleAdd} >
               added
           </button>
            
        </form>
    </div>
    
)
}