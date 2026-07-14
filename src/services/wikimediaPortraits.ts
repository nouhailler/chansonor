import { useEffect, useMemo, useState } from 'react';
import type { Artist, VisualAsset } from '../types/content';

type PortraitCache = Record<string, string | null>;

const CACHE_KEY = 'chansonor-wikimedia-portraits-v1';
const CHUNK_SIZE = 60;

const musicOccupationIds = [
  'wd:Q177220', // singer
  'wd:Q2252262', // rapper
  'wd:Q639669', // musician
  'wd:Q36834', // composer
  'wd:Q488205', // singer-songwriter
  'wd:Q753110', // songwriter
  'wd:Q2405480' // voice actor / performer-adjacent for some Francophone entries
];

function readCache(): PortraitCache {
  try {
    return JSON.parse(localStorage.getItem(CACHE_KEY) || '{}') as PortraitCache;
  } catch {
    return {};
  }
}

function writeCache(cache: PortraitCache) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
  } catch {
    // Best effort cache only.
  }
}

function sparqlString(value: string) {
  return `"${value.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`;
}

function normalizeImageUrl(url: string) {
  return url.replace(/^http:\/\//, 'https://');
}

async function fetchPortraitChunk(names: string[]) {
  const values = names.flatMap((name) => [`${sparqlString(name)}@fr`, `${sparqlString(name)}@en`]).join(' ');
  const query = `
    SELECT ?name ?image WHERE {
      VALUES ?name { ${values} }
      ?item rdfs:label ?name;
            wdt:P18 ?image.
      {
        ?item wdt:P106/wdt:P279* ?occupation.
        VALUES ?occupation { ${musicOccupationIds.join(' ')} }
      }
      UNION
      {
        ?item wdt:P31/wdt:P279* wd:Q215380.
      }
    }
  `;
  const url = `https://query.wikidata.org/sparql?format=json&origin=*&query=${encodeURIComponent(query)}`;
  const response = await fetch(url, { headers: { Accept: 'application/sparql-results+json' } });
  if (!response.ok) return {};
  const payload = await response.json() as {
    results?: { bindings?: Array<{ name?: { value: string }; image?: { value: string } }> };
  };
  const portraits: Record<string, string> = {};
  for (const item of payload.results?.bindings ?? []) {
    if (item.name?.value && item.image?.value && !portraits[item.name.value]) {
      portraits[item.name.value] = normalizeImageUrl(item.image.value);
    }
  }
  return portraits;
}

async function fetchPortraits(names: string[]) {
  const portraits: Record<string, string> = {};
  for (let index = 0; index < names.length; index += CHUNK_SIZE) {
    const chunk = names.slice(index, index + CHUNK_SIZE);
    Object.assign(portraits, await fetchPortraitChunk(chunk));
  }
  return portraits;
}

export function useWikimediaArtistPortraits(artists: Artist[]) {
  const [cache, setCache] = useState<PortraitCache>(() => readCache());
  const names = useMemo(() => artists.map((artist) => artist.name), [artists]);
  const cacheKey = names.join('|');

  useEffect(() => {
    let cancelled = false;
    const currentCache = readCache();
    const missing = names.filter((name) => !(name in currentCache));
    if (missing.length === 0) {
      setCache(currentCache);
      return;
    }

    void fetchPortraits(missing).then((portraits) => {
      if (cancelled) return;
      const nextCache = { ...currentCache };
      for (const name of missing) {
        nextCache[name] = portraits[name] ?? null;
      }
      writeCache(nextCache);
      setCache(nextCache);
    }).catch(() => {
      if (!cancelled) setCache(currentCache);
    });

    return () => {
      cancelled = true;
    };
  }, [cacheKey]);

  return useMemo(() => {
    const portraits: Record<string, VisualAsset> = {};
    for (const artist of artists) {
      const url = cache[artist.name];
      if (url) {
        portraits[artist.id] = {
          ...artist.hero,
          url,
          kind: 'portrait',
          alt: `Portrait de ${artist.name}`,
          source: 'Wikimedia'
        };
      }
    }
    return portraits;
  }, [artists, cache]);
}
