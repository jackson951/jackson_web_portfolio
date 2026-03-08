import React from 'react'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}

export default Home