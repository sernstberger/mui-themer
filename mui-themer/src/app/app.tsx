import React from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { Button, Typography } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ padding: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Welcome to MUI Themer!
        </Typography>
        <Button variant="contained" color="primary">
          Primary Button
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          style={{ marginLeft: '10px' }}
        >
          Secondary Button
        </Button>
      </div>
    </ThemeProvider>
  );
};

export default App;
