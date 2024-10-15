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
import '@fontsource/roboto/100.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/900.css';
import { useFormContext } from 'react-hook-form';

export const ThemeProvider = ({ children }) => {
  const { watch } = useFormContext();
  const formValues = watch();
  console.log('???', formValues);

  const theme = createTheme({
    palette: {
      primary: {
        main: formValues.primaryColor,
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
      h1: {
        // fontSize: `${h1}rem`,
        fontSize: `${formValues.h1}px`,
        fontWeight: formValues.h1Weight,
        lineHeight: 1.2,
      },
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
    <MuiThemeProvider theme={theme}>
      <Button variant="contained" color="primary" onClick={handleCopyClick}>
        Copy theme
      </Button>
      {children}
    </MuiThemeProvider>
  );
};
