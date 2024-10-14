import { Box, BoxProps, Typography } from '@mui/material';

interface ColorSwatchProps extends BoxProps {
  label: string;
  color: string;
}

export const ColorSwatch = ({ label, color, ...rest }: ColorSwatchProps) => (
  <Box
    {...rest}
    sx={{
      backgroundColor: color,
      width: 50,
      height: 50,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      ...rest.sx,
    }}
  >
    <Typography variant="body2">{label}</Typography>
    {/* <Typography variant="body2">{accessibility}</Typography> */}
  </Box>
);
