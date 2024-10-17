import { TextField, TextFieldProps } from '@mui/material';
import { useFormContext } from 'react-hook-form';

interface TextInputProps extends Omit<TextFieldProps, 'variant'> {
  fieldName: string;
  label: string;
}

export const TextInput = ({ fieldName, label, ...rest }: TextInputProps) => {
  const { register } = useFormContext();

  return <TextField {...rest} {...{ label }} {...register(fieldName)} />;
};
