import { Box, Typography } from '@mui/material';
import { TypographyVariant } from './TypographyVariant';

export const TypographySection = () => {
  return (
    <div>
      <Typography variant="h2">Typography</Typography>
      <Box>
        <TypographyVariant variant="h1" />
        <TypographyVariant variant="h2" />
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
      </Box>
    </div>
  );
};
