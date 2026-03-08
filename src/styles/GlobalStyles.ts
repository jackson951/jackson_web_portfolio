import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    --bg-color: #0d1117;
    --bg-secondary: #161b22;
    --text-primary: #c9d1d9;
    --text-secondary: #8b949e;
    --accent-color: #58a6ff;
    --accent-hover: #388bfd;
    --card-bg: rgba(255, 255, 255, 0.05);
    --border-color: #30363d;
    --terminal-green: #2ea043;
    --terminal-red: #f85149;
    --terminal-yellow: #d29922;
    --terminal-blue: #58a6ff;
  }

  [data-theme="light"] {
    --bg-color: #f6f8fa;
    --bg-secondary: #ffffff;
    --text-primary: #1f2937;
    --text-secondary: #6b7280;
    --accent-color: #2f81f7;
    --accent-hover: #1f6feb;
    --card-bg: rgba(15, 23, 42, 0.05);
    --border-color: #e5e7eb;
    --terminal-green: #1f883d;
    --terminal-red: #da3633;
    --terminal-yellow: #9e6a03;
    --terminal-blue: #0969da;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Courier New', Courier, monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--bg-color);
    color: var(--text-primary);
    line-height: 1.6;
  }

  code {
    font-family: 'Courier New', Courier, monospace;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: inherit;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`

export default GlobalStyles