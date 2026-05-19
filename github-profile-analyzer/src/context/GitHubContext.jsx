import {createContext, useContext} from 'react'
import {useGitHub} from '../hooks/useGitHub'
//step 1 -create the context
const GitHubContext = createContext()
//step 2 -provider wraps app and shares data
export function GitHubProvider ({children}){
    const github = useGitHub()
    return(
        <GitHubContext.Provider value={github}>
            {children}
        </GitHubContext.Provider>
    )
}
export function useGitHubContext(){
    return useContext(GitHubContext)
}