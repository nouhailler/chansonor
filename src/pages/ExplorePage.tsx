import PlaceIcon from '@mui/icons-material/Place';
import { Box, Chip, Container, Grid2 as Grid, Paper, Stack, Typography } from '@mui/material';
import { SectionHeader } from '../components/SectionHeader';
import { Visual } from '../components/Visual';
import { regions, styles } from '../data/exploreData';

export function ExplorePage() {
  return (
    <Container maxWidth="xl" sx={{ py: { xs: 4, md: 6 } }}>
      <SectionHeader eyebrow="Carte de France" title="Regions, festivals et traditions musicales" />
      <Grid container spacing={3}>
        {regions.map((region) => (
          <Grid size={{ xs: 12, md: 4 }} key={region.id}>
            <Paper sx={{ p: 1.3, borderRadius: 5, borderTop: `8px solid ${region.color}` }}>
              <Visual asset={region.image} ratio="16 / 11" rounded={18} />
              <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 1.5 }}>
                <PlaceIcon sx={{ color: region.color }} />
                <Typography variant="h5" sx={{ fontWeight: 950 }}>{region.region}</Typography>
              </Stack>
              <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mt: 1.5 }}>
                {[...region.artists, ...region.festivals, ...region.traditions].map((item) => <Chip key={item} label={item} />)}
              </Stack>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 7 }}>
        <SectionHeader eyebrow="Styles musicaux" title="Bannieres, couleurs, icones et anecdotes" />
        <Grid container spacing={3}>
          {styles.map((style) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={style.id}>
              <Paper sx={{ p: 1.3, borderRadius: 5, minHeight: 330 }}>
                <Visual asset={style.banner} ratio="16 / 9" rounded={18} />
                <Stack direction="row" alignItems="center" spacing={1.2} sx={{ mt: 1.5 }}>
                  <Box sx={{ width: 42, height: 42, borderRadius: 3, display: 'grid', placeItems: 'center', bgcolor: style.color, color: 'white' }}>
                    <style.icon />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 950 }}>{style.name}</Typography>
                </Stack>
                <Typography color="text.secondary" sx={{ mt: 1 }}>{style.anecdote}</Typography>
                <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mt: 1.5 }}>
                  {style.artists.map((artist) => <Chip key={artist} label={artist} size="small" />)}
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
