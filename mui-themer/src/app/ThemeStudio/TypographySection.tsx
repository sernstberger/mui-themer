import { MenuItem, TextField } from '@mui/material';
import { Box, Typography } from '@mui/material';
import { useFormContext } from 'react-hook-form';

export const TypographySection = () => {
  const { register } = useFormContext();

  return (
    <div>
      <Typography variant="h2">Typography</Typography>
      <Box>
        <Typography variant="h3">h1</Typography>
        <TextField
          label="Size"
          variant="outlined"
          type="number"
          fullWidth
          {...register('h1', { valueAsNumber: true })}
        />
        <TextField
          label="Weight"
          variant="outlined"
          select
          fullWidth
          {...register('h1Weight')}
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
          variant="outlined"
          type="number"
          fullWidth
          {...register('h1LineHeight', { valueAsNumber: true })}
        />
        <TextField
          label="Letter spacing"
          variant="outlined"
          type="number"
          fullWidth
          {...register('h1LetterSpacing', { valueAsNumber: true })}
        />
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
    </div>
  );
};
