export const getInitialTheme = (): 'dark' | 'light' => {
  if (typeof window !== 'undefined') {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      return savedTheme as 'dark' | 'light'
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }
  return 'dark'
}

export const setTheme = (theme: 'dark' | 'light') => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('theme', theme)
    document.documentElement.setAttribute('data-theme', theme)
  }
}