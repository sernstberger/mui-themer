import { CssBaseline } from '@mui/material';
import { Box } from '@mui/material';
import { ThemeStudio } from './ThemeStudio';
import { FormProvider, useForm } from 'react-hook-form';
import { ExampleApp } from './ExampleApp';
import { Theme } from './ExampleApp/Theme';
import useFormPersist from 'react-hook-form-persist';

const defaultValues = {
  primary: { main: '#1976d2', light: '#63a4ff', dark: '#004ba0' },
  secondary: { main: '#dc004e', light: '#ff5983', dark: '#9a0036' },
  error: { main: '#D92D20', light: '#FF6659', dark: '#9A0007' },
  warning: { main: '#DC6803', light: '#FFA733', dark: '#9A3F00' },
  success: { main: '#079455', light: '#4CAF50', dark: '#087f23' },
  info: { main: '#2196f3', light: '#64b5f6', dark: '#1769aa' },
  h1: 20,
  h1Weight: 700,
  h1LetterSpacing: 0,
  h1LineHeight: 1.167,
  h2: 18,
  h2Weight: 700,
  h2LetterSpacing: 0,
  h2LineHeight: 1.2,
  h3: 16,
  h3Weight: 700,
  h3LetterSpacing: 0,
  h3LineHeight: 1.167,
  h4: 14,
  h4Weight: 700,
  h4LetterSpacing: 0,
  h4LineHeight: 1.235,
  h5: 12,
  h5Weight: 700,
  h5LetterSpacing: 0,
  h5LineHeight: 1.334,
  h6: 10,
  h6Weight: 700,
  h6LetterSpacing: 0,
  h6LineHeight: 1.6,
  subtitle1: 16,
  subtitle1Weight: 400,
  subtitle1LetterSpacing: 0,
  subtitle1LineHeight: 1.75,
  subtitle2: 14,
  subtitle2Weight: 400,
  subtitle2LetterSpacing: 0,
  subtitle2LineHeight: 1.57,
  body1: 16,
  body1Weight: 400,
  body1LetterSpacing: 0,
  body1LineHeight: 1.5,
  body2: 14,
  body2Weight: 400,
  body2LetterSpacing: 0,
  body2LineHeight: 1.43,
  button: 14,
  buttonWeight: 700,
  buttonLetterSpacing: 0,
  buttonLineHeight: 1.75,
  caption: 12,
  captionWeight: 400,
  captionLetterSpacing: 0,
  captionLineHeight: 1.66,
  overline: 10,
  overlineWeight: 400,
  overlineLetterSpacing: 0,
  overlineLineHeight: 2.66,
  textFieldVariant: 'outlined',
  textFieldLabelShrink: 'true',
  textFieldDisableUnderline: 'false',
};

const savedValues = sessionStorage.getItem('form')
  ? JSON.parse(sessionStorage.getItem('form') as string)
  : defaultValues;

console.log('!!!', { defaultValues, savedValues });
const App = () => {
  const methods = useForm({ defaultValues: savedValues });
  useFormPersist('form', {
    watch: methods.watch,
    setValue: methods.setValue,
  });

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
