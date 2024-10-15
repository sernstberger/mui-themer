import React, { useState } from 'react';
import {
  Button,
  Typography,
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
  const [open, setOpen] = useState(false);
  const { watch, setValue } = useFormContext();
  const formValues = watch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleColorClick = () => {
    const newColor = color.find((c) => c.label === '600')?.color;
    setValue(color, { main: newColor });
  };

  console.log('formValues', formValues.primary);

  return (
    <div>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography>{color}</Typography>
        <IconButton onClick={handleClickOpen} size="small">
          <EditIcon />
        </IconButton>
      </Stack>
      <Stack direction="row">
        <ColorSwatch label="Light" color={formValues[color].light} />
        <ColorSwatch
          label="Main"
          color={formValues[color].main}
          sx={{ width: 100 }}
        />
        <ColorSwatch label="Dark" color={formValues[color].dark} />
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
          <Typography>Light: {formValues[color].light}</Typography>
          <Typography>Main: {formValues[color].main}</Typography>
          <Typography>Dark: {formValues[color].dark}</Typography>
          <Typography>
            Contrast Text: {formValues[color].contrastText}
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
