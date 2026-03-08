import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './components/ThemeContext'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import ProjectsPage from './pages/ProjectsPage'
import ContactPage from './pages/ContactPage'
import './App.css'

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </ThemeProvider>
  )
}

export default App
