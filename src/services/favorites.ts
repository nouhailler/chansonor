import { openDB } from 'idb';

const DB_NAME = 'chansonor-library';
const STORE = 'favorites';

const dbPromise = openDB(DB_NAME, 1, {
  upgrade(db) {
    db.createObjectStore(STORE, { keyPath: 'id' });
  }
});

export interface FavoriteItem {
  id: string;
  type: 'artist' | 'song' | 'album' | 'collection';
  title: string;
  image?: string;
  color: string;
}

export const favoritesStore = {
  async all(): Promise<FavoriteItem[]> {
    return (await dbPromise).getAll(STORE);
  },
  async toggle(item: FavoriteItem): Promise<boolean> {
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
