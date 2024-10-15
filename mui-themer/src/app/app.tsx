import { CssBaseline } from '@mui/material';
import { Box } from '@mui/material';
import { ThemeProvider } from './ThemeContext';
import { ThemeChangerDrawer } from './ThemeChangerDrawer';
import { FormProvider, useForm } from 'react-hook-form';
import { ExampleApp } from './ExampleApp';

const defaultValues = {
  primaryColor: '#1976d2',
  h1: 20,
};

const App = () => {
  const methods = useForm({ defaultValues });
  return (
    <FormProvider {...methods}>
      <ThemeProvider>
        <CssBaseline />
        <Box sx={{ display: 'flex' }}>
          <ExampleApp />

          <ThemeChangerDrawer />
        </Box>
      </ThemeProvider>
    </FormProvider>
  );
};

export default App;
