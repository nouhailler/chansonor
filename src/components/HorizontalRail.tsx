import { Box } from '@mui/material';
import type { ReactNode } from 'react';

export function HorizontalRail({ children }: { children: ReactNode }) {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 2.25,
        overflowX: 'auto',
        pb: 2,
        scrollSnapType: 'x mandatory',
        '& > *': { scrollSnapAlign: 'start' },
        '&::-webkit-scrollbar': { height: 8 },
        '&::-webkit-scrollbar-thumb': { bgcolor: 'rgba(30,23,45,.24)', borderRadius: 999 }
      }}
    >
      {children}
    </Box>
  );
}
