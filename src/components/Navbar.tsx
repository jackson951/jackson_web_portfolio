import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from './ThemeContext'
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi'
import styled from 'styled-components'

const NavbarContainer = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border-color);
  z-index: 1000;
  padding: 1rem 0;
  transition: all 0.3s ease;

  &[data-scrolled="true"] {
    background: rgba(15, 23, 42, 0.95);
    padding: 0.5rem 0;
  }
`

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Courier New', Courier, monospace;
  position: relative;
  
  span {
    color: var(--terminal-green);
    font-weight: 800;
    text-shadow: 0 0 10px rgba(46, 160, 67, 0.5);
  }
  
  &::after {
    content: '>';
    position: absolute;
    right: -25px;
    color: var(--terminal-green);
    animation: blink 1s infinite;
  }
  
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
`

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`

const NavLink = styled(Link)<{ active?: boolean }>`
  color: ${props => props.active ? 'var(--accent-color)' : 'var(--text-secondary)'};
  text-decoration: none;
  font-weight: 500;
  position: relative;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--accent-color);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: ${props => props.active ? '100%' : '0'};
    height: 2px;
    background-color: var(--accent-color);
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
`

const ThemeToggle = styled.button`
  background: none;
  border: none;
  color: var(--text-secondary);
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--card-bg);
    color: var(--text-primary);
  }
`

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: var(--text-secondary);
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--card-bg);
    color: var(--text-primary);
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
  background: var(--bg-color);
  border-top: 1px solid var(--border-color);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  z-index: 999;
`

const MobileNavLink = styled(Link)<{ active?: boolean }>`
  color: ${props => props.active ? 'var(--accent-color)' : 'var(--text-secondary)'};
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 500;
  padding: 1rem 0;
  border-bottom: 1px solid var(--border-color);
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--accent-color);
  }
`

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
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

  return (
    <>
      <NavbarContainer
        data-scrolled={isScrolled.toString()}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      >
        <NavContent>
          <Logo to="/" onClick={closeMobileMenu}>
            <span>JK</span>
          </Logo>
          
          <NavLinks>
            <NavLink to="/" active={location.pathname === '/'}>Home</NavLink>
            <NavLink to="/about" active={location.pathname === '/about'}>About</NavLink>
            <NavLink to="/projects" active={location.pathname === '/projects'}>Projects</NavLink>
            <NavLink to="/contact" active={location.pathname === '/contact'}>Contact</NavLink>
          </NavLinks>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <ThemeToggle onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
            </ThemeToggle>
            <MobileMenuButton onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
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
            <MobileNavLink to="/" active={location.pathname === '/'} onClick={closeMobileMenu}>
              Home
            </MobileNavLink>
            <MobileNavLink to="/about" active={location.pathname === '/about'} onClick={closeMobileMenu}>
              About
            </MobileNavLink>
            <MobileNavLink to="/projects" active={location.pathname === '/projects'} onClick={closeMobileMenu}>
              Projects
            </MobileNavLink>
            <MobileNavLink to="/contact" active={location.pathname === '/contact'} onClick={closeMobileMenu}>
              Contact
            </MobileNavLink>
          </MobileMenu>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar