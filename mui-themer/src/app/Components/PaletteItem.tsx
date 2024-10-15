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
  Stack,
  IconButton,
} from '@mui/material';
import { ColorSwatch } from './ColorSwatch';
import { ColorSwatchList } from './ColorSwatchList';
import {
  red,
  pink,
  purple,
  deepPurple,
  indigo,
  blue,
  lightBlue,
  cyan,
  teal,
  green,
  lightGreen,
  lime,
  yellow,
  amber,
  orange,
  deepOrange,
  brown,
  grey,
  blueGrey,
  primary,
  error,
  warning,
  success,
} from '../colors';
import EditIcon from '@mui/icons-material/Edit';
import { useFormContext } from 'react-hook-form';

const colorMap = {
  red,
  pink,
  purple,
  deepPurple,
  indigo,
  blue,
  lightBlue,
  cyan,
  teal,
  green,
  lightGreen,
  lime,
  yellow,
  amber,
  orange,
  deepOrange,
  brown,
  grey,
  blueGrey,
  primary,
  error,
  warning,
  success,
};

export const colorNames = [
  'red',
  'pink',
  'purple',
  'deepPurple',
  'indigo',
  'blue',
  'lightBlue',
  'cyan',
  'teal',
  'green',
  'lightGreen',
  'lime',
  'yellow',
  'amber',
  'orange',
  'deepOrange',
  'brown',
  'grey',
  'blueGrey',
  'primary',
  'error',
  'warning',
  'success',
];

interface PaletteItemProps {
  color: 'primary' | 'secondary' | 'error' | 'warning' | 'success' | 'info';
  // setColor: (color: string) => void;
}

export const PaletteItem = ({ color }: PaletteItemProps) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const { watch, setValue } = useFormContext();
  const formValues = watch();

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
    setValue('primaryColor', color);
  };

  return (
    <div>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography>{color}</Typography>
        <IconButton onClick={handleClickOpen} size="small">
          <EditIcon />
        </IconButton>
      </Stack>
      <Stack direction="row">
        <ColorSwatch label="Light" color={createColorLevel('light')} />
        <ColorSwatch
          label="Main"
          // color={createColorLevel('main')}
          color={formValues.primaryColor}
          sx={{ width: 100 }}
        />
        <ColorSwatch label="Dark" color={createColorLevel('dark')} />
      </Stack>
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
