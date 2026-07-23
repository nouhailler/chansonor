import CollectionsIcon from '@mui/icons-material/Collections';
import { Box, Chip, Container, Grid2 as Grid, Paper, Skeleton, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { Visual } from '../components/Visual';
import { loadGalleryAssets } from '../data/details';
import type { VisualAsset } from '../types/content';

export function GalleryPage() {
  const [assets, setAssets] = useState<VisualAsset[]>([]);

  useEffect(() => {
    let cancelled = false;
    loadGalleryAssets().then((items) => {
      if (!cancelled) setAssets(items);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <Container maxWidth="xl" sx={{ py: { xs: 4, md: 6 } }}>
      <SectionHeader eyebrow="Galerie" title="Portraits, affiches, pochettes, objets et scenes" />
      {!assets.length && <Skeleton variant="rounded" height={420} sx={{ borderRadius: 5 }} />}
      <Box sx={{ columns: { xs: 1, sm: 2, md: 4 }, columnGap: 18 }}>
        {assets.map((asset, index) => (
          <Paper key={`${asset.alt}-${index}`} component={motion.article} whileHover={{ scale: 1.018 }} sx={{ breakInside: 'avoid', mb: 2.25, p: 1.1, borderRadius: 4 }}>
            <Visual asset={asset} ratio={index % 3 === 0 ? '4 / 5' : index % 4 === 0 ? '16 / 10' : '1 / 1'} rounded={16} />
            <Chip icon={<CollectionsIcon />} label={asset.kind} size="small" sx={{ mt: 1, fontWeight: 900 }} />
            <Typography variant="body2" sx={{ mt: .8, fontWeight: 800 }}>{asset.alt}</Typography>
          </Paper>
        ))}
      </Box>
    </Container>
  );
}
