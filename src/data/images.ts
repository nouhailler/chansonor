import type { MediaKind, VisualAsset } from '../types/content';

const unsplash = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=80`;

export const media = {
  hero: unsplash('photo-1493225457124-a3eb161ffa5f'),
  crowd: unsplash('photo-1501386761578-eac5c94b800a'),
  vinyl: unsplash('photo-1603048588665-791ca8aea617'),
  studio: unsplash('photo-1598488035139-bdbb2231ce04'),
  microphone: unsplash('photo-1516280440614-37939bbacd81'),
  theatre: unsplash('photo-1503095396549-807759245b35'),
  archive: unsplash('photo-1495020689067-958852a7765e'),
  cassette: unsplash('photo-1593078165899-c14f0fb8910f'),
  paris: unsplash('photo-1502602898657-3e91760cbb34'),
  stage: unsplash('photo-1521337581100-8ca9a73a5f79'),
  portraitWarm: unsplash('photo-1499952127939-9bbf5af6c51c'),
  portraitBlue: unsplash('photo-1517841905240-472988babdf9'),
  poster: unsplash('photo-1516280440614-37939bbacd81'),
  oldRecord: unsplash('photo-1526394931762-90052e97b376'),
  guitar: unsplash('photo-1510915361894-db8b60106cb1'),
  lights: unsplash('photo-1540039155733-5bb30b53aa14')
};

export const visual = (
  alt: string,
  kind: MediaKind,
  color: string,
  url?: string,
  source: VisualAsset['source'] = 'Unsplash'
): VisualAsset => ({ alt, kind, color, url, source });

export const sourceRegistry = [
  'Wikimedia Commons',
  'Gallica / BnF',
  'Europeana',
  'Internet Archive',
  'Openverse',
  'MusicBrainz',
  'Discogs',
  'Last.fm',
  'TMDB',
  'YouTube thumbnails',
  'Unsplash',
  'Pixabay',
  'Pexels'
];
