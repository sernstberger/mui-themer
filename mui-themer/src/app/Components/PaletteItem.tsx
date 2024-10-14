import React, { useState } from 'react';
import {
  Button,
  Typography,
  useTheme,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
} from '@mui/material';
import { ColorSwatch } from './ColorSwatch';
import { ColorSwatchList } from './ColorSwatchList';
import {
  primary,
  error,
  warning,
  success,
  moss,
  teal,
  greenLight,
  green,
  cyan,
  blue,
  blueLight,
  violet,
  fuchsia,
  pink,
  rose,
  orangeDark,
  orange,
  yellow,
} from '../colors';

const colorMap = {
  primary,
  error,
  warning,
  success,
  moss,
  teal,
  greenLight,
  green,
  cyan,
  blue,
  blueLight,
  violet,
  fuchsia,
  pink,
  rose,
  orangeDark,
  orange,
  yellow,
};

export const colorNames = [
  'primary',
  'error',
  'warning',
  'success',
  'moss',
  'teal',
  'greenLight',
  'green',
  'cyan',
  'blue',
  'blueLight',
  'violet',
  'fuchsia',
  'pink',
  'rose',
  'orangeDark',
  'orange',
  'yellow',
];

interface PaletteItemProps {
  color: 'primary' | 'secondary' | 'error' | 'warning' | 'success' | 'info';
  setColor: (color: string) => void;
}

export const PaletteItem = ({ color, setColor }: PaletteItemProps) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const createColorLevel = (
    level: 'light' | 'main' | 'dark' | 'contrastText'
  ) => theme.palette[color][level];

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleColorClick = (color) => {
    setColor(color);
  };

  return (
    <div>
      <Typography>
        {color}: {createColorLevel('main')}
      </Typography>
      <Button onClick={handleClickOpen}>Edit</Button>
      <ColorSwatch label="Light" color={createColorLevel('light')} />
      <ColorSwatch label="Main" color={createColorLevel('main')} />
      <ColorSwatch label="Dark" color={createColorLevel('dark')} />
      <ColorSwatch
        label="Contrast text"
        color={createColorLevel('contrastText')}
      />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit {color} Color</DialogTitle>

        {colorNames.map((colorName) => (
          <Box key={colorName} sx={{ marginBottom: 1 }}>
            <Typography>
              {colorName.charAt(0).toUpperCase() + colorName.slice(1)}
            </Typography>
            <ColorSwatchList
              colors={colorMap[colorName]}
              onColorClick={handleColorClick}
            />
          </Box>
        ))}

        <DialogContent>
          <Typography>Light: {createColorLevel('light')}</Typography>
          <Typography>Main: {createColorLevel('main')}</Typography>
          <Typography>Dark: {createColorLevel('dark')}</Typography>
          <Typography>
            Contrast Text: {createColorLevel('contrastText')}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
