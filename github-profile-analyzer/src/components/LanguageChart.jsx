import { useGitHubContext } from "../context/GitHubContext";
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

export default function LanguageChart(){
    const {topLanguages} = useGitHubContext()
    if(!topLanguages || topLanguages === 0) return null
    return(
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-lg font-medium text-gray-800 mb-1">Top Languages</h2>
            <p className="text-xs text-gray-400 mb-6">Based on top 10 repositories</p>
            <ResponsiveContainer width="100%" height={220}>
                <BarChart data={topLanguages} margin={{top:0, right:0, left:0, bottom:0}}>
                    <CartesianGrid strokeDasharray ="3 3" stroke="#f0f0f0" />   
                    <XAxis dataKey="language" tick={{fontsize:12, fill:'#9ca3af'}}
                    axisLine={false}
                    ticKLine={false} />
                    <YAxis tick={{fontSize:12, fill:'#9ca3af'}}
                    axisLine={false}
                    tickLine={false}
                    allowDecimals={false}
                    label={{
                        value:'repos',
                        angle:-90,
                        position:'insideLeft',
                        style:{fontSize:11, fill:'#9ca3af'}
                    }} />
                    <Tooltip formatter={(value) => [`$ {value} repos`,'Count']}
                    contentStyle ={{borderRadius:'12px',
                            border:'1px solid #f0f0f0',
                            fontSize:'13px',
                    }} />
                    <Bar dataKey="count" fill="#6366f1" radius={[6,6,0,0]} />

                </BarChart>

            </ResponsiveContainer>

        </div>
    )
}