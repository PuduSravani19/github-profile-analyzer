import SearchBar from './components/SearchBar'
import ProfileCard from './components/ProfileCard'
import { useGitHubContext } from './context/GitHubContext'
import StatsCard  from './components/StatsCards'
import RepoList from './components/RepoList'
import LanguageChart from './components/LanguageChart'

export default function App(){
  const {user, error, loading} =useGitHubContext()
  return(
    <div className="min-h-screen bg-gray-50">
      <SearchBar />
      <div className="max-w-2xl mx-auto px-4 py-6 flex flex-col gap-5">
        {loading && (
          <div className="flex justify-center py-12">
            <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
          </div>
        )}
        { /* error */}
       
       {error && (
        <div className="bg-red-50 border border-red-100 rounded-2xl p-4 text-center text-red-500 text-sm">{error}</div>
       )}
       { /* results */}
       {user && !loading && (
        <>
        <ProfileCard />
        <StatsCard />
        <LanguageChart />
        <RepoList />
        </>
       )}
      </div>
      
      
    </div>
  )
}