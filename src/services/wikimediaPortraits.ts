import { useEffect, useMemo, useState } from 'react';
import type { Artist, VisualAsset } from '../types/content';

type PortraitArtist = Pick<Artist, 'id' | 'name' | 'hero'>;

type PortraitCache = Record<string, string | null>;

const CACHE_KEY = 'chansonor-wikimedia-portraits-v2';
const CHUNK_SIZE = 60;

const portraitAliases: Record<string, string[]> = {
  'claude-francois': ['Claude François'],
  'mylene-farmer': ['Mylène Farmer'],
  'veronique-sanson': ['Véronique Sanson'],
  'etienne-daho': ['Étienne Daho'],
  telephone: ['Téléphone'],
  benabar: ['Bénabar'],
  'julien-dore': ['Julien Doré'],
  'maitre-gims': ['Maître Gims', 'Gims'],
  angele: ['Angèle'],
  gregoire: ['Grégoire'],
  'gilbert-becaud': ['Gilbert Bécaud'],
  'celine-dion': ['Céline Dion'],
  frehel: ['Fréhel'],
  'helene-segara': ['Hélène Ségara'],
  alizee: ['Alizée'],
  'felix-leclerc': ['Félix Leclerc'],
  'gerard-lenorman': ['Gérard Lenorman'],
  'rika-zarai': ['Rika Zaraï'],
  'guy-beart': ['Guy Béart'],
  'therapie-taxi': ['Thérapie Taxi'],
  herve: ['Hervé'],
  'aloise-sauvage': ['Aloïse Sauvage'],
  ntm: ['Suprême NTM', 'Supreme NTM'],
  'rita-mitsouko': ['Les Rita Mitsouko'],
  'christine-and-the-queens': ['Rahim Redcar', 'Héloïse Letissier'],
  'leo-ferre': ['Léo Ferré'],
  'juliette-greco': ['Juliette Gréco'],
  'bigflo-oli': ['Bigflo & Oli'],
  'coeur-de-pirate': ['Coeur de pirate', 'Béatrice Martin'],
  m: ['Matthieu Chedid', '-M-'],
  'lous-and-the-yakuza': ['Lous and the Yakuza', 'Marie-Pierra Kakoma'],
  'jokair': ["Jok'Air"],
  'heuss-lenfoire': ["Heuss l'Enfoiré", 'Heuss l’Enfoiré'],
  'imen-es': ['Imen ES']
};

const portraitOverrides: Record<string, string> = {
  'jean-jacques-goldman': 'https://commons.wikimedia.org/wiki/Special:FilePath/Jean-Jacques%20Goldman%20-%20may%202002.jpg',
  ntm: 'https://commons.wikimedia.org/wiki/Special:FilePath/Supreme%20NTM%20festivalbeauregard%20jbquentin2019.jpg',
  'rita-mitsouko': 'https://commons.wikimedia.org/wiki/Special:FilePath/Les%20Rita%20Mitsouko%20f7682607.jpg',
  'christine-and-the-queens': 'https://commons.wikimedia.org/wiki/Special:FilePath/Primavera19%20-48%20(48986309307)%20(cropped).png',
  'leo-ferre': 'https://commons.wikimedia.org/wiki/Special:FilePath/LeoFerre-Rome-1972.png',
  'juliette-greco': 'https://commons.wikimedia.org/wiki/Special:FilePath/Juliette%20Gr%C3%A9co%203.jpg',
  'bigflo-oli': 'https://commons.wikimedia.org/wiki/Special:FilePath/P2N2019BigfloOli%2016%20(cropped).jpg',
  'stephan-eicher': 'https://commons.wikimedia.org/wiki/Special:FilePath/2021%20Stephan%20Eicher%20(cropped).jpg',
  'coeur-de-pirate': 'https://commons.wikimedia.org/wiki/Special:FilePath/Festival%20des%20Vieilles%20Charrues%202018%20-%20C%C5%93ur%20de%20pirate%20-%20006.jpg',
  m: 'https://commons.wikimedia.org/wiki/Special:FilePath/Festival%20des%20Vieilles%20Charrues%202022%20-%20-M-%20-%20009.jpg'
};

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

async function fetchPortraits(artists: PortraitArtist[]) {
  const labelToArtistName = new Map<string, string>();
  for (const artist of artists) {
    for (const label of [artist.name, ...(portraitAliases[artist.id] ?? [])]) {
      labelToArtistName.set(label, artist.name);
    }
  }
  const names = [...labelToArtistName.keys()];
  const portraits: Record<string, string> = {};
  for (let index = 0; index < names.length; index += CHUNK_SIZE) {
    const chunk = names.slice(index, index + CHUNK_SIZE);
    const chunkPortraits = await fetchPortraitChunk(chunk);
    for (const [label, url] of Object.entries(chunkPortraits)) {
      const artistName = labelToArtistName.get(label);
      if (artistName && !portraits[artistName]) {
        portraits[artistName] = url;
      }
    }
  }
  return portraits;
}

export function useWikimediaArtistPortraits(artists: PortraitArtist[]) {
  const [cache, setCache] = useState<PortraitCache>(() => readCache());
  const names = useMemo(() => artists.map((artist) => artist.name), [artists]);
  const cacheKey = names.join('|');

  useEffect(() => {
    let cancelled = false;
    const currentCache = readCache();
    const missingArtists = artists.filter((artist) => !(artist.name in currentCache) && !portraitOverrides[artist.id]);
    const missing = missingArtists.map((artist) => artist.name);
    if (missing.length === 0) {
      setCache(currentCache);
      return;
    }

    void fetchPortraits(missingArtists).then((portraits) => {
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
      const url = portraitOverrides[artist.id] ?? cache[artist.name];
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
