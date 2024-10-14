import React, { useState } from 'react';
import { Button, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { Box, Typography } from '@mui/material';
import {
  primary,
  error,
  warning,
  success,
  moss,
  teal,
  greenLight,
  green,
  cyan,
  blue,
  blueLight,
  violet,
  fuchsia,
  pink,
  rose,
  orangeDark,
  orange,
  yellow,
} from './colors';
import { ColorSwatchList } from './Components/ColorSwatchList';

const colorMap = {
  primary,
  error,
  warning,
  success,
  moss,
  teal,
  greenLight,
  green,
  cyan,
  blue,
  blueLight,
  violet,
  fuchsia,
  pink,
  rose,
  orangeDark,
  orange,
  yellow,
};

export const colorNames = [
  'primary',
  'error',
  'warning',
  'success',
  'moss',
  'teal',
  'greenLight',
  'green',
  'cyan',
  'blue',
  'blueLight',
  'violet',
  'fuchsia',
  'pink',
  'rose',
  'orangeDark',
  'orange',
  'yellow',
];

const App = () => {
  const [primaryColor, setPrimaryColor] = useState(
    primary.find((color) => color.label === '600')?.color || '#7F56D9'
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

  const handleColorClick = (color) => {
    setPrimaryColor(color);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Button variant="contained" color="primary">
        Primary
      </Button>
      {colorNames.map((colorName) => (
        <Box key={colorName} sx={{ marginBottom: 1 }}>
          <Typography>
            {colorName.charAt(0).toUpperCase() + colorName.slice(1)}
          </Typography>
          <ColorSwatchList
            colors={colorMap[colorName]}
            onColorClick={handleColorClick}
          />
        </Box>
      ))}
    </ThemeProvider>
  );
};

export default App;
