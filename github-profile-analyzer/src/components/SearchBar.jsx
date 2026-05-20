import {useState} from 'react'
import {useGitHubContext} from '../context/GitHubContext'
export default function SearchBar(){
    const { searchUser, loading} =useGitHubContext()
    const [input, setInput] =useState('')
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(!input.trim()) return
        searchUser(input.trim())
    }
    const handleKeyDown =(e)=>{
        if(e.key === 'Enter') handleSubmit(e)
    }
return(
    <div className="bg-linear-to-r from-gray-900 to-gray-800 px-4 py-12">
        <div className="max-w-2xl max-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-2">
                🐙 GitHub Profile Analyzer
            </h2>
            <p className="text-gray-400 text-sm mb-8">Explore any GitHub profile instantly</p>
            <form onSubmit={handleSubmit} className="flex gap-3">
                <input type="text"value={input} onChange={(e)=>setInput(e.target.value)}
                onKeyDown={handleKeyDown} placeholder="Enter GitHub username" 
                className="flex-1 px-4 py-3 rounded-xl text-sm bg-gray-700 text-white placholder-gray-400
                border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500
                focus:border-transparent" />
                <button  type="submit" disabled={loading || !input.trim()}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-6 py-3 rounded-3xl text-sm font-medium transition-colors">
                    {loading ? 'Searching...': 'Search'}
                </button>

            </form>
        </div>

    </div>
)

}