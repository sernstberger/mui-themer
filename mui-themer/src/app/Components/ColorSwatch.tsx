import { Box, BoxProps, Typography, useTheme } from '@mui/material';
import chroma from 'chroma-js';

export interface ColorProps {
  label: string;
  color: string;
}

export interface ColorSwatchProps extends ColorProps, Omit<BoxProps, 'color'> {}

const getAccessibilityRating = (contrast: number) => {
  if (contrast >= 7) return 'AAA';
  if (contrast >= 4.5) return 'AA';
  if (contrast >= 3) return 'A';
  return 'Fail';
};

export const ColorSwatch = ({ label, color, ...rest }: ColorSwatchProps) => {
  const theme = useTheme();
  const contrastText = theme.palette.getContrastText(color);
  const contrastRatio = chroma.contrast(color, contrastText);
  const accessibilityRating = getAccessibilityRating(contrastRatio);

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
      <Typography variant="body2" color={contrastText}>
        {label}
      </Typography>
      <Typography variant="body2" color={contrastText}>
        {accessibilityRating}
      </Typography>
    </Box>
  );
};
