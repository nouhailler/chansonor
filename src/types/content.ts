import type { SvgIconComponent } from '@mui/icons-material';

export type MediaKind = 'portrait' | 'album' | 'poster' | 'stage' | 'archive' | 'map' | 'object' | 'video';

export interface VisualAsset {
  url?: string;
  alt: string;
  kind: MediaKind;
  color: string;
  credit?: string;
  source?: 'Wikimedia' | 'Gallica' | 'BnF' | 'Europeana' | 'Openverse' | 'MusicBrainz' | 'Discogs' | 'Last.fm' | 'TMDB' | 'YouTube' | 'Unsplash' | 'Pexels' | 'Pixabay' | 'Local';
}

export interface Artist {
  id: string;
  name: string;
  years: string;
  region: string;
  styles: string[];
  tagline: string;
  bio: string;
  hero: VisualAsset;
  gallery: VisualAsset[];
  albums: Album[];
  songs: Song[];
  highlights: string[];
  collaborations: string[];
  influences: string[];
  awards: string[];
  instruments: string[];
  label: string;
  quotes: string[];
  anecdotes: string[];
  chronology: string[];
  concerts: string[];
  singles: string[];
  internalLinks: string[];
}

export interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  author: string;
  composer: string;
  year: number;
  duration: string;
  style: string;
  story: string;
  context: string;
  anecdotes: string[];
  covers: string[];
  charts: string[];
  listeningLinks: string[];
  cover: VisualAsset;
  gallery: VisualAsset[];
}

export interface Album {
  id: string;
  title: string;
  artist: string;
  year: number;
  format: string;
  mood: string;
  cover: VisualAsset;
  gallery: VisualAsset[];
  tracks: string[];
  reviews: string[];
  reissues: string[];
  streaming: string[];
  commercialSuccess: string;
}

export interface Collection {
  id: string;
  title: string;
  subtitle: string;
  color: string;
  cover: VisualAsset;
}

export interface Decade {
  id: string;
  label: string;
  tone: string;
  color: string;
  image: VisualAsset;
  artists: string[];
  events: string[];
  objects: string[];
}

export interface RegionFeature {
  id: string;
  region: string;
  color: string;
  image: VisualAsset;
  artists: string[];
  festivals: string[];
  traditions: string[];
}

export interface StyleFeature {
  id: string;
  name: string;
  color: string;
  icon: SvgIconComponent;
  banner: VisualAsset;
  artists: string[];
  anecdote: string;
}
