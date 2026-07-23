# Contexte Chansonor

## Etat de reprise - 2026-07-23

Session technique realisee :

- Ajout d’un mode demo activable par `?demo=decouverte` ou depuis les reglages.
- Creation de `src/demo/engine.ts`, `src/demo/DemoMode.tsx`, `src/demo/session.ts` et du scenario declaratif `src/demo/scenarios/discovery.ts`.
- Types d’etapes demo couverts : `navigate`, `click`, `type`, `wait`, `highlight`, `narrate`.
- Ciblage demo via `data-demo-id`, curseur virtuel, surbrillance, narration, controles play/pause/etape suivante/vitesse/quitter et sortie via Echap.
- Seed de demo isole en `sessionStorage`; le store IndexedDB reel des favoris n’est pas modifie pendant la demo.
- Respect de `prefers-reduced-motion` dans les animations du mode demo.
- Optimisation du chargement mobile : l’accueil ne bloque plus sur la bibliotheque complete.
- Decoupage des donnees de liste dans `src/data/artists.ts`, `src/data/songs.ts`, `src/data/albums.ts`, `src/data/timeline.ts`, `src/data/exploreData.ts`.
- Ajout de `src/data/summaries.ts`, `src/data/loadLibrary.ts` et `src/data/details.ts`.
- Ancienne bibliotheque complete de 1,9 Mo deplacee vers `src/data/fullLibrary.ts`.
- `src/data/library.ts` est maintenant une facade legere de compatibilite.
- Les pages de liste, recherche, accueil, favoris, quiz, explore et timeline chargent des resumes legers.
- Les pages detail artiste/chanson/album et la galerie chargent les fiches completes dynamiquement avec skeletons.
- Service worker mis a jour en cache v2 avec navigation network-first et assets cache-first.
- Dernieres validations : `npm test` OK, `npm run build` OK.

Etat de performance observe au build :

- `HomePage` : environ 12 Ko.
- `timeline` : environ 1,2 Ko.
- `exploreData` : environ 10 Ko.
- `albums` : environ 164 Ko.
- `artists` : environ 216 Ko.
- `songs` : environ 398 Ko.
- `fullLibrary` : environ 1,75 Mo, reserve aux fiches completes et a la galerie.

Prochaine etape recommandee :

- Continuer par **Priorite 2 - pack chansons long terme 016**.
- Si la performance mobile reste limitee, remplacer les gros fichiers de resumes statiques par des assets JSON pagines ou un index par initiale/style/decennie.
- Ajouter des tests dedies au mode demo et aux loaders de donnees.

## Etat de reprise - 2026-07-22

Dernier pack realise localement : Pack long terme chansons 015 - Priorite 2.

Dernier commit pousse avant cette session de documentation : `27c9f90 Add song packs and improve mobile loading`.

Derniers commits techniques pousses apres le pack 019 :

- `1f23e80 Add Netlify SPA redirect`.
- `42ccc00 Load real artist portraits from Wikimedia`.
- `62f943e Improve Wikimedia artist portrait coverage`.
- `27c9f90 Add song packs and improve mobile loading`.

Etat du depot au moment de la mise a jour du 2026-07-22 :

- Branche : `main`.
- Depot distant : `origin/main` (`https://github.com/nouhailler/chansonor.git`).
- Etat Git : packs chansons long terme `lt007` a `lt015` ajoutes localement, documentation synchronisee, commit et push demandes.
- Derniere validation complete : `npm test`, `npm run build`, controle des compteurs `lt001` a `lt015`.
- Audit npm : non relance sur cette session.
- Controle identifiants : compteurs long terme conformes.
- Routes Netlify : `public/_redirects` redirige `/*` vers `/index.html` pour les routes React.
- Portraits artistes : chargement Wikimedia/Wikidata avec cache navigateur v2, variantes de noms et overrides verifies.
- Couverture portraits reels : Wikimedia/Wikidata actif avec fallback visuel local.

Compteurs actuels apres le pack chansons 015 :

- Artistes : 577 / 500.
- Chansons : 870 / 5000.
- Albums : 397 / 1500.
- Collections : 5.
- Packs chansons long terme : 266 chansons tracables de `lt001` a `lt015`.
- Illustrations : plus de 5000 references visuelles dans les donnees.
- Photos : couverture via assets locaux, placeholders et Wikimedia/Wikidata.
- Pochettes : nombreuses pochettes structurees dans les fiches chansons et albums.
- Affiches : galeries enrichies sur artistes, chansons et albums.
- Partitions : 0.
- Anecdotes : plusieurs milliers d'entrees dans les fiches artistes, chansons et albums.
- Quiz : 1.
- Articles : 0.
- Evenements historiques : 5.

Dernier pack realise :

