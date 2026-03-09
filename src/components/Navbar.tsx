import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from './ThemeContext'
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi'
import styled from 'styled-components'

const NavbarContainer = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: linear-gradient(180deg, rgba(15, 23, 42, 0.9), rgba(30, 27, 75, 0.9));
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 0, 255, 0.3);
  z-index: 1000;
  padding: 1rem 0;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(255, 0, 255, 0.2);

  &[data-scrolled="true"] {
    background: linear-gradient(180deg, rgba(15, 23, 42, 0.95), rgba(30, 27, 75, 0.95));
    padding: 0.5rem 0;
    box-shadow: 0 8px 30px rgba(255, 0, 255, 0.3);
  }
`

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
`

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 800;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Inter', sans-serif;
  position: relative;
  text-transform: uppercase;
  letter-spacing: 2px;
  
  span {
    background: linear-gradient(135deg, #ff00ff, #00f5ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: 900;
    text-shadow: 0 0 10px rgba(255, 0, 255, 0.5);
    animation: neon-flicker 2s infinite;
  }
  
  &::after {
    content: '>';
    position: absolute;
    right: -25px;
    color: #ff00ff;
    animation: blink 1s infinite;
    font-size: 1.2rem;
  }
  
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
`

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`

const NavLink = styled(motion.button)<{ active?: boolean }>`
  background: transparent;
  border: none;
  color: #94a3b8;
  text-decoration: none;
  font-weight: 500;
  position: relative;
  transition: color 0.3s ease;
  font-family: 'Inter', sans-serif;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  
  &:hover {
    color: #fff;
    background: rgba(255, 0, 255, 0.1);
    box-shadow: 0 0 15px rgba(255, 0, 255, 0.3);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: ${props => props.active ? '100%' : '0'};
    height: 3px;
    background: linear-gradient(90deg, #ff00ff, #00f5ff);
    border-radius: 2px;
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
`

const ThemeToggle = styled(motion.button)`
  background: linear-gradient(135deg, rgba(255, 0, 255, 0.1), rgba(0, 245, 255, 0.1));
  border: 1px solid rgba(255, 0, 255, 0.3);
  color: #ff00ff;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 0, 255, 0.2);
  
  &:hover {
    background: linear-gradient(135deg, #ff00ff, #00f5ff);
    color: #0f172a;
    box-shadow: 0 8px 25px rgba(255, 0, 255, 0.5);
    transform: translateY(-2px);
  }
`

const MobileMenuButton = styled(motion.button)`
  display: none;
  background: linear-gradient(135deg, rgba(255, 0, 255, 0.1), rgba(0, 245, 255, 0.1));
  border: 1px solid rgba(255, 0, 255, 0.3);
  color: #ff00ff;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 0, 255, 0.2);
  
  &:hover {
    background: linear-gradient(135deg, #ff00ff, #00f5ff);
    color: #0f172a;
    box-shadow: 0 8px 25px rgba(255, 0, 255, 0.5);
    transform: translateY(-2px);
  }
  
  @media (max-width: 768px) {
    display: block;
  }
`

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  background: linear-gradient(180deg, rgba(15, 23, 42, 0.95), rgba(30, 27, 75, 0.95));
  border-top: 1px solid rgba(255, 0, 255, 0.3);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 999;
  backdrop-filter: blur(10px);
`

const MobileNavLink = styled(motion.button)<{ active?: boolean }>`
  background: transparent;
  border: none;
  color: #94a3b8;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 500;
  padding: 1rem 0;
  border-bottom: 1px solid rgba(255, 0, 255, 0.2);
  transition: color 0.3s ease;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  text-align: left;
  width: 100%;
  
  &:hover {
    color: #fff;
  }
  
  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 4px;
    background: ${props => props.active ? 'linear-gradient(135deg, #ff00ff, #00f5ff)' : 'transparent'};
    border-radius: 50%;
  }
`

const CyberGrid = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    linear-gradient(rgba(255, 0, 255, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 0, 255, 0.1) 1px, transparent 1px);
  background-size: 20px 20px;
  opacity: 0.3;
  pointer-events: none;
  z-index: 0;
`

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Determine active section based on scroll position
      const sections = ['home', 'skills', 'projects', 'contact']
      const currentScroll = window.scrollY
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
      closeMobileMenu()
    }
  }

  return (
    <>
      <NavbarContainer
        data-scrolled={isScrolled.toString()}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      >
        <CyberGrid />
        <NavContent>
          <Logo onClick={() => scrollToSection('home')}>
            <span>JXN</span>
          </Logo>
          
          <NavLinks>
            <NavLink 
              active={activeSection === 'home'}
              onClick={() => scrollToSection('home')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Home
            </NavLink>
            <NavLink 
              active={activeSection === 'skills'}
              onClick={() => scrollToSection('skills')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Skills
            </NavLink>
            <NavLink 
              active={activeSection === 'projects'}
              onClick={() => scrollToSection('projects')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Archive
            </NavLink>
            <NavLink 
              active={activeSection === 'contact'}
              onClick={() => scrollToSection('contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact
            </NavLink>
          </NavLinks>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', position: 'relative', zIndex: 2 }}>
            <ThemeToggle 
              onClick={toggleTheme} 
              aria-label="Toggle theme"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
            </ThemeToggle>
            <MobileMenuButton 
              onClick={toggleMobileMenu} 
              aria-label="Toggle mobile menu"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </MobileMenuButton>
          </div>
        </NavContent>
      </NavbarContainer>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <MobileNavLink 
              active={activeSection === 'home'}
              onClick={() => scrollToSection('home')}
              whileHover={{ x: 10 }}
              whileTap={{ scale: 0.95 }}
            >
              Home
            </MobileNavLink>
            <MobileNavLink 
              active={activeSection === 'skills'}
              onClick={() => scrollToSection('skills')}
              whileHover={{ x: 10 }}
              whileTap={{ scale: 0.95 }}
            >
              Skills
            </MobileNavLink>
            <MobileNavLink 
              active={activeSection === 'projects'}
              onClick={() => scrollToSection('projects')}
              whileHover={{ x: 10 }}
              whileTap={{ scale: 0.95 }}
            >
              Archive
            </MobileNavLink>
            <MobileNavLink 
              active={activeSection === 'contact'}
              onClick={() => scrollToSection('contact')}
              whileHover={{ x: 10 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact
            </MobileNavLink>
          </MobileMenu>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar