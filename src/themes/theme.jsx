import { createTheme } from '@mui/material/styles';
import '@fontsource/dm-serif-display';
import '@fontsource/roboto';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export const getTheme = (mode) => {
  return createTheme({
    palette: {
      mode: mode,
      ...(mode === 'light'
        ? {
            primary: { main: '#1976d2' },
            secondary: { main: '#f5f5f5' },
            tertiary: { main: '#00b359' },
            background: { 
              default: '#f5f5f5', 
              paper: '#ffffff' 
            },
          }
        : {
            primary: { main: '#1e1e1e' },
            secondary: { main: '#f5f5f5' },
            tertiary: { main: '#00b359' },
            background: { default: '#121212', paper: '#1e1e1e' },
          }),
    },


    typography: {
      fontFamily: 'Roboto, sans-serif',
      h1: {
        fontFamily: 'DM Serif Display, serif',
        fontSize: '3rem', // Tamaño para h1
        fontWeight: 700,    // Grosor para h1
      },
      h2: {
        fontSize: '2rem',
        fontWeight: 600,
      },
      h4: {
        fontSize: '1.3rem',
        fontWeight: 500,
      },
      body1: {
        fontSize: '1rem',
        fontWeight: 400,
      },
      button: {
        fontSize: '0.875rem', // Tamaño para botones
        fontWeight: 500,
      },
    },
  });
  
};
