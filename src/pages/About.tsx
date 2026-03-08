import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import TerminalOutput from '../components/TerminalOutput'

const AboutContainer = styled.section`
  padding: 8rem 2rem;
  background: linear-gradient(180deg, var(--bg-color), var(--bg-secondary));
  font-family: 'Courier New', Courier, monospace;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;

  h2 {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: var(--terminal-green);
    font-weight: 800;
  }

  p {
    color: var(--text-secondary);
    font-size: 1.2rem;
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

const AboutText = styled(motion.div)`
  h3 {
    font-size: 2rem;
    margin-bottom: 2rem;
    color: var(--text-primary);
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: var(--text-secondary);
    margin-bottom: 2rem;
  }

  .highlight {
    color: var(--terminal-green);
    font-weight: bold;
  }
`

const AboutImage = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
`

const ProfileCard = styled.div`
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

const StatsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 4rem;
`

const StatCard = styled.div`
  background: var(--card-bg);
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid var(--border-color);
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }
`

const StatNumber = styled.h4`
  font-size: 2.5rem;
  color: var(--terminal-green);
  margin-bottom: 0.5rem;
`

const StatLabel = styled.p`
  color: var(--text-secondary);
  font-size: 1rem;
`

const About: React.FC = () => {
  return (
    <AboutContainer id="about">
      <Container>
        <SectionHeader>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Get to know more about my journey and what drives me
          </motion.p>
        </SectionHeader>

        <AboutContent>
          <AboutText
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3>Hi, I'm Jackson Khuto</h3>
            <p>
              I'm a passionate <span className="highlight">Full-Stack Developer</span> with a keen eye for design and a love for creating seamless user experiences. With expertise in modern technologies and a commitment to writing clean, efficient code, I bring ideas to life through innovative web solutions.
            </p>
            <p>
              My journey in tech started with a curiosity about how things work, and it has evolved into a career dedicated to building digital experiences that make a difference. I believe in the power of technology to solve real-world problems and improve people's lives.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good cup of coffee while planning my next creative endeavor.
            </p>
          </AboutText>

          <AboutImage
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ProfileCard>
              <ProfileInner>
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
            </ProfileCard>
          </AboutImage>
        </AboutContent>

        <TerminalOutput />

        <StatsGrid
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <StatCard>
            <StatNumber>50+</StatNumber>
            <StatLabel>Projects Completed</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber>3+</StatNumber>
            <StatLabel>Years Experience</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber>25+</StatNumber>
            <StatLabel>Happy Clients</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber>100%</StatNumber>
            <StatLabel>Commitment to Quality</StatLabel>
          </StatCard>
        </StatsGrid>
      </Container>
    </AboutContainer>
  )
}

export default About