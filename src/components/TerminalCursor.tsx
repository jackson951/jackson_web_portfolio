import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`

const CursorContainer = styled.span`
  display: inline-block;
  width: 8px;
  height: 16px;
  background: var(--terminal-green);
  margin-left: 2px;
  animation: ${blink} 1s infinite;
  vertical-align: middle;
`

const TerminalCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(prev => !prev)
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return <CursorContainer style={{ opacity: isVisible ? 1 : 0 }} />
}

export default TerminalCursor