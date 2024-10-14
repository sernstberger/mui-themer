import React from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
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

const theme = createTheme({
  palette: {
    primary: {
      main: primary.find((color) => color.label === '600')?.color || '#7F56D9',
    },
    error: {
      main: error.find((color) => color.label === '600')?.color || '#D92D20',
    },
    warning: {
      main: warning.find((color) => color.label === '600')?.color || '#DC6803',
    },
    success: {
      main: success.find((color) => color.label === '600')?.color || '#079455',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

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

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {colorNames.map((colorName) => (
      <Box key={colorName} sx={{ marginBottom: 1 }}>
        <Typography>
          {colorName.charAt(0).toUpperCase() + colorName.slice(1)}
        </Typography>
        <ColorSwatchList {...{ colorMap, colorName }} />
      </Box>
    ))}
  </ThemeProvider>
);

export default App;
