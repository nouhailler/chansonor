import AlbumIcon from '@mui/icons-material/Album';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import PaidIcon from '@mui/icons-material/Paid';
import RateReviewIcon from '@mui/icons-material/RateReview';
import UpdateIcon from '@mui/icons-material/Update';
import { Box, Button, Chip, Container, Grid2 as Grid, List, ListItem, ListItemAvatar, ListItemText, Paper, Skeleton, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { MediaCard } from '../components/MediaCard';
import { SectionHeader } from '../components/SectionHeader';
import { Visual } from '../components/Visual';
import { albums } from '../data/albums';
import { loadAlbumDetail } from '../data/details';
import { favoritesStore } from '../services/favorites';
import type { Album } from '../types/content';

export function AlbumsPage() {
  return (
    <Container maxWidth="xl" sx={{ py: { xs: 4, md: 6 } }}>
      <SectionHeader eyebrow="Albums" title="Couvertures, pistes, critiques et editions" />
      <Grid container spacing={3}>
        {albums.map((album) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={album.id}>
            <MediaCard title={album.title} subtitle={`${album.artist} · ${album.year} · ${album.format}`} image={album.cover} badge={album.mood} href={`/albums/${album.id}`} wide />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export function AlbumDetailPage({ id }: { id?: string }) {
  const [album, setAlbum] = useState<Album>();

  useEffect(() => {
    let cancelled = false;
    setAlbum(undefined);
    loadAlbumDetail(id).then((item) => {
      if (!cancelled) setAlbum(item);
    });
    return () => {
      cancelled = true;
    };
  }, [id]);

  if (!album) {
    return (
      <Container maxWidth="xl" sx={{ py: { xs: 4, md: 6 } }}>
        <Skeleton variant="rounded" height={420} sx={{ borderRadius: 5 }} />
      </Container>
    );
  }

  const favorite = () => {
    void favoritesStore.toggle({
      id: `album-${album.id}`,
      type: 'album',
      title: album.title,
      image: album.cover.url,
      color: album.cover.color
    });
  };

  return (
    <Box>
      <Box sx={{ background: `linear-gradient(135deg, ${album.cover.color}, #1e172d)`, color: 'white', py: { xs: 4, md: 7 } }}>
        <Container maxWidth="xl">
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 5 }}>
              <Visual asset={album.cover} ratio="1 / 1" rounded={28} />
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Stack direction="row" gap={1} flexWrap="wrap" sx={{ mb: 2 }}>
                <Chip icon={<AlbumIcon />} label={album.format} sx={{ bgcolor: 'white', fontWeight: 900 }} />
                <Chip label={album.year} sx={{ bgcolor: 'white', fontWeight: 900 }} />
                <Chip label={album.mood} sx={{ bgcolor: 'rgba(255,255,255,.18)', color: 'white', fontWeight: 900 }} />
              </Stack>
              <Typography variant="h1" sx={{ fontWeight: 950, fontSize: { xs: 44, md: 82 }, lineHeight: .95, letterSpacing: 0 }}>
                {album.title}
              </Typography>
              <Typography variant="h5" sx={{ mt: 1.5, color: 'rgba(255,255,255,.86)' }}>{album.artist}</Typography>
              <Typography sx={{ mt: 3, maxWidth: 760, color: 'rgba(255,255,255,.82)', fontSize: 18, lineHeight: 1.55 }}>{album.commercialSuccess}</Typography>
              <Button onClick={favorite} variant="contained" startIcon={<FavoriteIcon />} sx={{ mt: 3, borderRadius: 999, bgcolor: 'white', color: 'primary.main', '&:hover': { bgcolor: 'rgba(255,255,255,.9)' } }}>
                Ajouter aux favoris
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ py: { xs: 4, md: 6 } }}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 5 }}>
            <SectionHeader eyebrow="Pistes" title="Toutes les chansons" />
            <Paper sx={{ borderRadius: 5, overflow: 'hidden' }}>
              <List disablePadding>
                {album.tracks.map((track, index) => (
                  <ListItem key={track} divider={index !== album.tracks.length - 1} sx={{ py: 1.6 }}>
                    <ListItemAvatar>
                      <Box sx={{ width: 46, height: 46, borderRadius: 3, display: 'grid', placeItems: 'center', bgcolor: album.cover.color, color: 'white', fontWeight: 950 }}>{index + 1}</Box>
                    </ListItemAvatar>
                    <ListItemText primary={track} secondary={`${album.title} · ${album.format}`} primaryTypographyProps={{ fontWeight: 950 }} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
          <Grid size={{ xs: 12, md: 7 }}>
            <SectionHeader eyebrow="Galerie" title="Couverture, editions et archives" />
            <Grid container spacing={2}>
              {album.gallery.map((asset) => (
                <Grid size={{ xs: 12, sm: 4 }} key={asset.alt}>
                  <Visual asset={asset} ratio="4 / 3" rounded={20} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        <Grid container spacing={3} sx={{ mt: 6 }}>
          {[
            { title: 'Critiques', icon: RateReviewIcon, items: album.reviews },
            { title: 'Reeditions', icon: UpdateIcon, items: album.reissues },
            { title: 'Streaming', icon: HeadphonesIcon, items: album.streaming },
            { title: 'Succes', icon: PaidIcon, items: [album.commercialSuccess] }
          ].map((section) => (
            <Grid size={{ xs: 12, md: 3 }} key={section.title}>
              <Paper component={motion.article} whileHover={{ y: -4 }} sx={{ p: 2.5, borderRadius: 4, minHeight: 230 }}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <section.icon sx={{ color: album.cover.color }} />
                  <Typography variant="h6" sx={{ fontWeight: 950 }}>{section.title}</Typography>
                </Stack>
                <Stack gap={1} sx={{ mt: 2 }}>
                  {section.items.map((item) => <Chip key={item} label={item} sx={{ justifyContent: 'start', height: 'auto', py: .8, '& .MuiChip-label': { whiteSpace: 'normal' } }} />)}
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Paper sx={{ mt: 6, p: { xs: 2.5, md: 3.5 }, borderRadius: 5, background: 'linear-gradient(135deg, rgba(255,79,123,.12), rgba(32,199,181,.14))' }}>
          <Stack direction="row" spacing={1.5} alignItems="center">
            <LibraryMusicIcon color="primary" />
            <Typography variant="h4" sx={{ fontWeight: 950 }}>Fiche album prete pour Discogs, MusicBrainz et archives</Typography>
          </Stack>
          <Typography color="text.secondary" sx={{ mt: 1.2, maxWidth: 900 }}>
            Cette structure peut accueillir codes edition, credits complets, photos de vinyle, cassette, CD, critiques longues, certifications et liens d’ecoute.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}
