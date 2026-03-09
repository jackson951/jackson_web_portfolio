import React from 'react'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import CyberpunkContact from '../components/CyberpunkContact'

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <CyberpunkContact />
    </>
  )
}

export default Home
