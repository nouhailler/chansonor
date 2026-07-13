import FavoriteIcon from '@mui/icons-material/Favorite';
import { Container, Grid2 as Grid, Paper, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { MediaCard } from '../components/MediaCard';
import { SectionHeader } from '../components/SectionHeader';
import { placeholderDataUri } from '../components/Visual';
import { albums, artists, songs } from '../data/library';
import { favoritesStore, type FavoriteItem } from '../services/favorites';

export function FavoritesPage() {
  const [items, setItems] = useState<FavoriteItem[]>([]);

  useEffect(() => {
    favoritesStore.all().then(setItems).catch(() => setItems([]));
  }, []);

  const defaults: FavoriteItem[] = [
    ...artists.slice(0, 2).map((artist) => ({ id: `artist-${artist.id}`, type: 'artist' as const, title: artist.name, image: artist.hero.url, color: artist.hero.color })),
    ...songs.slice(0, 2).map((song) => ({ id: `song-${song.id}`, type: 'song' as const, title: song.title, image: song.cover.url, color: song.cover.color })),
    ...albums.slice(0, 2).map((album) => ({ id: `album-${album.id}`, type: 'album' as const, title: album.title, image: album.cover.url, color: album.cover.color }))
  ];
  const visible = items.length ? items : defaults;

  return (
    <Container maxWidth="xl" sx={{ py: { xs: 4, md: 6 } }}>
      <SectionHeader eyebrow="Favoris" title="Votre bibliotheque personnelle illustree" />
      {!items.length && (
        <Paper sx={{ p: 2.5, mb: 3, borderRadius: 4, display: 'flex', gap: 1.5, alignItems: 'center', bgcolor: 'rgba(255,79,123,.10)' }}>
          <FavoriteIcon color="primary" />
          <Typography sx={{ fontWeight: 800 }}>Exemple de bibliotheque : les prochains favoris seront sauvegardes localement avec IndexedDB.</Typography>
        </Paper>
      )}
      <Grid container spacing={3}>
        {visible.map((item) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={item.id}>
            <MediaCard
              title={item.title}
              subtitle={item.type}
              image={{ alt: item.title, kind: item.type === 'album' ? 'album' : 'portrait', color: item.color, url: item.image ?? placeholderDataUri({ alt: item.title, color: item.color, kind: 'portrait' }) }}
              badge="Favori"
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
