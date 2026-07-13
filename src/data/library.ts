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
    year: 1950,
    style: 'Chanson realiste',
    story: 'Un monument sentimental, pense comme une lettre intime devenue patrimoine populaire.',
    cover: visual("Pochette lumineuse de L'Hymne a l'amour", 'album', '#ff4f7b', media.vinyl)
  },
  {
    id: 'ne-me-quitte-pas',
    title: 'Ne me quitte pas',
    artist: 'Jacques Brel',
    year: 1959,
    style: 'Chanson theatrale',
    story: 'Une chanson d’abandon et de theatre interieur, souvent reprise pour sa tension dramatique.',
    cover: visual('Microphone sous lumiere chaude', 'stage', '#ffb84d', media.microphone)
  },
  {
    id: 'la-boheme',
    title: 'La Boheme',
    artist: 'Charles Aznavour',
    year: 1965,
    style: 'Chanson narrative',
    story: 'Une carte postale de Montmartre, de jeunesse artistique et de souvenirs enjolives.',
    cover: visual('Paris au crepuscule', 'poster', '#20c7b5', media.paris)
  },
  {
    id: 'voyage-voyage',
    title: 'Voyage, voyage',
    artist: 'Desireless',
    year: 1986,
    style: 'Pop francaise',
    story: 'Synthes aeriennes, refrain mondial et imaginaire de depart permanent.',
    cover: visual('Scene pop coloree', 'stage', '#7c5cff', media.lights)
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
    tracks: ['La Boheme', 'Les feuilles mortes', 'Le poinconneur', 'Amsterdam']
  },
  {
    id: 'pop-80',
    title: 'Neons francais',
    artist: 'Compilation Chansonor',
    year: 1986,
    format: 'Cassette',
    mood: 'Synthes, clips, television',
    cover: visual('Cassette audio vintage', 'album', '#ff7a59', media.cassette),
    tracks: ['Voyage, voyage', 'Ella elle l’a', 'Nuit de folie', 'Les demons de minuit']
  },
  {
    id: 'scene-live',
    title: 'Grandes scenes',
    artist: 'Anthologie live',
    year: 1998,
    format: 'CD',
    mood: 'Concerts, foules, refrains',
    cover: visual('Foule de concert sous projecteurs', 'stage', '#20c7b5', media.crowd),
    tracks: ['Quand la musique est bonne', 'Je te donne', 'Cargo de nuit']
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
    awards: ['Grand prix du disque', 'Hommages nationaux', 'Reeditions patrimoniales']
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
    awards: ['Prix Charles-Cros', 'Hommages internationaux']
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
    awards: ['Victoires d’honneur', 'Reeditions critiques']
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
