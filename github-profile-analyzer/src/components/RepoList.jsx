
import { useGitHubContext } from "../context/GitHubContext";
const LANGUAGE_COLORS ={
    JavaScript:'bg-yellow-100 text-yellow-700',
    TypeScript:'bg-blue-100 text-blue-700',
    Python: 'bg-green-100 text-green-700',
    Java: 'bg-orange-100 text-orange-700',
    CSS:'bg-pink-100 text-pink-700',
    HTML:'bg-red-100 text-gray-700',
    C:'bg-gray-100 text-gray-700',
    Ruby: 'bg-red-100 text-red-700',
    Go: 'bg-cyan-100 text-cyan-700',
    Rust: 'bg-orange-100 text-orange-700',

}
 export default function RepoList(){
    const {repos} =useGitHubContext()
    if(!repos || repos.length === 0) return null
    return(
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-lg font-medium text-gray-800 mb-4">Top Repositories
                
            <span className="m1-2 text-xs font-normal text-gray-400">(sorted by stars)</span>
            </h2>
            <div className="flex flex-col gap-3">
                {repos.map((repo)=>(
                    <a key={repo.id} href={repo.html_url} target="_blank" rel="noreferrer" className="flex flex-col gap-2 p-4 rounded-xl border border-gray-100 
                    hover:bg-blue-50 transition-all">
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-semibold text-blue-600"> 📁{repo.name}</span>
                            {repo.fork &&(
                                <span className="text-xs text-gray-400">forked</span>
                            )}
                        </div>
                         {/* description */}
                         {repo.description && (
                            <p className="text-xs text-gray-500 leading-realxed">{repo.description}</p>
                         )}
                          {/* stats row */}
                          <div className="flex items-center gap-3 mt-1">
                            {repo.language && (
                                <span className={`text-xs px-2 py-0.5 rounded-full font-medium
                                    ${LANGUAGE_COLORS[repo.language] || 'bg-gray-100 text-gray-600'}`}>{repo.language}</span>
                            )}
                            <span className="text-xs text-gray-400">⭐ {repo.stargazer_count}</span>
                            <span className="text-xs text-gray-400">🍴 {repo.forks_count}</span>
                             <span className="text-xs text-gray-400">
                              Updated {new Date(repo.updated_at).toLocaleDateString()}
                             </span>
                          </div>
                    </a>
                    
                ))}

            </div>
        </div>
    )
 }