import { Box } from '@mui/material';
import { ColorProps, ColorSwatch } from './ColorSwatch';

interface ColorSwatchListProps {
  colors: ColorProps[];
  onColorClick: (colors: ColorProps[]) => void;
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
          onClick={() => onColorClick(colors)}
        />
      );
    })}
  </Box>
);
