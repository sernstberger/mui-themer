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
import { ThemeProvider as MuiThemeProvider } from '@mui/material';
import '@fontsource/ibm-plex-mono';
import { ContentCopy } from '@mui/icons-material';
import { useFormContext } from 'react-hook-form';
import { TypographySection } from './TypographySection';
import { theme as themeStudioTheme } from './theme';

const drawerWidth = 240;

export const ThemeStudio = () => {
  const { register } = useFormContext();

  const handleCopyClick = () => {
    const themeString = JSON.stringify(themeStudioTheme, null, 2); // TODO: This is getting the wrong theme

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
      <MuiThemeProvider theme={themeStudioTheme}>
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
          <TypographySection />
          <Divider sx={{ my: 2 }} />

          <Box>
            <Typography variant="h2">Text Fields</Typography>
            <TextField
              label="Variant"
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
              select
              fullWidth
              {...register('textFieldLabelShrink')}
            >
              <MenuItem value="true">Shrink</MenuItem>
              <MenuItem value="false">Float</MenuItem>
            </TextField>
            <TextField
              label="Disable underline"
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
