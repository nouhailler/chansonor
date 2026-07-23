import { openDB } from 'idb';
import { activateDemoSeed, readDemoSeed } from '../demo/session';

const DB_NAME = 'chansonor-library';
const STORE = 'favorites';

const dbPromise = openDB(DB_NAME, 1, {
  upgrade(db) {
    db.createObjectStore(STORE, { keyPath: 'id' });
  }
});

export interface FavoriteItem {
  id: string;
  type: 'artist' | 'song' | 'album';
  title: string;
  image?: string;
  color: string;
}

function readDemoFavorites(): FavoriteItem[] | undefined {
  const seed = readDemoSeed();
  const favorites = seed?.data?.favorites;
  if (!Array.isArray(favorites)) return seed ? [] : undefined;
  return favorites.filter((item): item is FavoriteItem => {
    if (!item || typeof item !== 'object') return false;
    const favorite = item as FavoriteItem;
    return typeof favorite.id === 'string' && typeof favorite.title === 'string' && typeof favorite.color === 'string';
  });
}

function writeDemoFavorites(items: FavoriteItem[]): void {
  const seed = readDemoSeed();
  if (!seed) return;
  activateDemoSeed({ ...seed, data: { ...seed.data, favorites: items } });
}

export const favoritesStore = {
  async all(): Promise<FavoriteItem[]> {
    const demoFavorites = readDemoFavorites();
    if (demoFavorites) return demoFavorites;
    return (await dbPromise).getAll(STORE);
  },
  async toggle(item: FavoriteItem): Promise<boolean> {
    const demoFavorites = readDemoFavorites();
    if (demoFavorites) {
      const exists = demoFavorites.some((favorite) => favorite.id === item.id);
      writeDemoFavorites(exists ? demoFavorites.filter((favorite) => favorite.id !== item.id) : [...demoFavorites, item]);
      return !exists;
    }

    const db = await dbPromise;
    const existing = await db.get(STORE, item.id);
    if (existing) {
      await db.delete(STORE, item.id);
      return false;
    }
    await db.put(STORE, item);
    return true;
  }
};
