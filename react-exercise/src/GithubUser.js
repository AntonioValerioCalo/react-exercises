
import { UseGithubuser } from "./UseGithubuser";
export function GithubUser({username}){
    const {data,load,error} = UseGithubuser(username);
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
         {load && <h1>...loading</h1>}
         {error && <h1>there has been error</h1>}
        {data &&<h1>{data.login}</h1>}
    </div>
    )
}
