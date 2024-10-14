import React from 'react';
import { Box, Typography } from '@mui/material';
import { ColorSwatch } from './ColorSwatch';

export const ColorSwatchList = ({ colors, onColorClick }) => (
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
