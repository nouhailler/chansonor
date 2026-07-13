import { Box, Chip, Typography } from '@mui/material';
import type { ReactNode } from 'react';

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  action?: ReactNode;
}

export function SectionHeader({ eyebrow, title, action }: SectionHeaderProps) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'end', justifyContent: 'space-between', gap: 2, mb: 2.5 }}>
      <Box>
        <Chip label={eyebrow} color="secondary" size="small" sx={{ mb: 1, fontWeight: 800 }} />
        <Typography variant="h4" component="h2" sx={{ fontWeight: 950, letterSpacing: 0 }}>
          {title}
        </Typography>
      </Box>
      {action}
    </Box>
  );
}
