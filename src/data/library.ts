import AlbumIcon from '@mui/icons-material/Album';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import CampaignIcon from '@mui/icons-material/Campaign';
import PianoIcon from '@mui/icons-material/Piano';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import { media, visual } from './images';
import type { Album, Artist, Collection, Decade, RegionFeature, Song, StyleFeature } from '../types/content';

export const songs: Song[] = [
  {
    id: 'hymne-amour',
    title: "L'Hymne a l'amour",
    artist: 'Edith Piaf',
    album: 'Chansons parisiennes',
    author: 'Edith Piaf',
    composer: 'Marguerite Monnot',
    year: 1950,
    duration: '3:27',
    style: 'Chanson realiste',
    story: 'Un monument sentimental, pense comme une lettre intime devenue patrimoine populaire.',
    context: 'La chanson installe une dramaturgie intime : voix au premier plan, orchestre enveloppant et declaration presque cinematographique.',
    anecdotes: ['Souvent interpretee comme une chanson de scene autant que de disque.', 'Son imaginaire visuel se prete aux archives de music-hall et aux portraits en clair-obscur.'],
    covers: ['Johnny Hallyday', 'Celine Dion', 'Josh Groban'],
    charts: ['Standard international', 'Reprises regulieres en television', 'Presence constante dans les anthologies'],
    listeningLinks: ['Spotify', 'Deezer', 'Apple Music', 'YouTube Music'],
    cover: visual("Pochette lumineuse de L'Hymne a l'amour", 'album', '#ff4f7b', media.vinyl),
    gallery: [
      visual('Portrait de scene dramatique', 'stage', '#ff4f7b', media.stage),
      visual('Archive papier romantique', 'archive', '#ffb84d', media.archive),
      visual('Microphone de music-hall', 'object', '#20c7b5', media.microphone)
    ]
  },
  {
    id: 'ne-me-quitte-pas',
    title: 'Ne me quitte pas',
    artist: 'Jacques Brel',
    album: 'La valse des mots',
    author: 'Jacques Brel',
    composer: 'Jacques Brel / Gerard Jouannest',
    year: 1959,
    duration: '3:49',
    style: 'Chanson theatrale',
    story: 'Une chanson d’abandon et de theatre interieur, souvent reprise pour sa tension dramatique.',
    context: 'Le morceau fonctionne comme une scene nue : peu d’images, mais une intensite de geste et de diction qui appelle la video et la photographie de concert.',
    anecdotes: ['La chanson est devenue un exercice d’interpretation pour plusieurs generations.', 'Elle montre comment une chanson peut etre un monologue dramatique.'],
    covers: ['Nina Simone', 'Sting', 'Juliette Greco'],
    charts: ['Classique de repertoire', 'Nombreuses adaptations internationales', 'Titre central des anthologies Brel'],
    listeningLinks: ['Spotify', 'Deezer', 'Apple Music', 'YouTube Music'],
    cover: visual('Microphone sous lumiere chaude', 'stage', '#ffb84d', media.microphone),
    gallery: [
      visual('Salle rouge de theatre', 'poster', '#ef476f', media.theatre),
      visual('Piano de repetition', 'object', '#ff7a59', media.studio),
      visual('Archives de presse de concert', 'archive', '#ffd166', media.archive)
    ]
  },
  {
    id: 'la-boheme',
    title: 'La Boheme',
    artist: 'Charles Aznavour',
    album: 'Montmartre memoire',
    author: 'Jacques Plante',
    composer: 'Charles Aznavour',
    year: 1965,
    duration: '4:05',
    style: 'Chanson narrative',
    story: 'Une carte postale de Montmartre, de jeunesse artistique et de souvenirs enjolives.',
    context: 'La chanson associe Paris, peinture, jeunesse et nostalgie : une entree ideale pour meler cartes, affiches, photographies et objets d’atelier.',
    anecdotes: ['Le morceau a contribue a figer un imaginaire populaire de Montmartre.', 'Il permet une lecture geographique autant que musicale.'],
    covers: ['Kendji Girac', 'Garou', 'Patrick Bruel'],
    charts: ['Succes durable en francophonie', 'Titre patrimonial', 'Reprises televisuelles frequentes'],
    listeningLinks: ['Spotify', 'Deezer', 'Apple Music', 'YouTube Music'],
    cover: visual('Paris au crepuscule', 'poster', '#20c7b5', media.paris),
    gallery: [
      visual('Rue parisienne illustree', 'map', '#20c7b5', media.paris),
      visual('Affiche de cabaret', 'poster', '#ffb84d', media.theatre),
      visual('Vinyle de collection', 'album', '#1e172d', media.oldRecord)
    ]
  },
  {
    id: 'voyage-voyage',
    title: 'Voyage, voyage',
    artist: 'Desireless',
    album: 'Neons francais',
    author: 'Dominique Dubois',
    composer: 'Jean-Michel Rivat',
    year: 1986,
    duration: '4:26',
    style: 'Pop francaise',
    story: 'Synthes aeriennes, refrain mondial et imaginaire de depart permanent.',
    context: 'Une chanson qui appartient autant au son des annees 80 qu’a l’esthetique du clip : couleurs, neons, silhouettes et television musicale.',
    anecdotes: ['Le refrain a circule tres largement hors de France.', 'La chanson se prete a des collections sur les clips et la pop visuelle.'],
    covers: ['Kate Ryan', 'Soap&Skin', 'Gregorian'],
    charts: ['Succes europeen', 'Hit radio', 'Titre emblematique des annees 80'],
    listeningLinks: ['Spotify', 'Deezer', 'Apple Music', 'YouTube Music'],
    cover: visual('Scene pop coloree', 'stage', '#7c5cff', media.lights),
    gallery: [
      visual('Cassette pop vintage', 'object', '#7c5cff', media.cassette),
      visual('Projecteurs de clip', 'video', '#ff4f7b', media.lights),
      visual('Studio synthetiseur', 'archive', '#20c7b5', media.studio)
    ]
  }
];

