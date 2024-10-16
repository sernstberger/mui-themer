import { createTheme } from '@mui/material';
import '@fontsource/ibm-plex-mono';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    // primary: {
    //   main: primary,
    // },
    // error: {
    //   main: error.find((color) => color.label === '600')?.color || '#D92D20',
    // },
    // warning: {
    //   main:
    //     warning.find((color) => color.label === '600')?.color || '#DC6803',
    // },
    // success: {
    //   main:
    //     success.find((color) => color.label === '600')?.color || '#079455',
    // },
  },
  typography: {
    fontFamily: '"IBM Plex Mono", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '1.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '1.4rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h3: {
      fontSize: '1.3rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h4: {
      fontSize: '1.2rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h5: {
      fontSize: '1.1rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.2,
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.2,
    },
    body1: {
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: 1.2,
    },
    body2: {
      fontSize: '0.6rem',
      fontWeight: 400,
      lineHeight: 1.2,
    },
    button: {
      fontSize: '0.875rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    caption: {
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: 1.2,
    },
    overline: {
      fontSize: '0.75rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
  },
  components: {
    // MuiButton: {
    //   styleOverrides: {
    //     root: {
    //       fontSize: '0.875rem',
    //       fontWeight: 700,
    //       lineHeight: 1.2,
    //     },
    //   },
    // },
    MuiIconButton: {
      styleOverrides: {
        sizeSmall: {
          // fontSize: '0.75rem',
          padding: 4,
          // fontWeight: 700,
          // lineHeight: 1.2,
          svg: {
            fontSize: '.75rem',
          },
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'filled',
        InputLabelProps: {
          shrink: true,
        },
        InputProps: {
          disableUnderline: true,
        },
      },
    },
  },
});
