import { MenuItem, TextField } from '@mui/material';
import '@fontsource/ibm-plex-mono';
import { useFormContext } from 'react-hook-form';
import { Section } from '../../components/Section';

export const TextFieldSection = () => {
  const { register } = useFormContext();

  return (
    <Section title="Text fields">
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
    </Section>
  );
};
