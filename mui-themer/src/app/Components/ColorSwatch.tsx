import { Box, Typography } from '@mui/material';

export const ColorSwatch = ({
  label,
  color,
}: // accessibility,
{
  label: string;
  color: string;
  // accessibility: string;
}) => (
  <Box
    sx={{
      backgroundColor: color,
      width: 50,
      height: 50,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Typography variant="body2">{label}</Typography>
    {/* <Typography variant="body2">{accessibility}</Typography> */}
  </Box>
);
