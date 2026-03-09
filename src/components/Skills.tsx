import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { skills } from '../data/skills'

const SkillsContainer = styled.section`
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
`

const SkillCategory = styled(motion.div)`
  background: linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(30, 27, 75, 0.8));
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid rgba(255, 0, 255, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(255, 0, 255, 0.3);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s;
  }

  &:hover::before {
    left: 100%;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    background: linear-gradient(135deg, rgba(255, 0, 255, 0.1), transparent);
    pointer-events: none;
  }
`

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 1rem;
  font-family: 'Inter', sans-serif;
  position: relative;

  &::after {
    content: '';
    flex: 1;
    height: 2px;
    background: linear-gradient(90deg, rgba(255, 0, 255, 0.5), transparent);
    margin-left: 1rem;
  }
`

const SkillList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

const SkillHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  color: #cbd5e1;
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
`

const SkillLevel = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  color: #94a3b8;
`

const SkillBar = styled.div`
  height: 12px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
  border-radius: 6px;
  overflow: hidden;
  border: 1px solid rgba(255, 0, 255, 0.3);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
  position: relative;
`

const SkillProgress = styled(motion.div)`
  height: 100%;
  background: linear-gradient(90deg, #ff00ff, #00f5ff);
  border-radius: 6px;
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.2), 0 0 10px rgba(255, 0, 255, 0.3);
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    animation: scanline 2s linear infinite;
  }
`

const SkillBadge = styled.div`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  background: rgba(255, 0, 255, 0.1);
  border: 1px solid rgba(255, 0, 255, 0.3);
  color: #ff00ff;
  font-size: 0.7rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`

const FloatingOrbs = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
`

const Orb = styled(motion.div)`
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 0, 255, 0.5), transparent);
  filter: blur(5px);
`

const Skills: React.FC = () => {
  return (
    <SkillsContainer id="skills">
      <GridOverlay />
      <FloatingOrbs>
        <Orb
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{ top: '10%', left: '10%' }}
        />
        <Orb
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
          style={{ top: '70%', right: '10%' }}
        />
      </FloatingOrbs>
      
      <Container>
        <SectionHeader>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Skill Matrix
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Neural pathways optimized for digital creation and problem-solving
          </motion.p>
        </SectionHeader>

        <SkillsGrid>
          {Object.entries(skills).map(([category, skillList]) => (
            <SkillCategory
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <CategoryTitle>
                {category === 'frontend' && '🌐'}
                {category === 'backend' && '⚙️'}
                {category === 'tools' && '🛠️'}
                {category === 'other' && '🚀'}
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </CategoryTitle>
              
              <SkillList>
                {skillList.map((skill) => (
                  <SkillItem key={skill.id}>
                    <SkillHeader>
                      <span style={{ fontFamily: 'Inter, sans-serif' }}>{skill.name}</span>
                      <SkillLevel>
                        <span>{skill.level}%</span>
                        <SkillBadge>Neural Sync</SkillBadge>
                      </SkillLevel>
                    </SkillHeader>
                    <SkillBar>
                      <SkillProgress
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                      />
                    </SkillBar>
                  </SkillItem>
                ))}
              </SkillList>
            </SkillCategory>
          ))}
        </SkillsGrid>
      </Container>
    </SkillsContainer>
  )
}

export default Skills
