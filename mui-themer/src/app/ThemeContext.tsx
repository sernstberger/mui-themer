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
        main: formValues.primary.main,
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
        lineHeight: formValues.h1LineHeight,
        letterSpacing: formValues.h1LetterSpacing,
      },
    },
    components: {
      MuiTextField: {
        defaultProps: {
          variant: formValues.textFieldVariant,
          InputLabelProps: {
            shrink: formValues.textFieldLabelShrink === 'true',
          },
        },
      },
    },
  });

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};
