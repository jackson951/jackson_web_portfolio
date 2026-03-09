import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styled from 'styled-components'
import { FiDownload, FiGithub, FiLinkedin, FiCode, FiTerminal, FiZap } from 'react-icons/fi'
import TerminalCursor from './TerminalCursor'

const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #1f2937 100%);
`

const GridBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(255, 0, 255, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 0, 255, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
  z-index: -1;
  opacity: 0.3;
`

const Scanlines = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0.02),
    rgba(255, 255, 255, 0)
  );
  background-size: 100% 2px;
  pointer-events: none;
  z-index: -1;
  animation: scanline 8s linear infinite;
`

const HeroContent = styled.div`
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`

const TextContent = styled.div`
  h1 {
    font-size: 4rem;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, #ff00ff, #00f5ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: 800;
    font-family: 'Inter', sans-serif;
    text-shadow: 0 0 20px rgba(255, 0, 255, 0.3);
    animation: neon-flicker 2s infinite;
  }

  h2 {
    font-size: 1.8rem;
    color: #94a3b8;
    margin-bottom: 2rem;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.8;
    color: #cbd5e1;
    margin-bottom: 3rem;
    font-family: 'Inter', sans-serif;
    max-width: 600px;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }
    
    h2 {
      font-size: 1.2rem;
    }
    
    p {
      font-size: 1rem;
    }
  }
`

const ProfileSection = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1000px;

  @media (max-width: 768px) {
    order: -1;
  }
`

const HolographicFrame = styled.div`
  position: relative;
  width: 320px;
  height: 320px;
  border-radius: 20px;
  background: linear-gradient(135deg, rgba(255, 0, 255, 0.1), rgba(0, 245, 255, 0.1));
  border: 1px solid rgba(255, 0, 255, 0.3);
  box-shadow: 
    0 0 20px rgba(255, 0, 255, 0.2),
    inset 0 0 20px rgba(0, 245, 255, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  backdrop-filter: blur(10px);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    animation: scanline 4s linear infinite;
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    height: 90%;
    border: 1px solid rgba(255, 0, 255, 0.5);
    border-radius: 15px;
    animation: pulse 3s ease-in-out infinite;
  }
`

const ProfileContent = styled.div`
  width: 280px;
  height: 280px;
  border-radius: 15px;
  background: linear-gradient(135deg, #0f172a, #1e1b4b);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(255, 0, 255, 0.3);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 30% 30%, rgba(255, 0, 255, 0.2), transparent 60%),
                radial-gradient(circle at 70% 70%, rgba(0, 245, 255, 0.2), transparent 60%);
    animation: float 6s ease-in-out infinite;
  }
`

const Avatar = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, #ff00ff, transparent 60%),
              radial-gradient(circle at 70% 70%, #00f5ff, transparent 60%);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 6rem;
  color: white;
  text-shadow: 0 0 20px rgba(255, 0, 255, 0.5);
  margin-bottom: 1rem;
  animation: glitch 3s infinite;
`

const ProfileStats = styled.div`
  display: flex;
  gap: 2rem;
  text-align: center;
`

const Stat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #94a3b8;
  font-size: 0.9rem;
`

const StatValue = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff;
  margin-bottom: 0.25rem;
`

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 2rem;
`

const Button = styled(motion.button)`
  padding: 0.75rem 2rem;
  border-radius: 50px;
  border: 2px solid #ff00ff;
  background: transparent;
  color: #ff00ff;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Inter', sans-serif;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }

  &:hover::before {
    left: 100%;
  }

  &:hover {
    background: #ff00ff;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(255, 0, 255, 0.5);
  }
`

const SecondaryButton = styled(Button)`
  border-color: #00f5ff;
  color: #00f5ff;

  &:hover {
    background: #00f5ff;
    color: #0f172a;
  }
`

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;

  a {
    color: #94a3b8;
    font-size: 1.5rem;
    transition: all 0.3s ease;
    position: relative;
    
    &:hover {
      color: #ff00ff;
      transform: translateY(-3px);
      text-shadow: 0 0 10px rgba(255, 0, 255, 0.5);
    }
  }
`

const FloatingElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;
`

const FloatingElement = styled(motion.div)`
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 0, 255, 0.3), transparent);
  border: 1px solid rgba(255, 0, 255, 0.5);
`

const CodeMatrix = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
  opacity: 0.1;
`

const MatrixColumn = styled(motion.div)`
  position: absolute;
  font-family: 'Courier New', Courier, monospace;
  color: #00f5ff;
  font-size: 1.5rem;
  text-shadow: 0 0 5px #00f5ff;
`

const Hero: React.FC = () => {
  const [matrixColumns, setMatrixColumns] = useState<number[]>([])

  useEffect(() => {
    // Generate random matrix columns
    const columns = Array.from({ length: 10 }, (_, i) => i * 100)
    setMatrixColumns(columns)
  }, [])

  const handleDownloadResume = () => {
    // Download the actual CV file
    const link = document.createElement('a')
    link.href = 'C:/Users/Jackson.Khuto/Downloads/Jackson_Khuto_CV.pdf'
    link.download = 'Jackson_Khuto_CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleContact = () => {
    window.location.href = 'mailto:jackson.khuto@example.com'
  }

  return (
    <HeroContainer id="home">
      <GridBackground />
      <Scanlines />
      <FloatingElements>
        <FloatingElement
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{ top: '10%', left: '10%' }}
        />
        <FloatingElement
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
          style={{ top: '70%', right: '10%' }}
        />
        <FloatingElement
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          style={{ bottom: '20%', left: '80%' }}
        />
      </FloatingElements>
      
      <CodeMatrix>
        {matrixColumns.map((left, index) => (
          <MatrixColumn
            key={index}
            initial={{ y: -100 }}
            animate={{ y: '100vh' }}
            transition={{ 
              duration: 10 + Math.random() * 10, 
              repeat: Infinity, 
              delay: index * 0.5 
            }}
            style={{ left: `${left}px` }}
          >
            {Array.from({ length: 20 }, (_, i) => 
              String.fromCharCode(65 + Math.floor(Math.random() * 26))
            ).join('')}
          </MatrixColumn>
        ))}
      </CodeMatrix>

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
        
        <ProfileSection
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <HolographicFrame>
            <ProfileContent>
              <Avatar>👨‍💻</Avatar>
              <ProfileStats>
                <Stat>
                  <StatValue>50+</StatValue>
                  <span>Projects</span>
                </Stat>
                <Stat>
                  <StatValue>5+</StatValue>
                  <span>Years Exp</span>
                </Stat>
              </ProfileStats>
            </ProfileContent>
          </HolographicFrame>
        </ProfileSection>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero