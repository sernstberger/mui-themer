import { TextField, TextFieldProps } from '@mui/material';
import { useFormContext } from 'react-hook-form';

interface NumberInputProps extends Omit<TextFieldProps, 'variant'> {
  fieldName: string;
  label: string;
}

export const NumberInput = ({
  fieldName,
  label,
  ...rest
}: NumberInputProps) => {
  const { register } = useFormContext();

  return (
    <TextField
      {...rest}
      {...{ label }}
      type="number"
      {...register(fieldName, { valueAsNumber: true })}
    />
  );
};
