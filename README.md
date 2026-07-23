# Chansonor

![Chansonor app icon](public/icons/icon.svg)

**Chansonor** est une PWA React consacree a la chanson francaise. L’objectif est de proposer une encyclopedie interactive, visuelle et immersive, proche d’un magazine musical moderne ou d’une exposition numerique.

L’application met l’image au centre de l’experience : portraits, pochettes, affiches, archives, cartes, objets, scenes et placeholders illustres sont prevus pour eviter tout ecran vide.

## Etat actuel

- Session technique du 2026-07-23 : mode demo ajoute, chargement mobile optimise et bibliotheque editoriale decoupee en resumes legers + fiches completes chargees a la demande.
- Dernier pack de contenu traite : Pack long terme chansons 015.
- Prochaine session de contenu : Pack long terme chansons 016, avec objectif de passer a 286 chansons tracables (`lt001` a `lt016`).
- Contenus indexes : 577 artistes, 870 chansons, 397 albums, 5 collections.
- Donnees de liste decoupees dans `src/data/artists.ts`, `src/data/songs.ts`, `src/data/albums.ts`, `src/data/timeline.ts` et `src/data/exploreData.ts`.
- Fiches completes conservees dans `src/data/fullLibrary.ts` et chargees dynamiquement uniquement pour les pages detail et la galerie.
- Packs chansons long terme : 266 chansons tracables de `lt001` a `lt015`.
- Portraits reels : chargement Wikimedia/Wikidata avec fallback visuel local pour les fiches restantes.
- Deploiement Netlify : les routes React profondes sont prises en charge via `public/_redirects`.
- Etat de fin de session du 2026-07-22 : packs chansons `lt007` a `lt015` ajoutes localement, roadmap synchronisee, validations OK.

## Captures d’ecran

### Accueil immersif

![Accueil Chansonor](docs/screenshots/home.png)

### Fiche artiste

![Fiche artiste Chansonor](docs/screenshots/artist.png)

### Galerie

![Galerie Chansonor](docs/screenshots/gallery.png)

### Responsive mobile

![Vue mobile Chansonor](docs/screenshots/mobile.png)

## Fonctionnalites

- Hero visuel avec artiste, album, chanson, anniversaire et recherche.
- Sections illustrees : artistes, albums, chansons, collections, decennies et timeline.
- Fiches artistes riches : portrait HD, galerie, bio, discographie, chansons, carte, collaborations, influences et recompenses.
- Galerie type moodboard avec portraits, pochettes, affiches, objets et archives.
- Exploration par regions et styles musicaux.
- Recherche instantanee avec miniatures, types, styles et annees.
- Quiz graphique avec feedback anime.
- Favoris sauvegardes localement avec IndexedDB.
- Mode demo activable par `?demo=decouverte` ou depuis les reglages, avec curseur virtuel, surbrillance, narration, controles play/pause/vitesse/etape suivante/quitter et sortie via Echap.
- Donnees de demo isolees en session, sans ecriture dans le store de favoris reel.
- Mode clair / sombre.
- PWA avec manifest, icone d’application et service worker.
- Lazy loading des images, `srcSet` responsive et fallback SVG automatique.
- Portraits artistes reels charges depuis Wikimedia/Wikidata avec cache navigateur et fallback local.
- Chargement progressif des donnees : les listes utilisent des resumes legers, les fiches completes sont chargees au clic, et les chunks sont caches par le service worker.

## Stack

- React
- TypeScript
- Vite
- Material UI
- Framer Motion
- React Router
- IndexedDB via `idb`
- Service Worker
- Vitest + Testing Library

## Sources media prevues

Le modele de donnees `VisualAsset` prepare l’integration de grands fonds visuels :

- Wikimedia Commons
- Gallica / BnF
- Europeana
- Internet Archive
- Openverse
- MusicBrainz
- Discogs
- Last.fm
- TMDB
- YouTube thumbnails
- Unsplash
- Pixabay
- Pexels

Chaque media peut porter une source, un credit, une couleur dominante, un type et un texte alternatif.

## Installation

```bash
npm install
```

## Developpement

```bash
npm run dev
```

L’application est ensuite disponible par defaut sur :

```text
http://localhost:5173/
```

## Validation

```bash
npm run build
npm test
npm audit
```

Etat actuel :

- Build production : OK
- Tests : OK
- Audit npm : non relance sur la derniere session de packs chansons.

## Architecture

```text
src/
  components/   Composants UI reutilisables
  data/         Resumes editoriaux, fiches completes et references media
  demo/         Moteur de demonstration et scenarios declaratifs
  pages/        Ecrans routes
  services/     Persistance locale et portraits Wikimedia
  styles/       Styles globaux
  types/        Types TypeScript du domaine
public/
  icons/        Icone PWA
  sw.js         Service worker
  _redirects    Fallback Netlify vers index.html pour les routes React
docs/
  screenshots/ Captures README
```

## Chargement des donnees

Les pages de liste et la recherche n’importent pas les fiches completes. Elles s’appuient sur des resumes separes :

- `src/data/artists.ts`
- `src/data/songs.ts`
- `src/data/albums.ts`
- `src/data/timeline.ts`
- `src/data/exploreData.ts`

Les pages detail passent par `src/data/details.ts`, qui importe dynamiquement `src/data/fullLibrary.ts` seulement lorsque l’utilisateur ouvre une fiche artiste, chanson, album ou la galerie complete. Cette architecture evite de parser toute la bibliotheque au premier affichage mobile.

## Icône

L’icône de l’application est disponible ici :

![Icone Chansonor](public/icons/icon.svg)

Elle est declaree dans `public/manifest.webmanifest` pour l’installation PWA Android.
