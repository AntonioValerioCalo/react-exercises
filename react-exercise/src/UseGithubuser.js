import { useEffect, useState } from 'react'

export const UseGithubuser = (username) => {
    const[data,setData]=useState(null);

    async function handleFetch(username){
        const response = await fetch(`https://api.github.com/users/${username}`);
        const json= await response.json();
        setData(json);
        console.log(json)
    }
    useEffect(()=>{
        handleFetch(username)
    },[username])

  return {  
       data,
  }
}
