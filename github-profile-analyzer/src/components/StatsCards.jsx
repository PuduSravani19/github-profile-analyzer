import {useGitHubContext} from '../context/GitHubContext'
const stats =[
    {key:'public_repos', label:'Repositories', emoji:'📁',bg:'bg-blue-50',color:'text-blue-600'},
    {key:'followers', label:'followers', emoji:'👥',bg:'bg-purple-50', color:'text-purple-600'},
    {key:'following', label:'following', emoji:'➕',bg: 'bg-green-50', color:'text-green-600'},
    {key:'public_gists', label:'Gists', emoji:'📝',bg:'bg-orange-50', color:'text-orange-600'},
]
export default function StatsCards(){
    const {user} =useGitHubContext()
    if(!user) return null
    return(
        <div className="grid grid-cols-4 gap-3">
           
           {stats.map((stat)=>(
            <div key={stat.key} className={`${stat.bg} rounded-2xl p-4 text-center`}>
                <p className="text-2xl mb-1">{stat.emoji}</p>
                <p className={'text-xl font-bold ${stat.color}'}>
                    {user[stat.key] || 0}
                </p>
                <p className="text-xs text-gray-400 mt-1">{stat.label}</p>
            </div>
           ))}
        </div>
    )
}