- Pack long terme chansons 015 - Priorite 2.
- 10 nouvelles chansons contemporaines ajoutees.
- Cumul long terme chansons porte a 266 titres tracables.
- Axes enrichis : pop gitane, duo pop francophone, pop rap, chanson familiale, ballades contemporaines et variete urbaine.

Prochaine etape obligatoire :

- Reprendre par **Priorite 2 - pack chansons long terme 016**.
- Objectif immediat : passer a **286 chansons tracables** (`lt001` a `lt016`), puis poursuivre vers **500 chansons majeures**.
- Continuer a verifier les doublons avant creation.
- Enrichir les fiches existantes si l’artiste, la chanson ou l’album existe deja.
- Mettre a jour `README.md`, `CONTEXT.md`, `ROADMAP.md` et les fichiers de suivi utiles.
- Valider avec `npm test`, `npm run build`, `git diff --check`, controle des identifiants, puis commit et push.

## Vision produit

Chansonor n’est pas un simple catalogue de chanteurs. Le produit vise la plus belle encyclopedie interactive de la chanson francaise : moderne, coloree, fluide, tres illustree et destinee en priorite a un public de 15 a 35 ans.

L’experience doit evoquer Spotify, Deezer, Netflix, Pinterest, TikTok et Google Arts & Culture : navigation rapide, cartes visuelles, images fortes, recherche instantanee, parcours de decouverte et ecrans qui donnent envie d’etre explores et partages.

## Regle prioritaire

Consacrer 80 % de l’effort a la qualite de l’experience utilisateur et de l’interface avant d’ajouter des fonctionnalites secondaires.

Une fonctionnalite incomplete mais elegante, fluide et abondamment illustree est preferable a une fonctionnalite exhaustive mais austere. Chaque nouvelle fonctionnalite doit etre concue comme une experience visuelle immersive.

## Objectif final de contenu

- 500 artistes.
- 5000 chansons.
- 1500 albums.
- 1000 illustrations minimum, puis plusieurs milliers de photos, pochettes, affiches, partitions et videos referencees.
- Plusieurs milliers d’anecdotes.
- Plusieurs centaines de collections.
- Plusieurs milliers d’evenements historiques.

Ces nombres sont des objectifs finaux. Chaque session doit augmenter significativement la base, sans jamais considerer le projet comme termine.

## Regle de creation des fiches

Ne jamais recreer une fiche existante.

Avant d’ajouter un artiste, une chanson ou un album :

- verifier s’il existe deja ;
- s’il existe, l’enrichir avec images, anecdotes, references et liens internes ;
- sinon, creer une nouvelle fiche complete ;
- mettre a jour la recherche, les liens internes, les compteurs et les fichiers de suivi.

## Travail par packs

Le travail doit etre organise par lots coherents. Exemple cible :

- 100 nouveaux artistes ;
- 300 nouvelles chansons ;
- 100 nouveaux albums ;
- 500 nouvelles illustrations ;
- 200 nouvelles anecdotes ;
- 50 nouvelles photos historiques ;
- 20 nouvelles collections.

Les premiers packs peuvent etre plus petits pour consolider l’architecture, mais ils doivent toujours augmenter significativement le contenu et preparer le pack suivant.

## Ordre de developpement imperatif

1. Interface graphique, navigation et design.
2. Ecran d’accueil spectaculaire.
3. Fiches artistes.
4. Fiches chansons.
5. Fiches albums.
6. Recherche.
7. Galerie d’images.
8. Favoris.
9. Frise chronologique.
10. Styles musicaux.
11. Decouverte intelligente.
12. Classements.
13. Encyclopedie.
14. Anecdotes.
15. Concerts.
16. Cinema.
17. Television.
18. Patrimoine.
19. Quiz.
20. Defis.
21. Radio decouverte.
22. Carte de France.
23. Statistiques.
24. Videotheque.
25. Liens d’ecoute.

## Priorite 1 - Le coeur de l’application

Sans ces fonctionnalites, Chansonor n’a pas d’identite. Elles doivent etre realisees en premier avec un niveau de finition tres eleve.

### Accueil - 5 etoiles

- Hero Banner illustre.
- Chanson du jour.
- Artiste du jour.
- Anniversaire d’un artiste.
- Bloc “Il y a X annees aujourd’hui...”.
- Decouverte aleatoire.
- Citation d’un chanteur.
- Derniers artistes ajoutes.
- Derniers albums.
- Dernieres chansons.
- Carrousels illustres.
- Sections entierement illustrees.

### Artistes - 5 etoiles

La fonctionnalite principale.

Chaque artiste doit posseder une fiche tres riche :

- Portrait HD.
- Galerie photo.
- Biographie.
- Chronologie.
- Discographie.
- Albums.
- Singles.
- Style musical.
- Collaborations.
- Influence.
- Instruments.
- Maison de disque.
- Citations.
- Anecdotes.

Toutes les listes liees aux artistes doivent etre illustrees.

