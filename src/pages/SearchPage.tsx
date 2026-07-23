import SearchIcon from '@mui/icons-material/Search';
import { Box, Chip, Container, Grid2 as Grid, InputAdornment, Paper, TextField, Typography } from '@mui/material';
import { useMemo, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { SectionHeader } from '../components/SectionHeader';
import { Visual } from '../components/Visual';
import { albums } from '../data/albums';
import { artists } from '../data/artists';
import { collections } from '../data/exploreData';
import { songs } from '../data/songs';
import type { VisualAsset } from '../types/content';

interface Result {
  id: string;
  title: string;
  subtitle: string;
  type: string;
  year?: number;
  image: VisualAsset;
  href?: string;
}

export function SearchPage() {
  const [query, setQuery] = useState('');
  const results = useMemo<Result[]>(() => {
    const all: Result[] = [
      ...artists.map((artist) => ({ id: artist.id, title: artist.name, subtitle: artist.styles.join(', '), type: 'Artiste', image: artist.hero, href: `/artists/${artist.id}` })),
      ...songs.map((song) => ({ id: song.id, title: song.title, subtitle: `${song.artist} · ${song.style} · ${song.author}`, type: 'Chanson', year: song.year, image: song.cover, href: `/songs/${song.id}` })),
      ...albums.map((album) => ({ id: album.id, title: album.title, subtitle: `${album.artist} · ${album.format}`, type: 'Album', year: album.year, image: album.cover, href: `/albums/${album.id}` })),
      ...collections.map((collection) => ({ id: collection.id, title: collection.title, subtitle: collection.subtitle, type: 'Collection', image: collection.cover }))
    ];
    const normalized = query.trim().toLowerCase();
    if (!normalized) return all;
    return all.filter((item) => `${item.title} ${item.subtitle} ${item.type} ${item.year ?? ''}`.toLowerCase().includes(normalized));
  }, [query]);

  return (
    <Container maxWidth="xl" sx={{ py: { xs: 4, md: 6 } }}>
      <SectionHeader eyebrow="Recherche instantanee" title="Miniatures, styles, annees et icones" />
      <TextField
        autoFocus
        fullWidth
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Tapez Piaf, vinyle, 1986, chanson..."
        InputProps={{ startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment> }}
        inputProps={{ 'data-demo-id': 'global-search-input' }}
        sx={{ mb: 4, '& .MuiOutlinedInput-root': { borderRadius: 999, bgcolor: 'background.paper' }, '& input': { py: 2 } }}
      />
      <Grid container spacing={2.5} data-demo-id="search-results">
        {results.map((result) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={`${result.type}-${result.id}`}>
            <Paper component={result.href ? RouterLink : 'article'} to={result.href} sx={{ display: 'grid', gridTemplateColumns: '112px 1fr', gap: 2, p: 1.2, borderRadius: 4, textDecoration: 'none', color: 'inherit' }}>
              <Visual asset={result.image} ratio="1 / 1" rounded={14} />
              <Box sx={{ alignSelf: 'center', minWidth: 0 }}>
                <Chip label={result.type} size="small" color="primary" sx={{ fontWeight: 900 }} />
                <Typography variant="h6" sx={{ mt: .8, fontWeight: 950 }} noWrap>{result.title}</Typography>
                <Typography color="text.secondary" noWrap>{result.subtitle}</Typography>
                {result.year && <Typography variant="caption" sx={{ fontWeight: 900 }}>{result.year}</Typography>}
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
