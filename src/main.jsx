import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Test from './Test'
import Explore from './pages/Explore'
import Vision from './pages/Vision'
import Tech from './pages/Tech'
import FaqPage from './pages/FaqPage'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/tech" element={<Tech />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
