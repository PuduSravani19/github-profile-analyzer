import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {GitHubProvider} from './context/GitHubContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GitHubProvider>
       <App />

    </GitHubProvider>
   
   
  </StrictMode>
)
