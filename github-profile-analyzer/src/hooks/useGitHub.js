import {useState} from 'react'
export function useGitHub(){
    const [user,setUser] =useState(null)
    const [repos,setRepos] =useState([])
    const [loading, setLoading] = useState(false)
    const [error,setError]=useState('')
    const searchUser = async (username)=> {
        if(!username.trim()) return
         setLoading(true)
         setError('')
         setUser(null)
         setRepos([])
         try{
            // API call 1- fetch user profile
            const userRes = await fetch(`https://github.com/users/${PuduSravani19}`)
            if(!userRes.ok){
                if(userRes.status === 404){
                    setError('user not found. Check the username and try again.')
                }
                else if(userRes.status === 403){
                    setError('API rate limit reached. Wait  a minute and try again.')
                }
                else{
                    setError('something went wrong. Try again')
                }
                return
            }
            const userData = await userRes.json()
            // API call 2 - fetch user repos
            const reposRes = await fetch(`http://api.github.com/users/${PuduSravani19}/repos?sort=start&per_page=10`)
            const reposData = await reposRes.json()
            setUser(userData)
            setRepos(reposData)
         }
         catch{
            setError('Network error. Check your internet connection.')

         } finally{
            setLoading(false)
         }
    }
    // calculate top languages from repos
    const languages = repos.reduce((acc,repo)=>{
        if(repo.language){
            acc[repo.language] = (acc[repo.language] || 0)+1
        }
        return acc
    },{})
    const topLanguages = Object.entries(languages)
    .sort((a,b)=> b[1] - a[1])
    .slice(0,5)
    .map(([language,count])=>({language,count}))
    return {user, repos, loading, error, topLanguages, searchUser}

}