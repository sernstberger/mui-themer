import { Box, BoxProps, Typography, useTheme } from '@mui/material';

export interface ColorProps {
  label: string;
  color: string;
}

export interface ColorSwatchProps extends ColorProps, Omit<BoxProps, 'color'> {}

export const ColorSwatch = ({ label, color, ...rest }: ColorSwatchProps) => {
  const theme = useTheme();
  const contrastText = theme.palette.getContrastText(color);

  return (
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
      <Typography variant="body2" sx={{ color: contrastText }}>
        {label}
      </Typography>
      {/* <Typography variant="body2">{accessibility}</Typography> */}
    </Box>
  );
};
