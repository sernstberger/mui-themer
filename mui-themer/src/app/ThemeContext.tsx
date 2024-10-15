import React, { createContext, useContext, useState } from 'react';
import {
  Button,
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from '@mui/material';
import {
  red,
  pink,
  purple,
  deepPurple,
  indigo,
  blue,
  lightBlue,
  cyan,
  teal,
  green,
  lightGreen,
  lime,
  yellow,
  amber,
  orange,
  deepOrange,
  brown,
  grey,
  blueGrey,
  primary,
  error,
  warning,
  success,
} from './colors';

const ThemeContext = createContext({
  primaryColor: '#1976d2',
  setPrimaryColor: (color: string) => {},
});

export const ThemeProvider = ({ children }) => {
  const [primaryColor, setPrimaryColor] = useState(
    primary.find((color) => color.label === '600')?.color || '#1976d2'
  );

  const theme = createTheme({
    palette: {
      primary: {
        main: primaryColor,
      },
      error: {
        main: error.find((color) => color.label === '600')?.color || '#D92D20',
      },
      warning: {
        main:
          warning.find((color) => color.label === '600')?.color || '#DC6803',
      },
      success: {
        main:
          success.find((color) => color.label === '600')?.color || '#079455',
      },
    },
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
  });

  const handleCopyClick = () => {
    const themeString = JSON.stringify(theme, null, 2);

    navigator.clipboard
      .writeText(themeString)
      .then(() => {
        console.log('Text copied to clipboard', themeString);
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err);
      });
  };

  return (
    <ThemeContext.Provider value={{ primaryColor, setPrimaryColor }}>
      <MuiThemeProvider theme={theme}>
        <Button variant="contained" color="primary" onClick={handleCopyClick}>
          Copy theme
        </Button>
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
