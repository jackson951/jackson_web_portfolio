import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { skills } from '../data/skills'

const SkillsContainer = styled.section`
  padding: 8rem 2rem;
  background: linear-gradient(180deg, var(--bg-color), var(--bg-secondary));
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
    background: linear-gradient(135deg, var(--accent-color), #8b5cf6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  p {
    color: var(--text-secondary);
    font-size: 1.2rem;
  }
`

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`

const SkillCategory = styled(motion.div)`
  background: var(--card-bg);
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid var(--border-color);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
    transition: left 0.5s;
  }

  &:hover::after {
    left: 100%;
  }
`

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  gap: 1rem;

  &::after {
    content: '';
    flex: 1;
    height: 2px;
    background: var(--border-color);
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
  gap: 0.5rem;
`

const SkillHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  color: var(--text-primary);
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.9rem;
`

const SkillBar = styled.div`
  height: 8px;
  background: #0d1117;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid #30363d;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
`

const SkillProgress = styled(motion.div)`
  height: 100%;
  background: linear-gradient(90deg, #238636, #2ea043);
  border-radius: 4px;
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.2);
`

const Skills: React.FC = () => {
  return (
    <SkillsContainer id="skills">
      <Container>
        <SectionHeader>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Skills & Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Technologies I work with to build amazing digital experiences
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
                {category === 'frontend' && '🎨'}
                {category === 'backend' && '⚙️'}
                {category === 'tools' && '🛠️'}
                {category === 'other' && '🚀'}
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </CategoryTitle>
              
              <SkillList>
                {skillList.map((skill) => (
                  <SkillItem key={skill.id}>
                    <SkillHeader>
                      <span>➜ {skill.name}</span>
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