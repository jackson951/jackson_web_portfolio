import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styled from 'styled-components'
import { projects } from '../data/projects'
import { Project as ProjectType } from '../types'

const ProjectsContainer = styled.section`
  padding: 8rem 2rem;
  background: linear-gradient(180deg, #1e1b4b, #0f172a);
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

const FilterButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`

const FilterButton = styled(motion.button)<{ active: boolean }>`
  padding: 0.5rem 1.5rem;
  border-radius: 25px;
  border: 2px solid rgba(255, 0, 255, 0.5);
  background: ${props => props.active ? 'linear-gradient(135deg, #ff00ff, #00f5ff)' : 'transparent'};
  color: ${props => props.active ? '#0f172a' : '#cbd5e1'};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Inter', sans-serif;
  position: relative;
  overflow: hidden;
  box-shadow: ${props => props.active ? '0 4px 15px rgba(255, 0, 255, 0.4)' : 'none'};

  &:hover {
    background: linear-gradient(135deg, #ff00ff, #00f5ff);
    color: #0f172a;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(255, 0, 255, 0.5);
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s;
  }

  &:hover::after {
    left: 100%;
  }
`

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  gap: 2rem;
`

const ProjectCard = styled(motion.div)`
  background: linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(30, 27, 75, 0.8));
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(255, 0, 255, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  backdrop-filter: blur(10px);

  &:hover {
    transform: translateY(-10px) rotateY(5deg);
    box-shadow: 0 20px 40px rgba(255, 0, 255, 0.3);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255, 0, 255, 0.1), transparent);
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`

const ProjectHeader = styled.div<{ image?: string }>`
  position: relative;
  height: 200px;
  background: linear-gradient(135deg, rgba(255, 0, 255, 0.2), rgba(0, 245, 255, 0.2));
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 4rem;
  overflow: hidden;
  
  ${props => props.image && `
    background-image: url(${props.image});
    background-size: cover;
    background-position: center;
    background-blend-mode: overlay;
  `}

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.8) 100%);
    pointer-events: none;
  }
`

const ProjectContent = styled.div`
  padding: 2rem;
  position: relative;
`

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #fff;
  font-family: 'Inter', sans-serif;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 50px;
    height: 3px;
    background: linear-gradient(90deg, #ff00ff, #00f5ff);
    border-radius: 2px;
  }
`

const ProjectDescription = styled.p`
  color: #cbd5e1;
  line-height: 1.6;
  margin-bottom: 2rem;
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
`

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
`

const Tag = styled.span`
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  background: rgba(255, 0, 255, 0.1);
  color: #ff00ff;
  font-size: 0.75rem;
  border: 1px solid rgba(255, 0, 255, 0.3);
  font-weight: bold;
  font-family: 'Inter', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`

const ProjectButton = styled(motion.a)`
  padding: 0.5rem 1.5rem;
  border-radius: 25px;
  border: 2px solid rgba(255, 0, 255, 0.5);
  background: transparent;
  color: #ff00ff;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  font-family: 'Inter', sans-serif;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(255, 0, 255, 0.2);

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

  &:hover {
    background: #ff00ff;
    color: #0f172a;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(255, 0, 255, 0.5);
  }
`

const ProjectCategory = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(255, 0, 255, 0.2);
  border: 1px solid rgba(255, 0, 255, 0.5);
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  color: #ff00ff;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.5px;
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
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 0, 255, 0.3), transparent);
  border: 1px solid rgba(255, 0, 255, 0.5);
  filter: blur(2px);
`

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | ProjectType['category']>('all')

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  const categories = ['all', 'web', 'mobile', 'desktop'] as const

  return (
    <ProjectsContainer id="projects">
      <GridOverlay />
      <Container>
        <SectionHeader>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Project Archive
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Digital artifacts from my cybernetic development journey
          </motion.p>
        </SectionHeader>

        <FilterButtons>
          {categories.map(category => (
            <FilterButton
              key={category}
              active={filter === category}
              onClick={() => setFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </FilterButton>
          ))}
        </FilterButtons>

        <ProjectsGrid>
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
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
                    style={{ bottom: '10%', right: '10%' }}
                  />
                </FloatingElements>
                
                <ProjectHeader image={project.image}>
                  {project.category === 'web' && '🌐'}
                  {project.category === 'mobile' && '📱'}
                  {project.category === 'desktop' && '💻'}
                  <ProjectCategory>{project.category}</ProjectCategory>
                </ProjectHeader>
                <ProjectContent>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <ProjectTags>
                    {project.technologies.map(tech => (
                      <Tag key={tech}>{tech}</Tag>
                    ))}
                  </ProjectTags>
                  <ProjectLinks>
                    <ProjectButton 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Access Repository
                    </ProjectButton>
                    {project.liveUrl && (
                      <ProjectButton 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Live System
                      </ProjectButton>
                    )}
                  </ProjectLinks>
                </ProjectContent>
              </ProjectCard>
            ))}
          </AnimatePresence>
        </ProjectsGrid>
      </Container>
    </ProjectsContainer>
  )
}

export default Projects
