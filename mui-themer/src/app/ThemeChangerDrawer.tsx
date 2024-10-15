import { CssBaseline, Divider, Drawer, Stack, TextField } from '@mui/material';
import { Box, Typography } from '@mui/material';
import { PaletteItem } from './Components/PaletteItem';
import {
  Button,
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from '@mui/material';
import '@fontsource/ibm-plex-mono';
import { useThemeContext } from './ThemeContext';

const drawerWidth = 240;

export const ThemeChangerDrawer = () => {
  const { h1, setH1 } = useThemeContext();
  const theme = createTheme({
    palette: {
      mode: 'dark',
      // primary: {
      //   main: primaryColor,
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
          root: {
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
    },
  });

  return (
    <MuiThemeProvider theme={theme}>
      {/* <Button variant="contained" color="primary" onClick={handleCopyClick}>
      Copy theme
    </Button> */}

      {/* <CssBaseline /> */}

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,

          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="right"
        PaperProps={{
          sx: {
            padding: 2,
          },
        }}
      >
        <Typography variant="h1">Mui Themer</Typography>
        Copy theme button goes here
        <Divider />
        <Typography variant="h2">Palette</Typography>
        <Stack spacing={4}>
          <PaletteItem color="primary" />
          <PaletteItem color="secondary" />
          <PaletteItem color="error" />
          <PaletteItem color="warning" />
          <PaletteItem color="success" />
          <PaletteItem color="info" />
        </Stack>
        <Divider sx={{ my: 2 }} />
        <Typography variant="h2">Typography</Typography>
        <Box>
          <Typography variant="h3">h1</Typography>
          <TextField
            label="Size"
            variant="outlined"
            type="number"
            onChange={(event) => setH1(Number(event.target.value))}
            defaultValue={h1}
          />
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
            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
          <Typography variant="body2" gutterBottom>
            body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
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
      </Drawer>
    </MuiThemeProvider>
  );
};
