import { Box, Divider, Stack, Typography } from '@mui/material';
import { TypographyVariant } from './TypographyVariant';
import { Section } from './Section';

export const TypographySection = () => {
  return (
    <Section title="Typography">
      <Stack spacing={1}>
        <TypographyVariant variant="h1" />
        <Divider />
        <TypographyVariant variant="h2" />
        <Divider />
        <TypographyVariant variant="h3" />
        <TypographyVariant variant="h4" />
        <TypographyVariant variant="h5" />
        <TypographyVariant variant="h6" />
        <TypographyVariant variant="subtitle1" />
        <TypographyVariant variant="subtitle2" />
        <TypographyVariant variant="body1" />
        <TypographyVariant variant="body2" />
        <TypographyVariant variant="button" />
        <TypographyVariant variant="caption" />
        <TypographyVariant variant="overline" />
      </Stack>
    </Section>
  );
};
