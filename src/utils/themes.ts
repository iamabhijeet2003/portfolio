type ThemeColors = {
    primary: string
    secondary: string
    background: string
    accent: string
    muted: string
  }
  
  type Themes = {
    [key: string]: ThemeColors
  }
  
  const themes: Themes = {
    light: {
      primary: '#027474',
      secondary: '#FF9D00',
      background: '#FAFAFA',
      accent: '#334155',
      muted: '#64748b'
    },
    dark: {
      primary: '#05CE91',
      secondary: '#FF9D00',
      background: '#212121',
      accent: '#cbd5e1',
      muted: '#64748b'
    },
    cyberpunk: {
      primary: '#FF69B4',
      secondary: '#00FF7F',
      background: '#1E1E1E',
      accent: '#00FFFF',
      muted: '#808080'
    },
    dracula: {
      primary: '#FF79C6',
      secondary: '#50FA7B',
      background: '#282A36',
      accent: '#BD93F9',
      muted: '#6272A4'
    },
    palenight: {
      primary: '#FFCC00',
      secondary: '#FFA500',
      background: '#292D3E',
      accent: '#FFCC00',
      muted: '#6272A4'
    },
    synthwave: {
      primary: '#FF00F7',
      secondary: '#00E436',
      background: '#2B213A',
      accent: '#FFA300',
      muted: '#6272A4'
    },
    'retro-blue': {
      primary: '#00FFFF',
      secondary: '#008080',
      background: '#000000',
      accent: '#008080',
      muted: '#808080'
    },
    solarized: {
      primary: '#45b0ff',
      secondary: '#CB4B16',
      background: '#002B36',
      accent: '#2c93c2',
      muted: '#586E75'
    },
    'solarized-light': {
      primary: '#268BD2',
      secondary: '#CB4B16',
      background: '#FDF6E3',
      accent: '#586E75',
      muted: '#657B83'
    },
    matrix: {
      primary: '#00FF00',
      secondary: '#008000',
      background: '#000000',
      accent: '#008000',
      muted: '#808080'
    },
    eighties: {
      primary: '#FF00FF',
      secondary: '#00FF00',
      background: '#000000',
      accent: '#00FF00',
      muted: '#808080'
    },
    ubuntu: {
      primary: '#8AE135',
      secondary: '#c02b18',
      background: '#300A24',
      accent: '#cbd5e1',
      muted: '#808080'
    },
    ocean: {
      primary: '#1CA9C9',
      secondary: '#F1E05A',
      background: '#001F3F',
      accent: '#39CCCC',
      muted: '#7FDBFF',
    },
    forest: {
      primary: '#228B22',
      secondary: '#FFD700',
      background: '#013220',
      accent: '#32CD32',
      muted: '#6B8E23',
    },
    sunset: {
      primary: '#FF4500',
      secondary: '#FFD700',
      background: '#2C2C54',
      accent: '#FF6347',
      muted: '#FFA07A',
    },
    pastel: {
      primary: '#e83a54',
      secondary: '#f79843',
      background: '#FFF0F5',
      accent: '#4d4dfa',
      muted: '#D3D3D3',
    },
    nord: {
      primary: '#88C0D0',
      secondary: '#81A1C1',
      background: '#2E3440',
      accent: '#5E81AC',
      muted: '#4C566A',
    },
    grape: {
      primary: '#d9b3f5',
      secondary: '#DAA520',
      background: '#4B0082',
      accent: '#9370DB',
      muted: '#8A2BE2',
    },
    monochrome: {
      primary: '#FFFFFF',
      secondary: '#CCCCCC',
      background: '#000000',
      accent: '#888888',
      muted: '#555555',
    },
  }
  
  export default themes