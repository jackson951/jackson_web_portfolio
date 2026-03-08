import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styled from 'styled-components'
import { projects } from '../data/projects'
import { Project as ProjectType } from '../types'

const ProjectsContainer = styled.section`
  padding: 8rem 2rem;
  background: var(--bg-color);
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

const FilterButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`

const FilterButton = styled.button<{ active: boolean }>`
  padding: 0.5rem 1.5rem;
  border-radius: 25px;
  border: 2px solid var(--border-color);
  background: ${props => props.active ? 'var(--terminal-green)' : 'transparent'};
  color: ${props => props.active ? 'var(--bg-color)' : 'var(--text-primary)'};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Courier New', Courier, monospace;
  position: relative;
  overflow: hidden;

  &:hover {
    background: var(--terminal-green);
    color: var(--bg-color);
    transform: translateY(-2px);
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
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
`

const ProjectCard = styled(motion.div)`
  background: var(--card-bg);
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid var(--border-color);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
`

const ProjectImage = styled.div<{ imageUrl: string }>`
  height: 200px;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.7) 100%);
    pointer-events: none;
  }
`

const ProjectContent = styled.div`
  padding: 2rem;
`

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--text-primary);
`

const ProjectDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 2rem;
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
  background: var(--bg-secondary);
  color: var(--text-secondary);
  font-size: 0.8rem;
  border: 1px solid var(--border-color);
`

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`

const ProjectButton = styled.a`
  padding: 0.5rem 1.5rem;
  border-radius: 25px;
  border: 2px solid var(--terminal-green);
  background: transparent;
  color: var(--terminal-green);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  font-family: 'Courier New', Courier, monospace;
  position: relative;
  overflow: hidden;

  &:hover {
    background: var(--terminal-green);
    color: var(--bg-color);
    transform: translateY(-2px);
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

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | ProjectType['category']>('all')

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  const categories = ['all', 'web', 'mobile', 'desktop'] as const

  return (
    <ProjectsContainer id="projects">
      <Container>
        <SectionHeader>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A showcase of my best work and creative solutions
          </motion.p>
        </SectionHeader>

        <FilterButtons>
          {categories.map(category => (
            <FilterButton
              key={category}
              active={filter === category}
              onClick={() => setFilter(category)}
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
                <ProjectImage imageUrl={project.image}>
                  {project.category === 'web' && '🌐'}
                  {project.category === 'mobile' && '📱'}
                  {project.category === 'desktop' && '💻'}
                </ProjectImage>
                <ProjectContent>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <ProjectTags>
                    {project.technologies.map(tech => (
                      <Tag key={tech}>{tech}</Tag>
                    ))}
                  </ProjectTags>
                  <ProjectLinks>
                    <ProjectButton href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      View Code
                    </ProjectButton>
                    {project.liveUrl && (
                      <ProjectButton href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        Live Demo
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