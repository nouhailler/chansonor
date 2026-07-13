# Contexte Chansonor

## Vision produit

Chansonor n’est pas un simple catalogue de chanteurs. Le produit vise une encyclopedie interactive de la chanson francaise, moderne, coloree et tres illustree, destinee en priorite a un public de 15 a 35 ans.

L’experience doit evoquer Spotify, Deezer, Netflix, Pinterest et Google Arts & Culture : navigation fluide, cartes visuelles, rails horizontaux, images fortes, recherche rapide et parcours de decouverte.

## Principes UX/UI

- Aucun ecran ne doit paraitre vide.
- Chaque liste doit afficher des miniatures.
- Chaque fiche doit proposer plusieurs images.
- Chaque categorie doit posseder une illustration.
- Les actions importantes doivent etre accompagnees d’icones.
- Les animations doivent rester discretes, rapides et nombreuses.
- Le texte seul doit rester exceptionnel.
- Les placeholders doivent etre beaux et coherents lorsqu’une image manque.

## Direction technique

Le projet est une PWA React/TypeScript construite avec Vite.

Dependances principales :

- Material UI pour le systeme de composants.
- Framer Motion pour les transitions et micro-interactions.
- React Router pour la navigation.
- IndexedDB pour les favoris locaux.
- Service worker et manifest pour l’installation mobile.

## Modele media

Le type `VisualAsset` centralise les informations necessaires pour brancher des sources externes :

- URL image.
- Texte alternatif.
- Type de media.
- Couleur dominante.
- Credit.
- Source.

Le composant `Visual` gere :

- lazy loading ;
- tailles responsives via `srcSet` ;
- skeleton de chargement ;
- fallback SVG genere automatiquement ;
- ratio et coins adaptes aux cartes.

## Donnees actuelles

Les donnees incluses sont des donnees de demonstration editoriales permettant de montrer l’experience :

- artistes ;
- chansons ;
- albums ;
- collections ;
- decennies ;
- regions ;
- styles ;
- timeline.

Elles sont centralisees dans `src/data/library.ts` et devront etre remplacees ou completees par une API ou un pipeline de contenu.

## Prochaines extensions naturelles

- Connecteurs Wikimedia Commons, Gallica, Europeana et MusicBrainz.
- Visionneuse plein ecran avec zoom et diaporama.
- Cache images avance.
- Pages dediees chansons et albums.
- Carte de France interactive vectorielle.
- Timeline filtrable par style, artiste, region et decennie.
- Collections editoriales beaucoup plus nombreuses.
- Code splitting par route pour reduire le bundle initial.
