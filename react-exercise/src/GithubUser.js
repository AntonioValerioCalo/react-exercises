
import { UseGithubuser } from "./UseGithubuser";
export function GithubUser({username}){
    const {data} = UseGithubuser(username);
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
        {data &&<h1>{data.login}</h1>}
    </div>
    )
}
