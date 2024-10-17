import {
  MenuItem,
  TextField,
  TypographyPropsVariantOverrides,
} from '@mui/material';
import { Box, Typography } from '@mui/material';
import { OverridableStringUnion } from '@mui/types';
import { Variant } from '@mui/material/styles/createTypography';
import { useFormContext } from 'react-hook-form';
import Grid from '@mui/material/Grid2';
import { NumberInput } from '../../inputs/NumberInput';

interface TypographyVariantProps {
  variant: OverridableStringUnion<
    Variant | 'inherit',
    TypographyPropsVariantOverrides
  >;
}

export const TypographyVariant = ({ variant }: TypographyVariantProps) => {
  const { register, watch } = useFormContext();
  const formValues = watch();

  return (
    <Box>
      <Typography variant="h3">{variant}</Typography>
      <Grid container spacing={1}>
        <Grid size={6}>
          <NumberInput label="Size" fieldName={variant} />
        </Grid>
        <Grid size={6}>
          <TextField
            label="Weight"
            select
            fullWidth
            defaultValue={formValues[`${variant}Weight`]} // TODO: this shouldn't be needed
            {...register(`${variant}Weight`)}
          >
            <MenuItem value={100}>100 (thin)</MenuItem>
            <MenuItem value={300}>300 (light)</MenuItem>
            <MenuItem value={400}>400 (regular)</MenuItem>
            <MenuItem value={500}>500 (medium)</MenuItem>
            <MenuItem value={700}>700 (bold)</MenuItem>
            <MenuItem value={900}>900 (black)</MenuItem>
          </TextField>
        </Grid>
        <Grid size={6}>
          <NumberInput label="Line height" fieldName={`${variant}LineHeight`} />
        </Grid>
        <Grid size={6}>
          <NumberInput
            label="Letter spacing"
            fieldName={`${variant}LetterSpacing`}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
