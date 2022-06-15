
import { UseGithubuser } from "./UseGithubuser";
export function GithubUser(){
const {data,error}=UseGithubuser("AntonioValerioCalo")
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
