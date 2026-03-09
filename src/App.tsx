import React from 'react'
import { ThemeProvider } from './components/ThemeContext'
import GlobalStyles from './styles/GlobalStyles'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import CyberpunkContact from './components/CyberpunkContact'

function App() {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <div className="App">
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <CyberpunkContact />
      </div>
    </ThemeProvider>
  )
}

export default App
