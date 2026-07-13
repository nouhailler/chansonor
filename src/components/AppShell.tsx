import AlbumIcon from '@mui/icons-material/Album';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ExploreIcon from '@mui/icons-material/Explore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import LightModeIcon from '@mui/icons-material/LightMode';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import SearchIcon from '@mui/icons-material/Search';
import TimelineIcon from '@mui/icons-material/Timeline';
import { AppBar, Box, Button, Container, IconButton, Stack, Toolbar, Typography } from '@mui/material';
import { Outlet, NavLink } from 'react-router-dom';
import { BottomNav } from './BottomNav';

interface AppShellProps {
  mode: 'light' | 'dark';
  onToggleMode: () => void;
}

const nav = [
  { to: '/', label: 'Accueil', icon: HomeIcon },
  { to: '/artists', label: 'Artistes', icon: PersonSearchIcon },
  { to: '/songs', label: 'Chansons', icon: AudiotrackIcon },
  { to: '/albums', label: 'Albums', icon: AlbumIcon },
  { to: '/explore', label: 'Explorer', icon: ExploreIcon },
  { to: '/gallery', label: 'Galerie', icon: ExploreIcon },
  { to: '/timeline', label: 'Frise', icon: TimelineIcon },
  { to: '/favorites', label: 'Favoris', icon: FavoriteIcon }
];

export function AppShell({ mode, onToggleMode }: AppShellProps) {
  return (
    <Box sx={{ minHeight: '100vh', pb: { xs: 10, md: 0 } }}>
      <AppBar position="sticky" color="transparent" elevation={0} sx={{ backdropFilter: 'blur(22px)', bgcolor: 'rgba(255,255,255,.72)' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ gap: 2, py: 1 }}>
            <Stack direction="row" alignItems="center" spacing={1.1} sx={{ mr: 1 }}>
              <Box sx={{ width: 42, height: 42, borderRadius: 3, display: 'grid', placeItems: 'center', background: 'linear-gradient(135deg,#ff4f7b,#ffb84d,#20c7b5)', color: 'white' }}>
                <AlbumIcon />
              </Box>
              <Typography variant="h5" sx={{ fontWeight: 950, letterSpacing: 0 }}>
                Chansonor
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1} sx={{ display: { xs: 'none', md: 'flex' }, flex: 1 }}>
              {nav.map((item) => (
                <Button key={item.to} component={NavLink} to={item.to} startIcon={<item.icon />} sx={{ borderRadius: 999, color: 'text.primary', '&.active': { bgcolor: 'primary.main', color: 'white' } }}>
                  {item.label}
                </Button>
              ))}
            </Stack>
            <Button component={NavLink} to="/search" startIcon={<SearchIcon />} variant="contained" sx={{ ml: 'auto', borderRadius: 999 }}>
              Recherche
            </Button>
            <IconButton aria-label="Changer le theme" onClick={onToggleMode}>
              {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
      <BottomNav />
    </Box>
  );
}
