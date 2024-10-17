import { Stack } from '@mui/material';
import '@fontsource/ibm-plex-mono';
import { Section } from '../../components/Section';
import { PaletteItem } from '../../../Components/PaletteItem';

export const PaletteSection = () => {
  return (
    <Section title="Palette">
      <Stack spacing={2}>
        <PaletteItem color="primary" />
        <PaletteItem color="secondary" />
        <PaletteItem color="error" />
        <PaletteItem color="warning" />
        <PaletteItem color="success" />
        <PaletteItem color="info" />
      </Stack>
    </Section>
  );
};
