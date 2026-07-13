import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CakeIcon from '@mui/icons-material/Cake';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, Chip, Container, Grid2 as Grid, InputAdornment, Paper, Stack, TextField, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { HorizontalRail } from '../components/HorizontalRail';
import { MediaCard } from '../components/MediaCard';
import { SectionHeader } from '../components/SectionHeader';
import { Visual } from '../components/Visual';
import { albums, artists, collections, decades, songs, timeline } from '../data/library';
import { media, sourceRegistry, visual } from '../data/images';

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 }
};

export function HomePage() {
  return (
    <Box>
      <Box
        sx={{
          minHeight: { xs: '86vh', md: '82vh' },
          display: 'flex',
          alignItems: 'end',
          position: 'relative',
          overflow: 'hidden',
          color: 'white',
          backgroundImage: `linear-gradient(90deg, rgba(16,10,28,.92), rgba(16,10,28,.42), rgba(16,10,28,.76)), url(${media.hero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          '&:after': {
            content: '""',
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at 18% 20%, rgba(255,184,77,.34), transparent 28%), radial-gradient(circle at 78% 28%, rgba(32,199,181,.26), transparent 28%)'
          }
        }}
      >
        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1, pb: { xs: 5, md: 8 } }}>
          <Grid container spacing={4} alignItems="end">
            <Grid size={{ xs: 12, md: 7 }}>
              <motion.div initial="hidden" animate="show" variants={fade} transition={{ duration: .55 }}>
                <Chip icon={<AutoAwesomeIcon />} label="Encyclopedie visuelle de la chanson francaise" sx={{ bgcolor: 'rgba(255,255,255,.18)', color: 'white', fontWeight: 900, mb: 2 }} />
                <Typography variant="h1" sx={{ fontWeight: 950, maxWidth: 920, lineHeight: .93, fontSize: { xs: 48, sm: 72, md: 96 }, letterSpacing: 0 }}>
                  Chansonor
                </Typography>
                <Typography variant="h5" sx={{ mt: 2, maxWidth: 760, color: 'rgba(255,255,255,.88)', lineHeight: 1.35 }}>
                  Portraits, pochettes, archives, clips, regions et anecdotes dans une experience vivante, coloree et immersive.
                </Typography>
                <Box component={RouterLink} to="/search" sx={{ display: 'block', maxWidth: 720, mt: 4, textDecoration: 'none' }}>
                  <TextField
                    fullWidth
                    placeholder="Rechercher un artiste, une chanson, un album..."
                    sx={{ bgcolor: 'rgba(255,255,255,.92)', borderRadius: 999, '& fieldset': { border: 0 }, '& input': { py: 2 } }}
                    InputProps={{ startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>, readOnly: true }}
                  />
                </Box>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <Grid container spacing={2}>
                {[
                  { label: 'Artiste du jour', title: artists[0].name, image: artists[0].hero, icon: MusicNoteIcon },
                  { label: 'Album du jour', title: albums[1].title, image: albums[1].cover, icon: AutoAwesomeIcon },
                  { label: 'Chanson du jour', title: songs[2].title, image: songs[2].cover, icon: HistoryEduIcon },
                  { label: 'Anniversaire', title: 'Scene, archives et memoire', image: visual('Gateau musical illustre', 'object', '#ffb84d', media.poster), icon: CakeIcon }
                ].map((item) => (
                  <Grid size={{ xs: 6 }} key={item.label}>
                    <Paper component={motion.div} whileHover={{ scale: 1.03 }} sx={{ p: 1, borderRadius: 4, bgcolor: 'rgba(255,255,255,.14)', backdropFilter: 'blur(18px)' }}>
                      <Visual asset={item.image} ratio="4 / 3" rounded={14} />
                      <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: 1, px: .5 }}>
                        <item.icon fontSize="small" />
                        <Box sx={{ minWidth: 0 }}>
                          <Typography variant="caption" sx={{ color: 'rgba(255,255,255,.74)', fontWeight: 800 }}>{item.label}</Typography>
                          <Typography variant="body2" sx={{ fontWeight: 900 }} noWrap>{item.title}</Typography>
                        </Box>
                      </Stack>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ py: { xs: 4, md: 7 } }}>
        <SectionHeader eyebrow="A explorer" title="Categories illustrees" />
        <Grid container spacing={2.5}>
          {collections.map((collection) => (
            <Grid size={{ xs: 12, sm: 6, md: 2.4 }} key={collection.id}>
              <Paper component={motion.div} whileHover={{ y: -5 }} sx={{ p: 1.2, borderRadius: 4, bgcolor: collection.color, color: 'white', minHeight: 220 }}>
                <Visual asset={collection.cover} ratio="16 / 11" rounded={14} />
                <Typography variant="h6" sx={{ fontWeight: 950, mt: 1.3 }}>{collection.title}</Typography>
                <Typography variant="body2" sx={{ opacity: .86 }}>{collection.subtitle}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 7 }}>
          <SectionHeader eyebrow="Carrousel" title="Artistes celebres et oublies" />
          <HorizontalRail>
            {artists.map((artist) => (
              <MediaCard key={artist.id} title={artist.name} subtitle={`${artist.years} · ${artist.styles.join(', ')}`} image={artist.hero} badge={artist.region} href={`/artists/${artist.id}`} />
            ))}
            {artists.map((artist) => (
              <MediaCard key={`${artist.id}-forgotten`} title={`Autour de ${artist.name}`} subtitle="Influences, reprises et archives" image={artist.gallery[1]} badge="Oublies ?" href={`/artists/${artist.id}`} />
            ))}
          </HorizontalRail>
        </Box>

        <Box sx={{ mt: 6 }}>
          <SectionHeader eyebrow="Derniers albums" title="Pochettes, formats et editions" action={<Button component={RouterLink} to="/albums" variant="outlined">Tout voir</Button>} />
          <HorizontalRail>
            {albums.map((album) => <MediaCard key={album.id} title={album.title} subtitle={`${album.artist} · ${album.format} · ${album.year}`} image={album.cover} badge={album.mood} href={`/albums/${album.id}`} />)}
          </HorizontalRail>
        </Box>

        <Grid container spacing={3} sx={{ mt: 5 }}>
          <Grid size={{ xs: 12, md: 7 }}>
            <SectionHeader eyebrow="Dernieres chansons" title="Quatre titres pour partir" action={<Button component={RouterLink} to="/songs" variant="outlined">Tout voir</Button>} />
            <Grid container spacing={2}>
              {songs.map((song) => (
                <Grid size={{ xs: 12, sm: 6 }} key={song.id}>
                  <MediaCard title={song.title} subtitle={`${song.artist} · ${song.year} · ${song.duration}`} image={song.cover} badge={song.style} href={`/songs/${song.id}`} wide />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <SectionHeader eyebrow="Frise" title="Actualite historique" />
            <Stack spacing={2}>
              {timeline.slice(0, 4).map((event) => (
                <Paper key={event.year} sx={{ display: 'grid', gridTemplateColumns: '104px 1fr', gap: 2, p: 1.2, borderRadius: 4 }}>
                  <Visual asset={event.image} ratio="1 / 1" rounded={12} />
                  <Box sx={{ alignSelf: 'center' }}>
                    <Typography variant="h5" sx={{ fontWeight: 950, color: event.image.color }}>{event.year}</Typography>
                    <Typography sx={{ fontWeight: 800 }}>{event.title}</Typography>
                  </Box>
                </Paper>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Box sx={{ mt: 7 }}>
          <SectionHeader eyebrow="Decouverte aleatoire" title="Chaque epoque a son image" />
          <HorizontalRail>
            {decades.map((decade) => <MediaCard key={decade.id} title={decade.label} subtitle={decade.tone} image={decade.image} badge={decade.objects[0]} wide />)}
          </HorizontalRail>
        </Box>

        <Grid container spacing={3} sx={{ mt: 7 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper sx={{ p: { xs: 2.5, md: 3.5 }, borderRadius: 5, background: 'linear-gradient(135deg, rgba(255,79,123,.14), rgba(255,184,77,.18))' }}>
              <Grid container spacing={2.5} alignItems="center">
                <Grid size={{ xs: 12, sm: 5 }}>
                  <Visual asset={artists[1].gallery[0]} ratio="4 / 3" rounded={20} />
                </Grid>
                <Grid size={{ xs: 12, sm: 7 }}>
                  <Chip label="Citation" color="primary" sx={{ fontWeight: 900, mb: 1 }} />
                  <Typography variant="h5" sx={{ fontWeight: 950 }}>{artists[1].quotes[0]}</Typography>
                  <Typography color="text.secondary" sx={{ mt: 1 }}>{artists[1].name}</Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper sx={{ p: { xs: 2.5, md: 3.5 }, borderRadius: 5, background: 'linear-gradient(135deg, rgba(32,199,181,.14), rgba(124,92,255,.16))' }}>
              <Grid container spacing={2.5} alignItems="center">
                <Grid size={{ xs: 12, sm: 5 }}>
                  <Visual asset={timeline[1].image} ratio="4 / 3" rounded={20} />
                </Grid>
                <Grid size={{ xs: 12, sm: 7 }}>
                  <Chip label="Il y a 71 ans aujourd’hui" color="secondary" sx={{ fontWeight: 900, mb: 1 }} />
                  <Typography variant="h5" sx={{ fontWeight: 950 }}>{timeline[1].title}</Typography>
                  <Typography color="text.secondary" sx={{ mt: 1 }}>Une capsule historique a enrichir avec dates reelles, anniversaires et sorties.</Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>

        <Paper sx={{ mt: 7, p: { xs: 2.5, md: 4 }, borderRadius: 5, background: 'linear-gradient(135deg,#1e172d,#7c5cff)', color: 'white' }}>
          <Grid container spacing={3} alignItems="center">
            <Grid size={{ xs: 12, md: 5 }}>
              <Visual asset={visual('Sources iconographiques reliees', 'archive', '#20c7b5', media.archive)} ratio="16 / 10" rounded={22} />
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography variant="h4" sx={{ fontWeight: 950 }}>Pret pour des dizaines de milliers d’illustrations</Typography>
              <Typography sx={{ mt: 1.2, color: 'rgba(255,255,255,.82)' }}>Le modele media prevoit source, credit, miniatures, HD, lazy loading, placeholders et extensions vers caches ou prechargement.</Typography>
              <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mt: 2 }}>
                {sourceRegistry.map((source) => <Chip key={source} label={source} sx={{ bgcolor: 'rgba(255,255,255,.16)', color: 'white', fontWeight: 800 }} />)}
              </Stack>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}
