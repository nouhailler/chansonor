import AlbumIcon from '@mui/icons-material/Album';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import CampaignIcon from '@mui/icons-material/Campaign';
import PianoIcon from '@mui/icons-material/Piano';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import type { Collection, Decade, RegionFeature, StyleFeature } from '../types/content';

export const collections: Collection[] = [
  {
    id: "grandes-voix",
    title: "Les grandes voix",
    subtitle: "Puissance, grain, emotion",
    color: "#ff4f7b",
    cover: {
      alt: "Microphone et lumiere",
      kind: "stage",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "annees-80",
    title: "Les annees 80",
    subtitle: "Neons, clips et refrains",
    color: "#7c5cff",
    cover: {
      alt: "Concert colore",
      kind: "stage",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "chansons-amour",
    title: "Chansons d'amour",
    subtitle: "Declarations et ruptures",
    color: "#ff7a59",
    cover: {
      alt: "Vinyle romantique",
      kind: "album",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "engagees",
    title: "Chansons engagees",
    subtitle: "Textes, coleres, memoires",
    color: "#20c7b5",
    cover: {
      alt: "Affiche et archives",
      kind: "poster",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "duos",
    title: "Duos mythiques",
    subtitle: "Deux voix, une histoire",
    color: "#ffd166",
    cover: {
      alt: "Scene partagee",
      kind: "stage",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  }
];

export const decades: Decade[] = [
  {
    id: "pre-1910",
    label: "Avant 1910",
    tone: "Cafe-concert, cabarets montmartrois, cylindres et partitions",
    color: "#1e172d",
    image: {
      alt: "Cabaret ancien et partitions",
      kind: "archive",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    artists: [
      "Aristide Bruant",
      "Thérésa",
      "Amiati",
      "Fursy",
      "Xavier Privas",
      "Emma Liebel",
      "Anna Thibaud",
      "Borel-Clerc"
    ],
    events: [
      "Age d’or du cafe-concert",
      "Cabarets montmartrois",
      "Premiers cylindres commerciaux"
    ],
    objects: [
      "Cylindre phonographique",
      "Partition illustree",
      "Affiche lithographiee"
    ]
  },
  {
    id: "1910",
    label: "Annees 10",
    tone: "Cafe-concert, cylindres, 78 tours et Belle Epoque tardive",
    color: "#20c7b5",
    image: {
      alt: "Cafe-concert et phonographe",
      kind: "archive",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1526394931762-90052e97b376?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    artists: [
      "Harry Fragson",
      "Polin",
      "Paulus",
      "Eugénie Buffet",
      "Yvette Guilbert",
      "Charlus",
      "Bérard",
      "Resca"
    ],
    events: [
      "Premiers catalogues phonographiques",
      "Cafe-concert avant-guerre",
      "Chansons de troupier et de diseuse"
    ],
    objects: [
      "Cylindre",
      "78 tours",
      "Affiche de cafe-concert"
    ]
  },
  {
    id: "1920",
    label: "Annees 20",
    tone: "Cafe-concert, 78 tours, revues et bals",
    color: "#7c5cff",
    image: {
      alt: "78 tours et cafe-concert",
      kind: "album",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1526394931762-90052e97b376?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    artists: [
      "Yvonne George",
      "Félix Mayol",
      "Dranem",
      "Georgel",
      "Gaston Ouvrard",
      "Marjal",
      "Fortugé",
      "Georgette Plana"
    ],
    events: [
      "Essor du disque 78 tours",
      "Revues parisiennes",
      "Cafe-concert et bals musette"
    ],
    objects: [
      "78 tours",
      "Affiche de revue",
      "Phonographe"
    ]
  },
  {
    id: "1930",
    label: "Annees 30",
    tone: "Cabarets, TSF, affiches imprimees",
    color: "#8f2d56",
    image: {
      alt: "Theatre ancien",
      kind: "poster",
      color: "#8f2d56",
      url: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    artists: [
      "Mistinguett",
      "Frehel",
      "Tino Rossi",
      "Berthe Sylva",
      "Lucienne Boyer",
      "Pills et Tabet",
      "Jean Tranchant",
      "Alibert"
    ],
    events: [
      "Essor de la radio",
      "Music-hall populaire"
    ],
    objects: [
      "TSF",
      "Affiche lithographiee",
      "78 tours"
    ]
  },
  {
    id: "1940",
    label: "Annees 40",
    tone: "Radio, 78 tours, Liberation et orchestres",
    color: "#ffb84d",
    image: {
      alt: "Radio et 78 tours",
      kind: "archive",
      color: "#ffb84d",
      url: "https://images.unsplash.com/photo-1526394931762-90052e97b376?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    artists: [
      "Maurice Chevalier",
      "Élyane Célis",
      "André Dassary",
      "Lys Gauty",
      "Marie Dubas",
      "Les Compagnons de la chanson"
    ],
    events: [
      "Chansons de guerre et d’attente",
      "Liberation en refrains",
      "Retour des music-halls"
    ],
    objects: [
      "78 tours",
      "TSF",
      "Partitions de cabaret"
    ]
  },
  {
    id: "1960",
    label: "Annees 60",
    tone: "Yeye, television, jeunesse",
    color: "#20c7b5",
    image: {
      alt: "Studio et vinyles",
      kind: "album",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    artists: [
      "France Gall",
      "Francoise Hardy",
      "Jacques Dutronc",
      "Antoine",
      "Petula Clark",
      "Hervé Vilard",
      "Annie Philippe"
    ],
    events: [
      "Explosion des magazines jeunes",
      "Clips televises"
    ],
    objects: [
      "45 tours",
      "Juke-box",
      "Mini-jupe"
    ]
  },
  {
    id: "1970",
    label: "Annees 70",
    tone: "Variete TV, disco, ballades et refrains radio",
    color: "#ff7a59",
    image: {
      alt: "Plateau variete seventies",
      kind: "stage",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    artists: [
      "Mike Brant",
      "Patrick Juvet",
      "Pierre Groscolas",
      "Mort Shuman",
      "Séverine",
      "Jeane Manson",
      "C. Jérôme"
    ],
    events: [
      "Television couleur",
      "Explosion du disco",
      "Grands concours europeens"
    ],
    objects: [
      "45 tours couleur",
      "Boules a facettes",
      "Pochettes glamour"
    ]
  },
  {
    id: "1980",
    label: "Annees 80",
    tone: "Synthes, clips, cassettes",
    color: "#7c5cff",
    image: {
      alt: "Cassette audio",
      kind: "object",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1593078165899-c14f0fb8910f?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    artists: [
      "Mylene Farmer",
      "Goldman",
      "Desireless",
      "Lio",
      "Jeanne Mas",
      "Images",
      "Les Rita Mitsouko",
      "Gold"
    ],
    events: [
      "Age d’or du clip",
      "FM et Top 50"
    ],
    objects: [
      "Walkman",
      "Synthesiseur",
      "VHS"
    ]
  },
  {
    id: "2000",
    label: "Annees 2000",
    tone: "Pop urbaine, MP3, festivals",
    color: "#ff7a59",
    image: {
      alt: "Foule de festival",
      kind: "stage",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    artists: [
      "Zazie",
      "Benabar",
      "Olivia Ruiz"
    ],
    events: [
      "Streaming naissant",
      "Festivals geants"
    ],
    objects: [
      "MP3",
      "MySpace",
      "CD single"
    ]
  }
];

export const regions: RegionFeature[] = [
  {
    id: "idf",
    region: "Ile-de-France",
    color: "#ff4f7b",
    image: {
      alt: "Paris illustre",
      kind: "map",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    artists: [
      "Edith Piaf",
      "Serge Gainsbourg",
      "Barbara"
    ],
    festivals: [
      "Rock en Seine",
      "Fnac Live"
    ],
    traditions: [
      "Cabaret",
      "Rive gauche",
      "Music-hall"
    ]
  },
  {
    id: "bretagne",
    region: "Bretagne",
    color: "#20c7b5",
    image: {
      alt: "Scene de festival",
      kind: "map",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    artists: [
      "Alan Stivell",
      "Dan Ar Braz",
      "Nolwenn Leroy"
    ],
    festivals: [
      "Vieilles Charrues",
      "Festival interceltique"
    ],
    traditions: [
      "Celtique",
      "Fest-noz",
      "Harpe"
    ]
  },
  {
    id: "provence",
    region: "Provence-Alpes-Cote d’Azur",
    color: "#ffb84d",
    image: {
      alt: "Lumiere de theatre",
      kind: "map",
      color: "#ffb84d",
      url: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    artists: [
      "Fernandel",
      "Moussu T e lei Jovents"
    ],
    festivals: [
      "Nice Jazz",
      "Marsatac"
    ],
    traditions: [
      "Operette marseillaise",
      "Accents mediterraneens"
    ]
  }
];

export const styles: StyleFeature[] = [
  {
    id: "realiste",
    name: "Chanson realiste",
    color: "#ff4f7b",
    icon: TheaterComedyIcon,
    banner: {
      alt: "Cabaret rouge",
      kind: "poster",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    artists: [
      "Edith Piaf",
      "Frehel",
      "Damia"
    ],
    anecdote: "Des voix de rue, des destins intenses et une dramaturgie directe."
  },
  {
    id: "yeye",
    name: "Yeye",
    color: "#ffd166",
    icon: GraphicEqIcon,
    banner: {
      alt: "Vinyles pop",
      kind: "album",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    artists: [
      "France Gall",
      "Sylvie Vartan",
      "Francoise Hardy"
    ],
    anecdote: "La television, les magazines et le 45 tours deviennent des accelerateurs de style."
  },
  {
    id: "engagee",
    name: "Chanson engagee",
    color: "#20c7b5",
    icon: CampaignIcon,
    banner: {
      alt: "Archives imprimees",
      kind: "archive",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    artists: [
      "Renaud",
      "Ferrat",
      "Lavilliers"
    ],
    anecdote: "Chaque epoque y laisse ses coleres, ses slogans et ses refrains de rassemblement."
  },
  {
    id: "pop",
    name: "Pop francaise",
    color: "#7c5cff",
    icon: AlbumIcon,
    banner: {
      alt: "Concert pop",
      kind: "stage",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    artists: [
      "Mylene Farmer",
      "Etienne Daho",
      "Christine and the Queens"
    ],
    anecdote: "Des pochettes tres travaillees, des clips et des identites visuelles fortes."
  },
  {
    id: "texte",
    name: "Chanson de texte",
    color: "#ff7a59",
    icon: PianoIcon,
    banner: {
      alt: "Piano studio",
      kind: "object",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    artists: [
      "Brel",
      "Brassens",
      "Barbara"
    ],
    anecdote: "Le texte y garde le premier role, mais l’image de scene devient essentielle."
  }
];
