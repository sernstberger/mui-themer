import { Box } from '@mui/material';
import { ColorSwatch } from './ColorSwatch';

export const ColorSwatchList = ({ colorMap, colorName }: any) => (
  <Box display="flex" flexWrap="wrap">
    {colorMap[colorName].map((swatch) => (
      <ColorSwatch
        key={swatch.label}
        label={swatch.label}
        color={swatch.color}
        // accessibility={swatch.accessibility}
      />
    ))}
  </Box>
);
