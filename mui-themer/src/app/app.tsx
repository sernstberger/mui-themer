import React, { useState } from 'react';
import {
  Button,
  CssBaseline,
  Divider,
  ThemeProvider,
  createTheme,
} from '@mui/material';
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
import { ColorSwatch } from './Components/ColorSwatch';
import { PaletteItem } from './Components/PaletteItem';

export function Types() {
  return (
    <Box>
      <Typography variant="h1" gutterBottom>
        h1. Heading
      </Typography>
      <Typography variant="h2" gutterBottom>
        h2. Heading
      </Typography>
      <Typography variant="h3" gutterBottom>
        h3. Heading
      </Typography>
      <Typography variant="h4" gutterBottom>
        h4. Heading
      </Typography>
      <Typography variant="h5" gutterBottom>
        h5. Heading
      </Typography>
      <Typography variant="h6" gutterBottom>
        h6. Heading
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur
      </Typography>
      <Typography variant="body1" gutterBottom>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography variant="body2" gutterBottom>
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography variant="button" gutterBottom sx={{ display: 'block' }}>
        button text
      </Typography>
      <Typography variant="caption" gutterBottom sx={{ display: 'block' }}>
        caption text
      </Typography>
      <Typography variant="overline" gutterBottom sx={{ display: 'block' }}>
        overline text
      </Typography>
    </Box>
  );
}

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
    primary.find((color) => color.label === '600')?.color || '#1976d2'
  );

  const theme = createTheme({
    palette: {
      // TODO: add common
      primary: {
        main: primaryColor,
      },
      // TODO: add secondary
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
      // TODO: add info
      // TODO: add grey
      // TODO: add text
      // TODO: add divider
      // TODO: add background
    },
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
    components: {
      MuiButtonBase: {
        defaultProps: {
          disableRipple: true, // No more ripple, on the whole application 💣!
        },
      },
    },
  });

  const handleColorClick = (color) => {
    setPrimaryColor(color);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Typography variant="h1">Mui Themer</Typography>
      <Typography variant="h2">Palette</Typography>
      {/* <div>
        <Typography>Primary: {theme.palette.primary.main}</Typography>
        <ColorSwatch label="Light" color={theme.palette.primary.light} />
        <ColorSwatch label="Primary" color={theme.palette.primary.main} />
        <ColorSwatch label="Dark" color={theme.palette.primary.dark} />
        <ColorSwatch
          label="Contrast text"
          color={theme.palette.primary.contrastText}
        />
      </div> */}
      <PaletteItem color="primary" />
      <PaletteItem color="secondary" />
      <PaletteItem color="error" />
      <PaletteItem color="warning" />
      <PaletteItem color="success" />
      <PaletteItem color="info" />

      <Divider sx={{ marginBottom: 2 }} />
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
      <Types />
    </ThemeProvider>
  );
};

export default App;
