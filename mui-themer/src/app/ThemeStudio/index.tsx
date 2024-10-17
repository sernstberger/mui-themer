import { Drawer, IconButton, Stack } from '@mui/material';
import { Typography } from '@mui/material';
import { ThemeProvider as MuiThemeProvider } from '@mui/material';
import { ContentCopy } from '@mui/icons-material';
import { theme as themeStudioTheme } from './theme';
import { PaletteSection } from './sections/PaletteSection';
import { TypographySection } from './sections/TypographySection';
import { TextFieldSection } from './sections/TextFieldSection';
import '@fontsource/ibm-plex-mono';

const drawerWidth = 240;

export const ThemeStudio = () => {
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

          <PaletteSection />

          <TypographySection />

          <TextFieldSection />
        </Drawer>
      </MuiThemeProvider>
    </form>
  );
};
