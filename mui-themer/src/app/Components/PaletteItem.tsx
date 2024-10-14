import { Typography, useTheme } from '@mui/material';
import { ColorSwatch } from './ColorSwatch';

interface PaletteItemProps {
  color: 'primary' | 'secondary' | 'error' | 'warning' | 'success' | 'info';
}

export const PaletteItem = ({ color }: PaletteItemProps) => {
  const theme = useTheme();
  const createColorLevel = (
    level: 'light' | 'main' | 'dark' | 'contrastText'
  ) => theme.palette[color][level];

  return (
    <div>
      <Typography>
        {color}: {createColorLevel('main')}
      </Typography>
      <ColorSwatch label="Light" color={createColorLevel('light')} />
      <ColorSwatch label="Main" color={createColorLevel('main')} />
      <ColorSwatch label="Dark" color={createColorLevel('dark')} />
      <ColorSwatch
        label="Contrast text"
        color={createColorLevel('contrastText')}
      />
    </div>
  );
};
