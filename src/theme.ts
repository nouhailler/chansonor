import { createTheme } from '@mui/material/styles';

export const buildTheme = (mode: 'light' | 'dark') =>
  createTheme({
    palette: {
      mode,
      primary: { main: '#ff4f7b' },
      secondary: { main: '#20c7b5' },
      warning: { main: '#ffb84d' },
      background: {
        default: mode === 'light' ? '#fff8f3' : '#120f1c',
        paper: mode === 'light' ? '#ffffff' : '#1e172d'
      },
      text: {
        primary: mode === 'light' ? '#1e172d' : '#fff7f2',
        secondary: mode === 'light' ? '#6d617a' : '#cfc5db'
      }
    },
    typography: {
      fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      h1: { letterSpacing: 0 },
      h2: { letterSpacing: 0 },
      h3: { letterSpacing: 0 },
      h4: { letterSpacing: 0 },
      h5: { letterSpacing: 0 },
      h6: { letterSpacing: 0 },
      button: { textTransform: 'none', fontWeight: 850 }
    },
    shape: { borderRadius: 14 },
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
            border: mode === 'light' ? '1px solid rgba(30, 23, 45, .08)' : '1px solid rgba(255,255,255,.08)'
          }
        }
      },
      MuiButton: {
        styleOverrides: {
          root: { boxShadow: 'none' }
        }
      },
      MuiChip: {
        styleOverrides: {
          root: { borderRadius: 999 }
        }
      }
    }
  });