export const albums: Album[] = [
  {
    id: 'rive-gauche',
    title: 'Rive gauche eternelle',
    artist: 'Compilation Chansonor',
    year: 1961,
    format: 'Vinyle',
    mood: 'Cabaret, texte, nuit parisienne',
    cover: visual('Vinyle noir sur fond colore', 'album', '#1e172d', media.oldRecord),
    gallery: [
      visual('Pochette vinyle rive gauche', 'album', '#1e172d', media.oldRecord),
      visual('Cabaret parisien', 'poster', '#8f2d56', media.theatre),
      visual('Archive de presse musicale', 'archive', '#ffb84d', media.archive)
    ],
    tracks: ['La Boheme', 'Les feuilles mortes', 'Le poinconneur', 'Amsterdam'],
    reviews: ['Une selection pensee comme une promenade nocturne.', 'La narration prime sur la virtuosite.'],
    reissues: ['Edition vinyle couleur', 'Remaster streaming', 'Livret archive numerise'],
    streaming: ['Spotify', 'Deezer', 'Apple Music'],
    commercialSuccess: 'Compilation patrimoniale de reference pour la chanson de texte.'
  },
  {
    id: 'pop-80',
    title: 'Neons francais',
    artist: 'Compilation Chansonor',
    year: 1986,
    format: 'Cassette',
    mood: 'Synthes, clips, television',
    cover: visual('Cassette audio vintage', 'album', '#ff7a59', media.cassette),
    gallery: [
      visual('Cassette audio vintage', 'album', '#ff7a59', media.cassette),
      visual('Lumiere de plateau TV', 'video', '#7c5cff', media.lights),
      visual('Foule pop en concert', 'stage', '#20c7b5', media.crowd)
    ],
    tracks: ['Voyage, voyage', 'Ella elle l’a', 'Nuit de folie', 'Les demons de minuit'],
    reviews: ['Une capsule visuelle de la pop FM.', 'La pochette doit evoquer clips, neons et television.'],
    reissues: ['Cassette collector', 'Playlist augmentee', 'Edition clip remasterise'],
    streaming: ['Spotify', 'Deezer', 'YouTube Music'],
    commercialSuccess: 'Selection concue pour les decouvertes rapides et les playlists generationnelles.'
  },
  {
    id: 'scene-live',
    title: 'Grandes scenes',
    artist: 'Anthologie live',
    year: 1998,
    format: 'CD',
    mood: 'Concerts, foules, refrains',
    cover: visual('Foule de concert sous projecteurs', 'stage', '#20c7b5', media.crowd),
    gallery: [
      visual('Foule de concert sous projecteurs', 'stage', '#20c7b5', media.crowd),
      visual('Microphone live', 'object', '#ff4f7b', media.microphone),
      visual('Affiche de tournee', 'poster', '#ffb84d', media.poster)
    ],
    tracks: ['Quand la musique est bonne', 'Je te donne', 'Cargo de nuit'],
    reviews: ['Une porte d’entree vers les archives de scene.', 'Ideal pour relier artistes, salles et captations.'],
    reissues: ['CD remasterise', 'Edition video', 'Bonus Olympia'],
    streaming: ['Spotify', 'Deezer', 'Apple Music', 'YouTube Music'],
    commercialSuccess: 'Anthologie live pensee pour les fans de scenes et de refrains collectifs.'
  }
];

export const artists: Artist[] = [
  {
    id: 'edith-piaf',
    name: 'Edith Piaf',
    years: '1915-1963',
    region: 'Ile-de-France',
    styles: ['Chanson realiste', 'Music-hall'],
    tagline: 'La voix qui transforme la rue en theatre.',
    bio: 'Chansonor presente ici une fiche modele, pensee pour accueillir portraits HD, archives Gallica, affiches, manuscrits et extraits video autour d’une legende de la chanson.',
    hero: visual('Portrait artistique de chanteuse de music-hall', 'portrait', '#ff4f7b', media.portraitWarm),
    gallery: [
      visual('Affiche de music-hall', 'poster', '#ffb84d', media.theatre),
      visual('Microphone vintage', 'object', '#20c7b5', media.microphone),
      visual('Archive papier de chanson', 'archive', '#7c5cff', media.archive)
    ],
    albums,
    songs: [songs[0]],
    highlights: ['Olympia', 'Music-hall', 'Reprises internationales', 'Archives sonores'],
    collaborations: ['Marguerite Monnot', 'Charles Dumont', 'Yves Montand'],
    influences: ['Rue parisienne', 'Cabaret', 'Theatre populaire'],
    awards: ['Grand prix du disque', 'Hommages nationaux', 'Reeditions patrimoniales'],
    instruments: ['Voix', 'Orchestre', 'Accordeon'],
    label: 'Pathé / Columbia',
    quotes: ['Quand la voix devient une ville entiere.', 'Une interpretation doit laisser une trace physique.'],
    anecdotes: ['Ses chansons appellent naturellement portraits, affiches et archives manuscrites.', 'Le music-hall permet de relier scene, presse, disque et cinema.']
  },
  {
    id: 'jacques-brel',
    name: 'Jacques Brel',
    years: '1929-1978',
    region: 'Bruxelles / Paris',
    styles: ['Chanson theatrale', 'Texte'],
    tagline: 'Le mouvement, la sueur, la fureur et la tendresse.',
    bio: 'Une fiche concue pour croiser scenes, textes, cinema, cartes, collaborations et reprises contemporaines.',
    hero: visual('Scene dramatique au micro', 'stage', '#ffb84d', media.stage),
    gallery: [
      visual('Salle de spectacle rouge', 'poster', '#ef476f', media.theatre),
      visual('Guitare en studio', 'object', '#20c7b5', media.guitar),
      visual('Archives de presse', 'archive', '#ffd166', media.archive)
    ],
    albums: [albums[0], albums[2]],
    songs: [songs[1]],
    highlights: ['Olympia', 'Cinema', 'Amsterdam', 'Reprises mondiales'],
    collaborations: ['Gerard Jouannest', 'Francois Rauber', 'Barbara'],
    influences: ['Cabaret belge', 'Theatre', 'Chanson de texte'],
    awards: ['Prix Charles-Cros', 'Hommages internationaux'],
    instruments: ['Voix', 'Piano', 'Orchestre'],
    label: 'Philips / Barclay',
    quotes: ['La scene transforme le texte en image.', 'Chaque chanson avance comme une petite piece de theatre.'],
    anecdotes: ['Les photos de scene sont essentielles pour comprendre son intensite.', 'Ses chansons forment un graphe naturel de reprises et traductions.']
  },
  {
    id: 'francoise-hardy',
    name: 'Francoise Hardy',
    years: '1944-2024',
    region: 'Ile-de-France',
    styles: ['Yeye', 'Pop elegante'],
    tagline: 'Melancolie pop, silhouettes mode et refrains intemporels.',
    bio: 'Cette fiche met l’accent sur la photographie, la mode, les pochettes, les traductions et l’influence indie pop.',
    hero: visual('Portrait pop lumineux', 'portrait', '#7c5cff', media.portraitBlue),
    gallery: [
      visual('Studio analogique', 'archive', '#20c7b5', media.studio),
      visual('Vinyles colores', 'album', '#ff4f7b', media.vinyl),
      visual('Lumiere de scene pop', 'stage', '#ffd166', media.lights)
    ],
    albums: [albums[1]],
    songs: [songs[3]],
    highlights: ['Yeye', 'Mode', 'Pop internationale', 'Pochettes iconiques'],
    collaborations: ['Jacques Dutronc', 'Serge Gainsbourg', 'Michel Berger'],
    influences: ['Folk', 'Pop britannique', 'Cinema'],
    awards: ['Victoires d’honneur', 'Reeditions critiques'],
    instruments: ['Voix', 'Guitare', 'Arrangements pop'],
    label: 'Vogue / Warner',
    quotes: ['La melancolie peut etre lumineuse.', 'Une pochette peut devenir une silhouette.'],
    anecdotes: ['Son univers relie naturellement chanson, mode, photo et cinema.', 'Les editions internationales ouvrent un parcours par langues et pochettes.']
  }
];

export const collections: Collection[] = [
  { id: 'grandes-voix', title: 'Les grandes voix', subtitle: 'Puissance, grain, emotion', color: '#ff4f7b', cover: visual('Microphone et lumiere', 'stage', '#ff4f7b', media.microphone) },
  { id: 'annees-80', title: 'Les annees 80', subtitle: 'Neons, clips et refrains', color: '#7c5cff', cover: visual('Concert colore', 'stage', '#7c5cff', media.lights) },
  { id: 'chansons-amour', title: "Chansons d'amour", subtitle: 'Declarations et ruptures', color: '#ff7a59', cover: visual('Vinyle romantique', 'album', '#ff7a59', media.vinyl) },
  { id: 'engagees', title: 'Chansons engagees', subtitle: 'Textes, coleres, memoires', color: '#20c7b5', cover: visual('Affiche et archives', 'poster', '#20c7b5', media.archive) },
  { id: 'duos', title: 'Duos mythiques', subtitle: 'Deux voix, une histoire', color: '#ffd166', cover: visual('Scene partagee', 'stage', '#ffd166', media.crowd) }
];

export const decades: Decade[] = [
  { id: '1930', label: 'Annees 30', tone: 'Cabarets, TSF, affiches imprimees', color: '#8f2d56', image: visual('Theatre ancien', 'poster', '#8f2d56', media.theatre), artists: ['Mistinguett', 'Frehel', 'Tino Rossi'], events: ['Essor de la radio', 'Music-hall populaire'], objects: ['TSF', 'Affiche lithographiee', '78 tours'] },
  { id: '1960', label: 'Annees 60', tone: 'Yeye, television, jeunesse', color: '#20c7b5', image: visual('Studio et vinyles', 'album', '#20c7b5', media.studio), artists: ['France Gall', 'Francoise Hardy', 'Jacques Dutronc'], events: ['Explosion des magazines jeunes', 'Clips televises'], objects: ['45 tours', 'Juke-box', 'Mini-jupe'] },
  { id: '1980', label: 'Annees 80', tone: 'Synthes, clips, cassettes', color: '#7c5cff', image: visual('Cassette audio', 'object', '#7c5cff', media.cassette), artists: ['Mylene Farmer', 'Goldman', 'Desireless'], events: ['Age d’or du clip', 'FM et Top 50'], objects: ['Walkman', 'Synthesiseur', 'VHS'] },
  { id: '2000', label: 'Annees 2000', tone: 'Pop urbaine, MP3, festivals', color: '#ff7a59', image: visual('Foule de festival', 'stage', '#ff7a59', media.crowd), artists: ['Zazie', 'Benabar', 'Olivia Ruiz'], events: ['Streaming naissant', 'Festivals geants'], objects: ['MP3', 'MySpace', 'CD single'] }
];

