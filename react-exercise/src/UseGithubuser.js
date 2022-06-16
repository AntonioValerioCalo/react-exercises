// import { useEffect, useState } from "react";
import useSWR from "swr";
const fetcher =url=>fetch(url).then(response=>response.json())
export const UseGithubuser = (username) => {
const {data,error,mutate}=useSWR(`https://api.github.com/users`,fetcher)

  function handleRefresh(){
       mutate()
 }
  return{
    data,
    error,
    oneRefresh:handleRefresh,
  }
  // const [data, setData] = useState(null);
  // const [load, setLoad] = useState(false);
  // const [error, setError] = useState(null);

  // async function handleFetch(username) {
  //   setLoad(true);
  //   setError(null);
  //   try {
  //     const response = await fetch(`https://api.github.com/users/${username}`);
  //     const json = await response.json();
  //     setData(json);
  //     console.log(json);
  //   } catch (error) {
  //     setError(error);
  //     setData(null);
  //   } finally {
  //     setLoad(false);
  //   }
  // }
  // useEffect(() => {
  //   handleFetch(username);
  // }, [username]);

  // return {
  //   data,
  //   load,
  //   error,
  // };
};
