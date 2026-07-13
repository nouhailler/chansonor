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
}

export interface Song {
  id: string;
  title: string;
  artist: string;
  year: number;
  style: string;
  story: string;
  cover: VisualAsset;
}

export interface Album {
  id: string;
  title: string;
  artist: string;
  year: number;
  format: string;
  mood: string;
  cover: VisualAsset;
  tracks: string[];
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
