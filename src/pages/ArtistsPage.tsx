import FavoriteIcon from '@mui/icons-material/Favorite';
import MapIcon from '@mui/icons-material/Map';
import MicExternalOnIcon from '@mui/icons-material/MicExternalOn';
import { Box, Button, Chip, Container, Grid2 as Grid, Paper, Stack, Typography } from '@mui/material';
import { MediaCard } from '../components/MediaCard';
import { SectionHeader } from '../components/SectionHeader';
import { Visual } from '../components/Visual';
import { artists } from '../data/library';
import { favoritesStore } from '../services/favorites';

export function ArtistsPage() {
  return (
    <Container maxWidth="xl" sx={{ py: { xs: 4, md: 6 } }}>
      <SectionHeader eyebrow="Artistes" title="Portraits, scenes, albums et collaborations" />
      <Grid container spacing={3}>
        {artists.map((artist) => (
          <Grid size={{ xs: 12, md: 4 }} key={artist.id}>
            <MediaCard title={artist.name} subtitle={`${artist.years} · ${artist.region}`} image={artist.hero} badge={artist.styles[0]} href={`/artists/${artist.id}`} wide />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export function ArtistDetailPage({ id }: { id?: string }) {
  const artist = artists.find((item) => item.id === id) ?? artists[0];
  const favorite = () => {
    void favoritesStore.toggle({
      id: `artist-${artist.id}`,
      type: 'artist',
      title: artist.name,
      image: artist.hero.url,
      color: artist.hero.color
    });
  };

  return (
    <Box>
      <Box sx={{ background: `linear-gradient(135deg, ${artist.hero.color}, #1e172d)`, color: 'white', pt: 5, pb: { xs: 5, md: 8 } }}>
        <Container maxWidth="xl">
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 5 }}>
              <Visual asset={artist.hero} ratio="4 / 5" rounded={26} />
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Stack direction="row" gap={1} flexWrap="wrap" sx={{ mb: 2 }}>
                {artist.styles.map((style) => <Chip key={style} label={style} sx={{ bgcolor: 'rgba(255,255,255,.18)', color: 'white', fontWeight: 900 }} />)}
              </Stack>
              <Typography variant="h1" sx={{ fontWeight: 950, fontSize: { xs: 48, md: 86 }, letterSpacing: 0 }}>{artist.name}</Typography>
              <Typography variant="h5" sx={{ mt: 1, color: 'rgba(255,255,255,.86)' }}>{artist.tagline}</Typography>
              <Stack direction="row" spacing={2} flexWrap="wrap" sx={{ mt: 3 }}>
                <Chip icon={<MapIcon />} label={artist.region} sx={{ bgcolor: 'white', fontWeight: 900 }} />
                <Chip icon={<MicExternalOnIcon />} label={artist.years} sx={{ bgcolor: 'white', fontWeight: 900 }} />
              </Stack>
              <Button onClick={favorite} variant="contained" startIcon={<FavoriteIcon />} sx={{ mt: 3, borderRadius: 999, bgcolor: 'white', color: 'primary.main', '&:hover': { bgcolor: 'rgba(255,255,255,.9)' } }}>
                Ajouter aux favoris
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ py: { xs: 4, md: 6 } }}>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 7 }}>
            <SectionHeader eyebrow="Biographie" title="Une fiche riche et documentee" />
            <Paper sx={{ p: { xs: 2.5, md: 3.5 }, borderRadius: 4 }}>
              <Typography variant="h6" sx={{ lineHeight: 1.55 }}>{artist.bio}</Typography>
              <Stack direction="row" gap={1} flexWrap="wrap" sx={{ mt: 3 }}>
                {artist.highlights.map((item) => <Chip key={item} label={item} color="primary" variant="outlined" />)}
              </Stack>
            </Paper>
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <SectionHeader eyebrow="Carte" title="Naissance et territoires" />
            <Paper sx={{ p: 1.2, borderRadius: 4 }}>
              <Visual asset={{ ...artist.gallery[0], kind: 'map', alt: `Carte illustree ${artist.region}` }} ratio="16 / 10" rounded={16} />
            </Paper>
          </Grid>
        </Grid>

        <Box sx={{ mt: 6 }}>
          <SectionHeader eyebrow="Galerie" title="Portraits, scene, affiches, archives" />
          <Grid container spacing={2.5}>
            {artist.gallery.map((image) => (
              <Grid size={{ xs: 12, sm: 4 }} key={image.alt}>
                <Visual asset={image} ratio="4 / 3" rounded={20} />
              </Grid>
            ))}
          </Grid>
        </Box>

        <Grid container spacing={4} sx={{ mt: 6 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <SectionHeader eyebrow="Discographie" title="Albums et formats" />
            <Stack spacing={2}>
              {artist.albums.map((album) => <MediaCard key={album.id} title={album.title} subtitle={`${album.format} · ${album.year} · ${album.tracks.length} titres`} image={album.cover} badge={album.mood} wide />)}
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <SectionHeader eyebrow="Chansons" title="Histoires et reprises" />
            <Stack spacing={2}>
              {artist.songs.map((song) => <MediaCard key={song.id} title={song.title} subtitle={song.story} image={song.cover} badge={`${song.year} · ${song.style}`} wide />)}
            </Stack>
          </Grid>
        </Grid>

        <Grid container spacing={3} sx={{ mt: 6 }}>
          {[
            ['Collaborations', artist.collaborations],
            ['Influences', artist.influences],
            ['Instruments', artist.instruments],
            ['Maison de disque', [artist.label]],
            ['Citations', artist.quotes],
            ['Anecdotes', artist.anecdotes],
            ['Recompenses', artist.awards]
          ].map(([title, items]) => (
            <Grid size={{ xs: 12, md: title === 'Citations' || title === 'Anecdotes' ? 6 : 4 }} key={title as string}>
              <Paper sx={{ p: 2.5, borderRadius: 4, minHeight: 220, background: 'linear-gradient(135deg, rgba(255,79,123,.12), rgba(32,199,181,.12))' }}>
                <Typography variant="h5" sx={{ fontWeight: 950 }}>{title as string}</Typography>
                <Stack gap={1} sx={{ mt: 2 }}>
                  {(items as string[]).map((item) => <Chip key={item} label={item} sx={{ justifyContent: 'start', fontWeight: 800, height: 'auto', py: .8, '& .MuiChip-label': { whiteSpace: 'normal' } }} />)}
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
