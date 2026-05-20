import { useGitHubContext } from "../context/GitHubContext";
export default function ProfileCard(){
    
    const {user} =useGitHubContext()
    if(!user) return null
    return(
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="flex gap-5 items-start">
                {/* avatar */}
                <img src={user.avatar_url} alt={user.login} className="w-20 h-20 rounded-2xl object-cover shrink-0" /> 
                {/* info */}
                <div className="flex-1 min-w-0">
                    <h2 className="text-xl font-bold text-gray-900">
                        {user.name || user.login}
                    </h2>
                    <a  href={user.html_url} target="_blank" rel="noreferrer" className="text-blue-500 text-sm hover:underline">@{user.login}</a>
                    {user.bio &&(
                        <p className="text-gray-600 text-sm mt-2">{user.bio}</p>
                    )}
                    <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-500">
                        {user.location &&(
                            <span>🏢 {user.location}</span>
                        )}
                        {user.company && (
                         <span>🏢 {user.company}</span>
                            )}
                        {user.blog &&(
                            <a href={user.blog} target="_blank" rel="noreferrer" className="text-blue-700 hover:underline">🔗 {user.blog}</a>
                        )}
                    </div>
                    <div className="flex gap-4 mt-3 text-sm">
                        <span className="text-gray-700">
                            <span className="font-semibold">{user.followers}</span>
                            <span className="text-gray-400">followers</span>
                        </span>
                        <span className="text-gray-700">
                            <span className="font-semibold">{user.following}</span>
                             <span className="text-gray-400">following</span>
                        </span>
                          <span className="text-gray-700">
                            <span className="font-semibold">{user.public_repos}</span>
                             <span className="text-gray-400">repos</span>
                        </span>

                    </div>
                </div>
            </div>
        </div>
    )
}