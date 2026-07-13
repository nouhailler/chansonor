import FavoriteIcon from '@mui/icons-material/Favorite';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Box, Chip, IconButton, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import type { VisualAsset } from '../types/content';
import { Visual } from './Visual';

interface MediaCardProps {
  title: string;
  subtitle: string;
  image: VisualAsset;
  badge?: string;
  wide?: boolean;
  href?: string;
  meta?: ReactNode;
  onFavorite?: () => void;
}

export function MediaCard({ title, subtitle, image, badge, wide, href, meta, onFavorite }: MediaCardProps) {
  const body = (
    <Box
      component={motion.article}
      whileHover={{ y: -6, scale: 1.015 }}
      transition={{ type: 'spring', stiffness: 240, damping: 22 }}
      sx={{
        minWidth: wide ? { xs: 280, sm: 420 } : { xs: 210, sm: 250 },
        maxWidth: wide ? 480 : 280,
        textDecoration: 'none',
        color: 'inherit'
      }}
    >
      <Box sx={{ position: 'relative' }}>
        <Visual asset={image} ratio={wide ? '16 / 10' : '1 / 1'} rounded={16} />
        <IconButton
          aria-label="Lire"
          sx={{
            position: 'absolute',
            right: 12,
            bottom: 12,
            bgcolor: 'rgba(255,255,255,.92)',
            color: 'primary.main',
            '&:hover': { bgcolor: 'white' }
          }}
        >
          <PlayArrowIcon />
        </IconButton>
        {badge && <Chip label={badge} sx={{ position: 'absolute', left: 12, top: 12, bgcolor: 'rgba(255,255,255,.92)', fontWeight: 900 }} />}
      </Box>
      <Stack direction="row" spacing={1.5} alignItems="start" sx={{ mt: 1.5 }}>
        <Box sx={{ minWidth: 0, flex: 1 }}>
          <Typography variant="h6" sx={{ fontWeight: 900, lineHeight: 1.1 }}>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: .4 }}>
            {subtitle}
          </Typography>
          {meta}
        </Box>
        {onFavorite && (
          <IconButton aria-label="Ajouter aux favoris" onClick={onFavorite} size="small">
            <FavoriteIcon fontSize="small" />
          </IconButton>
        )}
      </Stack>
    </Box>
  );

  if (!href) return body;
  return (
    <Box component="a" href={href} sx={{ textDecoration: 'none', color: 'inherit' }}>
      {body}
    </Box>
  );
}
