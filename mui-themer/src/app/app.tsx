import React from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { Box, Typography } from '@mui/material';

// Define the color swatches
const primaryColors = [
  { label: '25', color: '#FCFAFF' },
  { label: '50', color: '#F9F5FF' },
  { label: '100', color: '#F4EBFF' },
  { label: '200', color: '#E9D7FE' },
  { label: '300', color: '#D6BBFB' },
  { label: '400', color: '#B692F6' },
  { label: '500', color: '#9E77ED' },
  { label: '600', color: '#7F56D9' },
  { label: '700', color: '#6941C6' },
  { label: '800', color: '#53389E' },
  { label: '900', color: '#42307D' },
  { label: '950', color: '#2C1C5F' },
];

const errorColors = [
  { label: '25', color: '#FFFBFA' },
  { label: '50', color: '#FEF3F2' },
  { label: '100', color: '#FEE4E2' },
  { label: '200', color: '#FECDCA' },
  { label: '300', color: '#FDA29B' },
  { label: '400', color: '#F97066' },
  { label: '500', color: '#F04438' },
  { label: '600', color: '#D92D20' },
  { label: '700', color: '#B42318' },
  { label: '800', color: '#912018' },
  { label: '900', color: '#7A271A' },
  { label: '950', color: '#55160C' },
];

const warningColors = [
  { label: '25', color: '#FFFCF5' },
  { label: '50', color: '#FFFAEB' },
  { label: '100', color: '#FEF0C7' },
  { label: '200', color: '#FEDF89' },
  { label: '300', color: '#FEC84B' },
  { label: '400', color: '#FDB022' },
  { label: '500', color: '#F79009' },
  { label: '600', color: '#DC6803' },
  { label: '700', color: '#B54708' },
  { label: '800', color: '#93370D' },
  { label: '900', color: '#7A2E0E' },
  { label: '950', color: '#4E1D09' },
];

const successColors = [
  { label: '25', color: '#F6FEF9' },
  { label: '50', color: '#ECFDF3' },
  { label: '100', color: '#DCFAE6' },
  { label: '200', color: '#ABEFC6' },
  { label: '300', color: '#75E0A7' },
  { label: '400', color: '#47CD89' },
  { label: '500', color: '#17B26A' },
  { label: '600', color: '#079455' },
  { label: '700', color: '#067647' },
  { label: '800', color: '#085D3A' },
  { label: '900', color: '#074D31' },
  { label: '950', color: '#053321' },
];

const theme = createTheme({
  palette: {
    primary: {
      main: '#7F56D9',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

const ColorSwatch = ({ label, color }: { label: string; color: string }) => (
  <Box
    sx={{
      backgroundColor: color,
      width: 100,
      height: 100,
      margin: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 1,
    }}
  >
    <Typography variant="body2" color="#fff">
      {label}
    </Typography>
  </Box>
);

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ padding: '20px' }}>
        <Typography variant="h4" gutterBottom>
          MUI Themer - Color Swatches
        </Typography>
        <Typography variant="h5" gutterBottom>
          Primary Colors
        </Typography>
        <Box display="flex" flexWrap="wrap">
          {primaryColors.map((swatch) => (
            <ColorSwatch
              key={swatch.label}
              label={swatch.label}
              color={swatch.color}
            />
          ))}
        </Box>
        <Typography variant="h5" gutterBottom sx={{ marginTop: 4 }}>
          Error Colors
        </Typography>
        <Box display="flex" flexWrap="wrap">
          {errorColors.map((swatch) => (
            <ColorSwatch
              key={swatch.label}
              label={swatch.label}
              color={swatch.color}
            />
          ))}
        </Box>
        <Typography variant="h5" gutterBottom sx={{ marginTop: 4 }}>
          Warning Colors
        </Typography>
        <Box display="flex" flexWrap="wrap">
          {warningColors.map((swatch) => (
            <ColorSwatch
              key={swatch.label}
              label={swatch.label}
              color={swatch.color}
            />
          ))}
        </Box>
        <Typography variant="h5" gutterBottom sx={{ marginTop: 4 }}>
          Success Colors
        </Typography>
        <Box display="flex" flexWrap="wrap">
          {successColors.map((swatch) => (
            <ColorSwatch
              key={swatch.label}
              label={swatch.label}
              color={swatch.color}
            />
          ))}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
