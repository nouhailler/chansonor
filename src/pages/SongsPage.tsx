import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AlbumIcon from '@mui/icons-material/Album';
import EditNoteIcon from '@mui/icons-material/EditNote';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import ReplayIcon from '@mui/icons-material/Replay';
import { Box, Button, Chip, Container, Grid2 as Grid, Paper, Skeleton, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { MediaCard } from '../components/MediaCard';
import { SectionHeader } from '../components/SectionHeader';
import { Visual } from '../components/Visual';
import { loadSongDetail } from '../data/details';
import { songs } from '../data/songs';
import { favoritesStore } from '../services/favorites';
import type { Song } from '../types/content';

export function SongsPage() {
  return (
    <Container maxWidth="xl" sx={{ py: { xs: 4, md: 6 } }}>
      <SectionHeader eyebrow="Chansons" title="Pochettes, histoires, auteurs et reprises" />
      <Grid container spacing={3}>
        {songs.map((song) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={song.id}>
            <MediaCard title={song.title} subtitle={`${song.artist} · ${song.year} · ${song.duration}`} image={song.cover} badge={song.style} href={`/songs/${song.id}`} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export function SongDetailPage({ id }: { id?: string }) {
  const [song, setSong] = useState<Song>();

  useEffect(() => {
    let cancelled = false;
    setSong(undefined);
    loadSongDetail(id).then((item) => {
      if (!cancelled) setSong(item);
    });
    return () => {
      cancelled = true;
    };
  }, [id]);

  if (!song) {
    return (
      <Container maxWidth="xl" sx={{ py: { xs: 4, md: 6 } }}>
        <Skeleton variant="rounded" height={420} sx={{ borderRadius: 5 }} />
      </Container>
    );
  }

  const favorite = () => {
    void favoritesStore.toggle({
      id: `song-${song.id}`,
      type: 'song',
      title: song.title,
      image: song.cover.url,
      color: song.cover.color
    });
  };

  return (
    <Box>
      <Box sx={{ background: `linear-gradient(135deg, ${song.cover.color}, #1e172d)`, color: 'white', py: { xs: 4, md: 7 } }}>
        <Container maxWidth="xl">
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 5 }}>
              <Visual asset={song.cover} ratio="1 / 1" rounded={28} />
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Stack direction="row" gap={1} flexWrap="wrap" sx={{ mb: 2 }}>
                <Chip label={song.style} sx={{ bgcolor: 'rgba(255,255,255,.18)', color: 'white', fontWeight: 900 }} />
                <Chip icon={<AccessTimeIcon />} label={song.duration} sx={{ bgcolor: 'white', fontWeight: 900 }} />
                <Chip label={song.year} sx={{ bgcolor: 'white', fontWeight: 900 }} />
              </Stack>
              <Typography variant="h1" sx={{ fontWeight: 950, fontSize: { xs: 44, md: 82 }, lineHeight: .95, letterSpacing: 0 }}>
                {song.title}
              </Typography>
              <Typography variant="h5" sx={{ mt: 1.5, color: 'rgba(255,255,255,.86)' }}>
                {song.artist} · {song.album}
              </Typography>
              <Typography sx={{ mt: 3, maxWidth: 760, color: 'rgba(255,255,255,.82)', fontSize: 18, lineHeight: 1.55 }}>{song.story}</Typography>
              <Button onClick={favorite} variant="contained" startIcon={<FavoriteIcon />} sx={{ mt: 3, borderRadius: 999, bgcolor: 'white', color: 'primary.main', '&:hover': { bgcolor: 'rgba(255,255,255,.9)' } }}>
                Ajouter aux favoris
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ py: { xs: 4, md: 6 } }}>
        <Grid container spacing={3}>
          {[
            { label: 'Auteur', value: song.author, icon: EditNoteIcon },
            { label: 'Compositeur', value: song.composer, icon: MusicNoteIcon },
            { label: 'Album', value: song.album, icon: AlbumIcon },
            { label: 'Annee', value: String(song.year), icon: AccessTimeIcon }
          ].map((item) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={item.label}>
              <Paper component={motion.article} whileHover={{ y: -4 }} sx={{ p: 2.5, borderRadius: 4, minHeight: 150, background: 'linear-gradient(135deg, rgba(255,255,255,.96), rgba(255,184,77,.16))' }}>
                <item.icon sx={{ color: song.cover.color }} />
                <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 1, fontWeight: 900 }}>{item.label}</Typography>
                <Typography variant="h6" sx={{ fontWeight: 950 }}>{item.value}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={4} sx={{ mt: 5 }}>
          <Grid size={{ xs: 12, md: 7 }}>
            <SectionHeader eyebrow="Histoire" title="Contexte et anecdotes" />
            <Paper sx={{ p: { xs: 2.5, md: 3.5 }, borderRadius: 5 }}>
              <Typography variant="h6" sx={{ lineHeight: 1.6 }}>{song.context}</Typography>
              <Stack gap={1.2} sx={{ mt: 3 }}>
                {song.anecdotes.map((anecdote) => <Chip key={anecdote} label={anecdote} sx={{ justifyContent: 'start', height: 'auto', py: 1, '& .MuiChip-label': { whiteSpace: 'normal' } }} />)}
              </Stack>
            </Paper>
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <SectionHeader eyebrow="Galerie" title="Images associees" />
            <Grid container spacing={1.5}>
              {song.gallery.map((asset) => (
                <Grid size={{ xs: 4 }} key={asset.alt}>
                  <Visual asset={asset} ratio="1 / 1" rounded={16} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        <Grid container spacing={3} sx={{ mt: 6 }}>
          {[
            { title: 'Reprises', icon: ReplayIcon, items: song.covers },
            { title: 'Classements', icon: LeaderboardIcon, items: song.charts },
            { title: 'Liens d’ecoute', icon: HeadphonesIcon, items: song.listeningLinks }
          ].map((section) => (
            <Grid size={{ xs: 12, md: 4 }} key={section.title}>
              <Paper sx={{ p: 2.5, borderRadius: 4, minHeight: 230 }}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <section.icon sx={{ color: song.cover.color }} />
                  <Typography variant="h5" sx={{ fontWeight: 950 }}>{section.title}</Typography>
                </Stack>
                <Stack direction="row" gap={1} flexWrap="wrap" sx={{ mt: 2 }}>
                  {section.items.map((item) => <Chip key={item} label={item} color="primary" variant="outlined" />)}
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
