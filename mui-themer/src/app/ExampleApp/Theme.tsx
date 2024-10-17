import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material';
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
} from '../colors';
import '@fontsource/roboto/100.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/900.css';
import { useFormContext } from 'react-hook-form';

export const Theme = ({ children }) => {
  const { watch } = useFormContext();
  const formValues = watch();
  // console.log('???', formValues);

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
      h2: {
        fontSize: `${formValues.h2}px`,
        fontWeight: formValues.h2Weight,
        lineHeight: formValues.h2LineHeight,
        letterSpacing: formValues.h2LetterSpacing,
      },
      h3: {
        fontSize: `${formValues.h3}px`,
        fontWeight: formValues.h3Weight,
        lineHeight: formValues.h3LineHeight,
        letterSpacing: formValues.h3LetterSpacing,
      },
      h4: {
        fontSize: `${formValues.h4}px`,
        fontWeight: formValues.h4Weight,
        lineHeight: formValues.h4LineHeight,
        letterSpacing: formValues.h4LetterSpacing,
      },
      h5: {
        fontSize: `${formValues.h5}px`,
        fontWeight: formValues.h5Weight,
        lineHeight: formValues.h5LineHeight,
        letterSpacing: formValues.h5LetterSpacing,
      },
      h6: {
        fontSize: `${formValues.h6}px`,
        fontWeight: formValues.h6Weight,
        lineHeight: formValues.h6LineHeight,
        letterSpacing: formValues.h6LetterSpacing,
      },
      subtitle1: {
        fontSize: `${formValues.subtitle1}px`,
        fontWeight: formValues.subtitle1Weight,
        lineHeight: formValues.subtitle1LineHeight,
        letterSpacing: formValues.subtitle1LetterSpacing,
      },
      subtitle2: {
        fontSize: `${formValues.subtitle2}px`,
        fontWeight: formValues.subtitle2Weight,
        lineHeight: formValues.subtitle2LineHeight,
        letterSpacing: formValues.subtitle2LetterSpacing,
      },
      body1: {
        fontSize: `${formValues.body1}px`,
        fontWeight: formValues.body1Weight,
        lineHeight: formValues.body1LineHeight,
        letterSpacing: formValues.body1LetterSpacing,
      },
      body2: {
        fontSize: `${formValues.body2}px`,
        fontWeight: formValues.body2Weight,
        lineHeight: formValues.body2LineHeight,
        letterSpacing: formValues.body2LetterSpacing,
      },
      button: {
        fontSize: `${formValues.button}px`,
        fontWeight: formValues.buttonWeight,
        lineHeight: formValues.buttonLineHeight,
        letterSpacing: formValues.buttonLetterSpacing,
      },
      caption: {
        fontSize: `${formValues.caption}px`,
        fontWeight: formValues.captionWeight,
        lineHeight: formValues.captionLineHeight,
        letterSpacing: formValues.captionLetterSpacing,
      },
      overline: {
        fontSize: `${formValues.overline}px`,
        fontWeight: formValues.overlineWeight,
        lineHeight: formValues.overlineLineHeight,
        letterSpacing: formValues.overlineLetterSpacing,
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
      MuiFilledInput: {
        defaultProps: {
          disableUnderline: formValues.textFieldDisableUnderline === 'true',
        },
      },
    },
  });

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};
