import { Box, Typography } from '@mui/material';

export const ColorSwatch = ({ label, color, onClick }: any) => (
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
    onClick={onClick}
  >
    <Typography variant="body2">{label}</Typography>
    {/* <Typography variant="body2">{accessibility}</Typography> */}
  </Box>
);
