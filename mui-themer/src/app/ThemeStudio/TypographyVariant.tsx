import {
  MenuItem,
  Stack,
  TextField,
  TypographyPropsVariantOverrides,
} from '@mui/material';
import { Box, Typography } from '@mui/material';
import { OverridableStringUnion } from '@mui/types';
import { Variant } from '@mui/material/styles/createTypography';
import { useFormContext } from 'react-hook-form';

interface TypographyVariantProps {
  variant: OverridableStringUnion<
    Variant | 'inherit',
    TypographyPropsVariantOverrides
  >;
}

export const TypographyVariant = ({ variant }: TypographyVariantProps) => {
  const { register } = useFormContext();

  return (
    <Box>
      <Typography variant="h3">{variant}</Typography>
      <Stack spacing={1}>
        <TextField
          label="Size"
          type="number"
          fullWidth
          {...register(variant, { valueAsNumber: true })}
        />
        <TextField
          label="Weight"
          select
          fullWidth
          {...register(`${variant}Weight`)}
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
          type="number"
          fullWidth
          {...register(`${variant}LineHeight`, { valueAsNumber: true })}
        />
        <TextField
          label="Letter spacing"
          type="number"
          fullWidth
          {...register(`${variant}LetterSpacing`, { valueAsNumber: true })}
        />
      </Stack>
    </Box>
  );
};
