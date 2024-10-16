import {
  Divider,
  Drawer,
  IconButton,
  MenuItem,
  Stack,
  TextField,
} from '@mui/material';
import { Box, Typography } from '@mui/material';
import { PaletteItem } from '../Components/PaletteItem';
import {
  Button,
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from '@mui/material';
import '@fontsource/ibm-plex-mono';
import { ContentCopy } from '@mui/icons-material';
import { useFormContext } from 'react-hook-form';

const drawerWidth = 240;

export const ThemeStudio = () => {
  const theme = createTheme({
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
    },
  });

  const { register } = useFormContext();

  const handleCopyClick = () => {
    const themeString = JSON.stringify(theme, null, 2); // TODO: This is getting the wrong theme

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
    <form
    // onSubmit={methods.handleSubmit(onSubmit)}
    >
      <MuiThemeProvider theme={theme}>
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
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="h1">Mui Themer</Typography>
            <IconButton onClick={handleCopyClick}>
              <ContentCopy />
            </IconButton>
          </Stack>
          <Divider />
          <Typography variant="h2">Palette</Typography>
          <Stack spacing={2}>
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
              fullWidth
              {...register('h1', { valueAsNumber: true })}
            />
            <TextField
              label="Weight"
              variant="outlined"
              select
              // onChange={(event) => setH1(Number(event.target.value))}
              // defaultValue={h1}
              fullWidth
              {...register('h1Weight')}
            >
              <MenuItem value={100}>100 (thin)</MenuItem>
              <MenuItem value={300}>300 (light)</MenuItem>
              <MenuItem value={400}>400 (regular)</MenuItem>
              <MenuItem value={500}>500 (medium)</MenuItem>
              <MenuItem value={700}>700 (bold)</MenuItem>
              <MenuItem value={900}>900 (black)</MenuItem>
            </TextField>
            <TextField
              label="Line height"
              variant="outlined"
              type="number"
              fullWidth
              {...register('h1LineHeight', { valueAsNumber: true })}
            />
            <TextField
              label="Letter spacing"
              variant="outlined"
              type="number"
              fullWidth
              {...register('h1LetterSpacing', { valueAsNumber: true })}
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
              subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Quos blanditiis tenetur
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Quos blanditiis tenetur
            </Typography>
            <Typography variant="body1" gutterBottom>
              body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
              consectetur, neque doloribus, cupiditate numquam dignissimos
              laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
            <Typography variant="body2" gutterBottom>
              body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
              consectetur, neque doloribus, cupiditate numquam dignissimos
              laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
            <Typography variant="button" gutterBottom sx={{ display: 'block' }}>
              button text
            </Typography>
            <Typography
              variant="caption"
              gutterBottom
              sx={{ display: 'block' }}
            >
              caption text
            </Typography>
            <Typography
              variant="overline"
              gutterBottom
              sx={{ display: 'block' }}
            >
              overline text
            </Typography>

            <Divider />
            <Typography variant="h2">Text Fields</Typography>
            <TextField
              label="Variant"
              variant="outlined"
              select
              fullWidth
              {...register('textFieldVariant')}
            >
              <MenuItem value="standard">Standard</MenuItem>
              <MenuItem value="outlined">Outlined</MenuItem>
              <MenuItem value="filled">Filled</MenuItem>
            </TextField>
            <TextField
              label="Label shrink"
              variant="outlined"
              select
              fullWidth
              {...register('textFieldLabelShrink')}
            >
              <MenuItem value="true">Shrink</MenuItem>
              <MenuItem value="false">Float</MenuItem>
            </TextField>
            <TextField
              label="Disable underline"
              variant="outlined"
              select
              fullWidth
              {...register('textFieldDisableUnderline')}
            >
              <MenuItem value="true">True</MenuItem>
              <MenuItem value="false">False</MenuItem>
            </TextField>
          </Box>
        </Drawer>
      </MuiThemeProvider>
    </form>
  );
};
