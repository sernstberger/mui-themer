import { Button, CssBaseline, Divider, Stack } from '@mui/material';
import { Box, Typography } from '@mui/material';
import { PaletteItem } from './Components/PaletteItem';
import { ThemeProvider } from './ThemeContext';

export function Types() {
  return (
    <Box>
      <Typography variant="h1" gutterBottom>
        h1. Heading
      </Typography>
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
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography variant="body2" gutterBottom>
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
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
  );
}

const App = () => {
  return (
    <ThemeProvider>
      <CssBaseline />
      <Typography variant="h1">Mui Themer</Typography>
      <Typography variant="h2">Palette</Typography>
      <Stack spacing={4}>
        <PaletteItem color="primary" />
        <PaletteItem color="secondary" />
        <PaletteItem color="error" />
        <PaletteItem color="warning" />
        <PaletteItem color="success" />
        <PaletteItem color="info" />
      </Stack>

      <Divider sx={{ marginBottom: 2 }} />
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Types />
    </ThemeProvider>
  );
};

export default App;
