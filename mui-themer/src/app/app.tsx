import { CssBaseline } from '@mui/material';
import { Box } from '@mui/material';
import { ThemeStudio } from './ThemeStudio';
import { FormProvider, useForm } from 'react-hook-form';
import { ExampleApp } from './ExampleApp';
import { Theme } from './ExampleApp/Theme';

const defaultValues = {
  primary: { main: '#1976d2', light: '#63a4ff', dark: '#004ba0' },
  secondary: { main: '#dc004e', light: '#ff5983', dark: '#9a0036' },
  error: { main: '#D92D20', light: '#FF6659', dark: '#9A0007' },
  warning: { main: '#DC6803', light: '#FFA733', dark: '#9A3F00' },
  success: { main: '#079455', light: '#4CAF50', dark: '#087f23' },
  info: { main: '#2196f3', light: '#64b5f6', dark: '#1769aa' },
  h1: 20,
  textFieldVariant: 'outlined',
  textFieldLabelShrink: 'true',
  textFieldDisableUnderline: 'false',
};

const App = () => {
  const methods = useForm({ defaultValues });
  return (
    <FormProvider {...methods}>
      <Theme>
        <CssBaseline />
        <Box sx={{ display: 'flex' }}>
          <ExampleApp />

          <ThemeStudio />
        </Box>
      </Theme>
    </FormProvider>
  );
};

export default App;
