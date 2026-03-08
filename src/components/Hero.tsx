import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { FiDownload, FiGithub, FiLinkedin } from 'react-icons/fi'
import TerminalCursor from './TerminalCursor'

const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 4rem 2rem;
`

const HeroContent = styled.div`
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`

const TextContent = styled.div`
  h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    color: var(--terminal-green);
    font-family: 'Courier New', Courier, monospace;
    font-weight: 800;
  }

  h2 {
    font-size: 1.5rem;
    color: var(--text-secondary);
    margin-bottom: 2rem;
    font-family: 'Courier New', Courier, monospace;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: var(--text-secondary);
    margin-bottom: 3rem;
    font-family: 'Courier New', Courier, monospace;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }
    
    h2 {
      font-size: 1.2rem;
    }
  }
`

const ProfileImage = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    order: -1;
  }
`

const ProfileCircle = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, var(--accent-color), transparent 60%),
              radial-gradient(circle at 70% 70%, #8b5cf6, transparent 60%);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border: 2px solid var(--border-color);
    border-radius: 50%;
    animation: float 6s ease-in-out infinite;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
`

const ProfileInner = styled.div`
  width: 280px;
  height: 280px;
  border-radius: 50%;
  background: var(--bg-color);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--border-color);
`

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`

const Button = styled(motion.button)`
  padding: 0.75rem 2rem;
  border-radius: 50px;
  border: 2px solid var(--accent-color);
  background: transparent;
  color: var(--accent-color);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: var(--accent-color);
    color: var(--bg-color);
    transform: translateY(-2px);
  }
`

const SecondaryButton = styled(Button)`
  border-color: var(--border-color);
  color: var(--text-primary);
  background: var(--card-bg);

  &:hover {
    background: var(--accent-color);
    color: var(--bg-color);
    border-color: var(--accent-color);
  }
`

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;

  a {
    color: var(--text-secondary);
    font-size: 1.5rem;
    transition: all 0.3s ease;
    
    &:hover {
      color: var(--accent-color);
      transform: translateY(-3px);
    }
  }
`

const BackgroundShapes = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: -1;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(56, 189, 248, 0.1) 0%, transparent 70%);
    animation: float 10s ease-in-out infinite;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -50%;
    left: -50%;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%);
    animation: float 12s ease-in-out infinite reverse;
  }
`

const Hero: React.FC = () => {
  const handleDownloadResume = () => {
    // In a real app, this would download a resume file
    alert('Resume download would happen here!')
  }

  const handleContact = () => {
    window.location.href = 'mailto:jackson.khuto@example.com'
  }

  return (
    <HeroContainer id="home">
      <BackgroundShapes />
      <HeroContent>
        <TextContent>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Jackson Khuto<TerminalCursor />
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Full-Stack Developer & UI/UX Enthusiast<TerminalCursor />
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            I create beautiful, functional, and user-friendly digital experiences.
            With expertise in modern technologies and a passion for clean code,
            I bring ideas to life through innovative web solutions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <ActionButtons>
              <Button
                onClick={handleDownloadResume}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiDownload />
                Download Resume
              </Button>
              <SecondaryButton
                onClick={handleContact}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </SecondaryButton>
            </ActionButtons>
            <SocialLinks>
              <motion.a
                href="https://github.com/jackson951"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiGithub />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/jackson-khuto"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiLinkedin />
              </motion.a>
            </SocialLinks>
          </motion.div>
        </TextContent>
        
        <ProfileImage
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <ProfileCircle>
            <ProfileInner>
              {/* In a real app, this would be an actual profile image */}
              <div style={{ 
                width: '260px', 
                height: '260px', 
                borderRadius: '50%', 
                background: 'var(--bg-secondary)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '8rem',
                color: 'var(--text-secondary)'
              }}>
                👨‍💻
              </div>
            </ProfileInner>
          </ProfileCircle>
        </ProfileImage>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero