import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const AboutContainer = styled.section`
  padding: 8rem 2rem;
  background: linear-gradient(180deg, #0f172a, #1e1b4b);
  position: relative;
  overflow: hidden;
`

const GridOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(255, 0, 255, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 0, 255, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
  z-index: 0;
  opacity: 0.3;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;

  h2 {
    font-size: 3rem;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, #ff00ff, #00f5ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-family: 'Inter', sans-serif;
    text-shadow: 0 0 20px rgba(255, 0, 255, 0.3);
    animation: neon-flicker 2s infinite;
  }

  p {
    color: #94a3b8;
    font-size: 1.2rem;
    font-family: 'Inter', sans-serif;
  }
`

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`

const AboutText = styled.div`
  h3 {
    font-size: 2rem;
    margin-bottom: 2rem;
    color: #fff;
    font-family: 'Inter', sans-serif;
  }

  p {
    color: #cbd5e1;
    line-height: 1.8;
    margin-bottom: 2rem;
    font-family: 'Inter', sans-serif;
    font-size: 1.1rem;
  }

  .highlight {
    color: #ff00ff;
    font-weight: bold;
  }
`

const AboutImage = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

const HolographicFrame = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
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
  width: 360px;
  height: 360px;
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
  width: 240px;
  height: 240px;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, #ff00ff, transparent 60%),
              radial-gradient(circle at 70% 70%, #00f5ff, transparent 60%);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 8rem;
  color: white;
  text-shadow: 0 0 20px rgba(255, 0, 255, 0.5);
  margin-bottom: 1rem;
  animation: glitch 3s infinite;
`

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  width: 100%;
  padding: 0 2rem;
`

const StatCard = styled.div`
  background: rgba(255, 0, 255, 0.1);
  border: 1px solid rgba(255, 0, 255, 0.3);
  padding: 1rem;
  border-radius: 12px;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(255, 0, 255, 0.3);
  }
`

const StatValue = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #fff;
  margin-bottom: 0.5rem;
`

const StatLabel = styled.div`
  color: #94a3b8;
  font-size: 0.9rem;
  font-family: 'Inter', sans-serif;
`

const FloatingElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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

const CyberpunkAbout: React.FC = () => {
  return (
    <AboutContainer id="about">
      <GridOverlay />
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
      </FloatingElements>
      
      <Container>
        <SectionHeader>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Digital Profile
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A glimpse into my cybernetic development journey and digital expertise
          </motion.p>
        </SectionHeader>

        <AboutContent>
          <AboutText>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Neural Interface Active
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              I'm a <span className="highlight">Full-Stack Developer</span> with a passion for creating immersive digital experiences. 
              My journey began with a fascination for how code can transform ideas into reality, and over the years, 
              I've honed my skills across the entire development stack.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              With expertise in modern technologies and a keen eye for design, I bridge the gap between 
              functionality and aesthetics. I believe that great software is not just about solving problems, 
              but about creating <span className="highlight">beautiful, intuitive experiences</span> that users love.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              When I'm not coding, you can find me exploring the latest tech trends, contributing to open-source 
              projects, or experimenting with new frameworks and tools to stay at the cutting edge of development.
            </motion.p>
          </AboutText>

          <AboutImage
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <HolographicFrame>
              <ProfileContent>
                <Avatar>👨‍💻</Avatar>
                <StatsGrid>
                  <StatCard>
                    <StatValue>50+</StatValue>
                    <StatLabel>Projects Completed</StatLabel>
                  </StatCard>
                  <StatCard>
                    <StatValue>5+</StatValue>
                    <StatLabel>Years Experience</StatLabel>
                  </StatCard>
                  <StatCard>
                    <StatValue>100%</StatValue>
                    <StatLabel>Client Satisfaction</StatLabel>
                  </StatCard>
                  <StatCard>
                    <StatValue>+27 66</StatValue>
                    <StatLabel>Signal Active</StatLabel>
                  </StatCard>
                </StatsGrid>
              </ProfileContent>
            </HolographicFrame>
          </AboutImage>
        </AboutContent>
      </Container>
    </AboutContainer>
  )
}

export default CyberpunkAbout