export const regions: RegionFeature[] = [
  { id: 'idf', region: 'Ile-de-France', color: '#ff4f7b', image: visual('Paris illustre', 'map', '#ff4f7b', media.paris), artists: ['Edith Piaf', 'Serge Gainsbourg', 'Barbara'], festivals: ['Rock en Seine', 'Fnac Live'], traditions: ['Cabaret', 'Rive gauche', 'Music-hall'] },
  { id: 'bretagne', region: 'Bretagne', color: '#20c7b5', image: visual('Scene de festival', 'map', '#20c7b5', media.crowd), artists: ['Alan Stivell', 'Dan Ar Braz', 'Nolwenn Leroy'], festivals: ['Vieilles Charrues', 'Festival interceltique'], traditions: ['Celtique', 'Fest-noz', 'Harpe'] },
  { id: 'provence', region: 'Provence-Alpes-Cote d’Azur', color: '#ffb84d', image: visual('Lumiere de theatre', 'map', '#ffb84d', media.theatre), artists: ['Fernandel', 'Moussu T e lei Jovents'], festivals: ['Nice Jazz', 'Marsatac'], traditions: ['Operette marseillaise', 'Accents mediterraneens'] }
];

export const styles: StyleFeature[] = [
  { id: 'realiste', name: 'Chanson realiste', color: '#ff4f7b', icon: TheaterComedyIcon, banner: visual('Cabaret rouge', 'poster', '#ff4f7b', media.theatre), artists: ['Edith Piaf', 'Frehel', 'Damia'], anecdote: 'Des voix de rue, des destins intenses et une dramaturgie directe.' },
  { id: 'yeye', name: 'Yeye', color: '#ffd166', icon: GraphicEqIcon, banner: visual('Vinyles pop', 'album', '#ffd166', media.vinyl), artists: ['France Gall', 'Sylvie Vartan', 'Francoise Hardy'], anecdote: 'La television, les magazines et le 45 tours deviennent des accelerateurs de style.' },
  { id: 'engagee', name: 'Chanson engagee', color: '#20c7b5', icon: CampaignIcon, banner: visual('Archives imprimees', 'archive', '#20c7b5', media.archive), artists: ['Renaud', 'Ferrat', 'Lavilliers'], anecdote: 'Chaque epoque y laisse ses coleres, ses slogans et ses refrains de rassemblement.' },
  { id: 'pop', name: 'Pop francaise', color: '#7c5cff', icon: AlbumIcon, banner: visual('Concert pop', 'stage', '#7c5cff', media.lights), artists: ['Mylene Farmer', 'Etienne Daho', 'Christine and the Queens'], anecdote: 'Des pochettes tres travaillees, des clips et des identites visuelles fortes.' },
  { id: 'texte', name: 'Chanson de texte', color: '#ff7a59', icon: PianoIcon, banner: visual('Piano studio', 'object', '#ff7a59', media.studio), artists: ['Brel', 'Brassens', 'Barbara'], anecdote: 'Le texte y garde le premier role, mais l’image de scene devient essentielle.' }
];

export const timeline = [
  { year: 1936, title: 'La chanson envahit la radio', image: visual('Radio et archives', 'archive', '#8f2d56', media.archive) },
  { year: 1955, title: 'Le 45 tours transforme les pochettes', image: visual('Vinyle de collection', 'album', '#ff4f7b', media.vinyl) },
  { year: 1962, title: 'Le yeye devient une culture visuelle', image: visual('Studio pop', 'stage', '#ffd166', media.studio) },
  { year: 1984, title: 'Le clip impose une nouvelle grammaire', image: visual('Projecteurs et fumee', 'video', '#7c5cff', media.lights) },
  { year: 2008, title: 'Le streaming ouvre les catalogues', image: visual('Foule connectee', 'stage', '#20c7b5', media.crowd) }
];
