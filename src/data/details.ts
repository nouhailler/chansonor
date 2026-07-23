import type { Album, Artist, Song } from '../types/content';

export async function loadArtistDetail(id?: string): Promise<Artist> {
  const { artists } = await import('./fullLibrary');
  return artists.find((artist) => artist.id === id) ?? artists[0];
}

export async function loadSongDetail(id?: string): Promise<Song> {
  const { songs } = await import('./fullLibrary');
  return songs.find((song) => song.id === id) ?? songs[0];
}

export async function loadAlbumDetail(id?: string): Promise<Album> {
  const { albums } = await import('./fullLibrary');
  return albums.find((album) => album.id === id) ?? albums[0];
}

export async function loadGalleryAssets() {
  const { artists, albums, songs, timeline } = await import('./fullLibrary');
  return [
    ...artists.flatMap((artist) => [artist.hero, ...artist.gallery]),
    ...albums.flatMap((album) => [album.cover, ...album.gallery]),
    ...songs.flatMap((song) => [song.cover, ...song.gallery]),
    ...timeline.map((event) => event.image)
  ];
}
