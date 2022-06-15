import useSWR from "swr"

const fetcher=url=>fetch(url).then(response=>response.json())
// import { UseGithubuser } from "./UseGithubuser";
export function GithubUser(){
const {data, error}=useSWR(`https://api.github.com/users`,fetcher)
    // const {data,load,error} = UseGithubuser(username);
// const [data , setData] = useState(null);

// useEffect(()=>{

//     fetch(`https://api.github.com/users/${username}`)
//     .then(response=>{
//        return response.json()
//     })
//     .then(json=>{
//         console.log(json)
//         setData(json)
//     })

// },[username]) 
    return(
     <div>
         {!data && !error && <h1>...loading</h1>}
         {error && <h1>there has been error</h1>}
        {data && !error && data.map((user)=>(<ul>
            <li >
                {user.login}
            </li>
        </ul>))}
    </div>
    )
}
