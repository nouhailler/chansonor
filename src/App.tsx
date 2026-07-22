import { Box, CircularProgress, CssBaseline, ThemeProvider } from '@mui/material';
import { lazy, Suspense, useMemo, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useParams } from 'react-router-dom';
import { AppShell } from './components/AppShell';
import { buildTheme } from './theme';

const HomePage = lazy(() => import('./pages/HomePage').then((module) => ({ default: module.HomePage })));
const ArtistsPage = lazy(() => import('./pages/ArtistsPage').then((module) => ({ default: module.ArtistsPage })));
const ArtistDetailPage = lazy(() => import('./pages/ArtistsPage').then((module) => ({ default: module.ArtistDetailPage })));
const SongsPage = lazy(() => import('./pages/SongsPage').then((module) => ({ default: module.SongsPage })));
const SongDetailPage = lazy(() => import('./pages/SongsPage').then((module) => ({ default: module.SongDetailPage })));
const AlbumsPage = lazy(() => import('./pages/AlbumsPage').then((module) => ({ default: module.AlbumsPage })));
const AlbumDetailPage = lazy(() => import('./pages/AlbumsPage').then((module) => ({ default: module.AlbumDetailPage })));
const GalleryPage = lazy(() => import('./pages/GalleryPage').then((module) => ({ default: module.GalleryPage })));
const TimelinePage = lazy(() => import('./pages/TimelinePage').then((module) => ({ default: module.TimelinePage })));
const ExplorePage = lazy(() => import('./pages/ExplorePage').then((module) => ({ default: module.ExplorePage })));
const SearchPage = lazy(() => import('./pages/SearchPage').then((module) => ({ default: module.SearchPage })));
const FavoritesPage = lazy(() => import('./pages/FavoritesPage').then((module) => ({ default: module.FavoritesPage })));
const QuizPage = lazy(() => import('./pages/QuizPage').then((module) => ({ default: module.QuizPage })));

function RouteFallback() {
  return (
    <Box sx={{ minHeight: '60vh', display: 'grid', placeItems: 'center' }}>
      <CircularProgress />
    </Box>
  );
}

function ArtistRoute() {
  const { id } = useParams();
  return <ArtistDetailPage id={id} />;
}

function SongRoute() {
  const { id } = useParams();
  return <SongDetailPage id={id} />;
}

function AlbumRoute() {
  const { id } = useParams();
  return <AlbumDetailPage id={id} />;
}

export function App() {
  const [mode, setMode] = useState<'light' | 'dark'>(() => (localStorage.getItem('chansonor-theme') as 'light' | 'dark') || 'light');
  const theme = useMemo(() => buildTheme(mode), [mode]);

  const toggleMode = () => {
    setMode((current) => {
      const next = current === 'light' ? 'dark' : 'light';
      localStorage.setItem('chansonor-theme', next);
      return next;
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route element={<AppShell mode={mode} onToggleMode={toggleMode} />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/artists" element={<ArtistsPage />} />
              <Route path="/artists/:id" element={<ArtistRoute />} />
              <Route path="/songs" element={<SongsPage />} />
              <Route path="/songs/:id" element={<SongRoute />} />
              <Route path="/albums" element={<AlbumsPage />} />
              <Route path="/albums/:id" element={<AlbumRoute />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/timeline" element={<TimelinePage />} />
              <Route path="/explore" element={<ExplorePage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/favorites" element={<FavoritesPage />} />
              <Route path="/quiz" element={<QuizPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
}
