import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { ThemeContextType } from '../types'
import { getInitialTheme, setTheme } from '../utils/theme'

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setLocalTheme] = useState<'dark' | 'light'>(getInitialTheme)

  useEffect(() => {
    setTheme(theme)
  }, [theme])

  const toggleTheme = () => {
    setLocalTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}