### Chansons - 5 etoiles

Deuxieme fonctionnalite principale.

Chaque chanson doit posseder :

- Pochette.
- Album.
- Auteur.
- Compositeur.
- Annee.
- Duree.
- Histoire.
- Contexte.
- Anecdotes.
- Reprises.
- Classements.
- Liens d’ecoute.

### Albums - 5 etoiles

Chaque album doit posseder :

- Grande couverture.
- Galerie.
- Toutes les pistes.
- Critiques.
- Reeditions.
- Streaming.
- Succes commercial.

### Recherche - 5 etoiles

Recherche instantanee sur :

- artistes ;
- chansons ;
- albums.

Les resultats doivent afficher des miniatures partout.

### Favoris - 5 etoiles

Les favoris doivent couvrir :

- artistes ;
- chansons ;
- albums.

La bibliotheque personnelle doit rester visuelle meme lorsqu’elle contient peu d’elements.

### Galerie - 5 etoiles

Fonctionnalite tres importante.

La galerie doit devenir une immense galerie illustree avec :

- portraits ;
- pochettes ;
- affiches ;
- concerts ;
- autographes.

## Priorite 2 - Decouverte

Cette priorite transforme l’application en outil d’exploration.

### Frise chronologique - 4 etoiles

Frise de 1900 a aujourd’hui, couvrant :

- sorties ;
- deces ;
- naissances ;
- festivals ;
- emissions TV.

### Styles musicaux - 4 etoiles

Navigation par style.

Chaque style doit posseder :

- banniere ;
- illustration ;
- artistes ;
- albums ;
- chansons.

### Decouverte - 4 etoiles

Suggestions intelligentes :

- “Vous aimez...” ;
- “Decouvrez...” ;
- recommandations par artistes, chansons, styles, epoques et ambiances.

### Classements - 4 etoiles

Classements des contenus les plus :

- vendus ;
- populaires ;
- recompenses ;
- diffuses.

### Graphe des influences - 4 etoiles

Carte interactive reliant :

- collaborations ;
- inspirations ;
- reprises.

## Priorite 3 - Contenus culturels

### Encyclopedie - 4 etoiles

Articles tres illustres sur les mouvements, les epoques, les lieux, les maisons de disque, les emissions et les evenements importants.

### Anecdotes - 4 etoiles

Des milliers d’anecdotes courtes, visuelles, partageables et reliees aux artistes, chansons, albums, lieux et dates.

### Concerts - 4 etoiles

Pages dediees aux grandes scenes et salles :

- Olympia ;
- Bercy ;
- Zenith ;
- festivals ;
- tournees marquantes.

### Cinema - 4 etoiles

Inventorier les chansons utilisees dans les films, avec affiches, extraits, contexte et liens vers les oeuvres.

### Television - 4 etoiles

Archives illustrees autour des emissions :

- Taratata ;
- Champs Elysees ;
- Star Academy ;
- varietes ;
- captations live.

### Patrimoine - 4 etoiles

Cartographier et illustrer :

- studios ;
- musees ;
- maisons de disque ;
- salles ;
- lieux de naissance ;
- archives.

## Priorite 4 - Divertissement

Cette partie fidelise les utilisateurs.

### Quiz - 4 etoiles

Modes de jeu :

- reconnaitre la pochette ;
- retrouver l’annee ;
- blind test ;
- completer les paroles.

### Defis - 4 etoiles

- Defi quotidien.
- Badges.
- Succes.
- Progression personnelle.

### Radio decouverte - 4 etoiles

Lecture aleatoire avec filtres :

- annees ;
- styles ;
- artistes.

## Priorite 5 - Fonctionnalites avancees

### Carte de France - 3 etoiles

Navigation geographique par region, ville, salle, festival et tradition musicale.

### Statistiques - 3 etoiles

Graphiques sur les epoques, styles, ventes, recompenses, collaborations, reprises et ecoutes.

### Videotheque - 3 etoiles

Bibliotheque video pour :

- concerts ;
- interviews ;
- documentaires ;
- emissions TV ;
- clips.

### Liens d’ecoute - 3 etoiles

Integrations et liens vers :

- Spotify ;
- Deezer ;
- Apple Music ;
- YouTube Music.

## Principes UX/UI permanents

- Aucun ecran ne doit paraitre vide.
- Chaque liste doit afficher des miniatures.
- Chaque fiche doit proposer plusieurs images.
- Chaque categorie doit posseder une illustration.
- Les actions importantes doivent etre accompagnees d’icones.
- Les animations doivent rester discretes, rapides et nombreuses.
- Le texte seul doit rester exceptionnel.
- Les placeholders doivent etre beaux et coherents lorsqu’une image manque.
- Les ecrans doivent etre riches mais lisibles, avec des hierarchies claires.
- L’application doit rester prioritairement optimisee pour Android et mobile.

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
