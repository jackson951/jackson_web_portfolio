import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const TerminalBox = styled.div`
  background: #0d1117;
  border: 1px solid #30363d;
  border-radius: 8px;
  padding: 1rem;
  font-family: 'Courier New', Courier, monospace;
  color: #c9d1d9;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  margin: 2rem 0;
`

const TerminalHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #30363d;
`

const Dot = styled.div<{ color: string }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => props.color};
  box-shadow: 0 0 5px ${props => props.color};
`

const TerminalContent = styled.div`
  white-space: pre-line;
  line-height: 1.6;
`

const CommandPrompt = styled.span`
  color: var(--terminal-green);
  font-weight: bold;
`

const OutputText = styled.span`
  color: #8b949e;
`

const TerminalOutput: React.FC = () => {
  const [displayText, setDisplayText] = useState('')
  const fullText = `> system.boot()
Initializing Jackson Khuto Portfolio v2.0...
Loading skills matrix...
Loading project database...
Loading contact protocols...

System ready. Welcome to the command center.

$ whoami
Jackson Khuto - Full-Stack Developer

$ skills --list
Frontend: React, TypeScript, Styled Components
Backend: Node.js, Express, Python, Django
Tools: Git, Docker, Vite, Webpack
Other: UI/UX Design, Problem Solving, Team Collaboration

$ projects --show
E-Commerce Platform - Full-stack solution
Task Management App - Real-time collaboration
Weather Dashboard - Interactive data visualization
Mobile Fitness Tracker - Cross-platform application
Desktop Code Editor - Lightweight development environment

$ contact --info
Email: jacksonkhuto591@gmail.com
Phone: +27 66 180 2747
Location: Johannesburg, South Africa

$ echo "Ready for your command"`
  
  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 50)

    return () => clearInterval(timer)
  }, [])

  return (
    <TerminalBox>
      <TerminalHeader>
        <Dot color="#ff5f56" />
        <Dot color="#ffbd2e" />
        <Dot color="#27c93f" />
      </TerminalHeader>
      <TerminalContent>
        <OutputText>{displayText}</OutputText>
      </TerminalContent>
    </TerminalBox>
  )
}

export default TerminalOutput