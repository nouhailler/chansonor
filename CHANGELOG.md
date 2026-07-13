# Changelog

Toutes les evolutions notables de Chansonor sont documentees ici.

## [0.1.0] - 2026-07-13

### Ajoute - Pack long terme 001

- Ajout du mode de pilotage long terme avec `PROJECT_STATUS.md` et `ROADMAP.md`.
- Ajout de 12 artistes majeurs : Barbara, Serge Gainsbourg, Georges Brassens, Claude Francois, Dalida, Johnny Hallyday, France Gall, Renaud, Jean-Jacques Goldman, Mylene Farmer, Alain Souchon et Veronique Sanson.
- Ajout de 12 chansons majeures liees aux nouvelles fiches artistes.
- Ajout de 5 albums structurants.
- Ajout de visuels, anecdotes, collaborations, influences, styles, labels, instruments et citations pour les nouvelles fiches artistes.
- Correction de la liaison album trop large sur la fiche Edith Piaf.

### Ajoute - Priorite 1

- Demarrage du chantier Priorite 1 avec pages dediees chansons et albums.
- Ajout des fiches chansons illustrees : pochette, album, auteur, compositeur, annee, duree, histoire, contexte, anecdotes, reprises, classements et liens d’ecoute.
- Ajout des fiches albums illustrees : grande couverture, galerie, pistes, critiques, reeditions, streaming et succes commercial.
- Renforcement des fiches artistes avec instruments, maison de disque, citations, anecdotes et ajout aux favoris.
- Navigation enrichie vers artistes, chansons, albums, recherche, galerie et favoris.
- Recherche reliee aux fiches detaillees artistes, chansons et albums.
- Favoris recentres sur les artistes, chansons et albums.
- Accueil renforce avec derniers albums, dernieres chansons, citation et capsule historique.
- Galerie enrichie avec les visuels associes aux chansons et albums.

### Ajoute

- Initialisation de l’application Chansonor avec React, TypeScript et Vite.
- Integration Material UI, Framer Motion et React Router.
- Ajout de la PWA : manifest, icone d’application et service worker.
- Theme clair / sombre avec palette coloree.
- Page d’accueil immersive avec hero, recherche, artiste du jour, album du jour, chanson du jour, anniversaire, categories, carrousels, playlist, timeline et sources media.
- Pages artistes et fiche artiste detaillee.
- Galerie illustree en grille/masonry.
- Timeline illustree.
- Exploration par regions et styles musicaux.
- Recherche instantanee avec miniatures.
- Page favoris avec persistance IndexedDB.
- Quiz visuel.
- Composant `Visual` avec lazy loading, skeleton, `srcSet` et fallback SVG automatique.
- Donnees de demonstration pour artistes, chansons, albums, collections, decennies, regions, styles et evenements.
- Tests Vitest / Testing Library.
- Documentation initiale : README, contexte projet et changelog.
- Captures d’ecran pour le README.

### Valide

- `npm run build`
- `npm test`
- `npm audit`
