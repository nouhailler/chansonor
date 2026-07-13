import AlbumIcon from '@mui/icons-material/Album';
import ExploreIcon from '@mui/icons-material/Explore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import TimelineIcon from '@mui/icons-material/Timeline';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

const routes = ['/', '/artists', '/explore', '/gallery', '/timeline', '/favorites'];

export function BottomNav() {
  const location = useLocation();
  const navigate = useNavigate();
  const value = routes.find((route) => route !== '/' && location.pathname.startsWith(route)) ?? '/';
  return (
    <Paper elevation={12} sx={{ position: 'fixed', left: 12, right: 12, bottom: 12, zIndex: 20, borderRadius: 5, overflow: 'hidden', display: { md: 'none' } }}>
      <BottomNavigation value={value} onChange={(_, next) => navigate(next)} showLabels>
        <BottomNavigationAction label="Accueil" value="/" icon={<HomeIcon />} />
        <BottomNavigationAction label="Artistes" value="/artists" icon={<PersonSearchIcon />} />
        <BottomNavigationAction label="Explorer" value="/explore" icon={<ExploreIcon />} />
        <BottomNavigationAction label="Frise" value="/timeline" icon={<TimelineIcon />} />
        <BottomNavigationAction label="Favoris" value="/favorites" icon={<FavoriteIcon />} />
      </BottomNavigation>
    </Paper>
  );
}
