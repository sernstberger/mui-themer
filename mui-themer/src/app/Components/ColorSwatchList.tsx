import { Box } from '@mui/material';
import { ColorSwatch } from './ColorSwatch';

interface ColorSwatchListProps {
  colors: any;
  onColorClick: (color: string) => void;
}

export const ColorSwatchList = ({
  colors,
  onColorClick,
}: ColorSwatchListProps) => (
  <Box display="flex" flexWrap="wrap">
    {colors.map((swatch) => {
      return (
        <ColorSwatch
          key={swatch.label}
          label={swatch.label}
          color={swatch.color}
          // accessibility={swatch.accessibility}
          onClick={() => onColorClick(swatch.color)}
        />
      );
    })}
  </Box>
);
