import type { VisualAsset } from '../types/content';

export interface ArtistSummary {
  id: string;
  name: string;
  years: string;
  region: string;
  styles: string[];
  tagline: string;
  hero: VisualAsset;
}

export interface SongSummary {
  id: string;
  title: string;
  artist: string;
  album: string;
  author: string;
  year: number;
  duration: string;
  style: string;
  story: string;
  cover: VisualAsset;
}

export interface AlbumSummary {
  id: string;
  title: string;
  artist: string;
  year: number;
  format: string;
  mood: string;
  commercialSuccess: string;
  cover: VisualAsset;
  tracksCount: number;
}

export interface TimelineSummary {
  year: number;
  title: string;
  image: VisualAsset;
}
