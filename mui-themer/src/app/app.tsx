import React from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { Box, Typography } from '@mui/material';
import { primary, error, warning, success } from './colors'; // Import colors

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

const ColorSwatch = ({
  label,
  color,
  accessibility,
}: {
  label: string;
  color: string;
  accessibility: string;
}) => (
  <Box
    sx={{
      backgroundColor: color,
      width: 150,
      height: 150,
      margin: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Typography variant="body2">{label}</Typography>
    <Typography variant="body2">{accessibility}</Typography>
  </Box>
);

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Typography variant="h5" gutterBottom sx={{ marginTop: 4 }}>
      Primary Colors
    </Typography>
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      {primary.map((swatch) => (
        <ColorSwatch
          key={swatch.label}
          label={swatch.label}
          color={swatch.color}
          accessibility={swatch.accessibility}
        />
      ))}
    </Box>
    <Typography variant="h5" gutterBottom sx={{ marginTop: 4 }}>
      Error Colors
    </Typography>
    <Box display="flex" flexWrap="wrap">
      {error.map((swatch) => (
        <ColorSwatch
          key={swatch.label}
          label={swatch.label}
          color={swatch.color}
          accessibility={swatch.accessibility}
        />
      ))}
    </Box>
    <Typography variant="h5" gutterBottom sx={{ marginTop: 4 }}>
      Warning Colors
    </Typography>
    <Box display="flex" flexWrap="wrap">
      {warning.map((swatch) => (
        <ColorSwatch
          key={swatch.label}
          label={swatch.label}
          color={swatch.color}
          accessibility={swatch.accessibility}
        />
      ))}
    </Box>
    <Typography variant="h5" gutterBottom sx={{ marginTop: 4 }}>
      Success Colors
    </Typography>
    <Box display="flex" flexWrap="wrap">
      {success.map((swatch) => (
        <ColorSwatch
          key={swatch.label}
          label={swatch.label}
          color={swatch.color}
          accessibility={swatch.accessibility}
        />
      ))}
    </Box>
  </ThemeProvider>
);

export default App;
