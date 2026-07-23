import type { ArtistSummary } from './summaries';

export const artists: ArtistSummary[] = [
  {
    id: "edith-piaf",
    name: "Edith Piaf",
    years: "1915-1963",
    region: "Ile-de-France",
    styles: [
      "Chanson realiste",
      "Music-hall"
    ],
    tagline: "La voix qui transforme la rue en theatre.",
    hero: {
      alt: "Portrait artistique de chanteuse de music-hall",
      kind: "portrait",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "jacques-brel",
    name: "Jacques Brel",
    years: "1929-1978",
    region: "Bruxelles / Paris",
    styles: [
      "Chanson theatrale",
      "Texte"
    ],
    tagline: "Le mouvement, la sueur, la fureur et la tendresse.",
    hero: {
      alt: "Scene dramatique au micro",
      kind: "stage",
      color: "#ffb84d",
      url: "https://images.unsplash.com/photo-1521337581100-8ca9a73a5f79?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "francoise-hardy",
    name: "Francoise Hardy",
    years: "1944-2024",
    region: "Ile-de-France",
    styles: [
      "Yeye",
      "Pop elegante"
    ],
    tagline: "Melancolie pop, silhouettes mode et refrains intemporels.",
    hero: {
      alt: "Portrait pop lumineux",
      kind: "portrait",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "barbara",
    name: "Barbara",
    years: "1930-1997",
    region: "Ile-de-France",
    styles: [
      "Chanson de texte",
      "Piano"
    ],
    tagline: "La dame brune, le piano et la scene comme confidence.",
    hero: {
      alt: "Portrait illustre de Barbara",
      kind: "portrait",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "serge-gainsbourg",
    name: "Serge Gainsbourg",
    years: "1928-1991",
    region: "Ile-de-France",
    styles: [
      "Chanson rive gauche",
      "Pop",
      "Reggae",
      "Jazz"
    ],
    tagline: "Auteur, provocateur, styliste sonore et createur d’images.",
    hero: {
      alt: "Portrait illustre de Serge Gainsbourg",
      kind: "portrait",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "georges-brassens",
    name: "Georges Brassens",
    years: "1921-1981",
    region: "Occitanie / Ile-de-France",
    styles: [
      "Chanson acoustique",
      "Chanson de texte"
    ],
    tagline: "La guitare, les mots et une liberte tranquille.",
    hero: {
      alt: "Portrait illustre de Georges Brassens",
      kind: "portrait",
      color: "#ffb84d",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "claude-francois",
    name: "Claude Francois",
    years: "1939-1978",
    region: "Egypte / Ile-de-France",
    styles: [
      "Variete francaise",
      "Pop",
      "Television"
    ],
    tagline: "Le show, la choregraphie et la variete comme spectacle total.",
    hero: {
      alt: "Portrait illustre de Claude Francois",
      kind: "portrait",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "dalida",
    name: "Dalida",
    years: "1933-1987",
    region: "Egypte / Ile-de-France",
    styles: [
      "Variete dramatique",
      "Disco",
      "Chanson internationale"
    ],
    tagline: "Diva populaire, scene flamboyante et repertoire transfrontalier.",
    hero: {
      alt: "Portrait illustre de Dalida",
      kind: "portrait",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "johnny-hallyday",
    name: "Johnny Hallyday",
    years: "1943-2017",
    region: "Ile-de-France",
    styles: [
      "Rock francais",
      "Variete rock",
      "Live"
    ],
    tagline: "La scene, le rock et le grand spectacle populaire.",
    hero: {
      alt: "Portrait illustre de Johnny Hallyday",
      kind: "portrait",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1521337581100-8ca9a73a5f79?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "france-gall",
    name: "France Gall",
    years: "1947-2018",
    region: "Ile-de-France",
    styles: [
      "Yeye",
      "Pop francaise",
      "Comedie musicale"
    ],
    tagline: "De l’icone yeye a la pop lumineuse avec Michel Berger.",
    hero: {
      alt: "Portrait illustre de France Gall",
      kind: "portrait",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "renaud",
    name: "Renaud",
    years: "1952-",
    region: "Ile-de-France",
    styles: [
      "Chanson populaire",
      "Chanson engagee"
    ],
    tagline: "Tendresse, argot, colere sociale et refrains populaires.",
    hero: {
      alt: "Portrait illustre de Renaud",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "jean-jacques-goldman",
    name: "Jean-Jacques Goldman",
    years: "1951-",
    region: "Ile-de-France",
    styles: [
      "Pop rock francaise",
      "Variete"
    ],
    tagline: "La chanson populaire comme precision, generosite et architecture de refrains.",
    hero: {
      alt: "Portrait illustre de Jean-Jacques Goldman",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "mylene-farmer",
    name: "Mylene Farmer",
    years: "1961-",
    region: "Quebec / Ile-de-France",
    styles: [
      "Pop dramatique",
      "Clip",
      "Scene"
    ],
    tagline: "Une oeuvre pop totale, visuelle, choregraphique et cinematographique.",
    hero: {
      alt: "Portrait illustre de Mylene Farmer",
      kind: "portrait",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "alain-souchon",
    name: "Alain Souchon",
    years: "1944-",
    region: "Nouvelle-Aquitaine / Ile-de-France",
    styles: [
      "Chanson pop",
      "Chanson de texte"
    ],
    tagline: "Douceur pop, regard social et melancolie souriante.",
    hero: {
      alt: "Portrait illustre de Alain Souchon",
      kind: "portrait",
      color: "#ffb84d",
      url: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "veronique-sanson",
    name: "Veronique Sanson",
    years: "1949-",
    region: "Ile-de-France",
    styles: [
      "Piano pop",
      "Autrice-compositrice"
    ],
    tagline: "Piano, voix, independance et grandes chansons personnelles.",
    hero: {
      alt: "Portrait illustre de Veronique Sanson",
      kind: "portrait",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "zazie",
    name: "Zazie",
    years: "1964-",
    region: "Ile-de-France",
    styles: [
      "Pop francaise",
      "Autrice-compositrice"
    ],
    tagline: "Une plume pop, vive et inventive, au coeur des annees 90 et 2000.",
    hero: {
      alt: "Portrait illustre de Zazie",
      kind: "portrait",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "florent-pagny",
    name: "Florent Pagny",
    years: "1961-",
    region: "Bourgogne-Franche-Comte",
    styles: [
      "Variete pop",
      "Grande voix"
    ],
    tagline: "Une voix populaire, ample, entre ballades, scene et television.",
    hero: {
      alt: "Portrait illustre de Florent Pagny",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "pascal-obispo",
    name: "Pascal Obispo",
    years: "1965-",
    region: "Nouvelle-Aquitaine",
    styles: [
      "Pop francaise",
      "Auteur-compositeur"
    ],
    tagline: "Compositeur central de la pop francaise des annees 90.",
    hero: {
      alt: "Portrait illustre de Pascal Obispo",
      kind: "portrait",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "lara-fabian",
    name: "Lara Fabian",
    years: "1970-",
    region: "Belgique / Quebec",
    styles: [
      "Grande ballade",
      "Pop francophone"
    ],
    tagline: "Une voix francophone spectaculaire, entre scene et grandes ballades.",
    hero: {
      alt: "Portrait illustre de Lara Fabian",
      kind: "portrait",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "patricia-kaas",
    name: "Patricia Kaas",
    years: "1966-",
    region: "Grand Est",
    styles: [
      "Chanson pop",
      "Jazz vocal",
      "Variete"
    ],
    tagline: "Voix grave, elegance internationale et chanson francaise de scene.",
    hero: {
      alt: "Portrait illustre de Patricia Kaas",
      kind: "portrait",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "mc-solaar",
    name: "MC Solaar",
    years: "1969-",
    region: "Ile-de-France",
    styles: [
      "Rap francais",
      "Chanson de texte"
    ],
    tagline: "Le rap francais litteraire, fluide et imagé.",
    hero: {
      alt: "Portrait illustre de MC Solaar",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "iam",
    name: "IAM",
    years: "1989-",
    region: "Provence-Alpes-Cote d’Azur",
    styles: [
      "Rap marseillais",
      "Hip-hop francais"
    ],
    tagline: "Marseille, mythologie, samples et rap francais fondateur.",
    hero: {
      alt: "Portrait illustre de IAM",
      kind: "portrait",
      color: "#ffb84d",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "ntm",
    name: "NTM",
    years: "1988-",
    region: "Ile-de-France",
    styles: [
      "Rap francais",
      "Hip-hop"
    ],
    tagline: "Energie brute, scene urbaine et rap francais frontal.",
    hero: {
      alt: "Portrait illustre de NTM",
      kind: "portrait",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "calogero",
    name: "Calogero",
    years: "1971-",
    region: "Auvergne-Rhone-Alpes",
    styles: [
      "Pop rock francaise",
      "Annees 2000"
    ],
    tagline: "Basse melodique, refrains aeriens et pop rock populaire.",
    hero: {
      alt: "Portrait illustre de Calogero",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "vanessa-paradis",
    name: "Vanessa Paradis",
    years: "1972-",
    region: "Ile-de-France",
    styles: [
      "Pop francaise",
      "Cinema",
      "Mode"
    ],
    tagline: "Une icone pop visuelle entre chanson, cinema et mode.",
    hero: {
      alt: "Portrait illustre de Vanessa Paradis",
      kind: "portrait",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "zebda",
    name: "Zebda",
    years: "1985-",
    region: "Occitanie",
    styles: [
      "Rock metisse",
      "Chanson sociale"
    ],
    tagline: "Toulouse, scene festive, engagement et refrains collectifs.",
    hero: {
      alt: "Portrait illustre de Zebda",
      kind: "portrait",
      color: "#ffb84d",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "stomy-bugsy",
    name: "Stomy Bugsy",
    years: "1972-",
    region: "Ile-de-France",
    styles: [
      "Rap francais",
      "Cinema"
    ],
    tagline: "Du collectif rap aux medias populaires des annees 90.",
    hero: {
      alt: "Portrait illustre de Stomy Bugsy",
      kind: "portrait",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "carla-bruni",
    name: "Carla Bruni",
    years: "1967-",
    region: "Italie / Ile-de-France",
    styles: [
      "Folk pop",
      "Chanson acoustique"
    ],
    tagline: "Une intimite folk, photographique et acoustique.",
    hero: {
      alt: "Portrait illustre de Carla Bruni",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "mickey-3d",
    name: "Mickey 3D",
    years: "1996-",
    region: "Auvergne-Rhone-Alpes",
    styles: [
      "Rock francais",
      "Chanson engagee"
    ],
    tagline: "Rock leger, ironie sociale et conscience ecologique.",
    hero: {
      alt: "Portrait illustre de Mickey 3D",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "noir-desir",
    name: "Noir Desir",
    years: "1980-2010",
    region: "Nouvelle-Aquitaine",
    styles: [
      "Rock francais",
      "Rock alternatif"
    ],
    tagline: "Un groupe majeur du rock francais, intense et atmospherique.",
    hero: {
      alt: "Portrait illustre de Noir Desir",
      kind: "portrait",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1521337581100-8ca9a73a5f79?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "rita-mitsouko",
    name: "Rita Mitsouko",
    years: "1979-2007",
    region: "Ile-de-France",
    styles: [
      "Rock pop",
      "Pop alternative"
    ],
    tagline: "Couleurs, danse, excentricite et clips iconiques.",
    hero: {
      alt: "Portrait illustre de Rita Mitsouko",
      kind: "portrait",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "garou",
    name: "Garou",
    years: "1972-",
    region: "Quebec",
    styles: [
      "Pop francophone",
      "Comedie musicale"
    ],
    tagline: "Une voix quebecoise devenue populaire en France.",
    hero: {
      alt: "Portrait illustre de Garou",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "zaz",
    name: "Zaz",
    years: "1980-",
    region: "Nouvelle-Aquitaine",
    styles: [
      "Nouvelle chanson",
      "Swing pop"
    ],
    tagline: "Voix de rue, swing, energie et export international.",
    hero: {
      alt: "Portrait illustre de Zaz",
      kind: "portrait",
      color: "#ffb84d",
      url: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "juliette-armanet",
    name: "Juliette Armanet",
    years: "1984-",
    region: "Ile-de-France",
    styles: [
      "Pop disco",
      "Piano pop"
    ],
    tagline: "Piano, disco, scene theatrale et pop francaise recente.",
    hero: {
      alt: "Portrait illustre de Juliette Armanet",
      kind: "portrait",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "christine-and-the-queens",
    name: "Christine and the Queens",
    years: "1988-",
    region: "Pays de la Loire",
    styles: [
      "Pop choregraphique",
      "Pop internationale"
    ],
    tagline: "Pop, danse, identite et performance contemporaine.",
    hero: {
      alt: "Portrait illustre de Christine and the Queens",
      kind: "portrait",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "etienne-daho",
    name: "Etienne Daho",
    years: "1956-",
    region: "Bretagne",
    styles: [
      "Pop elegante",
      "New wave francaise"
    ],
    tagline: "Pop chic, ville, nuit et sophistication française.",
    hero: {
      alt: "Portrait illustre de Etienne Daho",
      kind: "portrait",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "daniel-balavoine",
    name: "Daniel Balavoine",
    years: "1952-1986",
    region: "Nouvelle-Aquitaine",
    styles: [
      "Pop engagee",
      "Variete rock"
    ],
    tagline: "Voix haute, engagement et pop humaniste.",
    hero: {
      alt: "Portrait illustre de Daniel Balavoine",
      kind: "portrait",
      color: "#ffb84d",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "michel-berger",
    name: "Michel Berger",
    years: "1947-1992",
    region: "Ile-de-France",
    styles: [
      "Piano pop",
      "Auteur-compositeur"
    ],
    tagline: "Compositeur majeur, piano lumineux et architectures pop.",
    hero: {
      alt: "Portrait illustre de Michel Berger",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "michel-sardou",
    name: "Michel Sardou",
    years: "1947-",
    region: "Ile-de-France",
    styles: [
      "Variete epique",
      "Chanson populaire"
    ],
    tagline: "Grands refrains, theatre populaire et chansons de foule.",
    hero: {
      alt: "Portrait illustre de Michel Sardou",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "julien-clerc",
    name: "Julien Clerc",
    years: "1947-",
    region: "Ile-de-France",
    styles: [
      "Chanson pop",
      "Variete elegante"
    ],
    tagline: "Melodies, paroliers et elegance populaire.",
    hero: {
      alt: "Portrait illustre de Julien Clerc",
      kind: "portrait",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "francis-cabrel",
    name: "Francis Cabrel",
    years: "1953-",
    region: "Occitanie",
    styles: [
      "Folk francaise",
      "Chanson acoustique"
    ],
    tagline: "Guitare, folk, langue douce et chansons durables.",
    hero: {
      alt: "Portrait illustre de Francis Cabrel",
      kind: "portrait",
      color: "#ffb84d",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "louise-attaque",
    name: "Louise Attaque",
    years: "1994-",
    region: "Ile-de-France",
    styles: [
      "Rock acoustique",
      "Alternative"
    ],
    tagline: "Guitare, violon et energie collective de fin des annees 90.",
    hero: {
      alt: "Portrait illustre de Louise Attaque",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "indochine",
    name: "Indochine",
    years: "1981-",
    region: "Ile-de-France",
    styles: [
      "New wave francaise",
      "Rock pop"
    ],
    tagline: "Groupe generationnel, clips, stades et romantisme new wave.",
    hero: {
      alt: "Portrait illustre de Indochine",
      kind: "portrait",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "telephone",
    name: "Telephone",
    years: "1976-1986",
    region: "Ile-de-France",
    styles: [
      "Rock francais",
      "Groupe"
    ],
    tagline: "Le grand groupe rock francais de la generation 80.",
    hero: {
      alt: "Portrait illustre de Telephone",
      kind: "portrait",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "mano-solo",
    name: "Mano Solo",
    years: "1963-2010",
    region: "Ile-de-France",
    styles: [
      "Chanson alternative",
      "Rock chanson"
    ],
    tagline: "Voix abimee, dessins, urgence et chanson alternative.",
    hero: {
      alt: "Portrait illustre de Mano Solo",
      kind: "portrait",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "benjamin-biolay",
    name: "Benjamin Biolay",
    years: "1973-",
    region: "Auvergne-Rhone-Alpes",
    styles: [
      "Pop chanson",
      "Auteur-producteur"
    ],
    tagline: "Auteur, arrangeur et producteur d’une pop française cinématographique.",
    hero: {
      alt: "Portrait illustre de Benjamin Biolay",
      kind: "portrait",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "camille",
    name: "Camille",
    years: "1978-",
    region: "Ile-de-France",
    styles: [
      "Chanson experimentale",
      "Performance vocale"
    ],
    tagline: "La voix comme instrument, corps et laboratoire.",
    hero: {
      alt: "Portrait illustre de Camille",
      kind: "portrait",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "benabar",
    name: "Benabar",
    years: "1969-",
    region: "Ile-de-France",
    styles: [
      "Chanson narrative",
      "Nouvelle scene"
    ],
    tagline: "Histoires du quotidien, humour et refrains populaires.",
    hero: {
      alt: "Portrait illustre de Benabar",
      kind: "portrait",
      color: "#ffb84d",
      url: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "olivia-ruiz",
    name: "Olivia Ruiz",
    years: "1980-",
    region: "Occitanie",
    styles: [
      "Nouvelle scene",
      "Cabaret pop"
    ],
    tagline: "Cabaret colore, chanson theatrale et identite visuelle forte.",
    hero: {
      alt: "Portrait illustre de Olivia Ruiz",
      kind: "portrait",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "grand-corps-malade",
    name: "Grand Corps Malade",
    years: "1977-",
    region: "Ile-de-France",
    styles: [
      "Slam",
      "Chanson parlee"
    ],
    tagline: "Le slam comme nouvelle voix populaire de la chanson francaise.",
    hero: {
      alt: "Portrait illustre de Grand Corps Malade",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "charles-trenet",
    name: "Charles Trenet",
    years: "1913-2001",
    region: "Occitanie",
    styles: [
      "Chanson classique",
      "Swing francais"
    ],
    tagline: "Le fou chantant, patrimoine lumineux et standard mondial.",
    hero: {
      alt: "Portrait illustre de Charles Trenet",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "leo-ferre",
    name: "Leo Ferre",
    years: "1916-1993",
    region: "Monaco / France",
    styles: [
      "Chanson poetique",
      "Chanson libertaire"
    ],
    tagline: "Poesie, orchestre, revolte et recitals intenses.",
    hero: {
      alt: "Portrait illustre de Leo Ferre",
      kind: "portrait",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "juliette-greco",
    name: "Juliette Greco",
    years: "1927-2020",
    region: "Occitanie / Ile-de-France",
    styles: [
      "Chanson cabaret",
      "Rive gauche"
    ],
    tagline: "Silhouette noire, rive gauche et art de l’interpretation.",
    hero: {
      alt: "Portrait illustre de Juliette Greco",
      kind: "portrait",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "joe-dassin",
    name: "Joe Dassin",
    years: "1938-1980",
    region: "Etats-Unis / France",
    styles: [
      "Variete pop",
      "Adaptations"
    ],
    tagline: "Variete solaire, adaptations et tubes transgenerationnels.",
    hero: {
      alt: "Portrait illustre de Joe Dassin",
      kind: "portrait",
      color: "#ffb84d",
      url: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "axelle-red",
    name: "Axelle Red",
    years: "1968-",
    region: "Belgique",
    styles: [
      "Pop soul francophone",
      "Chanson belge"
    ],
    tagline: "Soul francophone, douceur pop et engagement.",
    hero: {
      alt: "Portrait illustre de Axelle Red",
      kind: "portrait",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "celine-dion",
    name: "Celine Dion",
    years: "1968-",
    region: "Quebec",
    styles: [
      "Pop francophone",
      "Grande voix"
    ],
    tagline: "La voix francophone devenue phenomene mondial.",
    hero: {
      alt: "Portrait illustre de Celine Dion",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "orelsan",
    name: "Orelsan",
    years: "1982-",
    region: "Normandie",
    styles: [
      "Rap francais",
      "Pop urbaine"
    ],
    tagline: "Rap generationnel, clips conceptuels et recits du quotidien.",
    hero: {
      alt: "Portrait illustre de Orelsan",
      kind: "portrait",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "maitre-gims",
    name: "Maitre Gims",
    years: "1986-",
    region: "RDC / France",
    styles: [
      "Pop urbaine",
      "Rap melodique"
    ],
    tagline: "Voix urbaine massive, refrains pop et clips tres visuels.",
    hero: {
      alt: "Portrait illustre de Maitre Gims",
      kind: "portrait",
      color: "#ffb84d",
      url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "bigflo-oli",
    name: "Bigflo et Oli",
    years: "2005-",
    region: "Occitanie",
    styles: [
      "Rap narratif",
      "Pop rap"
    ],
    tagline: "Duo fraternel, rap narratif et grande audience familiale.",
    hero: {
      alt: "Portrait illustre de Bigflo et Oli",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "angele",
    name: "Angèle",
    years: "1995-",
    region: "Belgique",
    styles: [
      "Pop belge",
      "Pop engagee"
    ],
    tagline: "Pop belge, humour, clips et regard generationnel.",
    hero: {
      alt: "Portrait illustre de Angèle",
      kind: "portrait",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "barbara-pravi",
    name: "Barbara Pravi",
    years: "1993-",
    region: "Ile-de-France",
    styles: [
      "Nouvelle chanson",
      "Chanson vocale"
    ],
    tagline: "Voix nue, heritage chanson et scene internationale.",
    hero: {
      alt: "Portrait illustre de Barbara Pravi",
      kind: "portrait",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "gregoire",
    name: "Grégoire",
    years: "1979-",
    region: "Ile-de-France",
    styles: [
      "Pop participative",
      "Chanson acoustique"
    ],
    tagline: "Pop acoustique et mutation numerique de la fin des annees 2000.",
    hero: {
      alt: "Portrait illustre de Grégoire",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "stromae",
    name: "Stromae",
    years: "1985-",
    region: "Belgique",
    styles: [
      "Pop belge",
      "Electro chanson"
    ],
    tagline: "Pop totale, clips conceptuels et ecriture sociale.",
    hero: {
      alt: "Portrait illustre de Stromae",
      kind: "portrait",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "soprano",
    name: "Soprano",
    years: "1979-",
    region: "Provence-Alpes-Cote d’Azur",
    styles: [
      "Pop rap",
      "Rap marseillais"
    ],
    tagline: "Rap melodique, Marseille et grandes scenes populaires.",
    hero: {
      alt: "Portrait illustre de Soprano",
      kind: "portrait",
      color: "#ffb84d",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "vianney",
    name: "Vianney",
    years: "1991-",
    region: "Nouvelle-Aquitaine",
    styles: [
      "Pop acoustique",
      "Auteur-compositeur"
    ],
    tagline: "Guitare, ecriture directe et pop acoustique contemporaine.",
    hero: {
      alt: "Portrait illustre de Vianney",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "alain-bashung",
    name: "Alain Bashung",
    years: "1947-2009",
    region: "Grand Est",
    styles: [
      "Rock chanson",
      "Chanson poetique"
    ],
    tagline: "Rock lettré, clips puissants et langue magnétique.",
    hero: {
      alt: "Portrait illustre de Alain Bashung",
      kind: "portrait",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "stephan-eicher",
    name: "Stephan Eicher",
    years: "1960-",
    region: "Suisse",
    styles: [
      "Pop francophone",
      "Rock européen"
    ],
    tagline: "Pop européenne, littérature et élégance multilingue.",
    hero: {
      alt: "Portrait illustre de Stephan Eicher",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "maurane",
    name: "Maurane",
    years: "1960-2018",
    region: "Belgique",
    styles: [
      "Chanson soul",
      "Grande voix"
    ],
    tagline: "Chaleur vocale, soul francophone et duos mémorables.",
    hero: {
      alt: "Portrait illustre de Maurane",
      kind: "portrait",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "maxime-le-forestier",
    name: "Maxime Le Forestier",
    years: "1949-",
    region: "Ile-de-France",
    styles: [
      "Folk francaise",
      "Chanson acoustique"
    ],
    tagline: "Guitare, fraternité et folk français durable.",
    hero: {
      alt: "Portrait illustre de Maxime Le Forestier",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "yves-montand",
    name: "Yves Montand",
    years: "1921-1991",
    region: "Italie / France",
    styles: [
      "Chanson classique",
      "Cinema"
    ],
    tagline: "Music-hall, cinéma, Prévert et standards internationaux.",
    hero: {
      alt: "Portrait illustre de Yves Montand",
      kind: "portrait",
      color: "#ffb84d",
      url: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "henri-salvador",
    name: "Henri Salvador",
    years: "1917-2008",
    region: "Guyane / Ile-de-France",
    styles: [
      "Chanson douce",
      "Jazz",
      "Bossa"
    ],
    tagline: "Humour, douceur, jazz et élégance tropicale.",
    hero: {
      alt: "Portrait illustre de Henri Salvador",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "bourvil",
    name: "Bourvil",
    years: "1917-1970",
    region: "Normandie",
    styles: [
      "Chanson fantaisie",
      "Cinema populaire"
    ],
    tagline: "Humour tendre, cinéma populaire et refrains familiaux.",
    hero: {
      alt: "Portrait illustre de Bourvil",
      kind: "portrait",
      color: "#ffb84d",
      url: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "georges-moustaki",
    name: "Georges Moustaki",
    years: "1934-2013",
    region: "Egypte / France",
    styles: [
      "Chanson de texte",
      "Méditerranéenne"
    ],
    tagline: "Guitare, liberté, exil et poésie méditerranéenne.",
    hero: {
      alt: "Portrait illustre de Georges Moustaki",
      kind: "portrait",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "gilbert-becaud",
    name: "Gilbert Bécaud",
    years: "1927-2001",
    region: "Occitanie",
    styles: [
      "Variete classique",
      "Piano chanson"
    ],
    tagline: "Monsieur 100 000 volts, piano et grandes scènes.",
    hero: {
      alt: "Portrait illustre de Gilbert Bécaud",
      kind: "portrait",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "mireille-mathieu",
    name: "Mireille Mathieu",
    years: "1946-",
    region: "Provence-Alpes-Côte d’Azur",
    styles: [
      "Grande variete",
      "Chanson internationale"
    ],
    tagline: "Grande voix populaire, télévision et rayonnement international.",
    hero: {
      alt: "Portrait illustre de Mireille Mathieu",
      kind: "portrait",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "laurent-voulzy",
    name: "Laurent Voulzy",
    years: "1948-",
    region: "Ile-de-France",
    styles: [
      "Pop tropicale",
      "Pop francaise"
    ],
    tagline: "Studio pop, îles imaginaires et tandem avec Souchon.",
    hero: {
      alt: "Portrait illustre de Laurent Voulzy",
      kind: "portrait",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "raphael",
    name: "Raphael",
    years: "1975-",
    region: "Ile-de-France",
    styles: [
      "Pop rock française",
      "Nouvelle scene"
    ],
    tagline: "Route, mélancolie et pop rock des années 2000.",
    hero: {
      alt: "Portrait illustre de Raphael",
      kind: "portrait",
      color: "#ffb84d",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "renan-luce",
    name: "Renan Luce",
    years: "1980-",
    region: "Bretagne",
    styles: [
      "Nouvelle scène",
      "Chanson narrative"
    ],
    tagline: "Chansons narratives, guitare et humour délicat.",
    hero: {
      alt: "Portrait illustre de Renan Luce",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "coeur-de-pirate",
    name: "Cœur de Pirate",
    years: "1989-",
    region: "Québec",
    styles: [
      "Pop piano",
      "Chanson québécoise"
    ],
    tagline: "Piano intime, web francophone et nouvelle génération québécoise.",
    hero: {
      alt: "Portrait illustre de Cœur de Pirate",
      kind: "portrait",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "clara-luciani",
    name: "Clara Luciani",
    years: "1992-",
    region: "Provence-Alpes-Côte d’Azur",
    styles: [
      "Pop rock",
      "Nouvelle pop"
    ],
    tagline: "Basse, silhouette, pop féminine et scène contemporaine.",
    hero: {
      alt: "Portrait illustre de Clara Luciani",
      kind: "portrait",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "charles-aznavour",
    name: "Charles Aznavour",
    years: "1924-2018",
    region: "Ile-de-France / Armenie",
    styles: [
      "Chanson narrative",
      "Music-hall"
    ],
    tagline: "La chanson comme cinema intime et langue internationale.",
    hero: {
      alt: "Portrait illustre de Charles Aznavour",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "jacques-dutronc",
    name: "Jacques Dutronc",
    years: "1943-",
    region: "Ile-de-France",
    styles: [
      "Pop yeye",
      "Rock francais"
    ],
    tagline: "Ironie pop, Paris electrique et allure cinematographique.",
    hero: {
      alt: "Portrait illustre de Jacques Dutronc",
      kind: "portrait",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "sylvie-vartan",
    name: "Sylvie Vartan",
    years: "1944-",
    region: "Bulgarie / Ile-de-France",
    styles: [
      "Yeye",
      "Variete pop"
    ],
    tagline: "Mode, danse et grande icone feminine des annees 60.",
    hero: {
      alt: "Portrait illustre de Sylvie Vartan",
      kind: "portrait",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "sheila",
    name: "Sheila",
    years: "1945-",
    region: "Ile-de-France",
    styles: [
      "Yeye",
      "Disco",
      "Variete"
    ],
    tagline: "De l’ecole yeye au disco international.",
    hero: {
      alt: "Portrait illustre de Sheila",
      kind: "portrait",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "michel-delpech",
    name: "Michel Delpech",
    years: "1946-2016",
    region: "Ile-de-France",
    styles: [
      "Chanson populaire",
      "Variete"
    ],
    tagline: "La France quotidienne, les cafes et les refrains partages.",
    hero: {
      alt: "Portrait illustre de Michel Delpech",
      kind: "portrait",
      color: "#ffb84d",
      url: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "serge-reggiani",
    name: "Serge Reggiani",
    years: "1922-2004",
    region: "Italie / Ile-de-France",
    styles: [
      "Chanson de texte",
      "Theatre"
    ],
    tagline: "La voix de comedien au service des auteurs.",
    hero: {
      alt: "Portrait illustre de Serge Reggiani",
      kind: "portrait",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "hugues-aufray",
    name: "Hugues Aufray",
    years: "1929-",
    region: "Occitanie",
    styles: [
      "Folk francais",
      "Chanson populaire"
    ],
    tagline: "Guitare folk, chants collectifs et adaptation française.",
    hero: {
      alt: "Portrait illustre de Hugues Aufray",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "jean-ferrat",
    name: "Jean Ferrat",
    years: "1930-2010",
    region: "Occitanie / Ardeche",
    styles: [
      "Chanson engagee",
      "Chanson poetique"
    ],
    tagline: "Paysages, engagement et poesie populaire.",
    hero: {
      alt: "Portrait illustre de Jean Ferrat",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "bernard-lavilliers",
    name: "Bernard Lavilliers",
    years: "1946-",
    region: "Auvergne-Rhone-Alpes",
    styles: [
      "Chanson rock",
      "Reggae",
      "World"
    ],
    tagline: "Ports, routes, rock et carnets de voyage.",
    hero: {
      alt: "Portrait illustre de Bernard Lavilliers",
      kind: "portrait",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1521337581100-8ca9a73a5f79?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "patrick-bruel",
    name: "Patrick Bruel",
    years: "1959-",
    region: "Algerie / Ile-de-France",
    styles: [
      "Variete pop",
      "Chanson populaire"
    ],
    tagline: "Scene, ferveur populaire et generation Bruelmania.",
    hero: {
      alt: "Portrait illustre de Patrick Bruel",
      kind: "portrait",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "marc-lavoine",
    name: "Marc Lavoine",
    years: "1962-",
    region: "Ile-de-France",
    styles: [
      "Pop romantique",
      "Variete"
    ],
    tagline: "Voix grave, clips elegants et pop sentimentale.",
    hero: {
      alt: "Portrait illustre de Marc Lavoine",
      kind: "portrait",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "jean-louis-aubert",
    name: "Jean-Louis Aubert",
    years: "1955-",
    region: "Ile-de-France",
    styles: [
      "Pop rock francaise",
      "Rock"
    ],
    tagline: "Apres Telephone, la guitare comme compagnon de route.",
    hero: {
      alt: "Portrait illustre de Jean-Louis Aubert",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "m",
    name: "M",
    years: "1971-",
    region: "Ile-de-France",
    styles: [
      "Pop rock",
      "Funk",
      "Chanson graphique"
    ],
    tagline: "Guitare-personnage, scene totale et pop graphique.",
    hero: {
      alt: "Portrait illustre de M",
      kind: "portrait",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "julien-dore",
    name: "Julien Dore",
    years: "1982-",
    region: "Occitanie",
    styles: [
      "Pop francaise",
      "Nouvelle scene"
    ],
    tagline: "Pop solaire, humour visuel et clips tres signes.",
    hero: {
      alt: "Portrait illustre de Julien Dore",
      kind: "portrait",
      color: "#ffb84d",
      url: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "nolwenn-leroy",
    name: "Nolwenn Leroy",
    years: "1982-",
    region: "Bretagne",
    styles: [
      "Pop francaise",
      "Chanson bretonne"
    ],
    tagline: "Voix pop, Bretagne et patrimoine reenchante.",
    hero: {
      alt: "Portrait illustre de Nolwenn Leroy",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "amel-bent",
    name: "Amel Bent",
    years: "1985-",
    region: "Ile-de-France",
    styles: [
      "Pop soul",
      "R&B francais"
    ],
    tagline: "Grande voix pop soul et affirmation generationnelle.",
    hero: {
      alt: "Portrait illustre de Amel Bent",
      kind: "portrait",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "jenifer",
    name: "Jenifer",
    years: "1982-",
    region: "Corse / Ile-de-France",
    styles: [
      "Pop francaise",
      "Variete"
    ],
    tagline: "Pop solaire et premiere grande icone Star Academy.",
    hero: {
      alt: "Portrait illustre de Jenifer",
      kind: "portrait",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "m-pokora",
    name: "M. Pokora",
    years: "1985-",
    region: "Grand Est",
    styles: [
      "Pop R&B",
      "Dance pop"
    ],
    tagline: "Danse, clip et pop française choregraphique.",
    hero: {
      alt: "Portrait illustre de M. Pokora",
      kind: "portrait",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "yseult",
    name: "Yseult",
    years: "1994-",
    region: "Ile-de-France",
    styles: [
      "Chanson soul contemporaine",
      "Pop alternative"
    ],
    tagline: "Voix brute, image forte et chanson contemporaine depouillee.",
    hero: {
      alt: "Portrait illustre de Yseult",
      kind: "portrait",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "aya-nakamura",
    name: "Aya Nakamura",
    years: "1995-",
    region: "Ile-de-France / Mali",
    styles: [
      "Afropop francaise",
      "Pop urbaine"
    ],
    tagline: "Streaming mondial, langue pop et clips ultracolores.",
    hero: {
      alt: "Portrait illustre de Aya Nakamura",
      kind: "portrait",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "romeo-elvis",
    name: "Roméo Elvis",
    years: "1992-",
    region: "Belgique",
    styles: [
      "Pop rap belge",
      "Hip-hop francophone"
    ],
    tagline: "Scene belge, streaming et duos generationnels.",
    hero: {
      alt: "Portrait illustre de Roméo Elvis",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1521337581100-8ca9a73a5f79?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "tino-rossi",
    name: "Tino Rossi",
    years: "1907-1983",
    region: "Corse",
    styles: [
      "Chanson populaire",
      "Music-hall"
    ],
    tagline: "Voix de velours, cinema et rituel familial.",
    hero: {
      alt: "Portrait illustre de Tino Rossi",
      kind: "portrait",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "frehel",
    name: "Fréhel",
    years: "1891-1951",
    region: "Ile-de-France",
    styles: [
      "Chanson realiste",
      "Bal musette"
    ],
    tagline: "La rue, la java et la chanson realiste dans sa forme brute.",
    hero: {
      alt: "Portrait illustre de Fréhel",
      kind: "portrait",
      color: "#8f2d56",
      url: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "damia",
    name: "Damia",
    years: "1889-1978",
    region: "Ile-de-France",
    styles: [
      "Chanson dramatique",
      "Chanson realiste"
    ],
    tagline: "Clair-obscur, theatre et intensite realiste.",
    hero: {
      alt: "Portrait illustre de Damia",
      kind: "portrait",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "mistinguett",
    name: "Mistinguett",
    years: "1875-1956",
    region: "Ile-de-France",
    styles: [
      "Music-hall",
      "Revue parisienne"
    ],
    tagline: "Plumes, affiches, revue et naissance de la star moderne.",
    hero: {
      alt: "Portrait illustre de Mistinguett",
      kind: "portrait",
      color: "#ffb84d",
      url: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "fernandel",
    name: "Fernandel",
    years: "1903-1971",
    region: "Provence-Alpes-Cote d’Azur",
    styles: [
      "Chanson comique",
      "Cinema populaire"
    ],
    tagline: "Le rire, l’accent et la chanson de cinema.",
    hero: {
      alt: "Portrait illustre de Fernandel",
      kind: "portrait",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "pierre-perret",
    name: "Pierre Perret",
    years: "1934-",
    region: "Occitanie",
    styles: [
      "Chanson populaire",
      "Chanson engagee"
    ],
    tagline: "Humour, tendresse et humanisme populaire.",
    hero: {
      alt: "Portrait illustre de Pierre Perret",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "anne-sylvestre",
    name: "Anne Sylvestre",
    years: "1934-2020",
    region: "Ile-de-France",
    styles: [
      "Chanson de texte",
      "Autrice-compositrice"
    ],
    tagline: "Texte, exigence, enfance et conscience feministe.",
    hero: {
      alt: "Portrait illustre de Anne Sylvestre",
      kind: "portrait",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "nicoletta",
    name: "Nicoletta",
    years: "1944-",
    region: "Auvergne-Rhone-Alpes",
    styles: [
      "Soul francaise",
      "Variete"
    ],
    tagline: "Grande voix soul, gospel et variete puissante.",
    hero: {
      alt: "Portrait illustre de Nicoletta",
      kind: "portrait",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "dave",
    name: "Dave",
    years: "1944-",
    region: "Pays-Bas / France",
    styles: [
      "Variete pop",
      "Chanson romantique"
    ],
    tagline: "Variete solaire, television et refrains populaires.",
    hero: {
      alt: "Portrait illustre de Dave",
      kind: "portrait",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "william-sheller",
    name: "William Sheller",
    years: "1946-",
    region: "Ile-de-France",
    styles: [
      "Piano pop",
      "Chanson orchestrale"
    ],
    tagline: "Piano, cordes et architecture pop classique.",
    hero: {
      alt: "Portrait illustre de William Sheller",
      kind: "portrait",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "jacques-higelin",
    name: "Jacques Higelin",
    years: "1940-2018",
    region: "Ile-de-France",
    styles: [
      "Chanson rock",
      "Chanson poetique"
    ],
    tagline: "Improvisation, scene libre et poesie electrique.",
    hero: {
      alt: "Portrait illustre de Jacques Higelin",
      kind: "portrait",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1521337581100-8ca9a73a5f79?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "alain-chamfort",
    name: "Alain Chamfort",
    years: "1949-",
    region: "Ile-de-France",
    styles: [
      "Pop elegante",
      "Variete sophistiquee"
    ],
    tagline: "Studio, elegance pop et collaborations d’auteur.",
    hero: {
      alt: "Portrait illustre de Alain Chamfort",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "pierre-bachelet",
    name: "Pierre Bachelet",
    years: "1944-2005",
    region: "Ile-de-France / Hauts-de-France",
    styles: [
      "Chanson populaire",
      "Musique de film"
    ],
    tagline: "Memoire ouvriere, cinema et grands refrains regionaux.",
    hero: {
      alt: "Portrait illustre de Pierre Bachelet",
      kind: "portrait",
      color: "#ffb84d",
      url: "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "liane-foly",
    name: "Liane Foly",
    years: "1962-",
    region: "Auvergne-Rhone-Alpes",
    styles: [
      "Jazz pop",
      "Variete"
    ],
    tagline: "Voix feutree, jazz pop et elegance de club.",
    hero: {
      alt: "Portrait illustre de Liane Foly",
      kind: "portrait",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "helene-segara",
    name: "Hélène Segara",
    years: "1971-",
    region: "Provence-Alpes-Cote d’Azur",
    styles: [
      "Variete romantique",
      "Grande voix"
    ],
    tagline: "Ballades populaires, comedie musicale et grande voix.",
    hero: {
      alt: "Portrait illustre de Hélène Segara",
      kind: "portrait",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "alizee",
    name: "Alizée",
    years: "1984-",
    region: "Corse",
    styles: [
      "Pop francaise",
      "Pop 2000"
    ],
    tagline: "Clip, pop adolescente et empreinte Farmer/Boutonnat.",
    hero: {
      alt: "Portrait illustre de Alizée",
      kind: "portrait",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "vitaa",
    name: "Vitaa",
    years: "1983-",
    region: "Auvergne-Rhone-Alpes",
    styles: [
      "R&B francais",
      "Pop urbaine"
    ],
    tagline: "Confession R&B, duos et pop urbaine populaire.",
    hero: {
      alt: "Portrait illustre de Vitaa",
      kind: "portrait",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "slimane",
    name: "Slimane",
    years: "1989-",
    region: "Ile-de-France",
    styles: [
      "Pop vocale",
      "Variete contemporaine"
    ],
    tagline: "Grande voix contemporaine, Paris et duos populaires.",
    hero: {
      alt: "Portrait illustre de Slimane",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "louane",
    name: "Louane",
    years: "1996-",
    region: "Hauts-de-France",
    styles: [
      "Pop francaise",
      "Variete contemporaine"
    ],
    tagline: "Cinema, tele-crochet et pop generation 2010.",
    hero: {
      alt: "Portrait illustre de Louane",
      kind: "portrait",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "jain",
    name: "Jain",
    years: "1992-",
    region: "Occitanie",
    styles: [
      "Pop world",
      "Electro pop"
    ],
    tagline: "Pop graphique, clips viraux et rythmes voyageurs.",
    hero: {
      alt: "Portrait illustre de Jain",
      kind: "portrait",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "claude-nougaro",
    name: "Claude Nougaro",
    years: "1929-2004",
    region: "Occitanie",
    styles: [
      "Chanson jazz",
      "Chanson de texte"
    ],
    tagline: "Le swing des mots, Toulouse et la chanson jazz.",
    hero: {
      alt: "Portrait illustre de Claude Nougaro",
      kind: "portrait",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "nino-ferrer",
    name: "Nino Ferrer",
    years: "1934-1998",
    region: "Italie / Occitanie",
    styles: [
      "Pop soul",
      "Chanson rock"
    ],
    tagline: "Soul, ironie, Sud et pop inclassable.",
    hero: {
      alt: "Portrait illustre de Nino Ferrer",
      kind: "portrait",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "michel-fugain",
    name: "Michel Fugain",
    years: "1942-",
    region: "Provence-Alpes-Cote d’Azur",
    styles: [
      "Chanson collective",
      "Variete pop"
    ],
    tagline: "Refrains solaires, groupe et spectacle collectif.",
    hero: {
      alt: "Portrait illustre de Michel Fugain",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "serge-lama",
    name: "Serge Lama",
    years: "1943-",
    region: "Ile-de-France",
    styles: [
      "Variete dramatique",
      "Chanson de scene"
    ],
    tagline: "Theatre vocal, grandes ballades et scene populaire.",
    hero: {
      alt: "Portrait illustre de Serge Lama",
      kind: "portrait",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "marie-laforet",
    name: "Marie Laforet",
    years: "1939-2019",
    region: "Nouvelle-Aquitaine",
    styles: [
      "Variete folk",
      "Chanson cinematographique"
    ],
    tagline: "Voix grave, folk, cinema et mystere.",
    hero: {
      alt: "Portrait illustre de Marie Laforet",
      kind: "portrait",
      color: "#ffb84d",
      url: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "salvatore-adamo",
    name: "Salvatore Adamo",
    years: "1943-",
    region: "Belgique / Italie",
    styles: [
      "Chanson romantique",
      "Variete francophone"
    ],
    tagline: "Romantisme francophone, Belgique et rayonnement international.",
    hero: {
      alt: "Portrait illustre de Salvatore Adamo",
      kind: "portrait",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "enrico-macias",
    name: "Enrico Macias",
    years: "1938-",
    region: "Algerie / France",
    styles: [
      "Chanson mediterraneenne",
      "Chanson populaire"
    ],
    tagline: "Guitare, fraternite et Mediterranee populaire.",
    hero: {
      alt: "Portrait illustre de Enrico Macias",
      kind: "portrait",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "boby-lapointe",
    name: "Boby Lapointe",
    years: "1922-1972",
    region: "Occitanie",
    styles: [
      "Chanson fantaisie",
      "Cabaret"
    ],
    tagline: "Jeux de mots, mathematiques et fantaisie cabaret.",
    hero: {
      alt: "Portrait illustre de Boby Lapointe",
      kind: "portrait",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "herbert-leonard",
    name: "Herbert Leonard",
    years: "1945-",
    region: "Grand Est",
    styles: [
      "Variete romantique",
      "Ballade pop"
    ],
    tagline: "Ballades populaires et television romantique des annees 80.",
    hero: {
      alt: "Portrait illustre de Herbert Leonard",
      kind: "portrait",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "christophe",
    name: "Christophe",
    years: "1945-2020",
    region: "Ile-de-France",
    styles: [
      "Pop romantique",
      "Pop experimentale"
    ],
    tagline: "Nocturne, studio, bleus et elegance synthetique.",
    hero: {
      alt: "Portrait illustre de Christophe",
      kind: "portrait",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "niagara",
    name: "Niagara",
    years: "1982-1993",
    region: "Bretagne / Ile-de-France",
    styles: [
      "Pop rock",
      "New wave francaise"
    ],
    tagline: "Clips colores, pop rock et duo visuel des annees 80.",
    hero: {
      alt: "Portrait illustre de Niagara",
      kind: "portrait",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "les-innocents",
    name: "Les Innocents",
    years: "1982-",
    region: "Ile-de-France",
    styles: [
      "Pop francaise",
      "Pop rock"
    ],
    tagline: "Harmonies, guitares et pop française raffinee.",
    hero: {
      alt: "Portrait illustre de Les Innocents",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "tryo",
    name: "Tryo",
    years: "1995-",
    region: "Ile-de-France",
    styles: [
      "Reggae chanson",
      "Chanson engagee"
    ],
    tagline: "Guitares acoustiques, festivals et refrains engages.",
    hero: {
      alt: "Portrait illustre de Tryo",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "cowboys-fringants",
    name: "Les Cowboys Fringants",
    years: "1995-",
    region: "Quebec",
    styles: [
      "Chanson quebecoise",
      "Folk rock"
    ],
    tagline: "Folk rock quebecois, engagement et refrains de foule.",
    hero: {
      alt: "Portrait illustre de Les Cowboys Fringants",
      kind: "portrait",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "lomepal",
    name: "Lomepal",
    years: "1991-",
    region: "Ile-de-France",
    styles: [
      "Rap pop",
      "Chanson urbaine"
    ],
    tagline: "Rap introspectif, skate et generation streaming.",
    hero: {
      alt: "Portrait illustre de Lomepal",
      kind: "portrait",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "eddy-de-pretto",
    name: "Eddy de Pretto",
    years: "1993-",
    region: "Ile-de-France",
    styles: [
      "Chanson urbaine",
      "Rap chanson"
    ],
    tagline: "Parole frontale, minimalisme et chanson urbaine.",
    hero: {
      alt: "Portrait illustre de Eddy de Pretto",
      kind: "portrait",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "pomme",
    name: "Pomme",
    years: "1996-",
    region: "Auvergne-Rhone-Alpes",
    styles: [
      "Folk pop",
      "Autrice-compositrice"
    ],
    tagline: "Guitare intime, autrice contemporaine et douceur nocturne.",
    hero: {
      alt: "Portrait illustre de Pomme",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "richard-anthony",
    name: "Richard Anthony",
    years: "1938-2015",
    region: "Egypte / Ile-de-France",
    styles: [
      "Yeye",
      "Variete pop"
    ],
    tagline: "Adaptations, 45 tours et jeunesse des annees 60.",
    hero: {
      alt: "Portrait illustre de Richard Anthony",
      kind: "portrait",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "desireless",
    name: "Desireless",
    years: "1952-",
    region: "Ile-de-France",
    styles: [
      "Pop francaise",
      "Synthpop"
    ],
    tagline: "Silhouette, synthpop et hit mondial des annees 80.",
    hero: {
      alt: "Portrait illustre de Desireless",
      kind: "portrait",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "nana-mouskouri",
    name: "Nana Mouskouri",
    years: "1934-",
    region: "Grece / France",
    styles: [
      "Chanson internationale",
      "Grande variete"
    ],
    tagline: "Voix mondiale, lunettes iconiques et francophonie internationale.",
    hero: {
      alt: "Portrait illustre de Nana Mouskouri",
      kind: "portrait",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "georges-ulmer",
    name: "Georges Ulmer",
    years: "1919-1989",
    region: "Danemark / Ile-de-France",
    styles: [
      "Chanson de cabaret",
      "Music-hall"
    ],
    tagline: "Pigalle, cabaret et voix populaire d’apres-guerre.",
    hero: {
      alt: "Portrait illustre de Georges Ulmer",
      kind: "portrait",
      color: "#8f2d56",
      url: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "boris-vian",
    name: "Boris Vian",
    years: "1920-1959",
    region: "Ile-de-France",
    styles: [
      "Chanson satirique",
      "Chanson engagee"
    ],
    tagline: "Jazz, satire, litterature et rive gauche.",
    hero: {
      alt: "Portrait illustre de Boris Vian",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "yves-simon",
    name: "Yves Simon",
    years: "1944-",
    region: "Auvergne-Rhone-Alpes",
    styles: [
      "Chanson folk",
      "Chanson litteraire"
    ],
    tagline: "Carnets, romans, cinema et folk d’auteur.",
    hero: {
      alt: "Portrait illustre de Yves Simon",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "corynne-charby",
    name: "Corynne Charby",
    years: "1960-",
    region: "Ile-de-France",
    styles: [
      "Pop 80",
      "Variete FM"
    ],
    tagline: "Neons, flipper et pop FM des annees 80.",
    hero: {
      alt: "Portrait illustre de Corynne Charby",
      kind: "portrait",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "julie-pietri",
    name: "Julie Pietri",
    years: "1955-",
    region: "Algerie / France",
    styles: [
      "Pop dramatique",
      "Variete 80"
    ],
    tagline: "Voix pop, hymne feminin et television 80.",
    hero: {
      alt: "Portrait illustre de Julie Pietri",
      kind: "portrait",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "yannick-noah",
    name: "Yannick Noah",
    years: "1960-",
    region: "Ardennes / Cameroun",
    styles: [
      "Pop world",
      "Chanson populaire"
    ],
    tagline: "Fete, sport, scene et pop humaniste.",
    hero: {
      alt: "Portrait illustre de Yannick Noah",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "rachid-taha",
    name: "Rachid Taha",
    years: "1958-2018",
    region: "Algerie / Auvergne-Rhone-Alpes",
    styles: [
      "Rock rai",
      "Chanson alternative"
    ],
    tagline: "Rock, rai, exil et electricite politique.",
    hero: {
      alt: "Portrait illustre de Rachid Taha",
      kind: "portrait",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1521337581100-8ca9a73a5f79?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "khaled",
    name: "Khaled",
    years: "1960-",
    region: "Algerie / France",
    styles: [
      "Rai pop",
      "Chanson internationale"
    ],
    tagline: "Le rai mondial, Aicha et la pop francophone.",
    hero: {
      alt: "Portrait illustre de Khaled",
      kind: "portrait",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "faudel",
    name: "Faudel",
    years: "1978-",
    region: "Ile-de-France / Algerie",
    styles: [
      "Rai pop",
      "Variete francophone"
    ],
    tagline: "La generation rai-pop des annees 90.",
    hero: {
      alt: "Portrait illustre de Faudel",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "tragedie",
    name: "Tragedie",
    years: "2003-2005",
    region: "Pays de la Loire",
    styles: [
      "R&B francais",
      "Pop urbaine"
    ],
    tagline: "R&B francais, danse et clips du debut 2000.",
    hero: {
      alt: "Portrait illustre de Tragedie",
      kind: "portrait",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "k-maro",
    name: "K.Maro",
    years: "1980-",
    region: "Quebec / Liban",
    styles: [
      "Pop rap",
      "R&B francophone"
    ],
    tagline: "Club, Quebec, rap pop et hit international.",
    hero: {
      alt: "Portrait illustre de K.Maro",
      kind: "portrait",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "elodie-frege",
    name: "Elodie Frege",
    years: "1982-",
    region: "Bourgogne-Franche-Comte",
    styles: [
      "Pop chanson",
      "Variete elegante"
    ],
    tagline: "Tele-crochet, elegance pop et ecriture Biolay.",
    hero: {
      alt: "Portrait illustre de Elodie Frege",
      kind: "portrait",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "kendji-girac",
    name: "Kendji Girac",
    years: "1996-",
    region: "Nouvelle-Aquitaine",
    styles: [
      "Pop gitane",
      "Variete contemporaine"
    ],
    tagline: "Guitare gitane, The Voice et pop populaire contemporaine.",
    hero: {
      alt: "Portrait illustre de Kendji Girac",
      kind: "portrait",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "lina-margy",
    name: "Lina Margy",
    years: "1909-1973",
    region: "Ile-de-France",
    styles: [
      "Chanson patrimoniale",
      "Chanson populaire"
    ],
    tagline: "Voix populaire et memoire du repertoire ancien.",
    hero: {
      alt: "Portrait illustre de Lina Margy",
      kind: "portrait",
      color: "#8f2d56",
      url: "https://images.unsplash.com/photo-1526394931762-90052e97b376?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "colette-magny",
    name: "Colette Magny",
    years: "1926-1997",
    region: "Ile-de-France",
    styles: [
      "Blues chanson",
      "Chanson engagee"
    ],
    tagline: "Blues, voix brute et radicalite politique.",
    hero: {
      alt: "Portrait illustre de Colette Magny",
      kind: "portrait",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "brigitte-fontaine",
    name: "Brigitte Fontaine",
    years: "1939-",
    region: "Bretagne / Ile-de-France",
    styles: [
      "Chanson experimentale",
      "Avant-garde"
    ],
    tagline: "Theatre, radio, punk litteraire et liberte totale.",
    hero: {
      alt: "Portrait illustre de Brigitte Fontaine",
      kind: "portrait",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "catherine-ribeiro",
    name: "Catherine Ribeiro",
    years: "1941-",
    region: "Auvergne-Rhone-Alpes",
    styles: [
      "Chanson progressive",
      "Rock experimental"
    ],
    tagline: "Voix incantatoire, rock progressif et engagement radical.",
    hero: {
      alt: "Portrait illustre de Catherine Ribeiro",
      kind: "portrait",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1521337581100-8ca9a73a5f79?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "sapho",
    name: "Sapho",
    years: "1950-",
    region: "Maroc / France",
    styles: [
      "Chanson new wave",
      "Chanson mediterraneenne"
    ],
    tagline: "New wave, litterature et Mediterranee alternative.",
    hero: {
      alt: "Portrait illustre de Sapho",
      kind: "portrait",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "buzy",
    name: "Buzy",
    years: "1957-2023",
    region: "Ile-de-France",
    styles: [
      "Pop new wave",
      "Variete alternative"
    ],
    tagline: "Pop urbaine, new wave et energie 80.",
    hero: {
      alt: "Portrait illustre de Buzy",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1593078165899-c14f0fb8910f?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "pauline-croze",
    name: "Pauline Croze",
    years: "1979-",
    region: "Ile-de-France",
    styles: [
      "Folk pop",
      "Nouvelle scene"
    ],
    tagline: "Guitare, intimite et nouvelle scene feminine.",
    hero: {
      alt: "Portrait illustre de Pauline Croze",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "mouloudji",
    name: "Mouloudji",
    years: "1922-1994",
    region: "Ile-de-France",
    styles: [
      "Chanson rive gauche",
      "Chanson poetique"
    ],
    tagline: "Comedien chanteur, rive gauche et diction limpide.",
    hero: {
      alt: "Portrait illustre de Mouloudji",
      kind: "portrait",
      color: "#8f2d56",
      url: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "cora-vaucaire",
    name: "Cora Vaucaire",
    years: "1918-2011",
    region: "Ile-de-France",
    styles: [
      "Chanson poetique",
      "Chanson de film"
    ],
    tagline: "La dame blanche de Saint-Germain, cinema et poesie chantee.",
    hero: {
      alt: "Portrait illustre de Cora Vaucaire",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "jane-birkin",
    name: "Jane Birkin",
    years: "1946-2023",
    region: "Royaume-Uni / France",
    styles: [
      "Pop chanson",
      "Chanson intime"
    ],
    tagline: "Voix fragile, cinema, mode et galaxie Gainsbourg.",
    hero: {
      alt: "Portrait illustre de Jane Birkin",
      kind: "portrait",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "brigitte-bardot",
    name: "Brigitte Bardot",
    years: "1934-",
    region: "Ile-de-France",
    styles: [
      "Pop yeye",
      "Chanson de cinema"
    ],
    tagline: "Icone cinema, pop couleur et collaboration Gainsbourg.",
    hero: {
      alt: "Portrait illustre de Brigitte Bardot",
      kind: "portrait",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "isabelle-adjani",
    name: "Isabelle Adjani",
    years: "1955-",
    region: "Ile-de-France",
    styles: [
      "Pop froide",
      "Chanson de cinema"
    ],
    tagline: "Cinema, clip bleu et pop Gainsbourg.",
    hero: {
      alt: "Portrait illustre de Isabelle Adjani",
      kind: "portrait",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "starmania",
    name: "Starmania",
    years: "1978-",
    region: "France / Quebec",
    styles: [
      "Comedie musicale",
      "Rock opera"
    ],
    tagline: "La grande fresque rock francophone.",
    hero: {
      alt: "Portrait illustre de Starmania",
      kind: "portrait",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "michel-polnareff",
    name: "Michel Polnareff",
    years: "1944-",
    region: "Nouvelle-Aquitaine",
    styles: [
      "Pop baroque",
      "Variete pop"
    ],
    tagline: "Piano, lunettes blanches et pop flamboyante.",
    hero: {
      alt: "Portrait illustre de Michel Polnareff",
      kind: "portrait",
      color: "#ffb84d",
      url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "arthur-h",
    name: "Arthur H",
    years: "1966-",
    region: "Ile-de-France",
    styles: [
      "Chanson jazz",
      "Cabaret moderne"
    ],
    tagline: "Voix grave, jazz nocturne et imaginaire surrealiste.",
    hero: {
      alt: "Portrait illustre de Arthur H",
      kind: "portrait",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "miossec",
    name: "Miossec",
    years: "1964-",
    region: "Bretagne",
    styles: [
      "Chanson rock",
      "Nouvelle scene"
    ],
    tagline: "Brest, parole brute et chanson rock.",
    hero: {
      alt: "Portrait illustre de Miossec",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "les-chats-sauvages",
    name: "Les Chats Sauvages",
    years: "1961-1964",
    region: "Ile-de-France",
    styles: [
      "Rock yeye",
      "Twist"
    ],
    tagline: "Juke-box, twist et jeunesse rock française.",
    hero: {
      alt: "Portrait illustre de Les Chats Sauvages",
      kind: "portrait",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "dominique-a",
    name: "Dominique A",
    years: "1968-",
    region: "Pays de la Loire",
    styles: [
      "Chanson alternative",
      "Indie pop"
    ],
    tagline: "Minimalisme, home studio et nouvelle scene.",
    hero: {
      alt: "Portrait illustre de Dominique A",
      kind: "portrait",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "sanseverino",
    name: "Sanseverino",
    years: "1961-",
    region: "Ile-de-France",
    styles: [
      "Swing chanson",
      "Jazz manouche"
    ],
    tagline: "Guitare manouche, humour et swing urbain.",
    hero: {
      alt: "Portrait illustre de Sanseverino",
      kind: "portrait",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "thomas-fersen",
    name: "Thomas Fersen",
    years: "1963-",
    region: "Ile-de-France",
    styles: [
      "Chanson fantaisie",
      "Chanson narrative"
    ],
    tagline: "Bestiaire, contes et personnages de chanson.",
    hero: {
      alt: "Portrait illustre de Thomas Fersen",
      kind: "portrait",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "diams",
    name: "Diam’s",
    years: "1980-",
    region: "Ile-de-France",
    styles: [
      "Rap francais",
      "Rap introspectif"
    ],
    tagline: "Rap populaire, confession et generation 2000.",
    hero: {
      alt: "Portrait illustre de Diam’s",
      kind: "portrait",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "kery-james",
    name: "Kery James",
    years: "1977-",
    region: "Guadeloupe / Ile-de-France",
    styles: [
      "Rap conscient",
      "Rap engage"
    ],
    tagline: "Rap conscient, education populaire et parole politique.",
    hero: {
      alt: "Portrait illustre de Kery James",
      kind: "portrait",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "oxmo-puccino",
    name: "Oxmo Puccino",
    years: "1974-",
    region: "Mali / Ile-de-France",
    styles: [
      "Rap poetique",
      "Rap jazz"
    ],
    tagline: "Narration, jazz et rap d’auteur.",
    hero: {
      alt: "Portrait illustre de Oxmo Puccino",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "yelle",
    name: "Yelle",
    years: "2005-",
    region: "Bretagne",
    styles: [
      "Electro pop",
      "Pop internet"
    ],
    tagline: "Couleurs, web, danse et electro-pop exportee.",
    hero: {
      alt: "Portrait illustre de Yelle",
      kind: "portrait",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "dee-nasty",
    name: "Dee Nasty",
    years: "1960-",
    region: "Ile-de-France",
    styles: [
      "Hip-hop francais",
      "DJ"
    ],
    tagline: "DJ pionnier, radio libre et naissance du rap francais.",
    hero: {
      alt: "Portrait illustre de Dee Nasty",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "assassin",
    name: "Assassin",
    years: "1985-",
    region: "Ile-de-France",
    styles: [
      "Rap engage",
      "Hip-hop francais"
    ],
    tagline: "Independance, rap politique et scene alternative.",
    hero: {
      alt: "Portrait illustre de Assassin",
      kind: "portrait",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "arno",
    name: "Arno",
    years: "1949-2022",
    region: "Belgique",
    styles: [
      "Rock chanson",
      "Blues rock"
    ],
    tagline: "Voix rauque, Belgique cabaret et rock francophone brut.",
    hero: {
      alt: "Portrait illustre de Arno",
      kind: "portrait",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "felix-leclerc",
    name: "Felix Leclerc",
    years: "1914-1988",
    region: "Quebec",
    styles: [
      "Chanson quebecoise",
      "Folk"
    ],
    tagline: "Conteur, guitare et naissance de la chanson quebecoise moderne.",
    hero: {
      alt: "Portrait illustre de Felix Leclerc",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "gilles-vigneault",
    name: "Gilles Vigneault",
    years: "1928-",
    region: "Quebec",
    styles: [
      "Chanson quebecoise",
      "Chanson poetique"
    ],
    tagline: "Poete du pays, grands rassemblements et memoire francophone.",
    hero: {
      alt: "Portrait illustre de Gilles Vigneault",
      kind: "portrait",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "robert-charlebois",
    name: "Robert Charlebois",
    years: "1944-",
    region: "Quebec",
    styles: [
      "Rock quebecois",
      "Chanson psychédélique"
    ],
    tagline: "Electricite quebecoise, rock, humour et contre-culture.",
    hero: {
      alt: "Portrait illustre de Robert Charlebois",
      kind: "portrait",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "diane-dufresne",
    name: "Diane Dufresne",
    years: "1944-",
    region: "Quebec",
    styles: [
      "Rock theatre",
      "Comedie musicale"
    ],
    tagline: "Voix flamboyante, costumes et theatre rock.",
    hero: {
      alt: "Portrait illustre de Diane Dufresne",
      kind: "portrait",
      color: "#8f2d56",
      url: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "charlelie-couture",
    name: "CharlElie Couture",
    years: "1956-",
    region: "Grand Est",
    styles: [
      "Rock chanson",
      "Art rock"
    ],
    tagline: "Poemes rock, photographie et chanson graphique.",
    hero: {
      alt: "Portrait illustre de CharlElie Couture",
      kind: "portrait",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "mano-negra",
    name: "Mano Negra",
    years: "1987-1995",
    region: "Ile-de-France",
    styles: [
      "Rock alternatif",
      "Punk latin"
    ],
    tagline: "Rue, punk, latin et tourbillon mondial.",
    hero: {
      alt: "Portrait illustre de Mano Negra",
      kind: "portrait",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "les-tetes-raides",
    name: "Les Tetes Raides",
    years: "1984-",
    region: "Ile-de-France",
    styles: [
      "Chanson alternative",
      "Cabaret punk"
    ],
    tagline: "Accordeon, dessin, rue et poésie cabossée.",
    hero: {
      alt: "Portrait illustre de Les Tetes Raides",
      kind: "portrait",
      color: "#8f2d56",
      url: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "les-ogres-de-barback",
    name: "Les Ogres de Barback",
    years: "1994-",
    region: "Ile-de-France",
    styles: [
      "Chanson festive",
      "Chanson independante"
    ],
    tagline: "Famille, instruments, chapiteau et independance.",
    hero: {
      alt: "Portrait illustre de Les Ogres de Barback",
      kind: "portrait",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "la-rue-ketanou",
    name: "La Rue Ketanou",
    years: "1996-",
    region: "Ile-de-France",
    styles: [
      "Chanson festive",
      "Folk urbain"
    ],
    tagline: "Cafes-concerts, caravanes et refrains de route.",
    hero: {
      alt: "Portrait illustre de La Rue Ketanou",
      kind: "portrait",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "matmatah",
    name: "Matmatah",
    years: "1995-",
    region: "Bretagne",
    styles: [
      "Rock breton",
      "Rock francais"
    ],
    tagline: "Guitares brestoises, festivals et generation 90.",
    hero: {
      alt: "Portrait illustre de Matmatah",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "dionysos",
    name: "Dionysos",
    years: "1993-",
    region: "Auvergne-Rhone-Alpes",
    styles: [
      "Rock fantasque",
      "Indie rock"
    ],
    tagline: "Rock bondissant, litterature et imaginaire pop.",
    hero: {
      alt: "Portrait illustre de Dionysos",
      kind: "portrait",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "emily-loizeau",
    name: "Emily Loizeau",
    years: "1975-",
    region: "Ile-de-France",
    styles: [
      "Chanson piano",
      "Folk pop"
    ],
    tagline: "Piano, bilinguisme et theatre intime.",
    hero: {
      alt: "Portrait illustre de Emily Loizeau",
      kind: "portrait",
      color: "#ffb84d",
      url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "jeanne-cherhal",
    name: "Jeanne Cherhal",
    years: "1978-",
    region: "Pays de la Loire",
    styles: [
      "Chanson piano",
      "Nouvelle scene"
    ],
    tagline: "Piano, precision d’autrice et humour intime.",
    hero: {
      alt: "Portrait illustre de Jeanne Cherhal",
      kind: "portrait",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "keren-ann",
    name: "Keren Ann",
    years: "1974-",
    region: "Israel / Pays-Bas / France",
    styles: [
      "Pop feutree",
      "Folk pop"
    ],
    tagline: "Elegance discrete, pop feutree et chansons qui circulent.",
    hero: {
      alt: "Portrait illustre de Keren Ann",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "yael-naim",
    name: "Yael Naim",
    years: "1978-",
    region: "France / Israel",
    styles: [
      "Folk pop",
      "Pop internationale"
    ],
    tagline: "Folk lumineuse, multilingue et succes mondial.",
    hero: {
      alt: "Portrait illustre de Yael Naim",
      kind: "portrait",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "hindi-zahra",
    name: "Hindi Zahra",
    years: "1979-",
    region: "Maroc / France",
    styles: [
      "Folk soul",
      "World pop"
    ],
    tagline: "Folk, soul, Mediterranee et elegance artisanale.",
    hero: {
      alt: "Portrait illustre de Hindi Zahra",
      kind: "portrait",
      color: "#8f2d56",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "imany",
    name: "Imany",
    years: "1979-",
    region: "Provence-Alpes-Cote d’Azur",
    styles: [
      "Soul pop",
      "Pop internationale"
    ],
    tagline: "Voix grave, soul elegante et remixes mondiaux.",
    hero: {
      alt: "Portrait illustre de Imany",
      kind: "portrait",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "indila",
    name: "Indila",
    years: "1984-",
    region: "Ile-de-France",
    styles: [
      "Pop dramatique",
      "Pop urbaine"
    ],
    tagline: "Pop cinematographique, voix singuliere et succes streaming.",
    hero: {
      alt: "Portrait illustre de Indila",
      kind: "portrait",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "feu-chatterton",
    name: "Feu! Chatterton",
    years: "2011-",
    region: "Ile-de-France",
    styles: [
      "Rock litteraire",
      "Chanson rock"
    ],
    tagline: "Poesie, rock et grands refrains du present.",
    hero: {
      alt: "Portrait illustre de Feu! Chatterton",
      kind: "portrait",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1521337581100-8ca9a73a5f79?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "la-femme",
    name: "La Femme",
    years: "2010-",
    region: "Ile-de-France / Nouvelle-Aquitaine",
    styles: [
      "Surf pop",
      "Indie pop"
    ],
    tagline: "Surf, psyché, graphisme et culture indie française.",
    hero: {
      alt: "Portrait illustre de La Femme",
      kind: "portrait",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "lucienne-delyle",
    name: "Lucienne Delyle",
    years: "1913-1962",
    region: "Ile-de-France",
    styles: [
      "Chanson realiste",
      "Music-hall"
    ],
    tagline: "Voix de bal, radio et sentiment populaire.",
    hero: {
      alt: "Portrait illustre de Lucienne Delyle",
      kind: "portrait",
      color: "#8f2d56",
      url: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "suzy-solidor",
    name: "Suzy Solidor",
    years: "1900-1983",
    region: "Bretagne / Ile-de-France",
    styles: [
      "Cabaret",
      "Chanson maritime"
    ],
    tagline: "Cabaret marin, portraits et silhouette iconique.",
    hero: {
      alt: "Portrait illustre de Suzy Solidor",
      kind: "portrait",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "jacqueline-francois",
    name: "Jacqueline Francois",
    years: "1922-2009",
    region: "Ile-de-France",
    styles: [
      "Chanson parisienne",
      "Variete elegante"
    ],
    tagline: "Paris, radio et elegance d’apres-guerre.",
    hero: {
      alt: "Portrait illustre de Jacqueline Francois",
      kind: "portrait",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "patachou",
    name: "Patachou",
    years: "1918-2015",
    region: "Ile-de-France",
    styles: [
      "Cabaret rive gauche",
      "Chanson de texte"
    ],
    tagline: "Cabaret, Montmartre et passeuse d’auteurs.",
    hero: {
      alt: "Portrait illustre de Patachou",
      kind: "portrait",
      color: "#ffb84d",
      url: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "juliette",
    name: "Juliette",
    years: "1962-",
    region: "Occitanie",
    styles: [
      "Chanson cabaret",
      "Chanson de texte"
    ],
    tagline: "Piano, theatre, humour noir et virtuosite.",
    hero: {
      alt: "Portrait illustre de Juliette",
      kind: "portrait",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "pierre-vassiliu",
    name: "Pierre Vassiliu",
    years: "1937-2014",
    region: "Ile-de-France",
    styles: [
      "Pop tropicale",
      "Chanson humour"
    ],
    tagline: "Nonchalance, voyages et pop solaire.",
    hero: {
      alt: "Portrait illustre de Pierre Vassiliu",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "gerard-lenorman",
    name: "Gerard Lenorman",
    years: "1945-",
    region: "Normandie",
    styles: [
      "Variete pop",
      "Ballade populaire"
    ],
    tagline: "Ballades tendres, television et grands refrains familiaux.",
    hero: {
      alt: "Portrait illustre de Gerard Lenorman",
      kind: "portrait",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "michel-jonasz",
    name: "Michel Jonasz",
    years: "1947-",
    region: "Ile-de-France",
    styles: [
      "Jazz chanson",
      "Soul francaise"
    ],
    tagline: "Groove, piano, nuit et chanson urbaine.",
    hero: {
      alt: "Portrait illustre de Michel Jonasz",
      kind: "portrait",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "nicole-croisille",
    name: "Nicole Croisille",
    years: "1936-",
    region: "Ile-de-France",
    styles: [
      "Chanson de film",
      "Jazz chanson"
    ],
    tagline: "Grande voix, cinema, danse et television.",
    hero: {
      alt: "Portrait illustre de Nicole Croisille",
      kind: "portrait",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "nicole-rieu",
    name: "Nicole Rieu",
    years: "1949-",
    region: "Ile-de-France",
    styles: [
      "Folk variete",
      "Chanson humaniste"
    ],
    tagline: "Folk sensible, Eurovision et ecriture lumineuse.",
    hero: {
      alt: "Portrait illustre de Nicole Rieu",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "rika-zarai",
    name: "Rika Zarai",
    years: "1938-2020",
    region: "Israel / France",
    styles: [
      "Variete folklorique",
      "Chanson populaire"
    ],
    tagline: "Folklore pop, television couleur et danses populaires.",
    hero: {
      alt: "Portrait illustre de Rika Zarai",
      kind: "portrait",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "marie-paule-belle",
    name: "Marie-Paule Belle",
    years: "1946-",
    region: "Ile-de-France",
    styles: [
      "Chanson piano",
      "Cabaret"
    ],
    tagline: "Piano, humour, autrice et Paris chante.",
    hero: {
      alt: "Portrait illustre de Marie-Paule Belle",
      kind: "portrait",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "chantal-goya",
    name: "Chantal Goya",
    years: "1942-",
    region: "Ile-de-France",
    styles: [
      "Chanson pour enfants",
      "Spectacle musical"
    ],
    tagline: "Enfance, costumes et grands spectacles familiaux.",
    hero: {
      alt: "Portrait illustre de Chantal Goya",
      kind: "portrait",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "carlos",
    name: "Carlos",
    years: "1943-2008",
    region: "Ile-de-France",
    styles: [
      "Chanson festive",
      "Variete humour"
    ],
    tagline: "Humour, television et refrains collectifs.",
    hero: {
      alt: "Portrait illustre de Carlos",
      kind: "portrait",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "annie-cordy",
    name: "Annie Cordy",
    years: "1928-2020",
    region: "Belgique / France",
    styles: [
      "Music-hall",
      "Chanson fantaisie"
    ],
    tagline: "Energie belge, music-hall et personnages populaires.",
    hero: {
      alt: "Portrait illustre de Annie Cordy",
      kind: "portrait",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "line-renaud",
    name: "Line Renaud",
    years: "1928-",
    region: "Hauts-de-France",
    styles: [
      "Music-hall",
      "Revue"
    ],
    tagline: "Casino de Paris, revue et grande carriere populaire.",
    hero: {
      alt: "Portrait illustre de Line Renaud",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "philippe-clay",
    name: "Philippe Clay",
    years: "1927-2007",
    region: "Ile-de-France",
    styles: [
      "Chanson theatrale",
      "Cabaret"
    ],
    tagline: "Silhouette, geste et cabaret noir.",
    hero: {
      alt: "Portrait illustre de Philippe Clay",
      kind: "portrait",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "guy-beart",
    name: "Guy Beart",
    years: "1930-2015",
    region: "Ile-de-France",
    styles: [
      "Chanson poetique",
      "Chanson de texte"
    ],
    tagline: "Guitare, poésie claire et transmission populaire.",
    hero: {
      alt: "Portrait illustre de Guy Beart",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "graeme-allwright",
    name: "Graeme Allwright",
    years: "1926-2020",
    region: "Nouvelle-Zelande / France",
    styles: [
      "Folk engage",
      "Chanson folk"
    ],
    tagline: "Adaptations folk, douceur militante et transmission.",
    hero: {
      alt: "Portrait illustre de Graeme Allwright",
      kind: "portrait",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "henri-tachan",
    name: "Henri Tachan",
    years: "1939-2023",
    region: "Ile-de-France",
    styles: [
      "Chanson satirique",
      "Chanson engagee"
    ],
    tagline: "Mordant, humanisme et cabaret critique.",
    hero: {
      alt: "Portrait illustre de Henri Tachan",
      kind: "portrait",
      color: "#8f2d56",
      url: "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "alan-stivell",
    name: "Alan Stivell",
    years: "1944-",
    region: "Bretagne",
    styles: [
      "Celtique",
      "Folk breton"
    ],
    tagline: "Harpe celtique, renaissance bretonne et scene mondiale.",
    hero: {
      alt: "Portrait illustre de Alan Stivell",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "dan-ar-braz",
    name: "Dan Ar Braz",
    years: "1949-",
    region: "Bretagne",
    styles: [
      "Celtique rock",
      "Guitare bretonne"
    ],
    tagline: "Guitare celtique et grands ensembles transfrontieres.",
    hero: {
      alt: "Portrait illustre de Dan Ar Braz",
      kind: "portrait",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1521337581100-8ca9a73a5f79?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "gilles-servat",
    name: "Gilles Servat",
    years: "1945-",
    region: "Bretagne",
    styles: [
      "Chanson bretonne",
      "Chanson engagee"
    ],
    tagline: "Hermine, engagement et voix de Bretagne.",
    hero: {
      alt: "Portrait illustre de Gilles Servat",
      kind: "portrait",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "tri-yann",
    name: "Tri Yann",
    years: "1969-",
    region: "Bretagne",
    styles: [
      "Folk breton",
      "Celtique"
    ],
    tagline: "Groupe de scene, tradition bretonne et refrains collectifs.",
    hero: {
      alt: "Portrait illustre de Tri Yann",
      kind: "portrait",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "soldat-louis",
    name: "Soldat Louis",
    years: "1987-",
    region: "Bretagne",
    styles: [
      "Rock marin",
      "Chanson festive"
    ],
    tagline: "Ports, guitares et refrains de bordee.",
    hero: {
      alt: "Portrait illustre de Soldat Louis",
      kind: "portrait",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1521337581100-8ca9a73a5f79?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "massilia-sound-system",
    name: "Massilia Sound System",
    years: "1984-",
    region: "Provence-Alpes-Cote d’Azur",
    styles: [
      "Ragga occitan",
      "Chanson marseillaise"
    ],
    tagline: "Marseille, occitan, sound system et fête politique.",
    hero: {
      alt: "Portrait illustre de Massilia Sound System",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "moussu-t-e-lei-jovents",
    name: "Moussu T e lei Jovents",
    years: "2004-",
    region: "Provence-Alpes-Cote d’Azur",
    styles: [
      "Chanson occitane",
      "Blues mediterraneen"
    ],
    tagline: "Marseille acoustique, langue d’oc et blues de port.",
    hero: {
      alt: "Portrait illustre de Moussu T e lei Jovents",
      kind: "portrait",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "fabulous-trobadors",
    name: "Fabulous Trobadors",
    years: "1987-",
    region: "Occitanie",
    styles: [
      "Tchatche occitane",
      "Chanson engagee"
    ],
    tagline: "Toulouse, tchatche, rythme vocal et mobilisation.",
    hero: {
      alt: "Portrait illustre de Fabulous Trobadors",
      kind: "portrait",
      color: "#8f2d56",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "les-negresses-vertes",
    name: "Les Negresses Vertes",
    years: "1987-2001",
    region: "Ile-de-France",
    styles: [
      "Rock metisse",
      "Alternative"
    ],
    tagline: "Accordeon punk, fête urbaine et world-chanson.",
    hero: {
      alt: "Portrait illustre de Les Negresses Vertes",
      kind: "portrait",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "lo-jo",
    name: "Lo Jo",
    years: "1982-",
    region: "Pays de la Loire",
    styles: [
      "World chanson",
      "Chanson nomade"
    ],
    tagline: "Caravanes, poésie et musiques du monde.",
    hero: {
      alt: "Portrait illustre de Lo Jo",
      kind: "portrait",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1521337581100-8ca9a73a5f79?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "tete",
    name: "Tete",
    years: "1975-",
    region: "Ile-de-France",
    styles: [
      "Folk pop",
      "Nouvelle scene"
    ],
    tagline: "Guitare, douceur automnale et pop acoustique.",
    hero: {
      alt: "Portrait illustre de Tete",
      kind: "portrait",
      color: "#ffb84d",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "ridan",
    name: "Ridan",
    years: "1975-",
    region: "Ile-de-France",
    styles: [
      "Chanson engagee",
      "Folk pop"
    ],
    tagline: "Poésie classique, ecologie et chanson populaire.",
    hero: {
      alt: "Portrait illustre de Ridan",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "cali",
    name: "Cali",
    years: "1968-",
    region: "Occitanie",
    styles: [
      "Chanson rock",
      "Nouvelle scene"
    ],
    tagline: "Urgence sentimentale, scene et refrains electriques.",
    hero: {
      alt: "Portrait illustre de Cali",
      kind: "portrait",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1521337581100-8ca9a73a5f79?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "damien-saez",
    name: "Damien Saez",
    years: "1977-",
    region: "Bourgogne-Franche-Comte",
    styles: [
      "Rock contestataire",
      "Chanson rock"
    ],
    tagline: "Rock frontal, poesie noire et generation 1999.",
    hero: {
      alt: "Portrait illustre de Damien Saez",
      kind: "portrait",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "eiffel",
    name: "Eiffel",
    years: "1998-",
    region: "Nouvelle-Aquitaine",
    styles: [
      "Rock francais",
      "Rock litteraire"
    ],
    tagline: "Guitares nerveuses, textes tendus et scene rock.",
    hero: {
      alt: "Portrait illustre de Eiffel",
      kind: "portrait",
      color: "#8f2d56",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "luke",
    name: "Luke",
    years: "1998-",
    region: "Nouvelle-Aquitaine",
    styles: [
      "Rock alternatif",
      "Rock francais"
    ],
    tagline: "Rock sombre, radio et energie post-alternative.",
    hero: {
      alt: "Portrait illustre de Luke",
      kind: "portrait",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1521337581100-8ca9a73a5f79?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "les-wampas",
    name: "Les Wampas",
    years: "1983-",
    region: "Ile-de-France",
    styles: [
      "Punk rock",
      "Rock alternatif"
    ],
    tagline: "Punk joyeux, humour et concerts indisciplines.",
    hero: {
      alt: "Portrait illustre de Les Wampas",
      kind: "portrait",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "daran",
    name: "Daran",
    years: "1959-",
    region: "Ile-de-France / Quebec",
    styles: [
      "Pop rock",
      "Chanson de route"
    ],
    tagline: "Guitares, solitude et pop-rock de route.",
    hero: {
      alt: "Portrait illustre de Daran",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "blankass",
    name: "Blankass",
    years: "1990-",
    region: "Centre-Val de Loire",
    styles: [
      "Rock folk",
      "Pop rock"
    ],
    tagline: "Accordeon, guitares et melancolie regionale.",
    hero: {
      alt: "Portrait illustre de Blankass",
      kind: "portrait",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "astonvilla",
    name: "Astonvilla",
    years: "1994-",
    region: "Ile-de-France",
    styles: [
      "Rock francais",
      "Alternative"
    ],
    tagline: "Rock parisien, guitares et tension melodique.",
    hero: {
      alt: "Portrait illustre de Astonvilla",
      kind: "portrait",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1521337581100-8ca9a73a5f79?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "zoufris-maracas",
    name: "Zoufris Maracas",
    years: "2007-",
    region: "Ile-de-France",
    styles: [
      "Chanson metissee",
      "Chanson festive"
    ],
    tagline: "Swing social, rythmes latins et festivals actuels.",
    hero: {
      alt: "Portrait illustre de Zoufris Maracas",
      kind: "portrait",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "vincent-delerm",
    name: "Vincent Delerm",
    years: "1976-",
    region: "Normandie",
    styles: [
      "Chanson piano",
      "Nouvelle scene"
    ],
    tagline: "Piano, cinema, details intimes et humour discret.",
    hero: {
      alt: "Portrait illustre de Vincent Delerm",
      kind: "portrait",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "alex-beaupain",
    name: "Alex Beaupain",
    years: "1974-",
    region: "Ile-de-France",
    styles: [
      "Chanson de film",
      "Pop orchestree"
    ],
    tagline: "Cinema chanté, piano et mélancolie contemporaine.",
    hero: {
      alt: "Portrait illustre de Alex Beaupain",
      kind: "portrait",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "da-silva",
    name: "Da Silva",
    years: "1976-",
    region: "Bretagne",
    styles: [
      "Chanson rock",
      "Folk pop"
    ],
    tagline: "Guitares rugueuses, sensibilité et nouvelle scene.",
    hero: {
      alt: "Portrait illustre de Da Silva",
      kind: "portrait",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "albin-de-la-simone",
    name: "Albin de la Simone",
    years: "1970-",
    region: "Ile-de-France",
    styles: [
      "Pop feutree",
      "Chanson piano"
    ],
    tagline: "Arrangements delicats, studio et pop d’auteur.",
    hero: {
      alt: "Portrait illustre de Albin de la Simone",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "bertrand-belin",
    name: "Bertrand Belin",
    years: "1970-",
    region: "Bretagne",
    styles: [
      "Chanson rock minimaliste",
      "Chanson litteraire"
    ],
    tagline: "Voix grave, guitare minimale et ecriture romanesque.",
    hero: {
      alt: "Portrait illustre de Bertrand Belin",
      kind: "portrait",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "la-grande-sophie",
    name: "La Grande Sophie",
    years: "1969-",
    region: "Ile-de-France",
    styles: [
      "Pop rock",
      "Nouvelle scene"
    ],
    tagline: "Guitare, energie claire et pop d’autrice.",
    hero: {
      alt: "Portrait illustre de La Grande Sophie",
      kind: "portrait",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "moriarty",
    name: "Moriarty",
    years: "1995-",
    region: "France / Etats-Unis",
    styles: [
      "Folk blues",
      "Indie folk"
    ],
    tagline: "Folk fantomatique, route et scène acoustique.",
    hero: {
      alt: "Portrait illustre de Moriarty",
      kind: "portrait",
      color: "#8f2d56",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "melissa-laveaux",
    name: "Mélissa Laveaux",
    years: "1985-",
    region: "Canada / Haiti / France",
    styles: [
      "Folk soul",
      "World pop"
    ],
    tagline: "Guitare, Haiti, Canada et folk-soul nerveuse.",
    hero: {
      alt: "Portrait illustre de Mélissa Laveaux",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "rose",
    name: "Rose",
    years: "1978-",
    region: "Provence-Alpes-Cote d’Azur",
    styles: [
      "Folk pop",
      "Chanson intime"
    ],
    tagline: "Guitare, quotidien et folk-pop directe.",
    hero: {
      alt: "Portrait illustre de Rose",
      kind: "portrait",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "hk-et-les-saltimbanks",
    name: "HK et les Saltimbanks",
    years: "2009-",
    region: "Hauts-de-France",
    styles: [
      "Chanson engagee",
      "Chanson festive"
    ],
    tagline: "Bal populaire, luttes sociales et refrains collectifs.",
    hero: {
      alt: "Portrait illustre de HK et les Saltimbanks",
      kind: "portrait",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "l-imperatrice",
    name: "L'Imperatrice",
    years: "2012-",
    region: "Ile-de-France",
    styles: [
      "Electro pop",
      "Disco pop"
    ],
    tagline: "Disco française, groove chic et clips soignés.",
    hero: {
      alt: "Portrait illustre de L'Imperatrice",
      kind: "portrait",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "vendredi-sur-mer",
    name: "Vendredi sur Mer",
    years: "1995-",
    region: "Suisse / France",
    styles: [
      "Pop spoken",
      "Electro pop"
    ],
    tagline: "Voix parlée, nuit, mode et pop suisse.",
    hero: {
      alt: "Portrait illustre de Vendredi sur Mer",
      kind: "portrait",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "fishbach",
    name: "Fishbach",
    years: "1991-",
    region: "Grand Est",
    styles: [
      "Pop new wave",
      "Chanson dramatique"
    ],
    tagline: "Voix grave, synthés sombres et théâtre pop.",
    hero: {
      alt: "Portrait illustre de Fishbach",
      kind: "portrait",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "juniore",
    name: "Juniore",
    years: "2013-",
    region: "Ile-de-France",
    styles: [
      "Yeye garage",
      "Indie pop"
    ],
    tagline: "Yéyé fantôme, surf garage et ironie pop.",
    hero: {
      alt: "Portrait illustre de Juniore",
      kind: "portrait",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "requin-chagrin",
    name: "Requin Chagrin",
    years: "2015-",
    region: "Provence-Alpes-Cote d’Azur",
    styles: [
      "Dream pop",
      "Surf pop"
    ],
    tagline: "Guitares reverberees, mer et melancolie indie.",
    hero: {
      alt: "Portrait illustre de Requin Chagrin",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "agar-agar",
    name: "Agar Agar",
    years: "2015-",
    region: "Ile-de-France",
    styles: [
      "Electro pop",
      "Synth pop"
    ],
    tagline: "Synthés analogiques, voix froide et club indie.",
    hero: {
      alt: "Portrait illustre de Agar Agar",
      kind: "portrait",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "polo-pan",
    name: "Polo & Pan",
    years: "2013-",
    region: "Ile-de-France",
    styles: [
      "Electro tropicale",
      "French touch"
    ],
    tagline: "Voyage electro, exotica et clips animés.",
    hero: {
      alt: "Portrait illustre de Polo & Pan",
      kind: "portrait",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "bon-entendeur",
    name: "Bon Entendeur",
    years: "2012-",
    region: "Ile-de-France",
    styles: [
      "Electro chanson",
      "DJ collectif"
    ],
    tagline: "Samples francophones, patrimoine et dancefloor.",
    hero: {
      alt: "Portrait illustre de Bon Entendeur",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "therapie-taxi",
    name: "Therapie Taxi",
    years: "2013-2021",
    region: "Ile-de-France",
    styles: [
      "Pop urbaine",
      "Electro pop"
    ],
    tagline: "Pop insolente, streaming et génération internet.",
    hero: {
      alt: "Portrait illustre de Therapie Taxi",
      kind: "portrait",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "videoclub",
    name: "Videoclub",
    years: "2018-2021",
    region: "Pays de la Loire",
    styles: [
      "Synth-pop",
      "Pop virale"
    ],
    tagline: "Duo adolescent, nostalgie 80 et streaming mondial.",
    hero: {
      alt: "Portrait illustre de Videoclub",
      kind: "portrait",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1593078165899-c14f0fb8910f?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "alice-et-moi",
    name: "Alice et Moi",
    years: "2017-",
    region: "Ile-de-France",
    styles: [
      "Pop digitale",
      "Electro pop"
    ],
    tagline: "Pop web, image de soi et clips generationnels.",
    hero: {
      alt: "Portrait illustre de Alice et Moi",
      kind: "portrait",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "voyou",
    name: "Voyou",
    years: "2017-",
    region: "Pays de la Loire",
    styles: [
      "Pop chanson",
      "Indie pop"
    ],
    tagline: "Cuivres, ville douce et pop d’auteur.",
    hero: {
      alt: "Portrait illustre de Voyou",
      kind: "portrait",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "malik-djoudi",
    name: "Malik Djoudi",
    years: "1979-",
    region: "Nouvelle-Aquitaine",
    styles: [
      "Electro pop",
      "Pop d’auteur"
    ],
    tagline: "Voix androgyne, synthés doux et cinema interieur.",
    hero: {
      alt: "Portrait illustre de Malik Djoudi",
      kind: "portrait",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "herve",
    name: "Hervé",
    years: "1991-",
    region: "Bretagne",
    styles: [
      "Electro chanson",
      "Pop physique"
    ],
    tagline: "Machines, corps et chanson nerveuse.",
    hero: {
      alt: "Portrait illustre de Hervé",
      kind: "portrait",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "terrenoire",
    name: "Terrenoire",
    years: "2017-",
    region: "Auvergne-Rhone-Alpes",
    styles: [
      "Chanson electro",
      "Pop sensible"
    ],
    tagline: "Fratrie, Saint-Etienne et electro sensible.",
    hero: {
      alt: "Portrait illustre de Terrenoire",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "tim-dup",
    name: "Tim Dup",
    years: "1994-",
    region: "Ile-de-France",
    styles: [
      "Chanson piano electro",
      "Nouvelle scene"
    ],
    tagline: "Piano urbain, machines douces et generation 2010.",
    hero: {
      alt: "Portrait illustre de Tim Dup",
      kind: "portrait",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "november-ultra",
    name: "November Ultra",
    years: "1988-",
    region: "Ile-de-France",
    styles: [
      "Bedroom pop",
      "Pop intime"
    ],
    tagline: "Chambre, douceur vocale et pop internationale.",
    hero: {
      alt: "Portrait illustre de November Ultra",
      kind: "portrait",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "silly-boy-blue",
    name: "Silly Boy Blue",
    years: "1996-",
    region: "Pays de la Loire",
    styles: [
      "Dream pop",
      "Indie pop"
    ],
    tagline: "Pop nocturne, adolescences et clips cinematographiques.",
    hero: {
      alt: "Portrait illustre de Silly Boy Blue",
      kind: "portrait",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "suzane",
    name: "Suzane",
    years: "1990-",
    region: "Provence-Alpes-Cote d’Azur",
    styles: [
      "Electro chanson",
      "Chanson engagee"
    ],
    tagline: "Danse, machines, theatre et engagement pop.",
    hero: {
      alt: "Portrait illustre de Suzane",
      kind: "portrait",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1521337581100-8ca9a73a5f79?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "aloise-sauvage",
    name: "Aloise Sauvage",
    years: "1992-",
    region: "Ile-de-France",
    styles: [
      "Pop rap",
      "Performance"
    ],
    tagline: "Rap, chanson, danse et corps en mouvement.",
    hero: {
      alt: "Portrait illustre de Aloise Sauvage",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1521337581100-8ca9a73a5f79?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "luidji",
    name: "Luidji",
    years: "1991-",
    region: "Ile-de-France",
    styles: [
      "Rap melodique",
      "R&B francais"
    ],
    tagline: "Rap intime, R&B nocturne et narration sensible.",
    hero: {
      alt: "Portrait illustre de Luidji",
      kind: "portrait",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "josman",
    name: "Josman",
    years: "1992-",
    region: "Centre-Val de Loire",
    styles: [
      "Rap francais",
      "Rap independant"
    ],
    tagline: "Flow technique, independance et atmospheres nocturnes.",
    hero: {
      alt: "Portrait illustre de Josman",
      kind: "portrait",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "nekfeu",
    name: "Nekfeu",
    years: "1990-",
    region: "Ile-de-France",
    styles: [
      "Rap francais",
      "Rap d’auteur"
    ],
    tagline: "Collectifs, ecriture vive et rap devenu central.",
    hero: {
      alt: "Portrait illustre de Nekfeu",
      kind: "portrait",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "pnl",
    name: "PNL",
    years: "2014-",
    region: "Ile-de-France",
    styles: [
      "Cloud rap",
      "Rap independant"
    ],
    tagline: "Independance, clips-cinema et melancolie cloud.",
    hero: {
      alt: "Portrait illustre de PNL",
      kind: "portrait",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "sch",
    name: "SCH",
    years: "1993-",
    region: "Provence-Alpes-Cote d’Azur",
    styles: [
      "Rap sombre",
      "Trap francaise"
    ],
    tagline: "Voix grave, Marseille et cinema noir.",
    hero: {
      alt: "Portrait illustre de SCH",
      kind: "portrait",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "ninho",
    name: "Ninho",
    years: "1996-",
    region: "Ile-de-France",
    styles: [
      "Rap melodique",
      "Rap francais"
    ],
    tagline: "Certifications, refrains et domination streaming.",
    hero: {
      alt: "Portrait illustre de Ninho",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "damso",
    name: "Damso",
    years: "1992-",
    region: "Belgique / Congo",
    styles: [
      "Rap belge",
      "Rap introspectif"
    ],
    tagline: "Ecriture sombre, Belgique et rap introspectif massif.",
    hero: {
      alt: "Portrait illustre de Damso",
      kind: "portrait",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "hamza",
    name: "Hamza",
    years: "1994-",
    region: "Belgique",
    styles: [
      "Rap R&B",
      "Trap melodique"
    ],
    tagline: "Bruxelles, R&B trap et mélodies internationales.",
    hero: {
      alt: "Portrait illustre de Hamza",
      kind: "portrait",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "plk",
    name: "PLK",
    years: "1997-",
    region: "Ile-de-France",
    styles: [
      "Rap francais",
      "Rap technique"
    ],
    tagline: "Freestyle, efficacité et génération streaming.",
    hero: {
      alt: "Portrait illustre de PLK",
      kind: "portrait",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "vald",
    name: "Vald",
    years: "1992-",
    region: "Ile-de-France",
    styles: [
      "Rap alternatif",
      "Rap internet"
    ],
    tagline: "Absurde, internet et refrains obliques.",
    hero: {
      alt: "Portrait illustre de Vald",
      kind: "portrait",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "soolking",
    name: "Soolking",
    years: "1989-",
    region: "Algerie / France",
    styles: [
      "Rai pop urbain",
      "Rap francophone"
    ],
    tagline: "Rai, rap, diaspora et tubes internationaux.",
    hero: {
      alt: "Portrait illustre de Soolking",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "niska",
    name: "Niska",
    years: "1994-",
    region: "Ile-de-France",
    styles: [
      "Rap club",
      "Rap francais"
    ],
    tagline: "Danse, viralité et énergie rap de foule.",
    hero: {
      alt: "Portrait illustre de Niska",
      kind: "portrait",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "lacrim",
    name: "Lacrim",
    years: "1985-",
    region: "Ile-de-France",
    styles: [
      "Rap hardcore",
      "Rap de rue"
    ],
    tagline: "Rue, cinema noir et rap de personnage.",
    hero: {
      alt: "Portrait illustre de Lacrim",
      kind: "portrait",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "leto",
    name: "Leto",
    years: "1995-",
    region: "Ile-de-France",
    styles: [
      "Trap francaise",
      "Rap francais"
    ],
    tagline: "Trap parisienne, collectif et refrains efficaces.",
    hero: {
      alt: "Portrait illustre de Leto",
      kind: "portrait",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "zola",
    name: "Zola",
    years: "1999-",
    region: "Ile-de-France",
    styles: [
      "Trap melodique",
      "Rap francais"
    ],
    tagline: "Trap compacte, clips rapides et génération post-2018.",
    hero: {
      alt: "Portrait illustre de Zola",
      kind: "portrait",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "tiakola",
    name: "Tiakola",
    years: "1999-",
    region: "Ile-de-France",
    styles: [
      "Afro pop rap",
      "Rap melodique"
    ],
    tagline: "Voix fluide, afro-pop et refrains de featuring.",
    hero: {
      alt: "Portrait illustre de Tiakola",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "gazo",
    name: "Gazo",
    years: "1994-",
    region: "Ile-de-France",
    styles: [
      "Drill francaise",
      "Rap francais"
    ],
    tagline: "Drill sombre, voix grave et clubs 2020.",
    hero: {
      alt: "Portrait illustre de Gazo",
      kind: "portrait",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "sdm",
    name: "SDM",
    years: "1995-",
    region: "Ile-de-France",
    styles: [
      "Rap francais",
      "Trap"
    ],
    tagline: "Rap populaire, label fort et refrains viraux.",
    hero: {
      alt: "Portrait illustre de SDM",
      kind: "portrait",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "dinos",
    name: "Dinos",
    years: "1993-",
    region: "Ile-de-France",
    styles: [
      "Rap introspectif",
      "Rap d’auteur"
    ],
    tagline: "Mélancolie, references et rap litteraire.",
    hero: {
      alt: "Portrait illustre de Dinos",
      kind: "portrait",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "disiz",
    name: "Disiz",
    years: "1978-",
    region: "Ile-de-France",
    styles: [
      "Rap francais",
      "Pop rap"
    ],
    tagline: "Rap narratif, virages pop et longue trajectoire.",
    hero: {
      alt: "Portrait illustre de Disiz",
      kind: "portrait",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "chilla",
    name: "Chilla",
    years: "1994-",
    region: "Auvergne-Rhone-Alpes",
    styles: [
      "Rap engage",
      "Rap francais"
    ],
    tagline: "Rap féministe, technique et parole directe.",
    hero: {
      alt: "Portrait illustre de Chilla",
      kind: "portrait",
      color: "#8f2d56",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "lous-and-the-yakuza",
    name: "Lous and The Yakuza",
    years: "1996-",
    region: "Belgique / Congo",
    styles: [
      "Pop rap francophone",
      "R&B alternatif"
    ],
    tagline: "Diaspora, mode, pop rap et voix internationale.",
    hero: {
      alt: "Portrait illustre de Lous and The Yakuza",
      kind: "portrait",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "kalika",
    name: "Kalika",
    years: "1998-",
    region: "Provence-Alpes-Cote d’Azur",
    styles: [
      "Pop punk chanson",
      "Pop engagee"
    ],
    tagline: "Pop frontale, corps et refrains feministes.",
    hero: {
      alt: "Portrait illustre de Kalika",
      kind: "portrait",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1521337581100-8ca9a73a5f79?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "meryl",
    name: "Meryl",
    years: "1995-",
    region: "Martinique",
    styles: [
      "Dancehall rap",
      "Pop urbaine"
    ],
    tagline: "Martinique, dancehall et rap francophone caribeen.",
    hero: {
      alt: "Portrait illustre de Meryl",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "le-juiice",
    name: "Le Juiice",
    years: "1993-",
    region: "Ile-de-France",
    styles: [
      "Trap francaise",
      "Rap independant"
    ],
    tagline: "Trap feminine, entrepreneuriat et independance.",
    hero: {
      alt: "Portrait illustre de Le Juiice",
      kind: "portrait",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "jokair",
    name: "Jok'air",
    years: "1991-",
    region: "Ile-de-France",
    styles: [
      "Rap R&B",
      "Pop urbaine"
    ],
    tagline: "Romance, second degre et rap R&B parisien.",
    hero: {
      alt: "Portrait illustre de Jok'air",
      kind: "portrait",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "s-pri-noir",
    name: "S.Pri Noir",
    years: "1986-",
    region: "Ile-de-France",
    styles: [
      "Rap francais",
      "Rap mode"
    ],
    tagline: "Rap élégant, mode et écriture parisienne.",
    hero: {
      alt: "Portrait illustre de S.Pri Noir",
      kind: "portrait",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "shay",
    name: "Shay",
    years: "1990-",
    region: "Belgique",
    styles: [
      "Rap belge",
      "Pop urbaine"
    ],
    tagline: "Rap féminin belge, mode et attitude pop.",
    hero: {
      alt: "Portrait illustre de Shay",
      kind: "portrait",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "freeze-corleone",
    name: "Freeze Corleone",
    years: "1992-",
    region: "Ile-de-France / Senegal",
    styles: [
      "Drill francaise",
      "Rap technique"
    ],
    tagline: "Drill froide, references et codes souterrains.",
    hero: {
      alt: "Portrait illustre de Freeze Corleone",
      kind: "portrait",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "laylow",
    name: "Laylow",
    years: "1993-",
    region: "Occitanie",
    styles: [
      "Rap cyber pop",
      "Rap cinematographique"
    ],
    tagline: "Albums-concepts, avatars et rap immersif.",
    hero: {
      alt: "Portrait illustre de Laylow",
      kind: "portrait",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "maes",
    name: "Maes",
    years: "1995-",
    region: "Ile-de-France",
    styles: [
      "Rap melodique",
      "Rap de rue"
    ],
    tagline: "Sevran, melodie de rue et hits certifies.",
    hero: {
      alt: "Portrait illustre de Maes",
      kind: "portrait",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "zaho-de-sagazan",
    name: "Zaho de Sagazan",
    years: "1999-",
    region: "Pays de la Loire",
    styles: [
      "Chanson electro",
      "Pop dramatique"
    ],
    tagline: "Piano, machines et intensite de scene.",
    hero: {
      alt: "Portrait illustre de Zaho de Sagazan",
      kind: "portrait",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "clara-yse",
    name: "Clara Ysé",
    years: "1992-",
    region: "Ile-de-France",
    styles: [
      "Chanson poetique",
      "Folk pop"
    ],
    tagline: "Voix littéraire, folk et intensite intime.",
    hero: {
      alt: "Portrait illustre de Clara Ysé",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "pierre-de-maere",
    name: "Pierre de Maere",
    years: "2001-",
    region: "Belgique",
    styles: [
      "Pop theatrale",
      "Pop belge"
    ],
    tagline: "Mode, voix claire et pop belge flamboyante.",
    hero: {
      alt: "Portrait illustre de Pierre de Maere",
      kind: "portrait",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "yoa",
    name: "Yoa",
    years: "1999-",
    region: "Ile-de-France",
    styles: [
      "Pop alternative",
      "Bedroom pop"
    ],
    tagline: "Journal intime, machines et pop fragile.",
    hero: {
      alt: "Portrait illustre de Yoa",
      kind: "portrait",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "styleto",
    name: "Styleto",
    years: "1998-",
    region: "Auvergne-Rhone-Alpes",
    styles: [
      "Pop chanson",
      "Pop acoustique"
    ],
    tagline: "Reseaux, guitare et pop sensible.",
    hero: {
      alt: "Portrait illustre de Styleto",
      kind: "portrait",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "ade",
    name: "Adé",
    years: "1995-",
    region: "Ile-de-France",
    styles: [
      "Pop folk",
      "Pop chanson"
    ],
    tagline: "Solo lumineux apres la pop urbaine de groupe.",
    hero: {
      alt: "Portrait illustre de Adé",
      kind: "portrait",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "mentissa",
    name: "Mentissa",
    years: "1999-",
    region: "Belgique",
    styles: [
      "Pop vocale",
      "Variete contemporaine"
    ],
    tagline: "Grande voix belge et chanson populaire recente.",
    hero: {
      alt: "Portrait illustre de Mentissa",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "ben-mazue",
    name: "Ben Mazué",
    years: "1981-",
    region: "Provence-Alpes-Cote d’Azur",
    styles: [
      "Chanson spoken pop",
      "Chanson intime"
    ],
    tagline: "Parole, therapie sentimentale et scene d’auteur.",
    hero: {
      alt: "Portrait illustre de Ben Mazué",
      kind: "portrait",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "gael-faye",
    name: "Gaël Faye",
    years: "1982-",
    region: "Rwanda / Burundi / France",
    styles: [
      "Rap chanson",
      "Spoken word"
    ],
    tagline: "Memoire, littérature et rap francophone.",
    hero: {
      alt: "Portrait illustre de Gaël Faye",
      kind: "portrait",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "fauve",
    name: "FAUVE",
    years: "2010-2015",
    region: "Ile-de-France",
    styles: [
      "Spoken rock",
      "Collectif web"
    ],
    tagline: "Collectif, confession et spoken rock generationnel.",
    hero: {
      alt: "Portrait illustre de FAUVE",
      kind: "portrait",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "hoshi",
    name: "Hoshi",
    years: "1996-",
    region: "Ile-de-France",
    styles: [
      "Pop chanson",
      "Chanson rock"
    ],
    tagline: "Voix rauque, guitare et refrains populaires.",
    hero: {
      alt: "Portrait illustre de Hoshi",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "camelia-jordana",
    name: "Camélia Jordana",
    years: "1992-",
    region: "Provence-Alpes-Cote d’Azur",
    styles: [
      "Pop jazz",
      "Chanson cinema"
    ],
    tagline: "Voix singuliere, pop jazz et cinema.",
    hero: {
      alt: "Portrait illustre de Camélia Jordana",
      kind: "portrait",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "nach",
    name: "Nach",
    years: "1987-",
    region: "Ile-de-France",
    styles: [
      "Chanson piano",
      "Pop d’autrice"
    ],
    tagline: "Piano, famille Chedid et ecriture intime.",
    hero: {
      alt: "Portrait illustre de Nach",
      kind: "portrait",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "clio",
    name: "Clio",
    years: "1987-",
    region: "Nouvelle-Aquitaine",
    styles: [
      "Chanson pop",
      "Pop d’autrice"
    ],
    tagline: "Details quotidiens, elegance et pop concise.",
    hero: {
      alt: "Portrait illustre de Clio",
      kind: "portrait",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "auren",
    name: "Auren",
    years: "1980-",
    region: "Ile-de-France",
    styles: [
      "Chanson pop",
      "Pop independante"
    ],
    tagline: "Autrice pop, guitare et scene chanson.",
    hero: {
      alt: "Portrait illustre de Auren",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "la-zarra",
    name: "La Zarra",
    years: "1987-",
    region: "Quebec / France",
    styles: [
      "Pop dramatique",
      "Variete internationale"
    ],
    tagline: "Diva francophone, retro-pop et Eurovision.",
    hero: {
      alt: "Portrait illustre de La Zarra",
      kind: "portrait",
      color: "#8f2d56",
      url: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "nuit-incolore",
    name: "Nuit Incolore",
    years: "2001-",
    region: "Suisse",
    styles: [
      "Pop piano",
      "Pop melancolique"
    ],
    tagline: "Piano suisse, melancolie et generation plateformes.",
    hero: {
      alt: "Portrait illustre de Nuit Incolore",
      kind: "portrait",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "joseph-kamel",
    name: "Joseph Kamel",
    years: "1996-",
    region: "Ile-de-France",
    styles: [
      "Pop chanson",
      "Variete contemporaine"
    ],
    tagline: "Auteur radio, guitare et nouvelle variete.",
    hero: {
      alt: "Portrait illustre de Joseph Kamel",
      kind: "portrait",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "santa",
    name: "Santa",
    years: "1993-",
    region: "Provence-Alpes-Cote d’Azur",
    styles: [
      "Pop piano",
      "Pop rock"
    ],
    tagline: "Voix puissante, piano et trajectoire solo.",
    hero: {
      alt: "Portrait illustre de Santa",
      kind: "portrait",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "pierre-garnier",
    name: "Pierre Garnier",
    years: "2002-",
    region: "Normandie",
    styles: [
      "Pop chanson",
      "Variete contemporaine"
    ],
    tagline: "Revelation TV, streaming et pop sentimentale.",
    hero: {
      alt: "Portrait illustre de Pierre Garnier",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "jul",
    name: "Jul",
    years: "1990-",
    region: "Provence-Alpes-Cote d’Azur",
    styles: [
      "Rap marseillais",
      "Rap melodique"
    ],
    tagline: "Autotune, productivite et phenomene populaire marseillais.",
    hero: {
      alt: "Portrait illustre de Jul",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "naps",
    name: "Naps",
    years: "1991-",
    region: "Provence-Alpes-Cote d’Azur",
    styles: [
      "Rap pop marseillais",
      "Pop urbaine"
    ],
    tagline: "Tubes solaires, Marseille et refrains viraux.",
    hero: {
      alt: "Portrait illustre de Naps",
      kind: "portrait",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "heuss-lenfoire",
    name: "Heuss l'Enfoiré",
    years: "1992-",
    region: "Ile-de-France",
    styles: [
      "Rap club",
      "Rap francais"
    ],
    tagline: "Energie de club, gouaille et featurings efficaces.",
    hero: {
      alt: "Portrait illustre de Heuss l'Enfoiré",
      kind: "portrait",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "dadju",
    name: "Dadju",
    years: "1991-",
    region: "Ile-de-France / Congo",
    styles: [
      "R&B francophone",
      "Pop urbaine"
    ],
    tagline: "Romance, diaspora congolaise et pop R&B massive.",
    hero: {
      alt: "Portrait illustre de Dadju",
      kind: "portrait",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "tayc",
    name: "Tayc",
    years: "1996-",
    region: "Provence-Alpes-Cote d’Azur",
    styles: [
      "Afrolove",
      "R&B francophone"
    ],
    tagline: "Afrolove, danse et voix suave.",
    hero: {
      alt: "Portrait illustre de Tayc",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "vegedream",
    name: "Vegedream",
    years: "1992-",
    region: "Ile-de-France / Cote d’Ivoire",
    styles: [
      "Afro pop urbaine",
      "Rap melodique"
    ],
    tagline: "Diaspora, football et hymnes populaires.",
    hero: {
      alt: "Portrait illustre de Vegedream",
      kind: "portrait",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "keblack",
    name: "KeBlack",
    years: "1992-",
    region: "Ile-de-France / Congo",
    styles: [
      "Afro pop urbaine",
      "Rap melodique"
    ],
    tagline: "Afro-pop, danse et refrains de club.",
    hero: {
      alt: "Portrait illustre de KeBlack",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "franglish",
    name: "Franglish",
    years: "1994-",
    region: "Ile-de-France",
    styles: [
      "R&B afro pop",
      "Pop urbaine"
    ],
    tagline: "Bilinguisme, R&B et danse afro-pop.",
    hero: {
      alt: "Portrait illustre de Franglish",
      kind: "portrait",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "lartiste",
    name: "Lartiste",
    years: "1985-",
    region: "Maroc / France",
    styles: [
      "Pop urbaine",
      "Rap pop"
    ],
    tagline: "Tubes, Maghreb et pop urbaine festive.",
    hero: {
      alt: "Portrait illustre de Lartiste",
      kind: "portrait",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "marwa-loud",
    name: "Marwa Loud",
    years: "1996-",
    region: "Alsace",
    styles: [
      "Pop urbaine",
      "R&B pop"
    ],
    tagline: "Voix feminine, tubes plateformes et refrains directs.",
    hero: {
      alt: "Portrait illustre de Marwa Loud",
      kind: "portrait",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "eva",
    name: "Eva",
    years: "2001-",
    region: "Provence-Alpes-Cote d’Azur",
    styles: [
      "Pop urbaine",
      "R&B pop"
    ],
    tagline: "Mode, réseaux et pop urbaine generationnelle.",
    hero: {
      alt: "Portrait illustre de Eva",
      kind: "portrait",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "wejdene",
    name: "Wejdene",
    years: "2004-",
    region: "Ile-de-France",
    styles: [
      "Pop urbaine",
      "R&B adolescent"
    ],
    tagline: "Viralité, jeune public et pop urbaine TikTok.",
    hero: {
      alt: "Portrait illustre de Wejdene",
      kind: "portrait",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "imen-es",
    name: "Imen Es",
    years: "1998-",
    region: "Ile-de-France",
    styles: [
      "R&B pop",
      "Pop urbaine"
    ],
    tagline: "R&B sentimental, voix directe et public streaming.",
    hero: {
      alt: "Portrait illustre de Imen Es",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "lynda",
    name: "Lynda",
    years: "1994-",
    region: "Ile-de-France",
    styles: [
      "R&B francophone",
      "Pop sentimentale"
    ],
    tagline: "Ballades urbaines, voix expressive et public fanbase.",
    hero: {
      alt: "Portrait illustre de Lynda",
      kind: "portrait",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "shym",
    name: "Shy'm",
    years: "1985-",
    region: "Ile-de-France / Martinique",
    styles: [
      "R&B pop",
      "Pop dance"
    ],
    tagline: "Danse, R&B et pop française des annees 2000.",
    hero: {
      alt: "Portrait illustre de Shy'm",
      kind: "portrait",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "tal",
    name: "Tal",
    years: "1989-",
    region: "Ile-de-France",
    styles: [
      "Pop R&B",
      "Variete contemporaine"
    ],
    tagline: "Pop lumineuse, danse et refrains radio.",
    hero: {
      alt: "Portrait illustre de Tal",
      kind: "portrait",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "kenza-farah",
    name: "Kenza Farah",
    years: "1986-",
    region: "Provence-Alpes-Cote d’Azur",
    styles: [
      "R&B francais",
      "Pop urbaine"
    ],
    tagline: "R&B marseillais, emotion et generation Skyrock.",
    hero: {
      alt: "Portrait illustre de Kenza Farah",
      kind: "portrait",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "nej",
    name: "Nej'",
    years: "1994-",
    region: "Ile-de-France",
    styles: [
      "R&B oriental",
      "Pop urbaine"
    ],
    tagline: "Voix R&B, couleurs orientales et plateformes.",
    hero: {
      alt: "Portrait illustre de Nej'",
      kind: "portrait",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "zaho",
    name: "Zaho",
    years: "1980-",
    region: "Algerie / Quebec / France",
    styles: [
      "R&B francophone",
      "Pop urbaine"
    ],
    tagline: "R&B transnational, Maghreb, Quebec et tubes 2000.",
    hero: {
      alt: "Portrait illustre de Zaho",
      kind: "portrait",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "singuila",
    name: "Singuila",
    years: "1977-",
    region: "Ile-de-France / Congo",
    styles: [
      "R&B francais",
      "Pop romantique"
    ],
    tagline: "R&B romantique, diaspora congolaise et voix douce.",
    hero: {
      alt: "Portrait illustre de Singuila",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "mika",
    name: "Mika",
    years: "1983-",
    region: "Liban / Royaume-Uni / France",
    styles: [
      "Pop flamboyante",
      "Pop internationale"
    ],
    tagline: "Falsetto, couleurs pop et passerelle francophone.",
    hero: {
      alt: "Portrait illustre de Mika",
      kind: "portrait",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "christophe-mae",
    name: "Christophe Maé",
    years: "1975-",
    region: "Provence-Alpes-Cote d’Azur",
    styles: [
      "Variete pop",
      "Pop acoustique"
    ],
    tagline: "Guitare, scene solaire et variete populaire.",
    hero: {
      alt: "Portrait illustre de Christophe Maé",
      kind: "portrait",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "claudio-capeo",
    name: "Claudio Capéo",
    years: "1985-",
    region: "Grand Est",
    styles: [
      "Variete populaire",
      "Chanson accordéon"
    ],
    tagline: "Accordeon, voix rugueuse et refrains humanistes.",
    hero: {
      alt: "Portrait illustre de Claudio Capéo",
      kind: "portrait",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1521337581100-8ca9a73a5f79?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "anggun",
    name: "Anggun",
    years: "1974-",
    region: "Indonesie / France",
    styles: [
      "Pop internationale",
      "Pop vocale"
    ],
    tagline: "Voix voyageuse, France-Indonesie et pop mondiale.",
    hero: {
      alt: "Portrait illustre de Anggun",
      kind: "portrait",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "frero-delavega",
    name: "Fréro Delavega",
    years: "2011-2017",
    region: "Nouvelle-Aquitaine",
    styles: [
      "Pop folk acoustique",
      "Duo vocal"
    ],
    tagline: "Duo guitare-voix, pop estivale et succes television.",
    hero: {
      alt: "Portrait illustre de Fréro Delavega",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "chimene-badi",
    name: "Chimène Badi",
    years: "1982-",
    region: "Occitanie",
    styles: [
      "Variete vocale",
      "Grande voix"
    ],
    tagline: "Ballades, puissance vocale et television populaire.",
    hero: {
      alt: "Portrait illustre de Chimène Badi",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "gregory-lemarchal",
    name: "Grégory Lemarchal",
    years: "1983-2007",
    region: "Auvergne-Rhone-Alpes",
    styles: [
      "Variete pop",
      "Grande voix"
    ],
    tagline: "Voix lumineuse, television et memoire collective.",
    hero: {
      alt: "Portrait illustre de Grégory Lemarchal",
      kind: "portrait",
      color: "#8f2d56",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "jeremy-frerot",
    name: "Jérémy Frerot",
    years: "1990-",
    region: "Nouvelle-Aquitaine",
    styles: [
      "Pop acoustique",
      "Pop chanson"
    ],
    tagline: "Guitare, trajectoire solo et chanson sensible.",
    hero: {
      alt: "Portrait illustre de Jérémy Frerot",
      kind: "portrait",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "trois-cafes-gourmands",
    name: "Trois Cafés Gourmands",
    years: "2013-",
    region: "Nouvelle-Aquitaine",
    styles: [
      "Chanson folk populaire",
      "Pop regionale"
    ],
    tagline: "Correze, folk convivial et refrain collectif.",
    hero: {
      alt: "Portrait illustre de Trois Cafés Gourmands",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "kids-united",
    name: "Kids United",
    years: "2015-2021",
    region: "Ile-de-France",
    styles: [
      "Pop chorale",
      "Reprises solidaires"
    ],
    tagline: "Jeune public, reprises patrimoniales et solidarite.",
    hero: {
      alt: "Portrait illustre de Kids United",
      kind: "portrait",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "kyo",
    name: "Kyo",
    years: "1994-",
    region: "Ile-de-France",
    styles: [
      "Pop rock",
      "Rock francais"
    ],
    tagline: "Pop rock adolescent, refrains 2000 et retour durable.",
    hero: {
      alt: "Portrait illustre de Kyo",
      kind: "portrait",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "superbus",
    name: "Superbus",
    years: "1999-",
    region: "Ile-de-France",
    styles: [
      "Power pop",
      "Pop rock"
    ],
    tagline: "Guitares colorees, energie pop et clips graphiques.",
    hero: {
      alt: "Portrait illustre de Superbus",
      kind: "portrait",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "boulevard-des-airs",
    name: "Boulevard des Airs",
    years: "2004-",
    region: "Occitanie",
    styles: [
      "Chanson festive",
      "Pop chanson"
    ],
    tagline: "Cuivres, festivals et chanson radio ouverte.",
    hero: {
      alt: "Portrait illustre de Boulevard des Airs",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "joyce-jonathan",
    name: "Joyce Jonathan",
    years: "1989-",
    region: "Ile-de-France",
    styles: [
      "Chanson pop",
      "Pop acoustique"
    ],
    tagline: "Guitare, web participatif et chanson sentimentale.",
    hero: {
      alt: "Portrait illustre de Joyce Jonathan",
      kind: "portrait",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "cecile-corbel",
    name: "Cécile Corbel",
    years: "1980-",
    region: "Bretagne",
    styles: [
      "Folk celtique",
      "Musique de film"
    ],
    tagline: "Harpe bretonne, Ghibli et pop folk internationale.",
    hero: {
      alt: "Portrait illustre de Cécile Corbel",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "les-frangines",
    name: "Les Frangines",
    years: "2014-",
    region: "Ile-de-France",
    styles: [
      "Pop acoustique",
      "Duo vocal"
    ],
    tagline: "Duo feminin, harmonies claires et variete solaire.",
    hero: {
      alt: "Portrait illustre de Les Frangines",
      kind: "portrait",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "arcadian",
    name: "Arcadian",
    years: "2015-2020",
    region: "Ile-de-France",
    styles: [
      "Pop radio",
      "Trio vocal"
    ],
    tagline: "Trio vocal, television et pop jeune public.",
    hero: {
      alt: "Portrait illustre de Arcadian",
      kind: "portrait",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "cats-on-trees",
    name: "Cats on Trees",
    years: "2007-",
    region: "Occitanie",
    styles: [
      "Indie pop",
      "Pop anglophone"
    ],
    tagline: "Duo piano-batterie, pop sobre et succes radio.",
    hero: {
      alt: "Portrait illustre de Cats on Trees",
      kind: "portrait",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "hyphen-hyphen",
    name: "Hyphen Hyphen",
    years: "2011-",
    region: "Provence-Alpes-Cote d’Azur",
    styles: [
      "Pop rock",
      "Electro rock"
    ],
    tagline: "Energie live, pop anglophone et performance.",
    hero: {
      alt: "Portrait illustre de Hyphen Hyphen",
      kind: "portrait",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "lilly-wood-prick",
    name: "Lilly Wood and the Prick",
    years: "2006-",
    region: "Ile-de-France",
    styles: [
      "Folk pop",
      "Electro pop"
    ],
    tagline: "Duo folk, remix mondial et export pop.",
    hero: {
      alt: "Portrait illustre de Lilly Wood and the Prick",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "aaron",
    name: "AaRON",
    years: "2004-",
    region: "Ile-de-France",
    styles: [
      "Pop cinematographique",
      "Pop rock"
    ],
    tagline: "Pop sombre, cinema et piano nocturne.",
    hero: {
      alt: "Portrait illustre de AaRON",
      kind: "portrait",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "cocoon",
    name: "Cocoon",
    years: "2006-",
    region: "Auvergne-Rhone-Alpes",
    styles: [
      "Folk pop",
      "Indie folk"
    ],
    tagline: "Harmonies douces, folk anglophone et route intime.",
    hero: {
      alt: "Portrait illustre de Cocoon",
      kind: "portrait",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "revolver",
    name: "Revolver",
    years: "2006-",
    region: "Ile-de-France",
    styles: [
      "Pop baroque",
      "Indie pop"
    ],
    tagline: "Harmonies, cordes et pop parisienne elegante.",
    hero: {
      alt: "Portrait illustre de Revolver",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "bb-brunes",
    name: "BB Brunes",
    years: "2006-",
    region: "Ile-de-France",
    styles: [
      "Rock francais",
      "Garage pop"
    ],
    tagline: "Rock adolescent parisien, guitares et revival 2000.",
    hero: {
      alt: "Portrait illustre de BB Brunes",
      kind: "portrait",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "shaka-ponk",
    name: "Shaka Ponk",
    years: "2004-2024",
    region: "Ile-de-France",
    styles: [
      "Rock electro",
      "Rock alternatif"
    ],
    tagline: "Rock spectaculaire, avatars et scenes geantes.",
    hero: {
      alt: "Portrait illustre de Shaka Ponk",
      kind: "portrait",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "skip-the-use",
    name: "Skip the Use",
    years: "2008-",
    region: "Hauts-de-France",
    styles: [
      "Rock alternatif",
      "Punk funk"
    ],
    tagline: "Energie nordiste, rock festival et refrains explosifs.",
    hero: {
      alt: "Portrait illustre de Skip the Use",
      kind: "portrait",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "pony-pony-run-run",
    name: "Pony Pony Run Run",
    years: "2003-",
    region: "Pays de la Loire",
    styles: [
      "Electro pop rock",
      "Indie dance"
    ],
    tagline: "Nantes, synthés lumineux et pop dance.",
    hero: {
      alt: "Portrait illustre de Pony Pony Run Run",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "naive-new-beaters",
    name: "Naive New Beaters",
    years: "2005-",
    region: "Ile-de-France",
    styles: [
      "Electro pop",
      "Indie dance"
    ],
    tagline: "Humour, dance pop et clips tres identifiables.",
    hero: {
      alt: "Portrait illustre de Naive New Beaters",
      kind: "portrait",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "housse-de-racket",
    name: "Housse de Racket",
    years: "2005-",
    region: "Ile-de-France",
    styles: [
      "Pop electro",
      "French touch pop"
    ],
    tagline: "Duo parisien, guitares et machines post-French touch.",
    hero: {
      alt: "Portrait illustre de Housse de Racket",
      kind: "portrait",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "brigitte",
    name: "Brigitte",
    years: "2008-",
    region: "Ile-de-France",
    styles: [
      "Pop retro",
      "Duo vocal"
    ],
    tagline: "Duo feminin, harmonies retro et glamour ironique.",
    hero: {
      alt: "Portrait illustre de Brigitte",
      kind: "portrait",
      color: "#8f2d56",
      url: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "oldelaf",
    name: "Oldelaf",
    years: "1975-",
    region: "Ile-de-France",
    styles: [
      "Chanson humoristique",
      "Chanson de scene"
    ],
    tagline: "Humour tendre, absurde quotidien et scene chanson.",
    hero: {
      alt: "Portrait illustre de Oldelaf",
      kind: "portrait",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "barcella",
    name: "Barcella",
    years: "1981-",
    region: "Grand Est",
    styles: [
      "Chanson slam",
      "Chanson de texte"
    ],
    tagline: "Mots bondissants, slam et theatre chanson.",
    hero: {
      alt: "Portrait illustre de Barcella",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "fatals-picards",
    name: "Les Fatals Picards",
    years: "1996-",
    region: "Ile-de-France",
    styles: [
      "Rock satirique",
      "Chanson humoristique"
    ],
    tagline: "Rock, satire sociale et humour frontal.",
    hero: {
      alt: "Portrait illustre de Les Fatals Picards",
      kind: "portrait",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "debout-sur-le-zinc",
    name: "Debout sur le Zinc",
    years: "1995-",
    region: "Ile-de-France",
    styles: [
      "Chanson festive",
      "Folk urbain"
    ],
    tagline: "Violon, guitares et chanson de route independante.",
    hero: {
      alt: "Portrait illustre de Debout sur le Zinc",
      kind: "portrait",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "java",
    name: "Java",
    years: "1998-2010",
    region: "Ile-de-France",
    styles: [
      "Rap musette",
      "Chanson alternative"
    ],
    tagline: "Accordeon, rap, argot et Paris alternatif.",
    hero: {
      alt: "Portrait illustre de Java",
      kind: "portrait",
      color: "#8f2d56",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "hurlements-leo",
    name: "Les Hurlements d'Léo",
    years: "1996-",
    region: "Nouvelle-Aquitaine",
    styles: [
      "Chanson punk festive",
      "Chanson alternative"
    ],
    tagline: "Bordeaux, cabaret punk et fanfare de route.",
    hero: {
      alt: "Portrait illustre de Les Hurlements d'Léo",
      kind: "portrait",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "caravane-passe",
    name: "La Caravane Passe",
    years: "2001-",
    region: "Ile-de-France",
    styles: [
      "Chanson balkanique",
      "World chanson"
    ],
    tagline: "Balkans imaginaires, fanfare et route festive.",
    hero: {
      alt: "Portrait illustre de La Caravane Passe",
      kind: "portrait",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "babylon-circus",
    name: "Babylon Circus",
    years: "1995-",
    region: "Auvergne-Rhone-Alpes",
    styles: [
      "Ska chanson",
      "Reggae festif"
    ],
    tagline: "Ska, reggae, cuivres et resistance dansante.",
    hero: {
      alt: "Portrait illustre de Babylon Circus",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "sergent-garcia",
    name: "Sergent Garcia",
    years: "1964-",
    region: "Ile-de-France / Espagne",
    styles: [
      "Salsamuffin",
      "Reggae latin"
    ],
    tagline: "Salsa, reggae, dancehall et circulations latines.",
    hero: {
      alt: "Portrait illustre de Sergent Garcia",
      kind: "portrait",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "danakil",
    name: "Danakil",
    years: "2000-",
    region: "Ile-de-France",
    styles: [
      "Reggae francais",
      "Reggae engage"
    ],
    tagline: "Reggae independant, basses rondes et paroles conscientes.",
    hero: {
      alt: "Portrait illustre de Danakil",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "dub-inc",
    name: "Dub Inc",
    years: "1997-",
    region: "Auvergne-Rhone-Alpes",
    styles: [
      "Reggae dub",
      "Reggae francais"
    ],
    tagline: "Saint-Etienne, dub, langues et scene internationale.",
    hero: {
      alt: "Portrait illustre de Dub Inc",
      kind: "portrait",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "sinsemilia",
    name: "Sinsemilia",
    years: "1990-",
    region: "Auvergne-Rhone-Alpes",
    styles: [
      "Reggae francais",
      "Reggae pop"
    ],
    tagline: "Reggae militant, Grenoble et hymne populaire.",
    hero: {
      alt: "Portrait illustre de Sinsemilia",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "broussai",
    name: "Broussaï",
    years: "2000-",
    region: "Bourgogne-Franche-Comte",
    styles: [
      "Reggae francais",
      "Reggae conscient"
    ],
    tagline: "Reggae regional, messages sociaux et culture festival.",
    hero: {
      alt: "Portrait illustre de Broussaï",
      kind: "portrait",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "pierpoljak",
    name: "Pierpoljak",
    years: "1964-",
    region: "Ile-de-France",
    styles: [
      "Reggae francais",
      "Reggae pop"
    ],
    tagline: "Reggae nonchalant, Jamaïque et tubes radio 90.",
    hero: {
      alt: "Portrait illustre de Pierpoljak",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "as-de-trefle",
    name: "As de Trêfle",
    years: "1997-2014",
    region: "Centre-Val de Loire",
    styles: [
      "Chanson festive",
      "Rock acoustique"
    ],
    tagline: "Guitares rapides, humour et public de festival.",
    hero: {
      alt: "Portrait illustre de As de Trêfle",
      kind: "portrait",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "fils-de-teuhpu",
    name: "Les Fils de Teuhpu",
    years: "1996-",
    region: "Ile-de-France",
    styles: [
      "Fanfare alternative",
      "Chanson festive"
    ],
    tagline: "Cuivres, rue, humour et fanfare punk.",
    hero: {
      alt: "Portrait illustre de Les Fils de Teuhpu",
      kind: "portrait",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "giedre",
    name: "GiedRé",
    years: "1985-",
    region: "Lituanie / Ile-de-France",
    styles: [
      "Chanson humour noir",
      "Chanson minimaliste"
    ],
    tagline: "Guitare, humour noir et cabaret corrosif.",
    hero: {
      alt: "Portrait illustre de GiedRé",
      kind: "portrait",
      color: "#8f2d56",
      url: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "govrache",
    name: "Govrache",
    years: "1976-",
    region: "Ile-de-France",
    styles: [
      "Slam chanson",
      "Chanson sociale"
    ],
    tagline: "Slam, humanisme et petites scenes attentives.",
    hero: {
      alt: "Portrait illustre de Govrache",
      kind: "portrait",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "gauvain-sers",
    name: "Gauvain Sers",
    years: "1989-",
    region: "Nouvelle-Aquitaine",
    styles: [
      "Chanson sociale",
      "Chanson de texte"
    ],
    tagline: "Guitare, ruralite et chanson sociale contemporaine.",
    hero: {
      alt: "Portrait illustre de Gauvain Sers",
      kind: "portrait",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "tit-nassels",
    name: "Les Tit' Nassels",
    years: "1998-",
    region: "Auvergne-Rhone-Alpes",
    styles: [
      "Chanson acoustique",
      "Duo independant"
    ],
    tagline: "Duo acoustique, tendresse et scene artisanale.",
    hero: {
      alt: "Portrait illustre de Les Tit' Nassels",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "magic-system",
    name: "Magic System",
    years: "1996-",
    region: "Cote d’Ivoire / France",
    styles: [
      "Zouglou",
      "Afro-pop"
    ],
    tagline: "Zouglou ivoirien, danse et tubes francophones.",
    hero: {
      alt: "Portrait illustre de Magic System",
      kind: "portrait",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "kassav",
    name: "Kassav",
    years: "1979-",
    region: "Guadeloupe / Martinique",
    styles: [
      "Zouk",
      "Musiques antillaises"
    ],
    tagline: "Inventeurs du zouk moderne et grandes scenes mondiales.",
    hero: {
      alt: "Portrait illustre de Kassav",
      kind: "portrait",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "tonton-david",
    name: "Tonton David",
    years: "1967-2021",
    region: "Grand Est",
    styles: [
      "Reggae francais",
      "Ragga"
    ],
    tagline: "Reggae populaire, ragga français et route generationnelle.",
    hero: {
      alt: "Portrait illustre de Tonton David",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "nuttea",
    name: "Nuttea",
    years: "1968-",
    region: "Ile-de-France",
    styles: [
      "Ragga francais",
      "Reggae fusion"
    ],
    tagline: "Ragga, rap français et passerelles urbaines 2000.",
    hero: {
      alt: "Portrait illustre de Nuttea",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "saian-supa-crew",
    name: "Saïan Supa Crew",
    years: "1997-2007",
    region: "Ile-de-France",
    styles: [
      "Rap francais",
      "Hip-hop vocal"
    ],
    tagline: "Collectif rap, beatbox et virtuosite vocale.",
    hero: {
      alt: "Portrait illustre de Saïan Supa Crew",
      kind: "portrait",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "alliance-ethnik",
    name: "Alliance Ethnik",
    years: "1990-",
    region: "Ile-de-France",
    styles: [
      "Rap funk",
      "Hip-hop positif"
    ],
    tagline: "Groove, multiculturalisme et rap radio 90.",
    hero: {
      alt: "Portrait illustre de Alliance Ethnik",
      kind: "portrait",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "113",
    name: "113",
    years: "1994-",
    region: "Ile-de-France",
    styles: [
      "Rap francais",
      "Rap collectif"
    ],
    tagline: "Vitry, Mafia K’1 Fry et chroniques de diaspora.",
    hero: {
      alt: "Portrait illustre de 113",
      kind: "portrait",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "fonky-family",
    name: "Fonky Family",
    years: "1994-2007",
    region: "Provence-Alpes-Cote d’Azur",
    styles: [
      "Rap marseillais",
      "Rap collectif"
    ],
    tagline: "Marseille, collectif dense et rap de rue sudiste.",
    hero: {
      alt: "Portrait illustre de Fonky Family",
      kind: "portrait",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "sniper",
    name: "Sniper",
    years: "1997-",
    region: "Ile-de-France",
    styles: [
      "Rap francais",
      "Rap social"
    ],
    tagline: "Collectif 2000, textes sociaux et public generationnel.",
    hero: {
      alt: "Portrait illustre de Sniper",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "rohff",
    name: "Rohff",
    years: "1977-",
    region: "Ile-de-France / Comores",
    styles: [
      "Rap francais",
      "Rap hardcore"
    ],
    tagline: "Technique, 94 et pilier du rap francilien.",
    hero: {
      alt: "Portrait illustre de Rohff",
      kind: "portrait",
      color: "#8f2d56",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "booba",
    name: "Booba",
    years: "1976-",
    region: "Ile-de-France / Senegal",
    styles: [
      "Rap francais",
      "Rap hardcore"
    ],
    tagline: "92, ego trip, mutation du rap français et empire independant.",
    hero: {
      alt: "Portrait illustre de Booba",
      kind: "portrait",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "sinik",
    name: "Sinik",
    years: "1980-",
    region: "Ile-de-France",
    styles: [
      "Rap technique",
      "Rap francais"
    ],
    tagline: "Essonne, plume sombre et battle rap populaire.",
    hero: {
      alt: "Portrait illustre de Sinik",
      kind: "portrait",
      color: "#8f2d56",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "la-fouine",
    name: "La Fouine",
    years: "1981-",
    region: "Ile-de-France",
    styles: [
      "Rap melodique",
      "Rap francais"
    ],
    tagline: "Trappes, rap radio et storytelling populaire.",
    hero: {
      alt: "Portrait illustre de La Fouine",
      kind: "portrait",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "medine",
    name: "Médine",
    years: "1983-",
    region: "Normandie",
    styles: [
      "Rap engage",
      "Rap politique"
    ],
    tagline: "Le Havre, histoire, polemiques et rap pedagogique.",
    hero: {
      alt: "Portrait illustre de Médine",
      kind: "portrait",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "youssoupha",
    name: "Youssoupha",
    years: "1979-",
    region: "Ile-de-France / Congo",
    styles: [
      "Rap conscient",
      "Rap francais"
    ],
    tagline: "Plume, diaspora congolaise et rap grand public exigeant.",
    hero: {
      alt: "Portrait illustre de Youssoupha",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "sefyu",
    name: "Sefyu",
    years: "1981-",
    region: "Ile-de-France",
    styles: [
      "Rap hardcore",
      "Rap francais"
    ],
    tagline: "Aulnay, voix rugueuse et impact rythmique.",
    hero: {
      alt: "Portrait illustre de Sefyu",
      kind: "portrait",
      color: "#8f2d56",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "kaaris",
    name: "Kaaris",
    years: "1980-",
    region: "Ile-de-France / Cote d’Ivoire",
    styles: [
      "Trap francaise",
      "Rap hardcore"
    ],
    tagline: "Sevran, trap sombre et rupture sonore 2010.",
    hero: {
      alt: "Portrait illustre de Kaaris",
      kind: "portrait",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "seth-gueko",
    name: "Seth Gueko",
    years: "1980-",
    region: "Ile-de-France",
    styles: [
      "Rap punchline",
      "Rap francais"
    ],
    tagline: "Argot, personnage et punchlines cultes.",
    hero: {
      alt: "Portrait illustre de Seth Gueko",
      kind: "portrait",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "alkpote",
    name: "Alkpote",
    years: "1981-",
    region: "Ile-de-France",
    styles: [
      "Rap cru",
      "Rap underground"
    ],
    tagline: "Culte internet, outrance et punchlines sans filtre.",
    hero: {
      alt: "Portrait illustre de Alkpote",
      kind: "portrait",
      color: "#8f2d56",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "mister-you",
    name: "Mister You",
    years: "1984-",
    region: "Ile-de-France / Maroc",
    styles: [
      "Rap de rue",
      "Rap francais"
    ],
    tagline: "Mixtapes, rue parisienne et circulation internet.",
    hero: {
      alt: "Portrait illustre de Mister You",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "ronisia",
    name: "Ronisia",
    years: "1999-",
    region: "Ile-de-France / Cap-Vert",
    styles: [
      "R&B pop",
      "Pop urbaine"
    ],
    tagline: "Romance, Cap-Vert et R&B pop des plateformes.",
    hero: {
      alt: "Portrait illustre de Ronisia",
      kind: "portrait",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "lyna-mahyem",
    name: "Lyna Mahyem",
    years: "1995-",
    region: "Ile-de-France",
    styles: [
      "R&B sentimental",
      "Pop urbaine"
    ],
    tagline: "Voix R&B, reprises virales et ballades urbaines.",
    hero: {
      alt: "Portrait illustre de Lyna Mahyem",
      kind: "portrait",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "nesly",
    name: "Nesly",
    years: "1989-",
    region: "Ile-de-France / Martinique",
    styles: [
      "Zouk love",
      "R&B francophone"
    ],
    tagline: "Zouk, R&B doux et romance antillaise.",
    hero: {
      alt: "Portrait illustre de Nesly",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "kayna-samet",
    name: "Kayna Samet",
    years: "1980-",
    region: "Provence-Alpes-Cote d’Azur",
    styles: [
      "Soul urbaine",
      "R&B francais"
    ],
    tagline: "Voix soul, rap français et emotion brute.",
    hero: {
      alt: "Portrait illustre de Kayna Samet",
      kind: "portrait",
      color: "#8f2d56",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "slai",
    name: "Slaï",
    years: "1973-",
    region: "Guadeloupe",
    styles: [
      "Zouk love",
      "Pop antillaise"
    ],
    tagline: "Zouk romantique, voix douce et slows francophones.",
    hero: {
      alt: "Portrait illustre de Slaï",
      kind: "portrait",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "fanny-j",
    name: "Fanny J",
    years: "1987-",
    region: "Guyane",
    styles: [
      "Zouk love",
      "Pop caribeenne"
    ],
    tagline: "Grande voix guyanaise et romance zouk contemporaine.",
    hero: {
      alt: "Portrait illustre de Fanny J",
      kind: "portrait",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "perle-lama",
    name: "Perle Lama",
    years: "1984-",
    region: "Martinique",
    styles: [
      "Zouk",
      "Zouk love"
    ],
    tagline: "Martinique, voix douce et pop zouk sentimentale.",
    hero: {
      alt: "Portrait illustre de Perle Lama",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "princess-lover",
    name: "Princess Lover",
    years: "1978-",
    region: "Guadeloupe",
    styles: [
      "Zouk love",
      "Pop antillaise"
    ],
    tagline: "Zouk love 2000, duos et romance de dancefloor.",
    hero: {
      alt: "Portrait illustre de Princess Lover",
      kind: "portrait",
      color: "#8f2d56",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "nadiya",
    name: "Nâdiya",
    years: "1973-",
    region: "Centre-Val de Loire",
    styles: [
      "R&B dance",
      "Pop française"
    ],
    tagline: "R&B sportif, clips choregraphies et radio 2000.",
    hero: {
      alt: "Portrait illustre de Nâdiya",
      kind: "portrait",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "leslie",
    name: "Leslie",
    years: "1985-",
    region: "Ile-de-France",
    styles: [
      "R&B francais",
      "Pop urbaine"
    ],
    tagline: "R&B adolescent, clips 2000 et voix pop urbaine.",
    hero: {
      alt: "Portrait illustre de Leslie",
      kind: "portrait",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "daft-punk",
    name: "Daft Punk",
    years: "1993-2021",
    region: "Ile-de-France",
    styles: [
      "French touch",
      "Electro pop"
    ],
    tagline: "Robots, club mondial et mythologie electronique française.",
    hero: {
      alt: "Portrait illustre de Daft Punk",
      kind: "portrait",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "justice",
    name: "Justice",
    years: "2003-",
    region: "Ile-de-France",
    styles: [
      "Electro rock",
      "French touch"
    ],
    tagline: "Saturation, croix lumineuse et electro de scene.",
    hero: {
      alt: "Portrait illustre de Justice",
      kind: "portrait",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "air",
    name: "Air",
    years: "1995-",
    region: "Ile-de-France",
    styles: [
      "Downtempo",
      "Pop electronique"
    ],
    tagline: "Synthés analogiques, lounge spatial et pop française exportee.",
    hero: {
      alt: "Portrait illustre de Air",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "phoenix",
    name: "Phoenix",
    years: "1995-",
    region: "Ile-de-France",
    styles: [
      "Pop rock",
      "Pop electronique"
    ],
    tagline: "Versailles, pop anglophone et elegance internationale.",
    hero: {
      alt: "Portrait illustre de Phoenix",
      kind: "portrait",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "cassius",
    name: "Cassius",
    years: "1989-2019",
    region: "Ile-de-France",
    styles: [
      "House francaise",
      "French touch"
    ],
    tagline: "House filtrée, club et piliers de la French touch.",
    hero: {
      alt: "Portrait illustre de Cassius",
      kind: "portrait",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "modjo",
    name: "Modjo",
    years: "1998-2003",
    region: "Ile-de-France",
    styles: [
      "House pop",
      "French touch"
    ],
    tagline: "Tube mondial, house vocale et radio dance.",
    hero: {
      alt: "Portrait illustre de Modjo",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "etienne-de-crecy",
    name: "Étienne de Crécy",
    years: "1969-",
    region: "Ile-de-France",
    styles: [
      "House filtree",
      "French touch"
    ],
    tagline: "Architecte house, Super Discount et scene cube.",
    hero: {
      alt: "Portrait illustre de Étienne de Crécy",
      kind: "portrait",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "kavinsky",
    name: "Kavinsky",
    years: "1975-",
    region: "Ile-de-France",
    styles: [
      "Synthwave",
      "Electro cinema"
    ],
    tagline: "Voiture fantome, neons et electro cinematographique.",
    hero: {
      alt: "Portrait illustre de Kavinsky",
      kind: "portrait",
      color: "#8f2d56",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "m83",
    name: "M83",
    years: "2001-",
    region: "Provence-Alpes-Cote d’Azur",
    styles: [
      "Dream pop",
      "Synth pop"
    ],
    tagline: "Synthés immenses, adolescence et pop cosmique.",
    hero: {
      alt: "Portrait illustre de M83",
      kind: "portrait",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "the-blaze",
    name: "The Blaze",
    years: "2016-",
    region: "Ile-de-France",
    styles: [
      "Electro cinematographique",
      "House emotionnelle"
    ],
    tagline: "Clips d’auteur, house lente et emotion collective.",
    hero: {
      alt: "Portrait illustre de The Blaze",
      kind: "portrait",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "alpha-wann",
    name: "Alpha Wann",
    years: "1989-",
    region: "Ile-de-France",
    styles: [
      "Rap technique",
      "Rap independant"
    ],
    tagline: "Plume chirurgicale, independance et fanbase exigeante.",
    hero: {
      alt: "Portrait illustre de Alpha Wann",
      kind: "portrait",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "georgio",
    name: "Georgio",
    years: "1993-",
    region: "Ile-de-France",
    styles: [
      "Rap introspectif",
      "Rap francais"
    ],
    tagline: "Paris, ecriture intime et generation rap sensible.",
    hero: {
      alt: "Portrait illustre de Georgio",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "nepal",
    name: "Népal",
    years: "1990-2019",
    region: "Ile-de-France",
    styles: [
      "Rap alternatif",
      "Rap independant"
    ],
    tagline: "Discretion, home studio et culte rap posthume.",
    hero: {
      alt: "Portrait illustre de Népal",
      kind: "portrait",
      color: "#8f2d56",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "columbine",
    name: "Columbine",
    years: "2014-",
    region: "Bretagne",
    styles: [
      "Rap pop",
      "Rap collectif"
    ],
    tagline: "Rennes, adolescence, clips DIY et spleen pop.",
    hero: {
      alt: "Portrait illustre de Columbine",
      kind: "portrait",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "s-crew",
    name: "S-Crew",
    years: "2001-",
    region: "Ile-de-France",
    styles: [
      "Rap collectif",
      "Rap francais"
    ],
    tagline: "Galaxie Nekfeu, collectif parisien et freestyles.",
    hero: {
      alt: "Portrait illustre de S-Crew",
      kind: "portrait",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "1995",
    name: "1995",
    years: "2008-2013",
    region: "Ile-de-France",
    styles: [
      "Boom bap",
      "Rap collectif"
    ],
    tagline: "Revival boom bap, freestyles et generation L’Entourage.",
    hero: {
      alt: "Portrait illustre de 1995",
      kind: "portrait",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "hippocampe-fou",
    name: "Hippocampe Fou",
    years: "1984-",
    region: "Ile-de-France",
    styles: [
      "Rap narratif",
      "Rap alternatif"
    ],
    tagline: "Jeux de mots, contes rap et imagination scénique.",
    hero: {
      alt: "Portrait illustre de Hippocampe Fou",
      kind: "portrait",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "tsew-the-kid",
    name: "Tsew The Kid",
    years: "1996-",
    region: "Madagascar / France",
    styles: [
      "Rap melodique",
      "Pop urbaine"
    ],
    tagline: "Internet, romance et rap melodique intimiste.",
    hero: {
      alt: "Portrait illustre de Tsew The Kid",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "gringe",
    name: "Gringe",
    years: "1980-",
    region: "Normandie",
    styles: [
      "Rap introspectif",
      "Rap francais"
    ],
    tagline: "Casseurs Flowters, recit intime et solo lunaire.",
    hero: {
      alt: "Portrait illustre de Gringe",
      kind: "portrait",
      color: "#8f2d56",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "lorenzo",
    name: "Lorenzo",
    years: "1994-",
    region: "Bretagne",
    styles: [
      "Rap parodique",
      "Rap viral"
    ],
    tagline: "Personnage absurde, YouTube et rap potache massif.",
    hero: {
      alt: "Portrait illustre de Lorenzo",
      kind: "portrait",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "doc-gyneco",
    name: "Doc Gynéco",
    years: "1974-",
    region: "Ile-de-France",
    styles: [
      "Rap funk",
      "Rap francais"
    ],
    tagline: "Nonchalance, funk et rap grand public des annees 90.",
    hero: {
      alt: "Portrait illustre de Doc Gynéco",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "passi",
    name: "Passi",
    years: "1972-",
    region: "Ile-de-France",
    styles: [
      "Rap conscient",
      "Rap francais"
    ],
    tagline: "Sarcelles, Secteur A et rap solo structurant.",
    hero: {
      alt: "Portrait illustre de Passi",
      kind: "portrait",
      color: "#8f2d56",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "arsenik",
    name: "Ärsenik",
    years: "1992-",
    region: "Ile-de-France",
    styles: [
      "Rap hardcore",
      "Rap francais"
    ],
    tagline: "Villiers-le-Bel, tension verbale et classique rap 90.",
    hero: {
      alt: "Portrait illustre de Ärsenik",
      kind: "portrait",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "fabe",
    name: "Fabe",
    years: "1971-",
    region: "Ile-de-France",
    styles: [
      "Rap conscient",
      "Rap independant"
    ],
    tagline: "Plume morale, independance et rap parisien exigeant.",
    hero: {
      alt: "Portrait illustre de Fabe",
      kind: "portrait",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "raggasonic",
    name: "Raggasonic",
    years: "1989-",
    region: "Ile-de-France",
    styles: [
      "Ragga francais",
      "Reggae fusion"
    ],
    tagline: "Sound system, ragga francophone et energie live.",
    hero: {
      alt: "Portrait illustre de Raggasonic",
      kind: "portrait",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "menelik",
    name: "Ménélik",
    years: "1970-",
    region: "Ile-de-France",
    styles: [
      "Rap pop",
      "Rap francais"
    ],
    tagline: "Groove, hits radio et rap accessible des annees 90.",
    hero: {
      alt: "Portrait illustre de Ménélik",
      kind: "portrait",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "benny-b",
    name: "Benny B",
    years: "1968-",
    region: "Belgique",
    styles: [
      "Rap dance",
      "Hip-hop francophone"
    ],
    tagline: "Belgique, rap dance et premiere vague populaire.",
    hero: {
      alt: "Portrait illustre de Benny B",
      kind: "portrait",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "mc-jean-gab-1",
    name: "MC Jean Gab’1",
    years: "1967-",
    region: "Ile-de-France",
    styles: [
      "Rap autobiographique",
      "Rap francais"
    ],
    tagline: "Recit frontal, Paris et memoire hip-hop.",
    hero: {
      alt: "Portrait illustre de MC Jean Gab’1",
      kind: "portrait",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "la-caution",
    name: "La Caution",
    years: "1999-",
    region: "Ile-de-France",
    styles: [
      "Rap independant",
      "Rap electro"
    ],
    tagline: "Independance, electro-rap et imaginaire cinema.",
    hero: {
      alt: "Portrait illustre de La Caution",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "ttc",
    name: "TTC",
    years: "1998-2010",
    region: "Ile-de-France",
    styles: [
      "Electro-rap",
      "Rap alternatif"
    ],
    tagline: "Club, humour et rap blog-era des annees 2000.",
    hero: {
      alt: "Portrait illustre de TTC",
      kind: "portrait",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "ministere-amer",
    name: "Ministère AMER",
    years: "1988-1995",
    region: "Ile-de-France",
    styles: [
      "Rap politique",
      "Rap francais"
    ],
    tagline: "Sarcelles, parole frontale et matrice Secteur A.",
    hero: {
      alt: "Portrait illustre de Ministère AMER",
      kind: "portrait",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "ideal-j",
    name: "Ideal J",
    years: "1990-1999",
    region: "Ile-de-France",
    styles: [
      "Rap hardcore",
      "Rap conscient"
    ],
    tagline: "Orly, Kery James et rap hardcore conscient.",
    hero: {
      alt: "Portrait illustre de Ideal J",
      kind: "portrait",
      color: "#8f2d56",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "lunatic",
    name: "Lunatic",
    years: "1994-2003",
    region: "Ile-de-France",
    styles: [
      "Rap independant",
      "Rap sombre"
    ],
    tagline: "Booba, Ali, 92 et mythe independant.",
    hero: {
      alt: "Portrait illustre de Lunatic",
      kind: "portrait",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "mafia-k1-fry",
    name: "Mafia K’1 Fry",
    years: "1995-",
    region: "Ile-de-France",
    styles: [
      "Rap collectif",
      "Rap de rue"
    ],
    tagline: "94, constellation rap et clip devenu archive.",
    hero: {
      alt: "Portrait illustre de Mafia K’1 Fry",
      kind: "portrait",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "intouchable",
    name: "Intouchable",
    years: "1994-",
    region: "Ile-de-France",
    styles: [
      "Rap francilien",
      "Rap de rue"
    ],
    tagline: "Dry, Demon One et branche essentielle du 94.",
    hero: {
      alt: "Portrait illustre de Intouchable",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "scred-connexion",
    name: "Scred Connexion",
    years: "1994-",
    region: "Ile-de-France",
    styles: [
      "Rap independant",
      "Rap de plume"
    ],
    tagline: "Barbès, sobriete et collectif independant.",
    hero: {
      alt: "Portrait illustre de Scred Connexion",
      kind: "portrait",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "la-rumeur",
    name: "La Rumeur",
    years: "1997-",
    region: "Ile-de-France",
    styles: [
      "Rap politique",
      "Rap independant"
    ],
    tagline: "Plume pamphletaire, independance et contre-discours.",
    hero: {
      alt: "Portrait illustre de La Rumeur",
      kind: "portrait",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "kdd",
    name: "KDD",
    years: "1994-2000",
    region: "Occitanie",
    styles: [
      "Rap conscient",
      "Rap francais"
    ],
    tagline: "Toulouse, conscience sociale et rap hors capitales.",
    hero: {
      alt: "Portrait illustre de KDD",
      kind: "portrait",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "la-cliqua",
    name: "La Cliqua",
    years: "1993-1999",
    region: "Ile-de-France",
    styles: [
      "Boom bap",
      "Rap underground"
    ],
    tagline: "Paris, DJ, graffiti et fondation underground.",
    hero: {
      alt: "Portrait illustre de La Cliqua",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "sages-poetes-rue",
    name: "Les Sages Poètes de la Rue",
    years: "1987-",
    region: "Ile-de-France",
    styles: [
      "Rap jazz",
      "Rap old school"
    ],
    tagline: "Boulogne, Beat de Boul et rap jazz chaleureux.",
    hero: {
      alt: "Portrait illustre de Les Sages Poètes de la Rue",
      kind: "portrait",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "lord-kossity",
    name: "Lord Kossity",
    years: "1972-",
    region: "Martinique / Ile-de-France",
    styles: [
      "Dancehall francais",
      "Ragga"
    ],
    tagline: "Dancehall, clubs et passerelles rap-ragga.",
    hero: {
      alt: "Portrait illustre de Lord Kossity",
      kind: "portrait",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "daddy-yod",
    name: "Daddy Yod",
    years: "1966-",
    region: "Ile-de-France",
    styles: [
      "Ragga francais",
      "Reggae dancehall"
    ],
    tagline: "Pionnier ragga, toasting français et sound systems.",
    hero: {
      alt: "Portrait illustre de Daddy Yod",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "rocca",
    name: "Rocca",
    years: "1975-",
    region: "Ile-de-France / Colombie",
    styles: [
      "Boom bap",
      "Rap franco-colombien"
    ],
    tagline: "La Cliqua, bilinguisme et rap entre deux mondes.",
    hero: {
      alt: "Portrait illustre de Rocca",
      kind: "portrait",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "busta-flex",
    name: "Busta Flex",
    years: "1977-",
    region: "Ile-de-France",
    styles: [
      "Rap freestyle",
      "Rap technique"
    ],
    tagline: "Flow rapide, 93 et performance micro.",
    hero: {
      alt: "Portrait illustre de Busta Flex",
      kind: "portrait",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "zoxea",
    name: "Zoxea",
    years: "1974-",
    region: "Ile-de-France",
    styles: [
      "Rap technique",
      "Rap old school"
    ],
    tagline: "Beat de Boul, Boulogne et transmission rap.",
    hero: {
      alt: "Portrait illustre de Zoxea",
      kind: "portrait",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "x-men",
    name: "X-Men",
    years: "1995-",
    region: "Ile-de-France",
    styles: [
      "Rap technique",
      "Rap independant"
    ],
    tagline: "Time Bomb, plume sombre et freestyles cultes.",
    hero: {
      alt: "Portrait illustre de X-Men",
      kind: "portrait",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "klub-des-loosers",
    name: "Klub des Loosers",
    years: "2000-",
    region: "Ile-de-France",
    styles: [
      "Rap alternatif",
      "Rap narratif"
    ],
    tagline: "Fuzati, spleen, ironie et rap anti-heroique.",
    hero: {
      alt: "Portrait illustre de Klub des Loosers",
      kind: "portrait",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "svinkels",
    name: "Svinkels",
    years: "1994-",
    region: "Ile-de-France",
    styles: [
      "Rap punk",
      "Rap alternatif"
    ],
    tagline: "Humour, punk, bieres et scene alternative.",
    hero: {
      alt: "Portrait illustre de Svinkels",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "stupeflip",
    name: "Stupeflip",
    years: "2000-",
    region: "Ile-de-France",
    styles: [
      "Rap rock alternatif",
      "Electro punk"
    ],
    tagline: "Le Crou, univers culte et rap-rock hallucine.",
    hero: {
      alt: "Portrait illustre de Stupeflip",
      kind: "portrait",
      color: "#8f2d56",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "casseurs-flowters",
    name: "Casseurs Flowters",
    years: "2000-",
    region: "Normandie",
    styles: [
      "Rap humour",
      "Rap narratif"
    ],
    tagline: "Orelsan, Gringe, Caen et duo generationnel.",
    hero: {
      alt: "Portrait illustre de Casseurs Flowters",
      kind: "portrait",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "casey",
    name: "Casey",
    years: "1976-",
    region: "Martinique / Ile-de-France",
    styles: [
      "Rap politique",
      "Rap rock"
    ],
    tagline: "Plume radicale, contre-discours et puissance scénique.",
    hero: {
      alt: "Portrait illustre de Casey",
      kind: "portrait",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "roce",
    name: "Rocé",
    years: "1977-",
    region: "Ile-de-France / Algerie",
    styles: [
      "Rap independant",
      "Rap jazz"
    ],
    tagline: "Histoire, jazz, archives et rap pense.",
    hero: {
      alt: "Portrait illustre de Rocé",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "la-brigade",
    name: "La Brigade",
    years: "1996-",
    region: "Ile-de-France",
    styles: [
      "Rap collectif",
      "Rap conscient"
    ],
    tagline: "Collectif social, choeurs et energie fin 90.",
    hero: {
      alt: "Portrait illustre de La Brigade",
      kind: "portrait",
      color: "#8f2d56",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "expression-direkt",
    name: "Expression Direkt",
    years: "1994-",
    region: "Ile-de-France",
    styles: [
      "Rap de rue",
      "Rap hardcore"
    ],
    tagline: "Mantes-la-Jolie, realisme dur et rap 78.",
    hero: {
      alt: "Portrait illustre de Expression Direkt",
      kind: "portrait",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "atk",
    name: "ATK",
    years: "1995-",
    region: "Ile-de-France",
    styles: [
      "Rap independant",
      "Rap collectif"
    ],
    tagline: "Heptagone, ecriture collective et culte underground.",
    hero: {
      alt: "Portrait illustre de ATK",
      kind: "portrait",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "kabal",
    name: "Kabal",
    years: "1993-",
    region: "Ile-de-France",
    styles: [
      "Rap rock",
      "Spoken word"
    ],
    tagline: "Radicalite scénique, rap-rock et parole politique.",
    hero: {
      alt: "Portrait illustre de Kabal",
      kind: "portrait",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "less-du-neuf",
    name: "Less du Neuf",
    years: "1994-",
    region: "Ile-de-France",
    styles: [
      "Rap jazz",
      "Rap independant"
    ],
    tagline: "Vinyles, jazz rap et discretion independante.",
    hero: {
      alt: "Portrait illustre de Less du Neuf",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "princess-anies",
    name: "Princess Aniès",
    years: "1977-",
    region: "Ile-de-France",
    styles: [
      "Rap feminin",
      "Rap conscient"
    ],
    tagline: "Plume sociale, independance et voix feminine 2000.",
    hero: {
      alt: "Portrait illustre de Princess Aniès",
      kind: "portrait",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "k-reen",
    name: "K-Reen",
    years: "1973-",
    region: "Guyane / Ile-de-France",
    styles: [
      "R&B francais",
      "Soul urbaine"
    ],
    tagline: "Refrains R&B, soul et passerelles rap.",
    hero: {
      alt: "Portrait illustre de K-Reen",
      kind: "portrait",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "bams",
    name: "Bams",
    years: "1973-",
    region: "Ile-de-France",
    styles: [
      "Rap feminin",
      "Rap jazz"
    ],
    tagline: "Autrice rap, jazz et parole sociale fin 90.",
    hero: {
      alt: "Portrait illustre de Bams",
      kind: "portrait",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "keny-arkana",
    name: "Keny Arkana",
    years: "1982-",
    region: "Provence-Alpes-Cote d’Azur / Argentine",
    styles: [
      "Rap militant",
      "Rap conscient"
    ],
    tagline: "Marseille, altermondialisme et rage politique.",
    hero: {
      alt: "Portrait illustre de Keny Arkana",
      kind: "portrait",
      color: "#8f2d56",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "psy-4-de-la-rime",
    name: "Psy 4 de la Rime",
    years: "1995-",
    region: "Provence-Alpes-Cote d’Azur",
    styles: [
      "Rap marseillais",
      "Rap melodique"
    ],
    tagline: "Soprano, Alonzo et collectif marseillais 2000.",
    hero: {
      alt: "Portrait illustre de Psy 4 de la Rime",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "troisieme-oeil",
    name: "Le 3ème Œil",
    years: "1995-",
    region: "Provence-Alpes-Cote d’Azur",
    styles: [
      "Rap marseillais",
      "Rap conscient"
    ],
    tagline: "Quartiers nord, seconde vague marseillaise et conscience.",
    hero: {
      alt: "Portrait illustre de Le 3ème Œil",
      kind: "portrait",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "chiens-de-paille",
    name: "Chiens de Paille",
    years: "1992-",
    region: "Provence-Alpes-Cote d’Azur",
    styles: [
      "Rap poetique",
      "Rap marseillais"
    ],
    tagline: "Sako, Hal et melancolie rap sudiste.",
    hero: {
      alt: "Portrait illustre de Chiens de Paille",
      kind: "portrait",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "faf-larage",
    name: "Faf Larage",
    years: "1971-",
    region: "Provence-Alpes-Cote d’Azur",
    styles: [
      "Rap marseillais",
      "Rap cinema"
    ],
    tagline: "Soul Swing, solo et passerelles audiovisuelles.",
    hero: {
      alt: "Portrait illustre de Faf Larage",
      kind: "portrait",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "don-choa",
    name: "Don Choa",
    years: "1974-",
    region: "Provence-Alpes-Cote d’Azur",
    styles: [
      "Rap marseillais",
      "Rap sudiste"
    ],
    tagline: "Fonky Family, personnage solo et humour noir.",
    hero: {
      alt: "Portrait illustre de Don Choa",
      kind: "portrait",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "sat-lartificier",
    name: "Sat l’Artificier",
    years: "1975-",
    region: "Provence-Alpes-Cote d’Azur",
    styles: [
      "Rap marseillais",
      "Rap introspectif"
    ],
    tagline: "Fonky Family, gravite solo et ecriture personnelle.",
    hero: {
      alt: "Portrait illustre de Sat l’Artificier",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "rim-k",
    name: "Rim’K",
    years: "1978-",
    region: "Ile-de-France / Algerie",
    styles: [
      "Rap francilien",
      "Rap diaspora"
    ],
    tagline: "113, Vitry, Maghreb et longevite solo.",
    hero: {
      alt: "Portrait illustre de Rim’K",
      kind: "portrait",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "ap",
    name: "AP",
    years: "1979-",
    region: "Ile-de-France",
    styles: [
      "Rap francilien",
      "Rap collectif"
    ],
    tagline: "113, discretion et voix de Vitry.",
    hero: {
      alt: "Portrait illustre de AP",
      kind: "portrait",
      color: "#8f2d56",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "mokobe",
    name: "Mokobé",
    years: "1976-",
    region: "Mali / Ile-de-France",
    styles: [
      "Rap afro-francophone",
      "Rap diaspora"
    ],
    tagline: "113, Afrique et collaborations continentales.",
    hero: {
      alt: "Portrait illustre de Mokobé",
      kind: "portrait",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "georges-guetary",
    name: "Georges Guétary",
    years: "1915-1997",
    region: "Occitanie / Grece",
    styles: [
      "Operette",
      "Chanson de charme"
    ],
    tagline: "Operette, sourire et music-hall international.",
    hero: {
      alt: "Portrait illustre de Georges Guétary",
      kind: "portrait",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "andre-claveau",
    name: "André Claveau",
    years: "1911-2003",
    region: "Ile-de-France",
    styles: [
      "Chanson romantique",
      "Variete radio"
    ],
    tagline: "Radio, velours vocal et romance d’apres-guerre.",
    hero: {
      alt: "Portrait illustre de André Claveau",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "jean-sablon",
    name: "Jean Sablon",
    years: "1906-1994",
    region: "Ile-de-France",
    styles: [
      "Crooner",
      "Chanson swing"
    ],
    tagline: "Micro moderne, swing et crooner francais.",
    hero: {
      alt: "Portrait illustre de Jean Sablon",
      kind: "portrait",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "yvette-giraud",
    name: "Yvette Giraud",
    years: "1916-2014",
    region: "Ile-de-France",
    styles: [
      "Chanson parisienne",
      "Variete internationale"
    ],
    tagline: "Paris, radio et chanson exportee.",
    hero: {
      alt: "Portrait illustre de Yvette Giraud",
      kind: "portrait",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "rina-ketty",
    name: "Rina Ketty",
    years: "1911-1996",
    region: "Italie / Ile-de-France",
    styles: [
      "Chanson sentimentale",
      "Valse populaire"
    ],
    tagline: "J’attendrai, accent italien et memoire de guerre.",
    hero: {
      alt: "Portrait illustre de Rina Ketty",
      kind: "portrait",
      color: "#8f2d56",
      url: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "reda-caire",
    name: "Reda Caire",
    years: "1908-1963",
    region: "Egypte / Ile-de-France",
    styles: [
      "Chanson de charme",
      "Music-hall"
    ],
    tagline: "Charme, music-hall et refrains d’evasion.",
    hero: {
      alt: "Portrait illustre de Reda Caire",
      kind: "portrait",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "leo-marjane",
    name: "Léo Marjane",
    years: "1912-2016",
    region: "Hauts-de-France",
    styles: [
      "Jazz vocal",
      "Cabaret"
    ],
    tagline: "Nuit, jazz vocal et chanson de guerre.",
    hero: {
      alt: "Portrait illustre de Léo Marjane",
      kind: "portrait",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "mireille",
    name: "Mireille",
    years: "1906-1996",
    region: "Ile-de-France",
    styles: [
      "Chanson fantaisie",
      "Piano chanson"
    ],
    tagline: "Compositrice, piano et fantaisie radiophonique.",
    hero: {
      alt: "Portrait illustre de Mireille",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "jean-lumiere",
    name: "Jean Lumière",
    years: "1895-1979",
    region: "Provence-Alpes-Cote d’Azur",
    styles: [
      "Chanson lyrique",
      "Tenor populaire"
    ],
    tagline: "Tenor de radio, romance et 78 tours.",
    hero: {
      alt: "Portrait illustre de Jean Lumière",
      kind: "portrait",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1526394931762-90052e97b376?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "ray-ventura",
    name: "Ray Ventura",
    years: "1908-1979",
    region: "Ile-de-France",
    styles: [
      "Swing francais",
      "Chanson humoristique"
    ],
    tagline: "Orchestre, swing et humour collectif.",
    hero: {
      alt: "Portrait illustre de Ray Ventura",
      kind: "portrait",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "catherine-sauvage",
    name: "Catherine Sauvage",
    years: "1929-1998",
    region: "Grand Est / Ile-de-France",
    styles: [
      "Chanson rive gauche",
      "Chanson de texte"
    ],
    tagline: "Interprete majeure de Ferré, cabaret et intensite.",
    hero: {
      alt: "Portrait illustre de Catherine Sauvage",
      kind: "portrait",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "freres-jacques",
    name: "Les Frères Jacques",
    years: "1945-1982",
    region: "Ile-de-France",
    styles: [
      "Chanson theatrale",
      "Quatuor vocal"
    ],
    tagline: "Costumes, mime, Prévert et chanson mise en scene.",
    hero: {
      alt: "Portrait illustre de Les Frères Jacques",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "magali-noel",
    name: "Magali Noël",
    years: "1931-2015",
    region: "Turquie / France",
    styles: [
      "Chanson cabaret",
      "Chanson de cinema"
    ],
    tagline: "Cinema, Gainsbourg debutant et cabaret provocateur.",
    hero: {
      alt: "Portrait illustre de Magali Noël",
      kind: "portrait",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "dario-moreno",
    name: "Dario Moreno",
    years: "1921-1968",
    region: "Turquie / France",
    styles: [
      "Music-hall",
      "Chanson festive"
    ],
    tagline: "Fete, cabaret, cinema et refrains solaires.",
    hero: {
      alt: "Portrait illustre de Dario Moreno",
      kind: "portrait",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "colette-renard",
    name: "Colette Renard",
    years: "1924-2010",
    region: "Provence-Alpes-Cote d’Azur",
    styles: [
      "Cabaret",
      "Chanson theatrale"
    ],
    tagline: "Irma la douce, cabaret adulte et diction théâtrale.",
    hero: {
      alt: "Portrait illustre de Colette Renard",
      kind: "portrait",
      color: "#8f2d56",
      url: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "francis-lemarque",
    name: "Francis Lemarque",
    years: "1917-2002",
    region: "Ile-de-France",
    styles: [
      "Chanson parisienne",
      "Chanson sociale"
    ],
    tagline: "Paris populaire, accordéon et mémoire ouvrière.",
    hero: {
      alt: "Portrait illustre de Francis Lemarque",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "gloria-lasso",
    name: "Gloria Lasso",
    years: "1922-2005",
    region: "Espagne / France",
    styles: [
      "Variete romantique",
      "Grande voix"
    ],
    tagline: "Romance internationale, orchestres et grande voix 50.",
    hero: {
      alt: "Portrait illustre de Gloria Lasso",
      kind: "portrait",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "jacques-pills",
    name: "Jacques Pills",
    years: "1906-1970",
    region: "Nouvelle-Aquitaine",
    styles: [
      "Chanson fantaisie",
      "Duo vocal"
    ],
    tagline: "Radio, duos et fantaisie d’apres-guerre.",
    hero: {
      alt: "Portrait illustre de Jacques Pills",
      kind: "portrait",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1526394931762-90052e97b376?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "marcel-amont",
    name: "Marcel Amont",
    years: "1929-2023",
    region: "Nouvelle-Aquitaine",
    styles: [
      "Chanson fantaisie",
      "Music-hall"
    ],
    tagline: "Fantaisie, acrobatie scénique et television.",
    hero: {
      alt: "Portrait illustre de Marcel Amont",
      kind: "portrait",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "jean-claude-pascal",
    name: "Jean-Claude Pascal",
    years: "1927-1992",
    region: "Ile-de-France",
    styles: [
      "Crooner francophone",
      "Chanson de cinema"
    ],
    tagline: "Elegance, cinema et Eurovision francophone.",
    hero: {
      alt: "Portrait illustre de Jean-Claude Pascal",
      kind: "portrait",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "antoine",
    name: "Antoine",
    years: "1944-",
    region: "Nouvelle-Aquitaine",
    styles: [
      "Folk beat",
      "Yeye contestataire"
    ],
    tagline: "Cheveux longs, folk satirique et jeunesse avant 68.",
    hero: {
      alt: "Portrait illustre de Antoine",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "petula-clark",
    name: "Petula Clark",
    years: "1932-",
    region: "Royaume-Uni / France",
    styles: [
      "Pop internationale",
      "Variete francophone"
    ],
    tagline: "Londres, Paris, television et chansons multilingues.",
    hero: {
      alt: "Portrait illustre de Petula Clark",
      kind: "portrait",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "herve-vilard",
    name: "Hervé Vilard",
    years: "1946-",
    region: "Ile-de-France / Auvergne-Rhone-Alpes",
    styles: [
      "Variete romantique",
      "Chanson populaire"
    ],
    tagline: "Capri, radio et grande melodie sentimentale.",
    hero: {
      alt: "Portrait illustre de Hervé Vilard",
      kind: "portrait",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "monty",
    name: "Monty",
    years: "1943-",
    region: "Ile-de-France",
    styles: [
      "Yeye masculin",
      "Variete pop"
    ],
    tagline: "45 tours, television et energie pop des seconds cercles yéyé.",
    hero: {
      alt: "Portrait illustre de Monty",
      kind: "portrait",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "annie-philippe",
    name: "Annie Philippe",
    years: "1946-",
    region: "Ile-de-France",
    styles: [
      "Yeye feminin",
      "Pop orchestrale"
    ],
    tagline: "Silhouette yéyé, pochettes couleur et pop feminine.",
    hero: {
      alt: "Portrait illustre de Annie Philippe",
      kind: "portrait",
      color: "#ffb84d",
      url: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "michele-torr",
    name: "Michèle Torr",
    years: "1947-",
    region: "Provence-Alpes-Cote d’Azur",
    styles: [
      "Variete populaire",
      "Yeye"
    ],
    tagline: "Debuts sixties, Eurovision et grands refrains de television.",
    hero: {
      alt: "Portrait illustre de Michèle Torr",
      kind: "portrait",
      color: "#8f2d56",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "eric-charden",
    name: "Éric Charden",
    years: "1942-2012",
    region: "Hauts-de-France / Vietnam",
    styles: [
      "Pop romantique",
      "Auteur-compositeur"
    ],
    tagline: "Melodies sixties, auteur pop et futurs duos de variete.",
    hero: {
      alt: "Portrait illustre de Éric Charden",
      kind: "portrait",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "alain-barriere",
    name: "Alain Barrière",
    years: "1935-2019",
    region: "Bretagne",
    styles: [
      "Chanson romantique",
      "Variete orchestrale"
    ],
    tagline: "Voix grave, dramaturgie romantique et grands refrains.",
    hero: {
      alt: "Portrait illustre de Alain Barrière",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "mike-brant",
    name: "Mike Brant",
    years: "1947-1975",
    region: "Israel / France",
    styles: [
      "Variete romantique",
      "Grande voix"
    ],
    tagline: "Voix spectaculaire, idole fragile et ballades televisuelles.",
    hero: {
      alt: "Portrait illustre de Mike Brant",
      kind: "portrait",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "patrick-juvet",
    name: "Patrick Juvet",
    years: "1950-2021",
    region: "Suisse / France",
    styles: [
      "Disco francophone",
      "Variete pop"
    ],
    tagline: "Disco, silhouette androgyne et refrains de piste.",
    hero: {
      alt: "Portrait illustre de Patrick Juvet",
      kind: "portrait",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "pierre-groscolas",
    name: "Pierre Groscolas",
    years: "1946-",
    region: "Occitanie",
    styles: [
      "Pop melodique",
      "Variete pop"
    ],
    tagline: "Melodies radio, choeurs et pop solaire des annees 70.",
    hero: {
      alt: "Portrait illustre de Pierre Groscolas",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "christian-delagrange",
    name: "Christian Delagrange",
    years: "1947-",
    region: "Ile-de-France",
    styles: [
      "Ballade populaire",
      "Variete romantique"
    ],
    tagline: "Ballades sentimentales, radio et galas populaires.",
    hero: {
      alt: "Portrait illustre de Christian Delagrange",
      kind: "portrait",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "mort-shuman",
    name: "Mort Shuman",
    years: "1938-1991",
    region: "Etats-Unis / France",
    styles: [
      "Chanson orchestrale",
      "Auteur-compositeur"
    ],
    tagline: "Broadway, piano et grands paysages francophones.",
    hero: {
      alt: "Portrait illustre de Mort Shuman",
      kind: "portrait",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "severine",
    name: "Séverine",
    years: "1948-",
    region: "Ile-de-France",
    styles: [
      "Pop Eurovision",
      "Variete orchestrale"
    ],
    tagline: "Eurovision, refrain europeen et television couleur.",
    hero: {
      alt: "Portrait illustre de Séverine",
      kind: "portrait",
      color: "#ffb84d",
      url: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "jeane-manson",
    name: "Jeane Manson",
    years: "1950-",
    region: "Etats-Unis / France",
    styles: [
      "Variete romantique",
      "Grande voix"
    ],
    tagline: "Voix franco-americaine, ballades et television populaire.",
    hero: {
      alt: "Portrait illustre de Jeane Manson",
      kind: "portrait",
      color: "#8f2d56",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "c-jerome",
    name: "C. Jérôme",
    years: "1946-2000",
    region: "Grand Est",
    styles: [
      "Variete pop",
      "Chanson de bal"
    ],
    tagline: "Refrains populaires, danse et memoire des soirees 70.",
    hero: {
      alt: "Portrait illustre de C. Jérôme",
      kind: "portrait",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "lio",
    name: "Lio",
    years: "1962-",
    region: "Belgique / Portugal / France",
    styles: [
      "Pop sucrée",
      "New wave pop"
    ],
    tagline: "Provocation pop, couleurs et silhouettes du tournant 80.",
    hero: {
      alt: "Portrait illustre de Lio",
      kind: "portrait",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "jeanne-mas",
    name: "Jeanne Mas",
    years: "1958-",
    region: "Espagne / France",
    styles: [
      "Pop dramatique",
      "Variete 80"
    ],
    tagline: "Rouge, noir, Top 50 et intensite pop.",
    hero: {
      alt: "Portrait illustre de Jeanne Mas",
      kind: "portrait",
      color: "#8f2d56",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "elsa",
    name: "Elsa",
    years: "1973-",
    region: "Ile-de-France",
    styles: [
      "Ballade pop",
      "Chanson de cinema"
    ],
    tagline: "Voix adolescente, cinema et ballades Top 50.",
    hero: {
      alt: "Portrait illustre de Elsa",
      kind: "portrait",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "images",
    name: "Images",
    years: "1986-",
    region: "Occitanie",
    styles: [
      "Pop dance",
      "Variete 80"
    ],
    tagline: "Synthés, Top 50 et refrains de piste.",
    hero: {
      alt: "Portrait illustre de Images",
      kind: "portrait",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1593078165899-c14f0fb8910f?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "debut-de-soiree",
    name: "Début de Soirée",
    years: "1984-",
    region: "Provence-Alpes-Cote d’Azur",
    styles: [
      "Dance pop",
      "Variete festive"
    ],
    tagline: "Fete, Top 50 et refrain de fin de nuit.",
    hero: {
      alt: "Portrait illustre de Début de Soirée",
      kind: "portrait",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "partenaire-particulier",
    name: "Partenaire Particulier",
    years: "1983-",
    region: "Nouvelle-Aquitaine",
    styles: [
      "Synthpop francaise",
      "New wave"
    ],
    tagline: "Machines froides, refrain entetant et clubs 80.",
    hero: {
      alt: "Portrait illustre de Partenaire Particulier",
      kind: "portrait",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "les-rita-mitsouko",
    name: "Les Rita Mitsouko",
    years: "1979-2007",
    region: "Ile-de-France",
    styles: [
      "Pop arty",
      "Rock alternatif"
    ],
    tagline: "Costumes, clips, danse et pop sans etiquette.",
    hero: {
      alt: "Portrait illustre de Les Rita Mitsouko",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "gold",
    name: "Gold",
    years: "1982-",
    region: "Occitanie",
    styles: [
      "Pop rock FM",
      "Variete de groupe"
    ],
    tagline: "Guitares FM, choeurs et grands refrains collectifs.",
    hero: {
      alt: "Portrait illustre de Gold",
      kind: "portrait",
      color: "#ffb84d",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "maurice-chevalier",
    name: "Maurice Chevalier",
    years: "1888-1972",
    region: "Ile-de-France",
    styles: [
      "Music-hall",
      "Chanson de charme"
    ],
    tagline: "Canotier, music-hall et sourire international.",
    hero: {
      alt: "Portrait illustre de Maurice Chevalier",
      kind: "portrait",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "elyane-celis",
    name: "Élyane Célis",
    years: "1914-1962",
    region: "Belgique / France",
    styles: [
      "Chanson fantaisie",
      "Variete radio"
    ],
    tagline: "Voix claire, fantaisie et radio d’apres-guerre.",
    hero: {
      alt: "Portrait illustre de Élyane Célis",
      kind: "portrait",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "andre-dassary",
    name: "André Dassary",
    years: "1912-1987",
    region: "Nouvelle-Aquitaine",
    styles: [
      "Chanson lyrique",
      "Operette"
    ],
    tagline: "Tenor populaire, operette et grand souffle radio.",
    hero: {
      alt: "Portrait illustre de André Dassary",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "lys-gauty",
    name: "Lys Gauty",
    years: "1900-1994",
    region: "Ile-de-France",
    styles: [
      "Chanson dramatique",
      "Cabaret"
    ],
    tagline: "Voix grave, cabaret et intensite dramatique.",
    hero: {
      alt: "Portrait illustre de Lys Gauty",
      kind: "portrait",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "marie-dubas",
    name: "Marie Dubas",
    years: "1894-1972",
    region: "Ile-de-France",
    styles: [
      "Chanson realiste",
      "Theatre vocal"
    ],
    tagline: "Cabaret, intensite et art de l’interpretation.",
    hero: {
      alt: "Portrait illustre de Marie Dubas",
      kind: "portrait",
      color: "#8f2d56",
      url: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "georgius",
    name: "Georgius",
    years: "1891-1970",
    region: "Ile-de-France",
    styles: [
      "Chanson comique",
      "Fantaisie"
    ],
    tagline: "Humour chante, personnages et cabaret populaire.",
    hero: {
      alt: "Portrait illustre de Georgius",
      kind: "portrait",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "fred-adison",
    name: "Fred Adison",
    years: "1908-1996",
    region: "Ile-de-France",
    styles: [
      "Swing francais",
      "Orchestre de danse"
    ],
    tagline: "Big band, bals et swing radiophonique.",
    hero: {
      alt: "Portrait illustre de Fred Adison",
      kind: "portrait",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "compagnons-chanson",
    name: "Les Compagnons de la chanson",
    years: "1941-1985",
    region: "Auvergne-Rhone-Alpes / Ile-de-France",
    styles: [
      "Groupe vocal",
      "Chanson harmonisee"
    ],
    tagline: "Harmonies vocales, Piaf et apres-guerre international.",
    hero: {
      alt: "Portrait illustre de Les Compagnons de la chanson",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "berthe-sylva",
    name: "Berthe Sylva",
    years: "1885-1941",
    region: "Bretagne",
    styles: [
      "Chanson realiste",
      "Melodrame populaire"
    ],
    tagline: "Voix de melodrame, 78 tours et larmes populaires.",
    hero: {
      alt: "Portrait illustre de Berthe Sylva",
      kind: "portrait",
      color: "#8f2d56",
      url: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "lucienne-boyer",
    name: "Lucienne Boyer",
    years: "1901-1983",
    region: "Ile-de-France",
    styles: [
      "Chanson romantique",
      "Cabaret"
    ],
    tagline: "Romance intime, cabaret et standard international.",
    hero: {
      alt: "Portrait illustre de Lucienne Boyer",
      kind: "portrait",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "pills-et-tabet",
    name: "Pills et Tabet",
    years: "1930-1939",
    region: "Ile-de-France",
    styles: [
      "Duo fantaisie",
      "Chanson de radio"
    ],
    tagline: "Duo souriant, radio et fantaisie d’avant-guerre.",
    hero: {
      alt: "Portrait illustre de Pills et Tabet",
      kind: "portrait",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "jean-tranchant",
    name: "Jean Tranchant",
    years: "1904-1972",
    region: "Ile-de-France",
    styles: [
      "Chanson d’auteur",
      "Fantaisie swing"
    ],
    tagline: "Auteur moderne, swing discret et cabaret sophistique.",
    hero: {
      alt: "Portrait illustre de Jean Tranchant",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "noel-noel",
    name: "Noël-Noël",
    years: "1897-1989",
    region: "Ile-de-France",
    styles: [
      "Chanson fantaisie",
      "Chanson de cinema"
    ],
    tagline: "Humour tendre, personnage et cinema populaire.",
    hero: {
      alt: "Portrait illustre de Noël-Noël",
      kind: "portrait",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "georges-tabet",
    name: "Georges Tabet",
    years: "1905-1984",
    region: "Algerie / France",
    styles: [
      "Chanson fantaisie",
      "Duo vocal"
    ],
    tagline: "Fantaisie, duo et esprit de revue.",
    hero: {
      alt: "Portrait illustre de Georges Tabet",
      kind: "portrait",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1526394931762-90052e97b376?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "alibert",
    name: "Alibert",
    years: "1889-1951",
    region: "Provence-Alpes-Cote d’Azur",
    styles: [
      "Operette marseillaise",
      "Music-hall regional"
    ],
    tagline: "Canebiere, accent marseillais et operette populaire.",
    hero: {
      alt: "Portrait illustre de Alibert",
      kind: "portrait",
      color: "#ffb84d",
      url: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "marianne-oswald",
    name: "Marianne Oswald",
    years: "1901-1985",
    region: "Allemagne / France",
    styles: [
      "Cabaret expressionniste",
      "Chanson de texte"
    ],
    tagline: "Exil, Cocteau, Weill et cabaret anguleux.",
    hero: {
      alt: "Portrait illustre de Marianne Oswald",
      kind: "portrait",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "yvonne-george",
    name: "Yvonne George",
    years: "1896-1930",
    region: "Belgique / France",
    styles: [
      "Cabaret dramatique",
      "Chanson moderne"
    ],
    tagline: "Cabaret intense, modernite et scene brulante.",
    hero: {
      alt: "Portrait illustre de Yvonne George",
      kind: "portrait",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "felix-mayol",
    name: "Félix Mayol",
    years: "1872-1941",
    region: "Provence-Alpes-Cote d’Azur",
    styles: [
      "Cafe-concert",
      "Chanson de revue"
    ],
    tagline: "Brin de muguet, cafe-concert et refrains populaires.",
    hero: {
      alt: "Portrait illustre de Félix Mayol",
      kind: "portrait",
      color: "#ffb84d",
      url: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "dranem",
    name: "Dranem",
    years: "1869-1935",
    region: "Ile-de-France",
    styles: [
      "Chanson comique",
      "Comique troupier"
    ],
    tagline: "Grimace, diction et comique de cafe-concert.",
    hero: {
      alt: "Portrait illustre de Dranem",
      kind: "portrait",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "georgel",
    name: "Georgel",
    years: "1884-1945",
    region: "Ile-de-France",
    styles: [
      "Chanson parisienne",
      "Chanson de rue"
    ],
    tagline: "Paris populaire, romance de quai et 78 tours.",
    hero: {
      alt: "Portrait illustre de Georgel",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "gaston-ouvrard",
    name: "Gaston Ouvrard",
    years: "1890-1981",
    region: "Ile-de-France",
    styles: [
      "Chanson comique",
      "Virtuosite verbale"
    ],
    tagline: "Debit impossible, corps malade et rire de scene.",
    hero: {
      alt: "Portrait illustre de Gaston Ouvrard",
      kind: "portrait",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "marjal",
    name: "Marjal",
    years: "1884-1945",
    region: "Ile-de-France",
    styles: [
      "Valse populaire",
      "Chanson de bal"
    ],
    tagline: "Valse, 78 tours et voix populaire de bal.",
    hero: {
      alt: "Portrait illustre de Marjal",
      kind: "portrait",
      color: "#8f2d56",
      url: "https://images.unsplash.com/photo-1526394931762-90052e97b376?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "fortuge",
    name: "Fortugé",
    years: "1887-1930",
    region: "Ile-de-France",
    styles: [
      "Chanson de revue",
      "Fantaisie parisienne"
    ],
    tagline: "Revue, argot et silhouettes de mauvais garçons.",
    hero: {
      alt: "Portrait illustre de Fortugé",
      kind: "portrait",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "georgette-plana",
    name: "Georgette Plana",
    years: "1917-2013",
    region: "Nouvelle-Aquitaine",
    styles: [
      "Bal musette",
      "Chanson populaire"
    ],
    tagline: "Voix populaire, musette et tres longue memoire de bal.",
    hero: {
      alt: "Portrait illustre de Georgette Plana",
      kind: "portrait",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "harry-fragson",
    name: "Harry Fragson",
    years: "1869-1913",
    region: "Royaume-Uni / France",
    styles: [
      "Cafe-concert",
      "Chanson de charme"
    ],
    tagline: "Vedette cosmopolite, cafe-concert et premiers disques.",
    hero: {
      alt: "Portrait illustre de Harry Fragson",
      kind: "portrait",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "polin",
    name: "Polin",
    years: "1863-1927",
    region: "Ile-de-France",
    styles: [
      "Comique troupier",
      "Cafe-concert"
    ],
    tagline: "Uniforme, diction et personnage militaire de scene.",
    hero: {
      alt: "Portrait illustre de Polin",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "paulus",
    name: "Paulus",
    years: "1845-1908",
    region: "Ile-de-France",
    styles: [
      "Cafe-concert",
      "Chanson patriotique"
    ],
    tagline: "Ancetre du cafe-concert, refrains patriotiques et memoire de scene.",
    hero: {
      alt: "Portrait illustre de Paulus",
      kind: "portrait",
      color: "#8f2d56",
      url: "https://images.unsplash.com/photo-1526394931762-90052e97b376?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "eugenie-buffet",
    name: "Eugénie Buffet",
    years: "1866-1934",
    region: "Ile-de-France",
    styles: [
      "Chanson realiste ancienne",
      "Cafe-concert"
    ],
    tagline: "Rue, costume noir et racines du realisme.",
    hero: {
      alt: "Portrait illustre de Eugénie Buffet",
      kind: "portrait",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "yvette-guilbert",
    name: "Yvette Guilbert",
    years: "1865-1944",
    region: "Ile-de-France",
    styles: [
      "Diseuse",
      "Cabaret"
    ],
    tagline: "Gants noirs, texte et art de dire la chanson.",
    hero: {
      alt: "Portrait illustre de Yvette Guilbert",
      kind: "portrait",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "charlus",
    name: "Charlus",
    years: "1860-1951",
    region: "Ile-de-France",
    styles: [
      "Chanson comique",
      "Phonographe"
    ],
    tagline: "Pionnier du disque, comique et catalogue phonographique.",
    hero: {
      alt: "Portrait illustre de Charlus",
      kind: "portrait",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1526394931762-90052e97b376?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "berard",
    name: "Bérard",
    years: "1870-1946",
    region: "Ile-de-France",
    styles: [
      "Chanson maritime",
      "Chanson de charme"
    ],
    tagline: "Voix de ports, romances et 78 tours.",
    hero: {
      alt: "Portrait illustre de Bérard",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "resca",
    name: "Resca",
    years: "1877-1945",
    region: "Italie / France",
    styles: [
      "Romance tenor",
      "Chanson napolitaine"
    ],
    tagline: "Tenor populaire, romances italiennes et disques anciens.",
    hero: {
      alt: "Portrait illustre de Resca",
      kind: "portrait",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1526394931762-90052e97b376?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "aristide-bruant",
    name: "Aristide Bruant",
    years: "1851-1925",
    region: "Ile-de-France",
    styles: [
      "Cabaret montmartrois",
      "Chanson argotique"
    ],
    tagline: "Echarpe rouge, argot, Montmartre et chanson sociale.",
    hero: {
      alt: "Portrait illustre de Aristide Bruant",
      kind: "portrait",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "theresa",
    name: "Thérésa",
    years: "1837-1913",
    region: "Ile-de-France",
    styles: [
      "Cafe-concert",
      "Chanson populaire ancienne"
    ],
    tagline: "Premiere grande diva du cafe-concert français.",
    hero: {
      alt: "Portrait illustre de Thérésa",
      kind: "portrait",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "amiati",
    name: "Amiati",
    years: "1851-1889",
    region: "Ile-de-France",
    styles: [
      "Chanson patriotique",
      "Cafe-concert dramatique"
    ],
    tagline: "Voix patriotique, drame et cafe-concert historique.",
    hero: {
      alt: "Portrait illustre de Amiati",
      kind: "portrait",
      color: "#8f2d56",
      url: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "fursy",
    name: "Fursy",
    years: "1866-1929",
    region: "Ile-de-France",
    styles: [
      "Chansonnier",
      "Cabaret satirique"
    ],
    tagline: "Montmartre, satire et chanson d’actualite.",
    hero: {
      alt: "Portrait illustre de Fursy",
      kind: "portrait",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "xavier-privas",
    name: "Xavier Privas",
    years: "1863-1927",
    region: "Auvergne-Rhone-Alpes / Ile-de-France",
    styles: [
      "Chanson poetique",
      "Chansonnier"
    ],
    tagline: "Prince des chansonniers, poesie et cabaret.",
    hero: {
      alt: "Portrait illustre de Xavier Privas",
      kind: "portrait",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "emma-liebel",
    name: "Emma Liebel",
    years: "1873-1928",
    region: "Alsace / Ile-de-France",
    styles: [
      "Cafe-concert",
      "Chanson de danse"
    ],
    tagline: "Cafe-concert, modes de danse et refrains populaires.",
    hero: {
      alt: "Portrait illustre de Emma Liebel",
      kind: "portrait",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "anna-thibaud",
    name: "Anna Thibaud",
    years: "1867-1948",
    region: "Ile-de-France",
    styles: [
      "Romance ancienne",
      "Cafe-concert"
    ],
    tagline: "Romances, salons populaires et premiers disques.",
    hero: {
      alt: "Portrait illustre de Anna Thibaud",
      kind: "portrait",
      color: "#ffb84d",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  },
  {
    id: "borel-clerc",
    name: "Borel-Clerc",
    years: "1879-1959",
    region: "Provence-Alpes-Cote d’Azur / Ile-de-France",
    styles: [
      "Chanson de revue",
      "Auteur-compositeur"
    ],
    tagline: "Revue, cafe-concert et airs populaires composes.",
    hero: {
      alt: "Portrait illustre de Borel-Clerc",
      kind: "portrait",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    }
  }
];
