import type { AlbumSummary } from './summaries';

export const albums: AlbumSummary[] = [
  {
    id: "rive-gauche",
    title: "Rive gauche eternelle",
    artist: "Compilation Chansonor",
    year: 1961,
    format: "Vinyle",
    mood: "Cabaret, texte, nuit parisienne",
    commercialSuccess: "Compilation patrimoniale de reference pour la chanson de texte.",
    cover: {
      alt: "Vinyle noir sur fond colore",
      kind: "album",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1526394931762-90052e97b376?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "pop-80",
    title: "Neons francais",
    artist: "Compilation Chansonor",
    year: 1986,
    format: "Cassette",
    mood: "Synthes, clips, television",
    commercialSuccess: "Selection concue pour les decouvertes rapides et les playlists generationnelles.",
    cover: {
      alt: "Cassette audio vintage",
      kind: "album",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1593078165899-c14f0fb8910f?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "scene-live",
    title: "Grandes scenes",
    artist: "Anthologie live",
    year: 1998,
    format: "CD",
    mood: "Concerts, foules, refrains",
    commercialSuccess: "Anthologie live pensee pour les fans de scenes et de refrains collectifs.",
    cover: {
      alt: "Foule de concert sous projecteurs",
      kind: "stage",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 3
  },
  {
    id: "aigle-noir-album",
    title: "L'Aigle noir",
    artist: "Barbara",
    year: 1970,
    format: "Vinyle",
    mood: "Piano, nuit, intime",
    commercialSuccess: "Album patrimonial au coeur du repertoire de Barbara.",
    cover: {
      alt: "Couverture sombre de L'Aigle noir",
      kind: "album",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1526394931762-90052e97b376?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "gainsbourg-confidentiel",
    title: "Gainsbourg confidentiel",
    artist: "Serge Gainsbourg",
    year: 1963,
    format: "Vinyle",
    mood: "Jazz, nuit, rive gauche",
    commercialSuccess: "Reference critique majeure dans le parcours de Gainsbourg.",
    cover: {
      alt: "Vinyle jazz rive gauche",
      kind: "album",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1526394931762-90052e97b376?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "non-homologue",
    title: "Non homologue",
    artist: "Jean-Jacques Goldman",
    year: 1985,
    format: "Vinyle / CD",
    mood: "Pop rock, radio, duo",
    commercialSuccess: "Un des albums populaires majeurs du catalogue Goldman.",
    cover: {
      alt: "Pochette pop rock annees 80",
      kind: "album",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "lautre",
    title: "L'Autre...",
    artist: "Mylene Farmer",
    year: 1991,
    format: "CD",
    mood: "Pop sombre, clip, generation",
    commercialSuccess: "Grand succes populaire du debut des annees 90.",
    cover: {
      alt: "Pochette pop dramatique",
      kind: "album",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "mistral-gagnant-album",
    title: "Mistral gagnant",
    artist: "Renaud",
    year: 1985,
    format: "Vinyle",
    mood: "Tendresse, memoire, chanson populaire",
    commercialSuccess: "Album emblematique du repertoire de Renaud.",
    cover: {
      alt: "Pochette nostalgique acoustique",
      kind: "album",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "zen-album",
    title: "Zen",
    artist: "Zazie",
    year: 1995,
    format: "CD",
    mood: "Pop autrice, radio, clip",
    commercialSuccess: "Album de consolidation majeure dans la pop francaise des annees 90.",
    cover: {
      alt: "Couverture pop Zen",
      kind: "album",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "savoir-aimer-album",
    title: "Savoir aimer",
    artist: "Florent Pagny",
    year: 1997,
    format: "CD",
    mood: "Grande voix, ballades, radio",
    commercialSuccess: "Grand succes populaire de la fin des annees 90.",
    cover: {
      alt: "Couverture grande voix",
      kind: "album",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "supreme-ntm",
    title: "Supreme NTM",
    artist: "NTM",
    year: 1998,
    format: "CD",
    mood: "Rap frontal, scene, urbain",
    commercialSuccess: "Reference majeure du rap francais.",
    cover: {
      alt: "Couverture rap sombre",
      kind: "album",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "calogero-album",
    title: "Calogero",
    artist: "Calogero",
    year: 2002,
    format: "CD",
    mood: "Pop rock, basse, annees 2000",
    commercialSuccess: "Album d’installation majeure de Calogero en solo.",
    cover: {
      alt: "Couverture pop rock 2000",
      kind: "album",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "variations-meme-taime",
    title: "Variations sur le meme t’aime",
    artist: "Vanessa Paradis",
    year: 1990,
    format: "CD",
    mood: "Pop, mode, Gainsbourg",
    commercialSuccess: "Album charniere dans la construction de l’image pop de Vanessa Paradis.",
    cover: {
      alt: "Couverture pop mode",
      kind: "album",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "essence-ordinaire",
    title: "Essence ordinaire",
    artist: "Zebda",
    year: 1998,
    format: "CD",
    mood: "Rock metisse, festival, social",
    commercialSuccess: "Grand succes populaire et festivalier de la fin des annees 90.",
    cover: {
      alt: "Album rock metisse festif",
      kind: "album",
      color: "#ffb84d",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "quelquun-ma-dit",
    title: "Quelqu'un m'a dit",
    artist: "Carla Bruni",
    year: 2002,
    format: "CD",
    mood: "Folk, intime, acoustique",
    commercialSuccess: "Succes critique et commercial majeur.",
    cover: {
      alt: "Album folk acoustique",
      kind: "album",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "des-visages-des-figures",
    title: "Des visages des figures",
    artist: "Noir Desir",
    year: 2001,
    format: "CD",
    mood: "Rock, melancolie, atmosphere",
    commercialSuccess: "Succes critique et populaire important.",
    cover: {
      alt: "Album rock atmospherique",
      kind: "album",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "chaleur-humaine",
    title: "Chaleur humaine",
    artist: "Christine and the Queens",
    year: 2014,
    format: "CD / streaming",
    mood: "Pop choregraphique, scene, identite",
    commercialSuccess: "Succes critique et international majeur.",
    cover: {
      alt: "Album pop choregraphique",
      kind: "album",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "bruler-le-feu",
    title: "Bruler le feu",
    artist: "Juliette Armanet",
    year: 2021,
    format: "Vinyle / streaming",
    mood: "Pop disco, piano, scene",
    commercialSuccess: "Succes critique et public de la nouvelle scene.",
    cover: {
      alt: "Album pop disco rouge",
      kind: "album",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "la-notte",
    title: "La notte, la notte",
    artist: "Etienne Daho",
    year: 1984,
    format: "Vinyle",
    mood: "Pop elegante, nuit, ville",
    commercialSuccess: "Album fondateur du style Daho.",
    cover: {
      alt: "Album pop elegant nocturne",
      kind: "album",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "sauver-amour",
    title: "Sauver l’amour",
    artist: "Daniel Balavoine",
    year: 1985,
    format: "Vinyle",
    mood: "Pop engagee, synthese, humanisme",
    commercialSuccess: "Album patrimonial a tres forte reconnaissance populaire.",
    cover: {
      alt: "Album pop engagee",
      kind: "album",
      color: "#ffb84d",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "louise-attaque-album",
    title: "Louise Attaque",
    artist: "Louise Attaque",
    year: 1997,
    format: "CD",
    mood: "Rock acoustique, violon, groupe",
    commercialSuccess: "Tres grand succes populaire du rock acoustique francais.",
    cover: {
      alt: "Album rock acoustique",
      kind: "album",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "aventurier-album",
    title: "L'Aventurier",
    artist: "Indochine",
    year: 1982,
    format: "Vinyle",
    mood: "New wave, jeunesse, aventure",
    commercialSuccess: "Album de revelation durable.",
    cover: {
      alt: "Album new wave aventure",
      kind: "album",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "un-autre-monde-album",
    title: "Un autre monde",
    artist: "Telephone",
    year: 1984,
    format: "Vinyle",
    mood: "Rock francais, groupe, grandes salles",
    commercialSuccess: "Reference rock populaire et generational.",
    cover: {
      alt: "Album rock francais",
      kind: "album",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "le-fil",
    title: "Le Fil",
    artist: "Camille",
    year: 2005,
    format: "CD",
    mood: "Voix, boucle, experimentation",
    commercialSuccess: "Succes critique et public important.",
    cover: {
      alt: "Album vocal experimental",
      kind: "album",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "la-femme-chocolat",
    title: "La Femme chocolat",
    artist: "Olivia Ruiz",
    year: 2005,
    format: "CD",
    mood: "Nouvelle scene, cabaret, couleur",
    commercialSuccess: "Succes public et critique majeur.",
    cover: {
      alt: "Album cabaret colore",
      kind: "album",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "midi-20",
    title: "Midi 20",
    artist: "Grand Corps Malade",
    year: 2006,
    format: "CD",
    mood: "Slam, parole, nouvelle scene",
    commercialSuccess: "Succes populaire fondateur du slam francophone.",
    cover: {
      alt: "Album slam parole",
      kind: "album",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "la-mer-album",
    title: "La Mer",
    artist: "Charles Trenet",
    year: 1946,
    format: "78 tours / anthologie",
    mood: "Patrimoine, swing, mer",
    commercialSuccess: "Standard international et pilier du patrimoine francais.",
    cover: {
      alt: "Anthologie maritime Trenet",
      kind: "album",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "paname-album",
    title: "Paname",
    artist: "Leo Ferre",
    year: 1960,
    format: "Vinyle",
    mood: "Poesie, cabaret, Paris",
    commercialSuccess: "Reference critique majeure du repertoire Ferre.",
    cover: {
      alt: "Vinyle poetique Paname",
      kind: "album",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1526394931762-90052e97b376?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "d-eux",
    title: "D’eux",
    artist: "Celine Dion",
    year: 1995,
    format: "CD",
    mood: "Grande pop francophone, Goldman, international",
    commercialSuccess: "Album francophone parmi les plus vendus au monde.",
    cover: {
      alt: "Album francophone international",
      kind: "album",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "brol",
    title: "Brol",
    artist: "Angèle",
    year: 2018,
    format: "Streaming / CD",
    mood: "Pop belge, clip, generation",
    commercialSuccess: "Succes massif de la pop francophone recente.",
    cover: {
      alt: "Album pop belge Brol",
      kind: "album",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "la-fete-est-finie",
    title: "La fête est finie",
    artist: "Orelsan",
    year: 2017,
    format: "Streaming / CD",
    mood: "Rap, streaming, clips conceptuels",
    commercialSuccess: "Grand succes public et critique.",
    cover: {
      alt: "Album rap conceptuel",
      kind: "album",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "sans-plus-attendre",
    title: "Sans plus attendre",
    artist: "Axelle Red",
    year: 1993,
    format: "CD",
    mood: "Soul pop, Belgique, radio",
    commercialSuccess: "Succes francophone majeur des annees 90.",
    cover: {
      alt: "Album soul pop belge",
      kind: "album",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "toi-moi-gregoire",
    title: "Toi + moi",
    artist: "Grégoire",
    year: 2008,
    format: "CD / numerique",
    mood: "Pop acoustique, internet, participatif",
    commercialSuccess: "Succes populaire ne du financement participatif.",
    cover: {
      alt: "Album pop participatif",
      kind: "album",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "on-enferme-pas-oiseaux",
    title: "On n’enferme pas les oiseaux",
    artist: "Barbara Pravi",
    year: 2021,
    format: "CD / streaming",
    mood: "Nouvelle chanson, voix, Eurovision",
    commercialSuccess: "Succes international apres Eurovision.",
    cover: {
      alt: "Album nouvelle chanson vocale",
      kind: "album",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "racine-carree",
    title: "Racine carree",
    artist: "Stromae",
    year: 2013,
    format: "CD / streaming",
    mood: "Pop belge, electronique, clips",
    commercialSuccess: "Succes international massif.",
    cover: {
      alt: "Album pop belge electronique",
      kind: "album",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "cosmopolitanie",
    title: "Cosmopolitanie",
    artist: "Soprano",
    year: 2014,
    format: "CD / streaming",
    mood: "Pop rap, Marseille, grande scene",
    commercialSuccess: "Grand succes public de la pop rap des annees 2010.",
    cover: {
      alt: "Album pop rap marseillais",
      kind: "album",
      color: "#ffb84d",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "idees-blanches",
    title: "Idees blanches",
    artist: "Vianney",
    year: 2014,
    format: "CD / streaming",
    mood: "Pop acoustique, guitare, auteur",
    commercialSuccess: "Succes de revelation majeure.",
    cover: {
      alt: "Album pop acoustique auteur",
      kind: "album",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "osez-josephine-album",
    title: "Osez Joséphine",
    artist: "Alain Bashung",
    year: 1991,
    format: "CD",
    mood: "Rock chanson, western, poésie",
    commercialSuccess: "Album majeur du répertoire Bashung.",
    cover: {
      alt: "Album rock chanson western",
      kind: "album",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "engelberg",
    title: "Engelberg",
    artist: "Stephan Eicher",
    year: 1991,
    format: "CD",
    mood: "Pop européenne, littérature, radio",
    commercialSuccess: "Grand succès pop francophone.",
    cover: {
      alt: "Album pop suisse",
      kind: "album",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "mon-frere",
    title: "Mon frère",
    artist: "Maxime Le Forestier",
    year: 1972,
    format: "Vinyle",
    mood: "Folk, voyage, fraternité",
    commercialSuccess: "Classique durable de la chanson folk française.",
    cover: {
      alt: "Album folk français",
      kind: "album",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "meteque-album",
    title: "Le Métèque",
    artist: "Georges Moustaki",
    year: 1969,
    format: "Vinyle",
    mood: "Méditerranée, guitare, poésie",
    commercialSuccess: "Album patrimonial de la chanson française.",
    cover: {
      alt: "Album mediterraneen de texte",
      kind: "album",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "caravane-album",
    title: "Caravane",
    artist: "Raphael",
    year: 2005,
    format: "CD",
    mood: "Pop rock, route, mélancolie",
    commercialSuccess: "Succès public et critique majeur.",
    cover: {
      alt: "Album route pop rock",
      kind: "album",
      color: "#ffb84d",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "coeur-pirate-album",
    title: "Cœur de Pirate",
    artist: "Cœur de Pirate",
    year: 2008,
    format: "CD",
    mood: "Piano pop, Québec, intimité",
    commercialSuccess: "Succès critique et public francophone.",
    cover: {
      alt: "Album piano pop quebecois",
      kind: "album",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "sainte-victoire",
    title: "Sainte-Victoire",
    artist: "Clara Luciani",
    year: 2018,
    format: "CD / streaming",
    mood: "Pop rock, basse, silhouette",
    commercialSuccess: "Succès critique et populaire.",
    cover: {
      alt: "Album pop rock feminine",
      kind: "album",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "ami-ou-ennemi",
    title: "Ami ou ennemi",
    artist: "Maurane",
    year: 1991,
    format: "CD",
    mood: "Soul francophone, voix, Belgique",
    commercialSuccess: "Référence soul-pop francophone.",
    cover: {
      alt: "Album soul Maurane",
      kind: "album",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "entre-deux-reves",
    title: "Entre deux reves",
    artist: "Charles Aznavour",
    year: 1967,
    format: "Vinyle",
    mood: "Voyage, cabaret, emotion",
    commercialSuccess: "Repertoire majeur d’un artiste francophone mondial.",
    cover: {
      alt: "Pochette voyage Aznavour",
      kind: "album",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "il-est-cinq-heures-album",
    title: "Il est cinq heures",
    artist: "Jacques Dutronc",
    year: 1968,
    format: "Vinyle",
    mood: "Paris, ironie, pop",
    commercialSuccess: "Catalogue central de la pop française des annees 60.",
    cover: {
      alt: "Pochette Paris pop",
      kind: "album",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "king-of-world",
    title: "King of the World",
    artist: "Sheila",
    year: 1979,
    format: "Vinyle",
    mood: "Disco, international, paillettes",
    commercialSuccess: "Succes disco europeen durable.",
    cover: {
      alt: "Pochette disco internationale",
      kind: "album",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "la-montagne-album",
    title: "La Montagne",
    artist: "Jean Ferrat",
    year: 1964,
    format: "Vinyle",
    mood: "Paysage, engagement, memoire",
    commercialSuccess: "Classique durable de la chanson française.",
    cover: {
      alt: "Pochette paysage Ferrat",
      kind: "album",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "alors-regarde",
    title: "Alors regarde",
    artist: "Patrick Bruel",
    year: 1989,
    format: "CD / Vinyle",
    mood: "Scene, fans, pop",
    commercialSuccess: "Tres grand succes public et generationnel.",
    cover: {
      alt: "Pochette concert Bruel",
      kind: "album",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "qui-de-nous-deux-album",
    title: "Qui de nous deux",
    artist: "M",
    year: 2003,
    format: "CD",
    mood: "Graphique, tendre, pop rock",
    commercialSuccess: "Succes critique et public majeur des annees 2000.",
    cover: {
      alt: "Pochette graphique M",
      kind: "album",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "bretonne",
    title: "Bretonne",
    artist: "Nolwenn Leroy",
    year: 2010,
    format: "CD",
    mood: "Patrimoine, region, pop",
    commercialSuccess: "Tres grand succes commercial en France.",
    cover: {
      alt: "Pochette Bretagne pop",
      kind: "album",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "un-jour-ete",
    title: "Un jour d’ete",
    artist: "Amel Bent",
    year: 2004,
    format: "CD",
    mood: "Pop soul, voix, affirmation",
    commercialSuccess: "Tres fort succes radio et public.",
    cover: {
      alt: "Pochette pop soul Amel Bent",
      kind: "album",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "nakamura-album",
    title: "Nakamura",
    artist: "Aya Nakamura",
    year: 2018,
    format: "Streaming / CD",
    mood: "Afropop, streaming, mondial",
    commercialSuccess: "Succes international majeur.",
    cover: {
      alt: "Pochette afropop Nakamura",
      kind: "album",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "chocolat-romeo",
    title: "Chocolat",
    artist: "Roméo Elvis",
    year: 2019,
    format: "Streaming / CD",
    mood: "Pop rap belge, streaming, duo",
    commercialSuccess: "Succes francophone important en streaming.",
    cover: {
      alt: "Pochette pop rap belge",
      kind: "album",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "chansons-noel-tino",
    title: "Chansons de Noel",
    artist: "Tino Rossi",
    year: 1946,
    format: "78 tours / Compilation",
    mood: "Familial, cinema, rituel",
    commercialSuccess: "Standard saisonnier majeur du repertoire francophone.",
    cover: {
      alt: "Pochette Noel Tino Rossi",
      kind: "album",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1526394931762-90052e97b376?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "chansons-realistes-frehel",
    title: "Chansons realistes",
    artist: "Fréhel",
    year: 1939,
    format: "78 tours / Anthologie",
    mood: "Rue, java, cabaret",
    commercialSuccess: "Reference historique de la chanson realiste.",
    cover: {
      alt: "Pochette chansons realistes Frehel",
      kind: "album",
      color: "#8f2d56",
      url: "https://images.unsplash.com/photo-1526394931762-90052e97b376?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "paris-music-hall",
    title: "Paris music-hall",
    artist: "Mistinguett",
    year: 1920,
    format: "78 tours / Revue",
    mood: "Revue, plumes, theatre",
    commercialSuccess: "Repertoire fondateur du music-hall parisien.",
    cover: {
      alt: "Pochette revue Mistinguett",
      kind: "album",
      color: "#ffb84d",
      url: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "lily-album",
    title: "Lily",
    artist: "Pierre Perret",
    year: 1977,
    format: "Vinyle",
    mood: "Humaniste, populaire, texte",
    commercialSuccess: "Titre phare de la chanson humaniste populaire.",
    cover: {
      alt: "Pochette Lily Pierre Perret",
      kind: "album",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "sheller-solitaire",
    title: "Sheller en solitaire",
    artist: "William Sheller",
    year: 1991,
    format: "CD live",
    mood: "Piano, recital, emotion",
    commercialSuccess: "Grand succes critique et populaire.",
    cover: {
      alt: "Pochette Sheller piano",
      kind: "album",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "poses-chamfort",
    title: "Poses",
    artist: "Alain Chamfort",
    year: 1979,
    format: "Vinyle",
    mood: "Pop sophistiquee, mer, studio",
    commercialSuccess: "Succes majeur porte par Manureva.",
    cover: {
      alt: "Pochette Poses Alain Chamfort",
      kind: "album",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "corons-album",
    title: "Les Corons",
    artist: "Pierre Bachelet",
    year: 1982,
    format: "Vinyle",
    mood: "Regional, populaire, memoire",
    commercialSuccess: "Hymne populaire durable.",
    cover: {
      alt: "Pochette Les Corons",
      kind: "album",
      color: "#ffb84d",
      url: "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "gourmandises",
    title: "Gourmandises",
    artist: "Alizée",
    year: 2000,
    format: "CD",
    mood: "Pop 2000, clip, adolescence",
    commercialSuccess: "Succes europeen majeur.",
    cover: {
      alt: "Pochette Gourmandises Alizee",
      kind: "album",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "chambre-12",
    title: "Chambre 12",
    artist: "Louane",
    year: 2015,
    format: "CD / Streaming",
    mood: "Pop, cinema, generation 2010",
    commercialSuccess: "Tres grand succes commercial des annees 2010.",
    cover: {
      alt: "Pochette Chambre 12 Louane",
      kind: "album",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "zanaka",
    title: "Zanaka",
    artist: "Jain",
    year: 2015,
    format: "CD / Streaming",
    mood: "Pop world, graphique, viral",
    commercialSuccess: "Succes international porte par le clip et le streaming.",
    cover: {
      alt: "Pochette Zanaka Jain",
      kind: "album",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "petit-taureau",
    title: "Petit taureau",
    artist: "Claude Nougaro",
    year: 1967,
    format: "Vinyle",
    mood: "Jazz, Toulouse, parole rythmique",
    commercialSuccess: "Reference majeure de la chanson jazz.",
    cover: {
      alt: "Pochette Nougaro jazz",
      kind: "album",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "nino-and-radiah",
    title: "Nino and Radiah",
    artist: "Nino Ferrer",
    year: 1975,
    format: "Vinyle",
    mood: "Soul, pop, Sud",
    commercialSuccess: "Classique durable porte par Le Sud.",
    cover: {
      alt: "Pochette Nino and Radiah",
      kind: "album",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "fugain-big-bazar",
    title: "Fugain et le Big Bazar",
    artist: "Michel Fugain",
    year: 1972,
    format: "Vinyle",
    mood: "Collectif, colore, scene",
    commercialSuccess: "Grand succes populaire des annees 70.",
    cover: {
      alt: "Pochette Big Bazar",
      kind: "album",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "je-suis-malade-album",
    title: "Je suis malade",
    artist: "Serge Lama",
    year: 1973,
    format: "Vinyle",
    mood: "Dramatique, piano, grande voix",
    commercialSuccess: "Classique majeur de la carriere de Serge Lama.",
    cover: {
      alt: "Pochette Serge Lama dramatique",
      kind: "album",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "mots-bleus-album",
    title: "Les Mots bleus",
    artist: "Christophe",
    year: 1974,
    format: "Vinyle",
    mood: "Nocturne, studio, pop romantique",
    commercialSuccess: "Classique durable de Christophe.",
    cover: {
      alt: "Pochette Les Mots bleus",
      kind: "album",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "quel-enfer",
    title: "Quel enfer !",
    artist: "Niagara",
    year: 1988,
    format: "Vinyle / CD",
    mood: "Pop rock, clip, energie",
    commercialSuccess: "Succes radio et video de la fin des annees 80.",
    cover: {
      alt: "Pochette Niagara",
      kind: "album",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "fous-a-lier",
    title: "Fous a lier",
    artist: "Les Innocents",
    year: 1992,
    format: "CD",
    mood: "Pop, harmonies, Bretagne imaginaire",
    commercialSuccess: "Succes critique et radio.",
    cover: {
      alt: "Pochette Les Innocents",
      kind: "album",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "mamagubida",
    title: "Mamagubida",
    artist: "Tryo",
    year: 1998,
    format: "CD",
    mood: "Reggae, acoustique, festival",
    commercialSuccess: "Grand succes par le bouche-a-oreille et la scene.",
    cover: {
      alt: "Pochette Tryo Mamagubida",
      kind: "album",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "flip",
    title: "Flip",
    artist: "Lomepal",
    year: 2017,
    format: "Streaming / CD",
    mood: "Rap pop, introspection, generation streaming",
    commercialSuccess: "Succes streaming majeur.",
    cover: {
      alt: "Pochette Flip Lomepal",
      kind: "album",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "a-peu-pres",
    title: "A peu pres",
    artist: "Pomme",
    year: 2017,
    format: "CD / Streaming",
    mood: "Folk intime, autrice, nuit",
    commercialSuccess: "Succes critique et public jeune.",
    cover: {
      alt: "Pochette Pomme folk",
      kind: "album",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "amour-heritage-album",
    title: "L'amour en heritage",
    artist: "Nana Mouskouri",
    year: 1984,
    format: "Vinyle / CD",
    mood: "International, orchestre, grande voix",
    commercialSuccess: "Succes populaire porte par la television et les editions internationales.",
    cover: {
      alt: "Album L amour en heritage",
      kind: "album",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "pigalle-cabarets",
    title: "Pigalle et cabarets",
    artist: "Georges Ulmer",
    year: 1946,
    format: "78 tours / Anthologie",
    mood: "Cabaret, Pigalle, apres-guerre",
    commercialSuccess: "Repertoire de cabaret durable.",
    cover: {
      alt: "Pochette Pigalle cabaret",
      kind: "album",
      color: "#8f2d56",
      url: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "chansons-possibles",
    title: "Chansons possibles",
    artist: "Boris Vian",
    year: 1956,
    format: "Vinyle / Anthologie",
    mood: "Satire, engagement, rive gauche",
    commercialSuccess: "Reference critique majeure.",
    cover: {
      alt: "Pochette Boris Vian",
      kind: "album",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "fantaisie-militaire",
    title: "Fantaisie militaire",
    artist: "Alain Bashung",
    year: 1998,
    format: "CD",
    mood: "Rock, nocturne, critique",
    commercialSuccess: "Succes critique et Victoires.",
    cover: {
      alt: "Pochette Fantaisie militaire",
      kind: "album",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1521337581100-8ca9a73a5f79?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "sahra",
    title: "Sahra",
    artist: "Khaled",
    year: 1996,
    format: "CD",
    mood: "Rai pop, international, Goldman",
    commercialSuccess: "Succes international majeur.",
    cover: {
      alt: "Pochette Sahra Khaled",
      kind: "album",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "baida",
    title: "Baida",
    artist: "Faudel",
    year: 1997,
    format: "CD",
    mood: "Rai, jeunesse, pop 90",
    commercialSuccess: "Succes radio et television.",
    cover: {
      alt: "Pochette Baida Faudel",
      kind: "album",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "la-good-life",
    title: "La Good Life",
    artist: "K.Maro",
    year: 2004,
    format: "CD",
    mood: "Pop rap, club, Quebec",
    commercialSuccess: "Hit international porte par Femme Like U.",
    cover: {
      alt: "Pochette La Good Life",
      kind: "album",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "jeu-7-erreurs",
    title: "Le Jeu des 7 erreurs",
    artist: "Elodie Frege",
    year: 2006,
    format: "CD",
    mood: "Pop chanson, elegance, Biolay",
    commercialSuccess: "Succes critique pop chanson.",
    cover: {
      alt: "Pochette Elodie Frege",
      kind: "album",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "mi-vida",
    title: "Mi vida",
    artist: "Kendji Girac",
    year: 2020,
    format: "Streaming / CD",
    mood: "Pop gitane, duo, contemporain",
    commercialSuccess: "Succes streaming et radio.",
    cover: {
      alt: "Pochette Mi vida Kendji",
      kind: "album",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "abdel-kader-live",
    title: "1, 2, 3 Soleils",
    artist: "Rachid Taha",
    year: 1998,
    format: "Live",
    mood: "Rai, live, collectif",
    commercialSuccess: "Live populaire majeur.",
    cover: {
      alt: "Pochette 123 Soleils",
      kind: "album",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "tragédie-album",
    title: "Tragédie",
    artist: "Tragedie",
    year: 2003,
    format: "CD",
    mood: "R&B, danse, clips",
    commercialSuccess: "Succes radio et television musicale.",
    cover: {
      alt: "Pochette Tragedie",
      kind: "album",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "melocoton-album",
    title: "Melocoton",
    artist: "Colette Magny",
    year: 1963,
    format: "Vinyle",
    mood: "Blues, voix, engagement",
    commercialSuccess: "Reference critique durable.",
    cover: {
      alt: "Pochette Melocoton",
      kind: "album",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "comme-radio-album",
    title: "Comme à la radio",
    artist: "Brigitte Fontaine",
    year: 1969,
    format: "Vinyle",
    mood: "Avant-garde, jazz, theatre",
    commercialSuccess: "Reference critique internationale.",
    cover: {
      alt: "Pochette Comme a la radio",
      kind: "album",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "paix-album",
    title: "Paix",
    artist: "Catherine Ribeiro",
    year: 1972,
    format: "Vinyle",
    mood: "Progressif, radical, incantatoire",
    commercialSuccess: "Disque culte critique.",
    cover: {
      alt: "Pochette Paix Catherine Ribeiro",
      kind: "album",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1521337581100-8ca9a73a5f79?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "pauline-croze-album",
    title: "Pauline Croze",
    artist: "Pauline Croze",
    year: 2005,
    format: "CD",
    mood: "Folk, intime, guitare",
    commercialSuccess: "Succes critique et public de niche.",
    cover: {
      alt: "Pochette Pauline Croze",
      kind: "album",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "ex-fan-sixties-album",
    title: "Ex-fan des sixties",
    artist: "Jane Birkin",
    year: 1978,
    format: "Vinyle",
    mood: "Pop, Gainsbourg, icones",
    commercialSuccess: "Reference pop culte.",
    cover: {
      alt: "Pochette Ex-fan des sixties",
      kind: "album",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "starmania-album",
    title: "Starmania",
    artist: "Starmania",
    year: 1978,
    format: "Double album",
    mood: "Rock opera, ville, scene",
    commercialSuccess: "Succes scénique et discographique durable.",
    cover: {
      alt: "Pochette Starmania",
      kind: "album",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "boire",
    title: "Boire",
    artist: "Miossec",
    year: 1995,
    format: "CD",
    mood: "Rock brut, Brest, parole directe",
    commercialSuccess: "Reference critique majeure.",
    cover: {
      alt: "Pochette Boire",
      kind: "album",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "la-fossette",
    title: "La Fossette",
    artist: "Dominique A",
    year: 1992,
    format: "CD",
    mood: "Minimal, indie, home studio",
    commercialSuccess: "Reference critique durable.",
    cover: {
      alt: "Pochette La Fossette",
      kind: "album",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "le-tango-des-gens",
    title: "Le Tango des gens",
    artist: "Sanseverino",
    year: 2001,
    format: "CD",
    mood: "Swing, humour, guitare",
    commercialSuccess: "Succes critique et public chanson.",
    cover: {
      alt: "Pochette Tango des gens",
      kind: "album",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "dans-ma-bulle",
    title: "Dans ma bulle",
    artist: "Diam’s",
    year: 2006,
    format: "CD",
    mood: "Rap, confession, generation 2000",
    commercialSuccess: "Tres grand succes commercial.",
    cover: {
      alt: "Pochette Dans ma bulle",
      kind: "album",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "opera-puccino",
    title: "Opera Puccino",
    artist: "Oxmo Puccino",
    year: 1998,
    format: "CD",
    mood: "Rap poetique, narration, jazz",
    commercialSuccess: "Reference critique rap.",
    cover: {
      alt: "Pochette Opera Puccino",
      kind: "album",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "pop-up-yelle",
    title: "Pop Up",
    artist: "Yelle",
    year: 2007,
    format: "CD / Digital",
    mood: "Electro pop, web, couleur",
    commercialSuccess: "Succes viral et international.",
    cover: {
      alt: "Pochette Pop Up Yelle",
      kind: "album",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "pull-marine-album",
    title: "Pull marine",
    artist: "Isabelle Adjani",
    year: 1983,
    format: "Single / Album",
    mood: "Pop froide, cinema, clip",
    commercialSuccess: "Tube pop 80.",
    cover: {
      alt: "Pochette Pull marine",
      kind: "album",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "twist-saint-tropez-album",
    title: "Twist a Saint-Tropez",
    artist: "Les Chats Sauvages",
    year: 1961,
    format: "45 tours",
    mood: "Rock yeye, plage, jeunesse",
    commercialSuccess: "Tube jeunesse des annees 60.",
    cover: {
      alt: "Pochette twist Saint-Tropez",
      kind: "album",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "rita-mitsouko-album",
    title: "Rita Mitsouko",
    artist: "Rita Mitsouko",
    year: 1984,
    format: "Vinyle",
    mood: "Pop alternative, clip, danse",
    commercialSuccess: "Succes public et critique.",
    cover: {
      alt: "Album Rita Mitsouko",
      kind: "album",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "rapattitude",
    title: "Rapattitude",
    artist: "Dee Nasty",
    year: 1990,
    format: "Compilation",
    mood: "Hip-hop, pionnier, radio",
    commercialSuccess: "Reference historique du hip-hop francais.",
    cover: {
      alt: "Pochette Rapattitude",
      kind: "album",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "a-la-francaise-arno",
    title: "A la francaise",
    artist: "Arno",
    year: 1995,
    format: "CD",
    mood: "Rock, Belgique, cabaret brut",
    commercialSuccess: "Reference culte de la chanson rock belge.",
    cover: {
      alt: "Album A la francaise Arno",
      kind: "album",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "le-tour-de-lile",
    title: "Le tour de l’ile",
    artist: "Felix Leclerc",
    year: 1975,
    format: "Vinyle",
    mood: "Quebec, guitare, conte",
    commercialSuccess: "Reference majeure de la chanson quebecoise.",
    cover: {
      alt: "Album Le tour de l’ile",
      kind: "album",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "lindberg-album",
    title: "Lindberg",
    artist: "Robert Charlebois",
    year: 1968,
    format: "Vinyle",
    mood: "Rock psyché, Quebec, contre-culture",
    commercialSuccess: "Classique critique et populaire au Quebec.",
    cover: {
      alt: "Album Lindberg Charlebois",
      kind: "album",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "patchanka",
    title: "Patchanka",
    artist: "Mano Negra",
    year: 1988,
    format: "Vinyle / CD",
    mood: "Punk, latin, rue, alternative",
    commercialSuccess: "Succes alternatif devenu patrimonial.",
    cover: {
      alt: "Album Patchanka Mano Negra",
      kind: "album",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "la-ouache",
    title: "La Ouache",
    artist: "Matmatah",
    year: 1998,
    format: "CD",
    mood: "Rock breton, festival, generation 90",
    commercialSuccess: "Tres fort succes public.",
    cover: {
      alt: "Album La Ouache Matmatah",
      kind: "album",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "western-sous-la-neige",
    title: "Western sous la neige",
    artist: "Dionysos",
    year: 2002,
    format: "CD",
    mood: "Rock fantasque, indie, litterature",
    commercialSuccess: "Succes critique et public indie.",
    cover: {
      alt: "Album Western sous la neige",
      kind: "album",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "douze-fois-par-an-album",
    title: "Douze fois par an",
    artist: "Jeanne Cherhal",
    year: 2004,
    format: "CD",
    mood: "Piano, texte, nouvelle scene",
    commercialSuccess: "Reconnaissance critique et Victoires.",
    cover: {
      alt: "Album Douze fois par an",
      kind: "album",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "yael-naim-album",
    title: "Yael Naim",
    artist: "Yael Naim",
    year: 2007,
    format: "CD / Digital",
    mood: "Folk pop, multilingue, international",
    commercialSuccess: "Succes international notable.",
    cover: {
      alt: "Album Yael Naim",
      kind: "album",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "mini-world",
    title: "Mini World",
    artist: "Indila",
    year: 2014,
    format: "CD / Digital",
    mood: "Pop dramatique, clip, streaming",
    commercialSuccess: "Tres grand succes streaming et international.",
    cover: {
      alt: "Album Mini World Indila",
      kind: "album",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "palais-dargile",
    title: "Palais d’argile",
    artist: "Feu! Chatterton",
    year: 2021,
    format: "Vinyle / Digital",
    mood: "Rock litteraire, poesie, monde contemporain",
    commercialSuccess: "Succes critique et large public.",
    cover: {
      alt: "Album Palais d’argile",
      kind: "album",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1521337581100-8ca9a73a5f79?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "psycho-tropical-berlin",
    title: "Psycho Tropical Berlin",
    artist: "La Femme",
    year: 2013,
    format: "CD / Vinyle",
    mood: "Surf pop, psyché, indie",
    commercialSuccess: "Succes indie puis reconnaissance large.",
    cover: {
      alt: "Album Psycho Tropical Berlin",
      kind: "album",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "music-hall-sentimental",
    title: "Music-hall sentimental",
    artist: "Lucienne Delyle",
    year: 1942,
    format: "78 tours / Anthologie",
    mood: "Valse, TSF, bal populaire",
    commercialSuccess: "Grand repertoire populaire patrimonial.",
    cover: {
      alt: "Album Music-hall sentimental",
      kind: "album",
      color: "#8f2d56",
      url: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "cabaret-marin",
    title: "Cabaret marin",
    artist: "Suzy Solidor",
    year: 1933,
    format: "78 tours / Anthologie",
    mood: "Cabaret, ports, portraits",
    commercialSuccess: "Reference cabaret et iconographique.",
    cover: {
      alt: "Album Cabaret marin",
      kind: "album",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "paris-elegante",
    title: "Paris elegante",
    artist: "Jacqueline Francois",
    year: 1948,
    format: "78 tours / Compilation",
    mood: "Paris, radio, couture",
    commercialSuccess: "Succes durable en radio et anthologies.",
    cover: {
      alt: "Album Paris elegante",
      kind: "album",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "cabaret-montmartre",
    title: "Cabaret de Montmartre",
    artist: "Patachou",
    year: 1952,
    format: "Vinyle / Anthologie",
    mood: "Cabaret, Montmartre, auteurs",
    commercialSuccess: "Repertoire cabaret de reference.",
    cover: {
      alt: "Album Cabaret de Montmartre",
      kind: "album",
      color: "#ffb84d",
      url: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "changez-tout",
    title: "Changez tout",
    artist: "Michel Jonasz",
    year: 1975,
    format: "Vinyle",
    mood: "Jazz, soul, chanson urbaine",
    commercialSuccess: "Succes critique et populaire durable.",
    cover: {
      alt: "Album Changez tout Jonasz",
      kind: "album",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "voix-et-cinema",
    title: "Voix et cinema",
    artist: "Nicole Croisille",
    year: 1975,
    format: "Vinyle",
    mood: "Cinema, jazz, grande voix",
    commercialSuccess: "Succes radio et television.",
    cover: {
      alt: "Album Voix et cinema",
      kind: "album",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "le-monde-magique",
    title: "Le monde magique",
    artist: "Chantal Goya",
    year: 1979,
    format: "Vinyle",
    mood: "Jeunesse, costumes, spectacle",
    commercialSuccess: "Immense succes familial et scénique.",
    cover: {
      alt: "Album Le monde magique",
      kind: "album",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "music-hall-populaire-cordy",
    title: "Music-hall populaire",
    artist: "Annie Cordy",
    year: 1980,
    format: "Vinyle",
    mood: "Fantaisie, Belgique, television",
    commercialSuccess: "Tres grand succes populaire.",
    cover: {
      alt: "Album Music-hall populaire Annie Cordy",
      kind: "album",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "chansons-de-sources",
    title: "Chansons de sources",
    artist: "Guy Beart",
    year: 1958,
    format: "Vinyle",
    mood: "Poésie, guitare, transmission",
    commercialSuccess: "Standard patrimonial durable.",
    cover: {
      alt: "Album Chansons de sources",
      kind: "album",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "chansons-folk-allwright",
    title: "Chansons folk",
    artist: "Graeme Allwright",
    year: 1968,
    format: "Vinyle",
    mood: "Folk, adaptations, engagement doux",
    commercialSuccess: "Reference folk francophone.",
    cover: {
      alt: "Album Chansons folk Graeme Allwright",
      kind: "album",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "renaissance-celtique",
    title: "Renaissance celtique",
    artist: "Alan Stivell",
    year: 1972,
    format: "Vinyle",
    mood: "Harpe, Bretagne, folk rock",
    commercialSuccess: "Reference majeure de la musique bretonne moderne.",
    cover: {
      alt: "Album Renaissance celtique",
      kind: "album",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "heritage-des-celtes",
    title: "Heritage des Celtes",
    artist: "Dan Ar Braz",
    year: 1994,
    format: "CD",
    mood: "Grand ensemble, celtes, scene",
    commercialSuccess: "Grand succes public et televisuel.",
    cover: {
      alt: "Album Heritage des Celtes",
      kind: "album",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1521337581100-8ca9a73a5f79?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "chants-de-bretagne-servat",
    title: "Chants de Bretagne",
    artist: "Gilles Servat",
    year: 1970,
    format: "Vinyle",
    mood: "Engagement, Bretagne, folk",
    commercialSuccess: "Hymne regional durable.",
    cover: {
      alt: "Album Chants de Bretagne",
      kind: "album",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "marseille-london-experience",
    title: "Marseille London Experience",
    artist: "Massilia Sound System",
    year: 1999,
    format: "CD",
    mood: "Ragga, Marseille, occitan",
    commercialSuccess: "Reference marseillaise et alternative.",
    cover: {
      alt: "Album Marseille London Experience",
      kind: "album",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "mlah",
    title: "Mlah",
    artist: "Les Negresses Vertes",
    year: 1988,
    format: "Vinyle / CD",
    mood: "Alternative, accordéon, fête urbaine",
    commercialSuccess: "Succes alternatif international.",
    cover: {
      alt: "Album Mlah",
      kind: "album",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "lair-de-rien-tete",
    title: "L’air de rien",
    artist: "Tete",
    year: 2001,
    format: "CD",
    mood: "Folk pop, guitare, nouvelle scene",
    commercialSuccess: "Succes radio durable.",
    cover: {
      alt: "Album L air de rien",
      kind: "album",
      color: "#ffb84d",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "lamour-parfait-cali",
    title: "L’amour parfait",
    artist: "Cali",
    year: 2003,
    format: "CD",
    mood: "Chanson rock, urgence, scene",
    commercialSuccess: "Grand succes critique et public.",
    cover: {
      alt: "Album L amour parfait",
      kind: "album",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1521337581100-8ca9a73a5f79?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "jours-etranges-saez",
    title: "Jours étranges",
    artist: "Damien Saez",
    year: 1999,
    format: "CD",
    mood: "Rock contestataire, adolescence, fin 90",
    commercialSuccess: "Succes massif du rock francophone.",
    cover: {
      alt: "Album Jours etranges",
      kind: "album",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "quart-dheure-ahuris",
    title: "Le quart d’heure des ahuris",
    artist: "Eiffel",
    year: 2002,
    format: "CD",
    mood: "Rock nerveux, texte, guitares",
    commercialSuccess: "Reference critique rock.",
    cover: {
      alt: "Album Eiffel rock",
      kind: "album",
      color: "#8f2d56",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "prison-doree-zoufris",
    title: "Prison dorée",
    artist: "Zoufris Maracas",
    year: 2012,
    format: "CD / Digital",
    mood: "Chanson metissee, social, festival",
    commercialSuccess: "Succes de scene et bouche-a-oreille.",
    cover: {
      alt: "Album Prison doree",
      kind: "album",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "vincent-delerm-album",
    title: "Vincent Delerm",
    artist: "Vincent Delerm",
    year: 2002,
    format: "CD",
    mood: "Piano, cinema, nouvelle scene",
    commercialSuccess: "Succes critique et public nouvelle scene.",
    cover: {
      alt: "Album Vincent Delerm",
      kind: "album",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "garcon-dhonneur-beaupain",
    title: "Garçon d’honneur",
    artist: "Alex Beaupain",
    year: 2005,
    format: "CD",
    mood: "Cinema, piano, pop orchestree",
    commercialSuccess: "Reconnaissance critique.",
    cover: {
      alt: "Album Garçon d’honneur",
      kind: "album",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "hypernuit-album",
    title: "Hypernuit",
    artist: "Bertrand Belin",
    year: 2010,
    format: "CD / Vinyle",
    mood: "Nocturne, minimal, litteraire",
    commercialSuccess: "Succes critique durable.",
    cover: {
      alt: "Album Hypernuit",
      kind: "album",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "gee-whiz-moriarty",
    title: "Gee Whiz But This Is a Lonesome Town",
    artist: "Moriarty",
    year: 2007,
    format: "CD",
    mood: "Folk blues, route, americana",
    commercialSuccess: "Succes radio et scene.",
    cover: {
      alt: "Album Moriarty folk",
      kind: "album",
      color: "#8f2d56",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "citoyen-du-monde-hk",
    title: "Citoyen du monde",
    artist: "HK et les Saltimbanks",
    year: 2011,
    format: "CD / Digital",
    mood: "Engagement, bal populaire, collectif",
    commercialSuccess: "Forte circulation militante et scénique.",
    cover: {
      alt: "Album Citoyen du monde",
      kind: "album",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "matahari-imperatrice",
    title: "Matahari",
    artist: "L'Imperatrice",
    year: 2018,
    format: "CD / Vinyle",
    mood: "Disco, electro, groove",
    commercialSuccess: "Succes indie international.",
    cover: {
      alt: "Album Matahari",
      kind: "album",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "premiers-emois",
    title: "Premiers émois",
    artist: "Vendredi sur Mer",
    year: 2019,
    format: "CD / Digital",
    mood: "Spoken pop, nuit, mode",
    commercialSuccess: "Succes streaming et festivals.",
    cover: {
      alt: "Album Premiers emois",
      kind: "album",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "a-ta-merci",
    title: "À ta merci",
    artist: "Fishbach",
    year: 2017,
    format: "CD / Vinyle",
    mood: "New wave, voix sombre, theatre",
    commercialSuccess: "Succes critique et public indie.",
    cover: {
      alt: "Album A ta merci",
      kind: "album",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "caravelle-polo-pan",
    title: "Caravelle",
    artist: "Polo & Pan",
    year: 2017,
    format: "CD / Vinyle",
    mood: "Electro tropicale, voyage, animation",
    commercialSuccess: "Succes international streaming et scene.",
    cover: {
      alt: "Album Caravelle",
      kind: "album",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "hit-sale-album",
    title: "Hit Sale",
    artist: "Therapie Taxi",
    year: 2018,
    format: "CD / Digital",
    mood: "Pop urbaine, provocation, internet",
    commercialSuccess: "Succes streaming massif.",
    cover: {
      alt: "Album Hit Sale",
      kind: "album",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "hyper-herve",
    title: "Hyper",
    artist: "Hervé",
    year: 2020,
    format: "CD / Digital",
    mood: "Electro chanson, corps, nuit",
    commercialSuccess: "Victoires de la musique et large exposition.",
    cover: {
      alt: "Album Hyper",
      kind: "album",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "forces-contraires-terrenoire",
    title: "Les Forces contraires",
    artist: "Terrenoire",
    year: 2020,
    format: "CD / Digital",
    mood: "Duo, electro douce, memoire familiale",
    commercialSuccess: "Succes critique et scene.",
    cover: {
      alt: "Album Les Forces contraires",
      kind: "album",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "melancolie-heureuse",
    title: "Mélancolie heureuse",
    artist: "Tim Dup",
    year: 2017,
    format: "CD / Digital",
    mood: "Piano, ville, electro douce",
    commercialSuccess: "Succes critique nouvelle scene.",
    cover: {
      alt: "Album Melancolie heureuse",
      kind: "album",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "toi-toi-suzane",
    title: "Toï Toï",
    artist: "Suzane",
    year: 2020,
    format: "CD / Digital",
    mood: "Electro, danse, engagement",
    commercialSuccess: "Victoires et forte presence festival.",
    cover: {
      alt: "Album Toi Toi",
      kind: "album",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1521337581100-8ca9a73a5f79?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "devorantes-aloise",
    title: "Dévorantes",
    artist: "Aloise Sauvage",
    year: 2020,
    format: "CD / Digital",
    mood: "Pop rap, corps, performance",
    commercialSuccess: "Succes critique et generationnel.",
    cover: {
      alt: "Album Devorantes",
      kind: "album",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1521337581100-8ca9a73a5f79?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "feu-nekfeu",
    title: "Feu",
    artist: "Nekfeu",
    year: 2015,
    format: "CD / Digital",
    mood: "Rap d’auteur, collectif, generation 2010",
    commercialSuccess: "Tres grand succes public et critique.",
    cover: {
      alt: "Album Feu Nekfeu",
      kind: "album",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "dans-la-legende-pnl",
    title: "Dans la légende",
    artist: "PNL",
    year: 2016,
    format: "CD / Digital",
    mood: "Cloud rap, indépendance, cinema",
    commercialSuccess: "Phenomene streaming et culturel.",
    cover: {
      alt: "Album Dans la legende PNL",
      kind: "album",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "a7-sch",
    title: "A7",
    artist: "SCH",
    year: 2015,
    format: "Mixtape / Digital",
    mood: "Rap sombre, Marseille, cinema noir",
    commercialSuccess: "Reference du rap français 2010.",
    cover: {
      alt: "Album A7 SCH",
      kind: "album",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "destin-ninho",
    title: "Destin",
    artist: "Ninho",
    year: 2019,
    format: "CD / Digital",
    mood: "Rap melodique, certifications, hits",
    commercialSuccess: "Tres grand succes commercial.",
    cover: {
      alt: "Album Destin Ninho",
      kind: "album",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "ipseite-damso",
    title: "Ipséité",
    artist: "Damso",
    year: 2017,
    format: "CD / Digital",
    mood: "Rap belge, sombre, introspectif",
    commercialSuccess: "Succes critique et commercial massif.",
    cover: {
      alt: "Album Ipseite Damso",
      kind: "album",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "commando-niska",
    title: "Commando",
    artist: "Niska",
    year: 2017,
    format: "CD / Digital",
    mood: "Rap club, viralite, danse",
    commercialSuccess: "Tres grand succes streaming.",
    cover: {
      alt: "Album Commando Niska",
      kind: "album",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "gore-lous",
    title: "Gore",
    artist: "Lous and The Yakuza",
    year: 2020,
    format: "CD / Digital",
    mood: "Pop rap, mode, diaspora",
    commercialSuccess: "Succes critique international.",
    cover: {
      alt: "Album Gore Lous",
      kind: "album",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "melo-tiakola",
    title: "Mélo",
    artist: "Tiakola",
    year: 2022,
    format: "CD / Digital",
    mood: "Afro pop, rap, chant",
    commercialSuccess: "Tres fort succes streaming.",
    cover: {
      alt: "Album Melo Tiakola",
      kind: "album",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "kmt-gazo",
    title: "KMT",
    artist: "Gazo",
    year: 2022,
    format: "CD / Digital",
    mood: "Drill, noir, clubs",
    commercialSuccess: "Succes streaming massif.",
    cover: {
      alt: "Album KMT Gazo",
      kind: "album",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "le-poisson-rouge-disiz",
    title: "Le Poisson rouge",
    artist: "Disiz",
    year: 2000,
    format: "CD",
    mood: "Rap 2000, humour noir, narration",
    commercialSuccess: "Succes populaire durable.",
    cover: {
      alt: "Album Le Poisson rouge",
      kind: "album",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "adc-freeze-corleone",
    title: "ADC",
    artist: "Freeze Corleone",
    year: 2023,
    format: "Digital / CD",
    mood: "Drill froide, codes, references",
    commercialSuccess: "Succes streaming majeur.",
    cover: {
      alt: "Album ADC Freeze Corleone",
      kind: "album",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "trinity-laylow",
    title: "Trinity",
    artist: "Laylow",
    year: 2020,
    format: "CD / Digital",
    mood: "Cyber rap, concept, narration",
    commercialSuccess: "Succes critique et public durable.",
    cover: {
      alt: "Album Trinity Laylow",
      kind: "album",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "les-derniers-salopards-maes",
    title: "Les derniers salopards",
    artist: "Maes",
    year: 2020,
    format: "CD / Digital",
    mood: "Rap melodique, rue, hits",
    commercialSuccess: "Tres fort succes commercial et streaming.",
    cover: {
      alt: "Album Les derniers salopards Maes",
      kind: "album",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "la-symphonie-des-eclairs-zaho",
    title: "La symphonie des éclairs",
    artist: "Zaho de Sagazan",
    year: 2023,
    format: "CD / Digital / Vinyle",
    mood: "Chanson electro, piano, tempete vocale",
    commercialSuccess: "Fort succes critique et public.",
    cover: {
      alt: "Album La symphonie des eclairs Zaho",
      kind: "album",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "oceano-nox-clara-yse",
    title: "Oceano Nox",
    artist: "Clara Ysé",
    year: 2023,
    format: "CD / Digital",
    mood: "Poetique, folk, voix ample",
    commercialSuccess: "Succes critique et scene durable.",
    cover: {
      alt: "Album Oceano Nox Clara Yse",
      kind: "album",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "regarde-moi-pierre-de-maere",
    title: "Regarde-moi",
    artist: "Pierre de Maere",
    year: 2023,
    format: "CD / Digital",
    mood: "Pop belge, mode, flamboyance",
    commercialSuccess: "Succes radio et public jeune.",
    cover: {
      alt: "Album Regarde-moi Pierre de Maere",
      kind: "album",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "paradis-ben-mazue",
    title: "Paradis",
    artist: "Ben Mazué",
    year: 2020,
    format: "CD / Digital",
    mood: "Spoken pop, intime, reconstruction",
    commercialSuccess: "Succes critique et public.",
    cover: {
      alt: "Album Paradis Ben Mazue",
      kind: "album",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "pili-pili-gael-faye",
    title: "Pili Pili sur un croissant au beurre",
    artist: "Gaël Faye",
    year: 2013,
    format: "CD / Digital",
    mood: "Rap chanson, jazz, memoire",
    commercialSuccess: "Reconnaissance durable.",
    cover: {
      alt: "Album Pili Pili Gael Faye",
      kind: "album",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "vieux-freres-fauve",
    title: "Vieux frères - Partie 1",
    artist: "FAUVE",
    year: 2014,
    format: "CD / Digital",
    mood: "Spoken rock, collectif, generation web",
    commercialSuccess: "Phenomene public et internet.",
    cover: {
      alt: "Album Vieux freres Fauve",
      kind: "album",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "il-suffit-dy-croire-hoshi",
    title: "Il suffit d’y croire",
    artist: "Hoshi",
    year: 2018,
    format: "CD / Digital",
    mood: "Pop chanson, voix rauque, guitare",
    commercialSuccess: "Succes radio et certifications.",
    cover: {
      alt: "Album Il suffit dy croire Hoshi",
      kind: "album",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "camelia-jordana-premier-album",
    title: "Camélia Jordana",
    artist: "Camélia Jordana",
    year: 2010,
    format: "CD / Digital",
    mood: "Pop jazz, revelation, voix singuliere",
    commercialSuccess: "Succes de revelation.",
    cover: {
      alt: "Album Camelia Jordana",
      kind: "album",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "la-loi-du-papillon-nuit-incolore",
    title: "La loi du papillon",
    artist: "Nuit Incolore",
    year: 2023,
    format: "CD / Digital",
    mood: "Pop piano, melancolie, plateformes",
    commercialSuccess: "Succes streaming et public jeune.",
    cover: {
      alt: "Album La loi du papillon Nuit Incolore",
      kind: "album",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "chaque-seconde-pierre-garnier",
    title: "Chaque seconde",
    artist: "Pierre Garnier",
    year: 2024,
    format: "CD / Digital",
    mood: "Pop chanson, revelation TV, radio",
    commercialSuccess: "Tres fort lancement public.",
    cover: {
      alt: "Album Chaque seconde Pierre Garnier",
      kind: "album",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "my-world-jul",
    title: "My World",
    artist: "Jul",
    year: 2015,
    format: "CD / Digital",
    mood: "Rap marseillais, autotune, productivite",
    commercialSuccess: "Tres grand succes public.",
    cover: {
      alt: "Album My World Jul",
      kind: "album",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "best-life-naps",
    title: "Best Life",
    artist: "Naps",
    year: 2021,
    format: "CD / Digital",
    mood: "Rap pop, Marseille, tubes d’ete",
    commercialSuccess: "Succes streaming massif.",
    cover: {
      alt: "Album Best Life Naps",
      kind: "album",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "en-esprit-heuss",
    title: "En esprit",
    artist: "Heuss l'Enfoiré",
    year: 2019,
    format: "CD / Digital",
    mood: "Rap club, energie, featurings",
    commercialSuccess: "Succes club et streaming.",
    cover: {
      alt: "Album En esprit Heuss",
      kind: "album",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "gentleman-20-dadju",
    title: "Gentleman 2.0",
    artist: "Dadju",
    year: 2017,
    format: "CD / Digital",
    mood: "R&B romantique, pop urbaine, diaspora",
    commercialSuccess: "Tres fort succes commercial.",
    cover: {
      alt: "Album Gentleman 2.0 Dadju",
      kind: "album",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "fleur-froide-tayc",
    title: "Fleur froide",
    artist: "Tayc",
    year: 2020,
    format: "CD / Digital",
    mood: "Afrolove, R&B, danse",
    commercialSuccess: "Succes streaming et scene.",
    cover: {
      alt: "Album Fleur froide Tayc",
      kind: "album",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "clandestino-lartiste",
    title: "Clandestino",
    artist: "Lartiste",
    year: 2016,
    format: "CD / Digital",
    mood: "Pop urbaine, Maghreb, club",
    commercialSuccess: "Succes radio et streaming.",
    cover: {
      alt: "Album Clandestino Lartiste",
      kind: "album",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "loud-marwa-loud",
    title: "Loud",
    artist: "Marwa Loud",
    year: 2018,
    format: "CD / Digital",
    mood: "Pop urbaine feminine, refrains, plateformes",
    commercialSuccess: "Fort succes public.",
    cover: {
      alt: "Album Loud Marwa Loud",
      kind: "album",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "mes-fantaisies-shym",
    title: "Mes fantaisies",
    artist: "Shy'm",
    year: 2006,
    format: "CD / Digital",
    mood: "R&B pop, danse, annees 2000",
    commercialSuccess: "Succes radio majeur.",
    cover: {
      alt: "Album Mes fantaisies Shym",
      kind: "album",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "authentik-kenza-farah",
    title: "Authentik",
    artist: "Kenza Farah",
    year: 2007,
    format: "CD / Digital",
    mood: "R&B marseillais, emotion, radio urbaine",
    commercialSuccess: "Succes générationnel.",
    cover: {
      alt: "Album Authentik Kenza Farah",
      kind: "album",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "dima-zaho",
    title: "Dima",
    artist: "Zaho",
    year: 2008,
    format: "CD / Digital",
    mood: "R&B francophone, Maghreb, Quebec",
    commercialSuccess: "Succes radio et durable.",
    cover: {
      alt: "Album Dima Zaho",
      kind: "album",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "mika-life-cartoon-motion",
    title: "Life in Cartoon Motion",
    artist: "Mika",
    year: 2007,
    format: "CD / streaming",
    mood: "Pop flamboyante, falsetto, couleurs",
    commercialSuccess: "Succes international majeur et forte presence radio en France.",
    cover: {
      alt: "Pochette Life in Cartoon Motion",
      kind: "album",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "christophe-mae-mon-paradis",
    title: "Mon paradis",
    artist: "Christophe Maé",
    year: 2007,
    format: "CD / streaming",
    mood: "Pop acoustique, scene, soleil",
    commercialSuccess: "Tres gros succes populaire et tournees importantes.",
    cover: {
      alt: "Pochette Mon paradis",
      kind: "album",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "garou-seul",
    title: "Seul",
    artist: "Garou",
    year: 2000,
    format: "CD",
    mood: "Voix rauque, ballades, Quebec",
    commercialSuccess: "Succes francophone majeur apres Notre-Dame de Paris.",
    cover: {
      alt: "Pochette Seul Garou",
      kind: "album",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "anggun-au-nom-lune",
    title: "Au nom de la lune",
    artist: "Anggun",
    year: 1997,
    format: "CD",
    mood: "Pop internationale, voix, voyage",
    commercialSuccess: "Succes international et forte reconnaissance en France.",
    cover: {
      alt: "Pochette Au nom de la lune",
      kind: "album",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "amel-bent-un-jour-ete",
    title: "Un jour d’été",
    artist: "Amel Bent",
    year: 2004,
    format: "CD",
    mood: "Soul pop, television, emancipation",
    commercialSuccess: "Succes massif porte par Ma philosophie.",
    cover: {
      alt: "Pochette Un jour d ete",
      kind: "album",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "chimene-badi-entre-nous",
    title: "Entre nous",
    artist: "Chimène Badi",
    year: 2003,
    format: "CD",
    mood: "Grande voix, ballade, television",
    commercialSuccess: "Fort succes public apres revelation television.",
    cover: {
      alt: "Pochette Entre nous Chimene Badi",
      kind: "album",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "gregory-lemarchal-je-deviens-moi",
    title: "Je deviens moi",
    artist: "Grégory Lemarchal",
    year: 2005,
    format: "CD",
    mood: "Grande voix, television, emotion",
    commercialSuccess: "Succes public durable et forte memoire televisuelle.",
    cover: {
      alt: "Pochette Je deviens moi",
      kind: "album",
      color: "#8f2d56",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "garcon-hyper-sensible",
    title: "Hyper sensible",
    artist: "Jérémy Frerot",
    year: 2021,
    format: "Streaming / CD",
    mood: "Pop acoustique, famille, intime",
    commercialSuccess: "Succes radio et consolidation solo.",
    cover: {
      alt: "Pochette Hyper sensible Jeremy Frerot",
      kind: "album",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "trois-cafes-gourmands-air-rien",
    title: "Un air de rien",
    artist: "Trois Cafés Gourmands",
    year: 2018,
    format: "CD / streaming",
    mood: "Folk populaire, Correze, convivialite",
    commercialSuccess: "Succes populaire massif autour de À nos souvenirs.",
    cover: {
      alt: "Pochette Un air de rien",
      kind: "album",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "kids-united-monde-meilleur",
    title: "Un monde meilleur",
    artist: "Kids United",
    year: 2015,
    format: "CD / streaming",
    mood: "Choeur enfant, reprises, solidarite",
    commercialSuccess: "Succes familial majeur et ventes importantes.",
    cover: {
      alt: "Pochette Un monde meilleur Kids United",
      kind: "album",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "claudio-capeo-claudio-capeo",
    title: "Claudio Capéo",
    artist: "Claudio Capéo",
    year: 2016,
    format: "CD / streaming",
    mood: "Accordeon, variete populaire, scene",
    commercialSuccess: "Succes massif porte par Un homme debout.",
    cover: {
      alt: "Pochette Claudio Capeo",
      kind: "album",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1521337581100-8ca9a73a5f79?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "frero-delavega-frero-delavega",
    title: "Fréro Delavega",
    artist: "Fréro Delavega",
    year: 2014,
    format: "CD / streaming",
    mood: "Duo acoustique, plage, pop folk",
    commercialSuccess: "Succes populaire rapide apres revelation televisuelle.",
    cover: {
      alt: "Pochette Frero Delavega",
      kind: "album",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "kyo-chemin",
    title: "Le Chemin",
    artist: "Kyo",
    year: 2003,
    format: "CD",
    mood: "Pop rock adolescent, guitares, radio",
    commercialSuccess: "Succes massif et generationnel.",
    cover: {
      alt: "Pochette Le Chemin Kyo",
      kind: "album",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "superbus-popn-gum",
    title: "Pop’n’Gum",
    artist: "Superbus",
    year: 2004,
    format: "CD",
    mood: "Power pop, skate, clips colores",
    commercialSuccess: "Succes radio et public jeune durable.",
    cover: {
      alt: "Pochette PopnGum Superbus",
      kind: "album",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "boulevard-des-airs-bruxelles",
    title: "Bruxelles",
    artist: "Boulevard des Airs",
    year: 2015,
    format: "CD / streaming",
    mood: "Chanson festive, cuivres, radio",
    commercialSuccess: "Succes radio et tournees importantes.",
    cover: {
      alt: "Pochette Bruxelles Boulevard des Airs",
      kind: "album",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "joyce-jonathan-sur-mes-gardes",
    title: "Sur mes gardes",
    artist: "Joyce Jonathan",
    year: 2010,
    format: "CD / streaming",
    mood: "Guitare, chanson intime, web",
    commercialSuccess: "Succes public important apres financement participatif.",
    cover: {
      alt: "Pochette Sur mes gardes",
      kind: "album",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "hyphen-hyphen-times",
    title: "Times",
    artist: "Hyphen Hyphen",
    year: 2015,
    format: "CD / streaming",
    mood: "Pop rock, energie live, anglais",
    commercialSuccess: "Succes critique et Victoire de la musique.",
    cover: {
      alt: "Pochette Times Hyphen Hyphen",
      kind: "album",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "lilly-wood-prick-invincible-friends",
    title: "Invincible Friends",
    artist: "Lilly Wood and the Prick",
    year: 2010,
    format: "CD / streaming",
    mood: "Folk pop, electro douce, international",
    commercialSuccess: "Succes international amplifie par le remix de Robin Schulz.",
    cover: {
      alt: "Pochette Invincible Friends",
      kind: "album",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "aaron-artificial-animals-riding",
    title: "Artificial Animals Riding on Neverland",
    artist: "AaRON",
    year: 2007,
    format: "CD",
    mood: "Pop sombre, cinema, piano",
    commercialSuccess: "Succes critique et public grace a U-Turn.",
    cover: {
      alt: "Pochette AaRON Artificial Animals",
      kind: "album",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "cocoon-my-friends-all-died",
    title: "My Friends All Died in a Plane Crash",
    artist: "Cocoon",
    year: 2007,
    format: "CD",
    mood: "Folk douce, harmonies, indie",
    commercialSuccess: "Succes indie large et public fidele.",
    cover: {
      alt: "Pochette Cocoon folk",
      kind: "album",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "bb-brunes-blonde-comme-moi",
    title: "Blonde comme moi",
    artist: "BB Brunes",
    year: 2007,
    format: "CD",
    mood: "Rock adolescent, guitares, revival",
    commercialSuccess: "Succes jeune public et forte exposition radio.",
    cover: {
      alt: "Pochette Blonde comme moi",
      kind: "album",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "shaka-ponk-geeks",
    title: "The Geeks and the Jerkin’ Socks",
    artist: "Shaka Ponk",
    year: 2011,
    format: "CD / streaming",
    mood: "Rock electro, scene, avatars",
    commercialSuccess: "Succes live massif et large public festival.",
    cover: {
      alt: "Pochette Shaka Ponk Geeks",
      kind: "album",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "oldelaf-monde-est-beau",
    title: "Le monde est beau",
    artist: "Oldelaf",
    year: 2011,
    format: "CD / streaming",
    mood: "Humour, chanson, scene",
    commercialSuccess: "Succes public amplifie par La tristitude.",
    cover: {
      alt: "Pochette Le monde est beau Oldelaf",
      kind: "album",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "barcella-charabia",
    title: "Charabia",
    artist: "Barcella",
    year: 2012,
    format: "CD / streaming",
    mood: "Slam, chanson, mots",
    commercialSuccess: "Succes critique et public chanson.",
    cover: {
      alt: "Pochette Charabia Barcella",
      kind: "album",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "fatals-picards-pamplemousse-mecanique",
    title: "Pamplemousse mécanique",
    artist: "Les Fatals Picards",
    year: 2007,
    format: "CD",
    mood: "Rock humoristique, satire, Eurovision",
    commercialSuccess: "Succes public autour de l’Eurovision 2007.",
    cover: {
      alt: "Pochette Pamplemousse mecanique",
      kind: "album",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "debout-sur-le-zinc-homme-a-tue",
    title: "L’homme à tue-tête",
    artist: "Debout sur le Zinc",
    year: 1999,
    format: "CD",
    mood: "Chanson festive, violon, route",
    commercialSuccess: "Culte durable sur scene.",
    cover: {
      alt: "Pochette Debout sur le Zinc",
      kind: "album",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "java-hawaii",
    title: "Hawaï",
    artist: "Java",
    year: 2000,
    format: "CD",
    mood: "Rap musette, accordéon, argot",
    commercialSuccess: "Culte alternatif fort.",
    cover: {
      alt: "Pochette Hawaii Java",
      kind: "album",
      color: "#8f2d56",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "caravane-passe-platane",
    title: "Platane",
    artist: "La Caravane Passe",
    year: 2004,
    format: "CD",
    mood: "Balkan, chanson, voyage",
    commercialSuccess: "Succes festival et public alternatif.",
    cover: {
      alt: "Pochette Platane La Caravane Passe",
      kind: "album",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "babylon-circus-dances-resistance",
    title: "Dances of Resistance",
    artist: "Babylon Circus",
    year: 2004,
    format: "CD",
    mood: "Ska, reggae, engagement",
    commercialSuccess: "Succes international de scene.",
    cover: {
      alt: "Pochette Dances of Resistance",
      kind: "album",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "danakil-dialogue-sourds",
    title: "Dialogue de sourds",
    artist: "Danakil",
    year: 2008,
    format: "CD",
    mood: "Reggae francais, engagement, basses",
    commercialSuccess: "Succes live durable.",
    cover: {
      alt: "Pochette Dialogue de sourds",
      kind: "album",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "dub-inc-diversite",
    title: "Diversité",
    artist: "Dub Inc",
    year: 2003,
    format: "CD",
    mood: "Reggae, dub, diaspora",
    commercialSuccess: "Culte reggae francophone et tournees internationales.",
    cover: {
      alt: "Pochette Diversite Dub Inc",
      kind: "album",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "sinsemilia-premiere-recolte",
    title: "Première récolte",
    artist: "Sinsemilia",
    year: 1996,
    format: "CD",
    mood: "Reggae militant, Grenoble, collectif",
    commercialSuccess: "Groupe majeur de la scene reggae française.",
    cover: {
      alt: "Pochette Premiere recolte",
      kind: "album",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "magic-system-premier-gaou",
    title: "Premier Gaou",
    artist: "Magic System",
    year: 2002,
    format: "CD / streaming",
    mood: "Zouglou, afro-pop, danse",
    commercialSuccess: "Succes populaire majeur en francophonie.",
    cover: {
      alt: "Pochette Premier Gaou Magic System",
      kind: "album",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "kassav-tekit-izi",
    title: "Tékit Izi",
    artist: "Kassav",
    year: 1992,
    format: "CD",
    mood: "Zouk, scene, Antilles",
    commercialSuccess: "Groupe majeur de la musique antillaise internationale.",
    cover: {
      alt: "Pochette Tekit Izi Kassav",
      kind: "album",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "tonton-david-peuples-monde",
    title: "Peuples du monde",
    artist: "Tonton David",
    year: 1990,
    format: "CD",
    mood: "Reggae francais, ragga, quartier",
    commercialSuccess: "Succes durable et forte memoire populaire.",
    cover: {
      alt: "Pochette Peuples du monde",
      kind: "album",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "nuttea-retour-aux-sources",
    title: "Retour aux sources",
    artist: "Nuttea",
    year: 2000,
    format: "CD",
    mood: "Ragga, reggae, rap francais",
    commercialSuccess: "Succes radio majeur au debut des annees 2000.",
    cover: {
      alt: "Pochette Retour aux sources Nuttea",
      kind: "album",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "saian-supa-crew-klr",
    title: "KLR",
    artist: "Saïan Supa Crew",
    year: 1999,
    format: "CD",
    mood: "Rap collectif, human beatbox, innovation",
    commercialSuccess: "Succes critique et public durable.",
    cover: {
      alt: "Pochette KLR Saian Supa Crew",
      kind: "album",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "alliance-ethnik-simple-funky",
    title: "Simple & Funky",
    artist: "Alliance Ethnik",
    year: 1995,
    format: "CD",
    mood: "Rap funk, groove, multiculturalisme",
    commercialSuccess: "Succes radio et grand public.",
    cover: {
      alt: "Pochette Simple and Funky",
      kind: "album",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "113-princes-ville",
    title: "Les Princes de la ville",
    artist: "113",
    year: 1999,
    format: "CD",
    mood: "Rap collectif, Vitry, chronique urbaine",
    commercialSuccess: "Classique rap français et Victoire de la musique.",
    cover: {
      alt: "Pochette Princes de la ville",
      kind: "album",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "fonky-family-si-dieu-veut",
    title: "Si Dieu veut...",
    artist: "Fonky Family",
    year: 1998,
    format: "CD",
    mood: "Rap marseillais, collectif, rue",
    commercialSuccess: "Classique majeur du rap français.",
    cover: {
      alt: "Pochette Si Dieu veut Fonky Family",
      kind: "album",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "sniper-grave-dans-roche",
    title: "Gravé dans la roche",
    artist: "Sniper",
    year: 2003,
    format: "CD",
    mood: "Rap 2000, collectif, social",
    commercialSuccess: "Succes massif et generationnel.",
    cover: {
      alt: "Pochette Grave dans la roche",
      kind: "album",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "rohff-code-honneur",
    title: "Le Code de l’honneur",
    artist: "Rohff",
    year: 1999,
    format: "CD",
    mood: "Rap dur, technique, 94",
    commercialSuccess: "Classique de fanbase et influence durable.",
    cover: {
      alt: "Pochette Code de l honneur Rohff",
      kind: "album",
      color: "#8f2d56",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "booba-ouest-side",
    title: "Ouest Side",
    artist: "Booba",
    year: 2006,
    format: "CD / streaming",
    mood: "Rap hardcore, ego trip, 92",
    commercialSuccess: "Succes massif et influence durable.",
    cover: {
      alt: "Pochette Ouest Side Booba",
      kind: "album",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "sinik-sang-froid",
    title: "Sang froid",
    artist: "Sinik",
    year: 2006,
    format: "CD",
    mood: "Rap technique, melancolie, 91",
    commercialSuccess: "Succes public fort dans le rap 2000.",
    cover: {
      alt: "Pochette Sang froid Sinik",
      kind: "album",
      color: "#8f2d56",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "la-fouine-aller-retour",
    title: "Aller-retour",
    artist: "La Fouine",
    year: 2007,
    format: "CD",
    mood: "Rap melodique, 78, radio",
    commercialSuccess: "Succes radio et public jeune.",
    cover: {
      alt: "Pochette Aller-retour La Fouine",
      kind: "album",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "medine-arabian-panther",
    title: "Arabian Panther",
    artist: "Médine",
    year: 2008,
    format: "CD",
    mood: "Rap engage, histoire, politique",
    commercialSuccess: "Succes critique et fanbase durable.",
    cover: {
      alt: "Pochette Arabian Panther Médine",
      kind: "album",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "youssoupha-noir-desir",
    title: "Noir désir",
    artist: "Youssoupha",
    year: 2012,
    format: "CD / streaming",
    mood: "Rap conscient, plume, grand public",
    commercialSuccess: "Succes public et critique.",
    cover: {
      alt: "Pochette Noir desir Youssoupha",
      kind: "album",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "sefyu-suis-je-gardien-frere",
    title: "Suis-je le gardien de mon frère ?",
    artist: "Sefyu",
    year: 2008,
    format: "CD",
    mood: "Rap rugueux, Aulnay, impact",
    commercialSuccess: "Succes rap important et Victoire de la musique.",
    cover: {
      alt: "Pochette Sefyu gardien frere",
      kind: "album",
      color: "#8f2d56",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "kaaris-or-noir",
    title: "Or noir",
    artist: "Kaaris",
    year: 2013,
    format: "CD / streaming",
    mood: "Trap, drill precurseur, Sevran",
    commercialSuccess: "Classique moderne du rap français.",
    cover: {
      alt: "Pochette Or noir Kaaris",
      kind: "album",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "seth-gueko-michto",
    title: "Michto",
    artist: "Seth Gueko",
    year: 2011,
    format: "CD",
    mood: "Punchlines, argot, rap de personnage",
    commercialSuccess: "Succes fanbase et statut culte.",
    cover: {
      alt: "Pochette Michto Seth Gueko",
      kind: "album",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "alkpote-empereur",
    title: "L’Empereur",
    artist: "Alkpote",
    year: 2018,
    format: "Streaming / CD",
    mood: "Rap cru, culte internet, punchlines",
    commercialSuccess: "Succes culte et forte circulation web.",
    cover: {
      alt: "Pochette Empereur Alkpote",
      kind: "album",
      color: "#8f2d56",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "mister-you-presume-coupable",
    title: "Présumé coupable",
    artist: "Mister You",
    year: 2010,
    format: "CD",
    mood: "Rap de rue, mixtapes, internet",
    commercialSuccess: "Succes rap de rue et public jeune.",
    cover: {
      alt: "Pochette Presume coupable Mister You",
      kind: "album",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "ronisia-ronisia",
    title: "Ronisia",
    artist: "Ronisia",
    year: 2022,
    format: "Streaming / CD",
    mood: "R&B pop, Cap-Vert, romance",
    commercialSuccess: "Succes streaming et public jeune.",
    cover: {
      alt: "Pochette Ronisia",
      kind: "album",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "lyna-mahyem-femme-forte",
    title: "Femme forte",
    artist: "Lyna Mahyem",
    year: 2020,
    format: "Streaming / CD",
    mood: "R&B sentimental, reprise virale, voix",
    commercialSuccess: "Succes streaming et forte fanbase.",
    cover: {
      alt: "Pochette Femme forte Lyna Mahyem",
      kind: "album",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "nesly-authentik",
    title: "Authentik",
    artist: "Nesly",
    year: 2009,
    format: "CD / streaming",
    mood: "Zouk love, R&B, Antilles",
    commercialSuccess: "Succes zouk love et public ultramarin.",
    cover: {
      alt: "Pochette Authentik Nesly",
      kind: "album",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "kayna-samet-entre-deux-je",
    title: "Entre deux je",
    artist: "Kayna Samet",
    year: 2005,
    format: "CD",
    mood: "Soul urbaine, rap, voix",
    commercialSuccess: "Succes critique et statut culte R&B français.",
    cover: {
      alt: "Pochette Entre deux je Kayna Samet",
      kind: "album",
      color: "#8f2d56",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "slai-florilege",
    title: "Florilège",
    artist: "Slaï",
    year: 2004,
    format: "CD",
    mood: "Zouk love, ballades, Antilles",
    commercialSuccess: "Succes radio et public zouk love.",
    cover: {
      alt: "Pochette Florilege Slai",
      kind: "album",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "fanny-j-vous-les-hommes",
    title: "Vous les hommes",
    artist: "Fanny J",
    year: 2007,
    format: "CD / streaming",
    mood: "Zouk love, Guyane, grande voix",
    commercialSuccess: "Succes important dans la francophonie caribéenne.",
    cover: {
      alt: "Pochette Vous les hommes Fanny J",
      kind: "album",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "perle-lama-challenger",
    title: "Challenger",
    artist: "Perle Lama",
    year: 2005,
    format: "CD",
    mood: "Zouk, Martinique, romance",
    commercialSuccess: "Public solide dans le zouk francophone.",
    cover: {
      alt: "Pochette Challenger Perle Lama",
      kind: "album",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "princess-lover-simplement-moi",
    title: "Simplement moi",
    artist: "Princess Lover",
    year: 2002,
    format: "CD",
    mood: "Zouk love, voix feminine, romance",
    commercialSuccess: "Succes dans les compilations zouk et dancefloors antillais.",
    cover: {
      alt: "Pochette Simplement moi Princess Lover",
      kind: "album",
      color: "#8f2d56",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "nadiya-16-9",
    title: "16/9",
    artist: "Nâdiya",
    year: 2004,
    format: "CD",
    mood: "R&B pop, sport, dance",
    commercialSuccess: "Succes radio massif et nombreux singles.",
    cover: {
      alt: "Pochette 16 9 Nadiya",
      kind: "album",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "leslie-je-suis-et-je-resterai",
    title: "Je suis et je resterai",
    artist: "Leslie",
    year: 2002,
    format: "CD",
    mood: "R&B francais, adolescence, radio",
    commercialSuccess: "Succes radio et public jeune.",
    cover: {
      alt: "Pochette Je suis et je resterai Leslie",
      kind: "album",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "daft-punk-discovery",
    title: "Discovery",
    artist: "Daft Punk",
    year: 2001,
    format: "CD / vinyle / streaming",
    mood: "French touch, robots, pop electronique",
    commercialSuccess: "Succes mondial et influence majeure.",
    cover: {
      alt: "Pochette Discovery Daft Punk",
      kind: "album",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "justice-cross",
    title: "†",
    artist: "Justice",
    year: 2007,
    format: "CD / vinyle / streaming",
    mood: "Electro rock, saturation, club",
    commercialSuccess: "Succes international et statut culte electro.",
    cover: {
      alt: "Pochette Cross Justice",
      kind: "album",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "air-moon-safari",
    title: "Moon Safari",
    artist: "Air",
    year: 1998,
    format: "CD / vinyle / streaming",
    mood: "Downtempo, pop spatiale, synthés",
    commercialSuccess: "Succes critique international durable.",
    cover: {
      alt: "Pochette Moon Safari Air",
      kind: "album",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "phoenix-united",
    title: "United",
    artist: "Phoenix",
    year: 2000,
    format: "CD / vinyle / streaming",
    mood: "Pop rock, French touch, Versailles",
    commercialSuccess: "Succes international progressif et public indie durable.",
    cover: {
      alt: "Pochette United Phoenix",
      kind: "album",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "cassius-1999",
    title: "1999",
    artist: "Cassius",
    year: 1999,
    format: "CD / vinyle / streaming",
    mood: "House, club, French touch",
    commercialSuccess: "Classique club et influence French touch.",
    cover: {
      alt: "Pochette 1999 Cassius",
      kind: "album",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "modjo-modjo",
    title: "Modjo",
    artist: "Modjo",
    year: 2001,
    format: "CD / vinyle / streaming",
    mood: "House pop, radio, dancefloor",
    commercialSuccess: "Tube mondial avec Lady.",
    cover: {
      alt: "Pochette Modjo",
      kind: "album",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "etienne-de-crecy-super-discount",
    title: "Super Discount",
    artist: "Étienne de Crécy",
    year: 1996,
    format: "CD / vinyle / streaming",
    mood: "House filtrée, club, laboratoire",
    commercialSuccess: "Reference critique majeure de la house française.",
    cover: {
      alt: "Pochette Super Discount",
      kind: "album",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "kavinsky-outrun",
    title: "OutRun",
    artist: "Kavinsky",
    year: 2013,
    format: "CD / vinyle / streaming",
    mood: "Synthwave, nuit, cinema",
    commercialSuccess: "Succes international amplifie par le cinema.",
    cover: {
      alt: "Pochette OutRun Kavinsky",
      kind: "album",
      color: "#8f2d56",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "m83-hurry-up",
    title: "Hurry Up, We’re Dreaming",
    artist: "M83",
    year: 2011,
    format: "CD / vinyle / streaming",
    mood: "Dream pop, synthés, adolescence",
    commercialSuccess: "Succes mondial et titre culte avec Midnight City.",
    cover: {
      alt: "Pochette Hurry Up M83",
      kind: "album",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "the-blaze-dancehall",
    title: "Dancehall",
    artist: "The Blaze",
    year: 2018,
    format: "CD / vinyle / streaming",
    mood: "Electro emotionnelle, clips, fraternite",
    commercialSuccess: "Succes critique international et forte reconnaissance video.",
    cover: {
      alt: "Pochette Dancehall The Blaze",
      kind: "album",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "alpha-wann-une-main-lave-autre",
    title: "Une main lave l’autre",
    artist: "Alpha Wann",
    year: 2018,
    format: "Streaming / CD / vinyle",
    mood: "Rap technique, plume, independance",
    commercialSuccess: "Classique moderne de fanbase rap.",
    cover: {
      alt: "Pochette UMLA Alpha Wann",
      kind: "album",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "georgio-bleu-noir",
    title: "Bleu noir",
    artist: "Georgio",
    year: 2015,
    format: "CD / streaming",
    mood: "Rap introspectif, Paris, generation",
    commercialSuccess: "Succes critique et public jeune fidele.",
    cover: {
      alt: "Pochette Bleu noir Georgio",
      kind: "album",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "nepal-adios-bahamas",
    title: "Adios Bahamas",
    artist: "Népal",
    year: 2020,
    format: "Streaming / vinyle",
    mood: "Rap discret, spleen, culte",
    commercialSuccess: "Statut culte et forte ecoute streaming.",
    cover: {
      alt: "Pochette Adios Bahamas Népal",
      kind: "album",
      color: "#8f2d56",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "columbine-adieu-bientot",
    title: "Adieu bientôt",
    artist: "Columbine",
    year: 2018,
    format: "Streaming / CD",
    mood: "Rap pop, adolescence, collectif",
    commercialSuccess: "Succes streaming et public adolescent massif.",
    cover: {
      alt: "Pochette Adieu bientot Columbine",
      kind: "album",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "s-crew-seine-zoo",
    title: "Seine Zoo",
    artist: "S-Crew",
    year: 2013,
    format: "CD / streaming",
    mood: "Collectif parisien, rap technique, jeunesse",
    commercialSuccess: "Succes fanbase et influence rap 2010.",
    cover: {
      alt: "Pochette Seine Zoo S-Crew",
      kind: "album",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "1995-paris-sud-minute",
    title: "Paris Sud Minute",
    artist: "1995",
    year: 2012,
    format: "CD / streaming",
    mood: "Boom bap, collectif, revival",
    commercialSuccess: "Succes critique et public rap independant.",
    cover: {
      alt: "Pochette Paris Sud Minute 1995",
      kind: "album",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "hippocampe-fou-celeste",
    title: "Céleste",
    artist: "Hippocampe Fou",
    year: 2015,
    format: "CD / streaming",
    mood: "Rap conte, mots, imaginaire",
    commercialSuccess: "Succes scene et public rap alternatif.",
    cover: {
      alt: "Pochette Celeste Hippocampe Fou",
      kind: "album",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "tsew-the-kid-diavolana",
    title: "Diavolana",
    artist: "Tsew The Kid",
    year: 2019,
    format: "Streaming",
    mood: "Rap melodique, internet, intime",
    commercialSuccess: "Succes streaming et fanbase jeune.",
    cover: {
      alt: "Pochette Diavolana Tsew The Kid",
      kind: "album",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "gringe-enfant-lune",
    title: "Enfant lune",
    artist: "Gringe",
    year: 2018,
    format: "CD / streaming",
    mood: "Rap introspectif, recit, Casseurs Flowters",
    commercialSuccess: "Succes critique et fanbase Orelsan/Gringe.",
    cover: {
      alt: "Pochette Enfant lune Gringe",
      kind: "album",
      color: "#8f2d56",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "lorenzo-rien-branler",
    title: "Rien à branler",
    artist: "Lorenzo",
    year: 2018,
    format: "Streaming / CD",
    mood: "Rap parodique, web, personnage",
    commercialSuccess: "Succes streaming massif et public jeune.",
    cover: {
      alt: "Pochette Rien a branler Lorenzo",
      kind: "album",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "doc-gyneco-premiere-consultation",
    title: "Première consultation",
    artist: "Doc Gynéco",
    year: 1996,
    format: "CD / vinyle / streaming",
    mood: "Rap nonchalant, funk, Paris 90",
    commercialSuccess: "Tres grand succes public et disque repere du rap francophone.",
    cover: {
      alt: "Pochette Premiere consultation Doc Gyneco",
      kind: "album",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "passi-les-tentations",
    title: "Les tentations",
    artist: "Passi",
    year: 1997,
    format: "CD / streaming",
    mood: "Rap conscient, groove, Sarcelles",
    commercialSuccess: "Succes rap important et forte presence radio.",
    cover: {
      alt: "Pochette Les tentations Passi",
      kind: "album",
      color: "#8f2d56",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "arsenik-quelques-gouttes-suffisent",
    title: "Quelques gouttes suffisent...",
    artist: "Ärsenik",
    year: 1998,
    format: "CD / vinyle / streaming",
    mood: "Rap dur, Villiers-le-Bel, ecriture nerveuse",
    commercialSuccess: "Album culte du rap français et reference de fanbase.",
    cover: {
      alt: "Pochette Quelques gouttes suffisent Arsenik",
      kind: "album",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "fabe-detournement-de-son",
    title: "Détournement de son...",
    artist: "Fabe",
    year: 1998,
    format: "CD / streaming",
    mood: "Rap conscient, independance, plume",
    commercialSuccess: "Statut culte et influence durable chez les amateurs de plume.",
    cover: {
      alt: "Pochette Detournement de son Fabe",
      kind: "album",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "raggasonic-roots-future",
    title: "Raggasonic",
    artist: "Raggasonic",
    year: 1995,
    format: "CD / vinyle / streaming",
    mood: "Ragga, sound system, energie 90",
    commercialSuccess: "Reference ragga francaise et forte memoire live.",
    cover: {
      alt: "Pochette Raggasonic roots future",
      kind: "album",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "menelik-phenomenelik",
    title: "Phénoménélik",
    artist: "Ménélik",
    year: 1997,
    format: "CD / streaming",
    mood: "Rap pop, radio, groove 90",
    commercialSuccess: "Succes populaire porte par plusieurs titres radio.",
    cover: {
      alt: "Pochette Phenomenelik Menelik",
      kind: "album",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "benny-b-album",
    title: "L’album",
    artist: "Benny B",
    year: 1990,
    format: "CD / cassette / streaming",
    mood: "Rap belge, dance, pionnier francophone",
    commercialSuccess: "Tube massif en Belgique et en France au debut des annees 90.",
    cover: {
      alt: "Pochette Benny B album",
      kind: "album",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1593078165899-c14f0fb8910f?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "mc-jean-gab-1-ma-vie",
    title: "Ma vie",
    artist: "MC Jean Gab’1",
    year: 2003,
    format: "CD / streaming",
    mood: "Rap autobiographique, direct, Paris",
    commercialSuccess: "Titre polemique et forte trace dans la culture rap.",
    cover: {
      alt: "Pochette Ma vie MC Jean Gab1",
      kind: "album",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "la-caution-peines-de-maures",
    title: "Peines de Maures / Arc-en-ciel pour Daltoniens",
    artist: "La Caution",
    year: 2005,
    format: "CD / vinyle / streaming",
    mood: "Rap independant, electro, cinema",
    commercialSuccess: "Statut culte et circulation internationale via le cinema.",
    cover: {
      alt: "Pochette Peines de Maures La Caution",
      kind: "album",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "ttc-batards-sensibles",
    title: "Bâtards sensibles",
    artist: "TTC",
    year: 2004,
    format: "CD / vinyle / streaming",
    mood: "Electro-rap, club, generation blog",
    commercialSuccess: "Reference culte des scenes electro-rap et independantes.",
    cover: {
      alt: "Pochette Batards sensibles TTC",
      kind: "album",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "ministere-amer-95200",
    title: "95200",
    artist: "Ministère AMER",
    year: 1994,
    format: "CD / vinyle / streaming",
    mood: "Rap politique, Sarcelles, tension 90",
    commercialSuccess: "Disque culte et matrice importante du rap français contestataire.",
    cover: {
      alt: "Pochette 95200 Ministere AMER",
      kind: "album",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "ideal-j-combat-continue",
    title: "Le combat continue",
    artist: "Ideal J",
    year: 1998,
    format: "CD / streaming",
    mood: "Rap hardcore, Orly, conscience sociale",
    commercialSuccess: "Statut culte et influence majeure sur le rap conscient.",
    cover: {
      alt: "Pochette Le combat continue Ideal J",
      kind: "album",
      color: "#8f2d56",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "lunatic-mauvais-oeil",
    title: "Mauvais œil",
    artist: "Lunatic",
    year: 2000,
    format: "CD / vinyle / streaming",
    mood: "Rap sombre, independance, 92",
    commercialSuccess: "Classique absolu du rap français et reference de fanbase.",
    cover: {
      alt: "Pochette Mauvais oeil Lunatic",
      kind: "album",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "mafia-k1-fry-pour-ceux",
    title: "Pour ceux",
    artist: "Mafia K’1 Fry",
    year: 2003,
    format: "CD / DVD / streaming",
    mood: "Collectif 94, rue, clip culte",
    commercialSuccess: "Reference culte et enorme trace dans l’imaginaire rap 2000.",
    cover: {
      alt: "Pochette Pour ceux Mafia K1 Fry",
      kind: "album",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "intouchable-points-suspension",
    title: "Les points sur les I",
    artist: "Intouchable",
    year: 2000,
    format: "CD / streaming",
    mood: "Rap 94, recit de rue, Mafia K’1 Fry",
    commercialSuccess: "Disque de fanbase durable dans le rap francilien.",
    cover: {
      alt: "Pochette Les points sur les I Intouchable",
      kind: "album",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "scred-connexion-du-mal-a-se-confier",
    title: "Du mal à s’confier",
    artist: "Scred Connexion",
    year: 2002,
    format: "CD / vinyle / streaming",
    mood: "Rap independant, Barbès, collectif",
    commercialSuccess: "Statut culte et public independant tres fidele.",
    cover: {
      alt: "Pochette Du mal a s confier Scred Connexion",
      kind: "album",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "la-rumeur-ombre-rue",
    title: "L’ombre sur la mesure",
    artist: "La Rumeur",
    year: 2002,
    format: "CD / vinyle / streaming",
    mood: "Rap politique, plume, independance",
    commercialSuccess: "Reference critique et influence forte dans le rap engage.",
    cover: {
      alt: "Pochette Ombre sur la mesure La Rumeur",
      kind: "album",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "kdd-resurrection",
    title: "Résurrection",
    artist: "KDD",
    year: 1998,
    format: "CD / streaming",
    mood: "Rap toulousain, conscience, Sud-Ouest",
    commercialSuccess: "Reference du rap toulousain et public rap 90.",
    cover: {
      alt: "Pochette Resurrection KDD",
      kind: "album",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "la-cliqua-concu-pour-durer",
    title: "Conçu pour durer",
    artist: "La Cliqua",
    year: 1995,
    format: "CD / vinyle / streaming",
    mood: "Boom bap, Paris, collectif underground",
    commercialSuccess: "Statut culte dans le rap old school français.",
    cover: {
      alt: "Pochette Concu pour durer La Cliqua",
      kind: "album",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "sages-poetes-rue-jusqua-amour",
    title: "Jusqu’à l’amour",
    artist: "Les Sages Poètes de la Rue",
    year: 1998,
    format: "CD / vinyle / streaming",
    mood: "Rap jazz, Boulogne, douceur old school",
    commercialSuccess: "Reference culte du rap jazz francophone.",
    cover: {
      alt: "Pochette Jusqu a l amour Sages Poetes",
      kind: "album",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "lord-kossity-koss-city",
    title: "Koss City",
    artist: "Lord Kossity",
    year: 1998,
    format: "CD / vinyle / streaming",
    mood: "Ragga, dancehall, clubs 90",
    commercialSuccess: "Succes club et forte presence dans la culture ragga-rap.",
    cover: {
      alt: "Pochette Koss City Lord Kossity",
      kind: "album",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "daddy-yod-faut-pas-taper-doudou",
    title: "Faut pas taper doudou",
    artist: "Daddy Yod",
    year: 1992,
    format: "CD / cassette / streaming",
    mood: "Ragga pionnier, sound system, 90",
    commercialSuccess: "Reference populaire du ragga français debut 90.",
    cover: {
      alt: "Pochette Faut pas taper doudou Daddy Yod",
      kind: "album",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1593078165899-c14f0fb8910f?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "rocca-entre-deux-mondes",
    title: "Entre deux mondes",
    artist: "Rocca",
    year: 1997,
    format: "CD / vinyle / streaming",
    mood: "Rap franco-colombien, boom bap, Paris",
    commercialSuccess: "Reference solo du rap underground parisien.",
    cover: {
      alt: "Pochette Entre deux mondes Rocca",
      kind: "album",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "busta-flex-busta-flex",
    title: "Busta Flex",
    artist: "Busta Flex",
    year: 1998,
    format: "CD / vinyle / streaming",
    mood: "Flow rapide, freestyle, 93",
    commercialSuccess: "Succes rap solide et fanbase freestyle durable.",
    cover: {
      alt: "Pochette Busta Flex album",
      kind: "album",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "zoxea-a-mon-tour-briller",
    title: "À mon tour d’briller",
    artist: "Zoxea",
    year: 1999,
    format: "CD / vinyle / streaming",
    mood: "Beat de Boul, rap technique, Boulogne",
    commercialSuccess: "Reference du rap 92 et public old school.",
    cover: {
      alt: "Pochette A mon tour d briller Zoxea",
      kind: "album",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "x-men-jeunes-coupables-libres",
    title: "Jeunes, coupables et libres",
    artist: "X-Men",
    year: 1998,
    format: "CD / vinyle / streaming",
    mood: "Time Bomb, plume, rap sombre",
    commercialSuccess: "Statut culte chez les amateurs de rap technique.",
    cover: {
      alt: "Pochette Jeunes coupables libres X-Men",
      kind: "album",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "klub-des-loosers-vive-la-vie",
    title: "Vive la vie",
    artist: "Klub des Loosers",
    year: 2004,
    format: "CD / vinyle / streaming",
    mood: "Rap alternatif, spleen, narration",
    commercialSuccess: "Culte independant et influence durable sur le rap alternatif.",
    cover: {
      alt: "Pochette Vive la vie Klub des Loosers",
      kind: "album",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "svinkels-bons-pour-asile",
    title: "Bons pour l’asile",
    artist: "Svinkels",
    year: 2003,
    format: "CD / vinyle / streaming",
    mood: "Rap punk, humour, scene alternative",
    commercialSuccess: "Public alternatif fidele et reputation live forte.",
    cover: {
      alt: "Pochette Bons pour l asile Svinkels",
      kind: "album",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "stupeflip-stupeflip",
    title: "Stupeflip",
    artist: "Stupeflip",
    year: 2003,
    format: "CD / vinyle / streaming",
    mood: "Crou, rap rock, univers culte",
    commercialSuccess: "Culte massif et fanbase tres active.",
    cover: {
      alt: "Pochette Stupeflip album",
      kind: "album",
      color: "#8f2d56",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "casseurs-flowters-orelsan-gringe",
    title: "Orelsan et Gringe sont les Casseurs Flowters",
    artist: "Casseurs Flowters",
    year: 2013,
    format: "CD / vinyle / streaming",
    mood: "Duo Caen, humour, recit generationnel",
    commercialSuccess: "Succes public important et prolongement audiovisuel majeur.",
    cover: {
      alt: "Pochette Casseurs Flowters",
      kind: "album",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "casey-tragedie-dune-trajectoire",
    title: "Tragédie d’une trajectoire",
    artist: "Casey",
    year: 2006,
    format: "CD / vinyle / streaming",
    mood: "Rap politique, plume, tension",
    commercialSuccess: "Reference critique et statut culte dans le rap conscient.",
    cover: {
      alt: "Pochette Tragedie trajectoire Casey",
      kind: "album",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "roce-identite-en-crescendo",
    title: "Identité en crescendo",
    artist: "Rocé",
    year: 2006,
    format: "CD / vinyle / streaming",
    mood: "Rap jazz, independance, identite",
    commercialSuccess: "Reconnaissance critique forte et public independant durable.",
    cover: {
      alt: "Pochette Identite crescendo Roce",
      kind: "album",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "la-brigade-le-testament",
    title: "Le testament",
    artist: "La Brigade",
    year: 1999,
    format: "CD / streaming",
    mood: "Rap collectif, social, fin 90",
    commercialSuccess: "Reference rap collectif avec forte memoire de scene.",
    cover: {
      alt: "Pochette Le testament La Brigade",
      kind: "album",
      color: "#8f2d56",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "expression-direkt-guet-apens",
    title: "Guet-apens",
    artist: "Expression Direkt",
    year: 1998,
    format: "CD / vinyle / streaming",
    mood: "Rap de rue, Mantes-la-Jolie, 78",
    commercialSuccess: "Statut culte dans le rap hardcore francilien.",
    cover: {
      alt: "Pochette Guet apens Expression Direkt",
      kind: "album",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "atk-heptagone",
    title: "Heptagone",
    artist: "ATK",
    year: 1998,
    format: "CD / vinyle / streaming",
    mood: "Collectif parisien, technique, independant",
    commercialSuccess: "Culte rap underground et reference de collectionneurs.",
    cover: {
      alt: "Pochette Heptagone ATK",
      kind: "album",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "kabal-etat-dames",
    title: "État d’âmes",
    artist: "Kabal",
    year: 1997,
    format: "CD / streaming",
    mood: "Rap rock, spoken word, radical",
    commercialSuccess: "Reference alternative a forte influence souterraine.",
    cover: {
      alt: "Pochette Etat d ames Kabal",
      kind: "album",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "less-du-neuf-le-temps-dune-vie",
    title: "Le temps d’une vie",
    artist: "Less du Neuf",
    year: 2001,
    format: "CD / vinyle / streaming",
    mood: "Rap independant, jazz, plume",
    commercialSuccess: "Statut culte dans les circuits independants.",
    cover: {
      alt: "Pochette Le temps dune vie Less du Neuf",
      kind: "album",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "princess-anies-conte-faits",
    title: "Conte de faits",
    artist: "Princess Aniès",
    year: 2002,
    format: "CD / streaming",
    mood: "Rap feminin, conscience, independance",
    commercialSuccess: "Reference durable des parcours rap feminins.",
    cover: {
      alt: "Pochette Conte de faits Princess Anies",
      kind: "album",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "k-reen-dimension",
    title: "Dimension",
    artist: "K-Reen",
    year: 2001,
    format: "CD / streaming",
    mood: "R&B français, soul urbaine, featuring rap",
    commercialSuccess: "Presence importante dans la soul urbaine française.",
    cover: {
      alt: "Pochette Dimension K-Reen",
      kind: "album",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "bams-vivre-ou-mourir",
    title: "Vivre ou mourir",
    artist: "Bams",
    year: 1999,
    format: "CD / streaming",
    mood: "Rap feminin, jazz, parole sociale",
    commercialSuccess: "Reference critique dans le rap feminin independant.",
    cover: {
      alt: "Pochette Vivre ou mourir Bams",
      kind: "album",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "keny-arkana-entre-ciment-belle-etoile",
    title: "Entre ciment et belle étoile",
    artist: "Keny Arkana",
    year: 2006,
    format: "CD / vinyle / streaming",
    mood: "Rap militant, Marseille, altermondialisme",
    commercialSuccess: "Reference critique et public militant durable.",
    cover: {
      alt: "Pochette Entre ciment et belle etoile Keny Arkana",
      kind: "album",
      color: "#8f2d56",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "psy4-enfants-lune",
    title: "Les enfants de la lune",
    artist: "Psy 4 de la Rime",
    year: 2005,
    format: "CD / streaming",
    mood: "Rap marseillais, melodie, collectif",
    commercialSuccess: "Succes public important et tremplin pour les carrieres solo.",
    cover: {
      alt: "Pochette Les enfants de la lune Psy 4",
      kind: "album",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "troisieme-oeil-hier-demain",
    title: "Hier, aujourd’hui, demain",
    artist: "Le 3ème Œil",
    year: 1999,
    format: "CD / vinyle / streaming",
    mood: "Rap marseillais, conscience, fin 90",
    commercialSuccess: "Reference rap marseillais de fanbase.",
    cover: {
      alt: "Pochette Hier aujourd hui demain 3eme Oeil",
      kind: "album",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "chiens-de-paille-mille-un-fantomes",
    title: "Mille et un fantômes",
    artist: "Chiens de Paille",
    year: 2001,
    format: "CD / streaming",
    mood: "Rap poetique, Marseille, melancolie",
    commercialSuccess: "Reconnaissance critique et public rap de texte.",
    cover: {
      alt: "Pochette Mille et un fantomes Chiens de Paille",
      kind: "album",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "faf-larage-cest-ma-cause",
    title: "C’est ma cause",
    artist: "Faf Larage",
    year: 1999,
    format: "CD / streaming",
    mood: "Rap marseillais, solo, cinema",
    commercialSuccess: "Succes solo et forte memoire audiovisuelle.",
    cover: {
      alt: "Pochette C est ma cause Faf Larage",
      kind: "album",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "don-choa-vapeurs-toxiques",
    title: "Vapeurs toxiques",
    artist: "Don Choa",
    year: 2002,
    format: "CD / streaming",
    mood: "Fonky Family, solo, rap sudiste",
    commercialSuccess: "Succes rap solide et fanbase marseillaise.",
    cover: {
      alt: "Pochette Vapeurs toxiques Don Choa",
      kind: "album",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "sat-lartificier-dans-mon-monde",
    title: "Dans mon monde",
    artist: "Sat l’Artificier",
    year: 2002,
    format: "CD / streaming",
    mood: "Fonky Family, introspection, Marseille",
    commercialSuccess: "Reference de fanbase FF et rap marseillais.",
    cover: {
      alt: "Pochette Dans mon monde Sat",
      kind: "album",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "rimk-famille-nombreuse",
    title: "Famille nombreuse",
    artist: "Rim’K",
    year: 2004,
    format: "CD / streaming",
    mood: "94, diaspora, solo 113",
    commercialSuccess: "Succes solo durable et influence sur rap diaspora.",
    cover: {
      alt: "Pochette Famille nombreuse RimK",
      kind: "album",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "ap-discret",
    title: "Discret",
    artist: "AP",
    year: 2005,
    format: "CD / streaming",
    mood: "113, Vitry, rap solo",
    commercialSuccess: "Public de fanbase 113 et rap francilien.",
    cover: {
      alt: "Pochette Discret AP",
      kind: "album",
      color: "#8f2d56",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "mokobe-mon-afrique",
    title: "Mon Afrique",
    artist: "Mokobé",
    year: 2007,
    format: "CD / streaming",
    mood: "Afrique, 113, collaborations",
    commercialSuccess: "Succes francophone et pont fort vers l’Afrique.",
    cover: {
      alt: "Pochette Mon Afrique Mokobe",
      kind: "album",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "georges-guetary-grands-succes",
    title: "Georges Guétary - grands succès",
    artist: "Georges Guétary",
    year: 1946,
    format: "78 tours / anthologie",
    mood: "Operette, charme, theatre musical",
    commercialSuccess: "Grand succes populaire et rayonnement international du charme français.",
    cover: {
      alt: "Pochette Georges Guetary grands succes",
      kind: "album",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "andre-claveau-etoile-neiges",
    title: "Étoile des neiges",
    artist: "André Claveau",
    year: 1949,
    format: "78 tours / anthologie",
    mood: "Radio, romance, variete orchestral",
    commercialSuccess: "Immense presence radio et popularite durable en anthologies.",
    cover: {
      alt: "Pochette Etoile des neiges Andre Claveau",
      kind: "album",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1526394931762-90052e97b376?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "jean-sablon-swing-troubadour",
    title: "Le troubadour swing",
    artist: "Jean Sablon",
    year: 1947,
    format: "78 tours / anthologie",
    mood: "Swing, crooner, micro moderne",
    commercialSuccess: "Reference crooner et grande influence sur la chanson micro.",
    cover: {
      alt: "Pochette Jean Sablon troubadour swing",
      kind: "album",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "yvette-giraud-mademoiselle-paris",
    title: "Mademoiselle de Paris",
    artist: "Yvette Giraud",
    year: 1948,
    format: "78 tours / anthologie",
    mood: "Paris, romance, apres-guerre",
    commercialSuccess: "Succes populaire en France et forte circulation internationale.",
    cover: {
      alt: "Pochette Mademoiselle de Paris Yvette Giraud",
      kind: "album",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "rina-ketty-jattendrai",
    title: "J’attendrai",
    artist: "Rina Ketty",
    year: 1940,
    format: "78 tours / anthologie",
    mood: "Valse, attente, memoire de guerre",
    commercialSuccess: "Standard populaire associe a la memoire de guerre.",
    cover: {
      alt: "Pochette J attendrai Rina Ketty",
      kind: "album",
      color: "#8f2d56",
      url: "https://images.unsplash.com/photo-1526394931762-90052e97b376?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "reda-caire-swing-romance",
    title: "Romances et refrains",
    artist: "Reda Caire",
    year: 1941,
    format: "78 tours / anthologie",
    mood: "Charme, exotisme, music-hall",
    commercialSuccess: "Succes music-hall et presence durable dans les anthologies.",
    cover: {
      alt: "Pochette Reda Caire romances refrains",
      kind: "album",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "leo-marjane-seule-ce-soir",
    title: "Seule ce soir",
    artist: "Léo Marjane",
    year: 1941,
    format: "78 tours / anthologie",
    mood: "Jazz vocal, nuit, solitude",
    commercialSuccess: "Titre signature et forte memoire du climat nocturne des annees 40.",
    cover: {
      alt: "Pochette Seule ce soir Leo Marjane",
      kind: "album",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "mireille-petit-chemin",
    title: "Le petit chemin",
    artist: "Mireille",
    year: 1942,
    format: "78 tours / anthologie",
    mood: "Piano, fantaisie, chanson composee",
    commercialSuccess: "Repertoire patrimonial et influence majeure sur les auteurs-compositeurs.",
    cover: {
      alt: "Pochette Le petit chemin Mireille",
      kind: "album",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "jean-lumiere-bleu-horizon",
    title: "Bleu horizon",
    artist: "Jean Lumière",
    year: 1940,
    format: "78 tours / anthologie",
    mood: "Tenor, romance, radio ancienne",
    commercialSuccess: "Succes de radio et presence dans les collections anciennes.",
    cover: {
      alt: "Pochette Bleu horizon Jean Lumiere",
      kind: "album",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1526394931762-90052e97b376?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "ray-ventura-collegiens",
    title: "Ray Ventura et ses Collégiens",
    artist: "Ray Ventura",
    year: 1946,
    format: "78 tours / anthologie",
    mood: "Swing, orchestre, humour collectif",
    commercialSuccess: "Tres grande popularite et influence durable sur la chanson orchestrale.",
    cover: {
      alt: "Pochette Ray Ventura collegiens",
      kind: "album",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "catherine-sauvage-chante-ferre",
    title: "Catherine Sauvage chante Léo Ferré",
    artist: "Catherine Sauvage",
    year: 1954,
    format: "33 tours / anthologie",
    mood: "Rive gauche, Ferré, intensite",
    commercialSuccess: "Reference rive gauche et grande reconnaissance critique.",
    cover: {
      alt: "Pochette Catherine Sauvage chante Ferre",
      kind: "album",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "freres-jacques-inventaire",
    title: "Inventaire",
    artist: "Les Frères Jacques",
    year: 1950,
    format: "78 tours / 33 tours / anthologie",
    mood: "Quatuor vocal, mime, Prévert",
    commercialSuccess: "Succes de scene durable et influence sur la chanson theatrale.",
    cover: {
      alt: "Pochette Inventaire Freres Jacques",
      kind: "album",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "magali-noel-fais-moi-mal-johnny",
    title: "Fais-moi mal Johnny",
    artist: "Magali Noël",
    year: 1956,
    format: "45 tours / anthologie",
    mood: "Gainsbourg, cabaret, provocation",
    commercialSuccess: "Titre culte et scandale patrimonial.",
    cover: {
      alt: "Pochette Fais moi mal Johnny Magali Noel",
      kind: "album",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "dario-moreno-si-tu-vas-rio",
    title: "Si tu vas à Rio",
    artist: "Dario Moreno",
    year: 1958,
    format: "45 tours / anthologie",
    mood: "Exotica, music-hall, fete",
    commercialSuccess: "Tres grand succes populaire et memoire festive.",
    cover: {
      alt: "Pochette Si tu vas a Rio Dario Moreno",
      kind: "album",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "colette-renard-irreverencieuse",
    title: "Chansons irrévérencieuses",
    artist: "Colette Renard",
    year: 1956,
    format: "33 tours / anthologie",
    mood: "Cabaret, grivois, theatre",
    commercialSuccess: "Statut culte dans la chanson de cabaret.",
    cover: {
      alt: "Pochette Colette Renard irreverencieuse",
      kind: "album",
      color: "#8f2d56",
      url: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "francis-lemarque-paris-populaire",
    title: "Paris populaire",
    artist: "Francis Lemarque",
    year: 1952,
    format: "78 tours / 33 tours / anthologie",
    mood: "Paris ouvrier, valse, accordéon",
    commercialSuccess: "Repertoire patrimonial et nombreuses reprises.",
    cover: {
      alt: "Pochette Paris populaire Francis Lemarque",
      kind: "album",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "gloria-lasso-etranger-paradis",
    title: "Étranger au paradis",
    artist: "Gloria Lasso",
    year: 1955,
    format: "45 tours / anthologie",
    mood: "Grande voix, romance, international",
    commercialSuccess: "Tres grand succes populaire dans la francophonie.",
    cover: {
      alt: "Pochette Etranger au paradis Gloria Lasso",
      kind: "album",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "jacques-pills-duos-radio",
    title: "Duos et refrains de radio",
    artist: "Jacques Pills",
    year: 1951,
    format: "78 tours / anthologie",
    mood: "Duo, fantaisie, radio",
    commercialSuccess: "Succes de radio et place importante dans les varietes d’apres-guerre.",
    cover: {
      alt: "Pochette Jacques Pills duos radio",
      kind: "album",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1526394931762-90052e97b376?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "marcel-amont-bleu-blanc-blond",
    title: "Bleu, blanc, blond",
    artist: "Marcel Amont",
    year: 1959,
    format: "45 tours / anthologie",
    mood: "Fantaisie, scene, sourire",
    commercialSuccess: "Succes public durable et forte memoire television.",
    cover: {
      alt: "Pochette Bleu blanc blond Marcel Amont",
      kind: "album",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "jean-claude-pascal-nous-amoureux",
    title: "Nous les amoureux",
    artist: "Jean-Claude Pascal",
    year: 1961,
    format: "45 tours / anthologie",
    mood: "Crooner, cinema, Eurovision",
    commercialSuccess: "Victoire Eurovision et repertoire patrimonial.",
    cover: {
      alt: "Pochette Nous les amoureux Jean Claude Pascal",
      kind: "album",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "antoine-elucubrations",
    title: "Les Élucubrations d’Antoine",
    artist: "Antoine",
    year: 1966,
    format: "45 tours / album",
    mood: "Folk beat, provocation, jeunesse",
    commercialSuccess: "Succes massif et silhouette centrale de la generation yéyé contestataire.",
    cover: {
      alt: "Pochette Les Elucubrations Antoine",
      kind: "album",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "petula-clark-downtown-francais",
    title: "Downtown / Dans le temps",
    artist: "Petula Clark",
    year: 1964,
    format: "45 tours / anthologie",
    mood: "Pop internationale, television, adaptations",
    commercialSuccess: "Succes international et presence forte dans la pop televisuelle des annees 60.",
    cover: {
      alt: "Pochette Petula Clark sixties",
      kind: "album",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "herve-vilard-capri",
    title: "Capri c’est fini",
    artist: "Hervé Vilard",
    year: 1965,
    format: "45 tours / anthologie",
    mood: "Variete romantique, ete, 45 tours",
    commercialSuccess: "Tube de 1965 devenu expression populaire durable.",
    cover: {
      alt: "Pochette Capri c est fini",
      kind: "album",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "monty-attends-moi",
    title: "Attends-moi",
    artist: "Monty",
    year: 1966,
    format: "45 tours / anthologie",
    mood: "Yeye masculin, TV, refrains pop",
    commercialSuccess: "Succes de radio et de television dans le paysage pop des annees 60.",
    cover: {
      alt: "Pochette Monty Attends moi",
      kind: "album",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "annie-philippe-ticket-quai",
    title: "Ticket de quai",
    artist: "Annie Philippe",
    year: 1966,
    format: "45 tours / anthologie",
    mood: "Yeye feminin, pop orchestrale, silhouette TV",
    commercialSuccess: "Titre regulierement repris dans les anthologies yéyé.",
    cover: {
      alt: "Pochette Ticket de quai Annie Philippe",
      kind: "album",
      color: "#ffb84d",
      url: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "michele-torr-emmene-moi-danser",
    title: "Emmène-moi danser ce soir",
    artist: "Michèle Torr",
    year: 1978,
    format: "45 tours / anthologie",
    mood: "Variete populaire, scene, television",
    commercialSuccess: "Longue presence populaire et repertoire televisuel durable.",
    cover: {
      alt: "Pochette Michele Torr variete",
      kind: "album",
      color: "#8f2d56",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "eric-charden-monde-est-gris",
    title: "Le monde est gris, le monde est bleu",
    artist: "Éric Charden",
    year: 1967,
    format: "45 tours / anthologie",
    mood: "Pop romantique, auteur-compositeur, sixties",
    commercialSuccess: "Premier grand succes avant les duos populaires des annees 70.",
    cover: {
      alt: "Pochette Eric Charden monde gris bleu",
      kind: "album",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "alain-barriere-ma-vie",
    title: "Ma vie",
    artist: "Alain Barrière",
    year: 1964,
    format: "45 tours / anthologie",
    mood: "Chanson romantique, Eurovision, voix grave",
    commercialSuccess: "Titre signature et carriere durable en francophonie.",
    cover: {
      alt: "Pochette Ma vie Alain Barriere",
      kind: "album",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "mike-brant-laisse-moi-taimer",
    title: "Laisse-moi t’aimer",
    artist: "Mike Brant",
    year: 1970,
    format: "45 tours / anthologie",
    mood: "Grande voix, variete romantique, television",
    commercialSuccess: "Immense succes populaire et figure culte de la variete 70.",
    cover: {
      alt: "Pochette Laisse-moi t aimer Mike Brant",
      kind: "album",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "patrick-juvet-ou-sont-les-femmes",
    title: "Où sont les femmes ?",
    artist: "Patrick Juvet",
    year: 1977,
    format: "45 tours / album",
    mood: "Disco, pop, television",
    commercialSuccess: "Tube disco francophone et succes international ensuite avec I Love America.",
    cover: {
      alt: "Pochette Ou sont les femmes Patrick Juvet",
      kind: "album",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "pierre-groscolas-lady-lay",
    title: "Lady Lay",
    artist: "Pierre Groscolas",
    year: 1974,
    format: "45 tours / anthologie",
    mood: "Pop melodique, choeurs, radio",
    commercialSuccess: "Succes radio durable et presence reguliere dans les anthologies 70.",
    cover: {
      alt: "Pochette Lady Lay Pierre Groscolas",
      kind: "album",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "christian-delagrange-rosetta",
    title: "Rosetta",
    artist: "Christian Delagrange",
    year: 1972,
    format: "45 tours / anthologie",
    mood: "Ballade romantique, variete TV, radio",
    commercialSuccess: "Succes populaire dans le courant romantique de la variete 70.",
    cover: {
      alt: "Pochette Rosetta Christian Delagrange",
      kind: "album",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "mort-shuman-lac-majeur",
    title: "Le Lac Majeur",
    artist: "Mort Shuman",
    year: 1972,
    format: "45 tours / album",
    mood: "Chanson orchestrale, voyage, auteur international",
    commercialSuccess: "Grand classique radiophonique du repertoire francophone des annees 70.",
    cover: {
      alt: "Pochette Le Lac Majeur Mort Shuman",
      kind: "album",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "severine-banc-arbre-rue",
    title: "Un banc, un arbre, une rue",
    artist: "Séverine",
    year: 1971,
    format: "45 tours / Eurovision",
    mood: "Eurovision, pop orchestrale, refrain lumineux",
    commercialSuccess: "Victoire Eurovision 1971 pour Monaco et succes europeen.",
    cover: {
      alt: "Pochette Un banc un arbre une rue",
      kind: "album",
      color: "#ffb84d",
      url: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "jeane-manson-avant-adieu",
    title: "Avant de nous dire adieu",
    artist: "Jeane Manson",
    year: 1976,
    format: "45 tours / anthologie",
    mood: "Variete romantique, voix, television",
    commercialSuccess: "Succes populaire et longue presence en television.",
    cover: {
      alt: "Pochette Avant de nous dire adieu",
      kind: "album",
      color: "#8f2d56",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "c-jerome-kiss-me",
    title: "Kiss Me",
    artist: "C. Jérôme",
    year: 1972,
    format: "45 tours / anthologie",
    mood: "Pop de bal, refrain, television",
    commercialSuccess: "Tube populaire et repertoire durable de soirees et galas.",
    cover: {
      alt: "Pochette Kiss Me C Jerome",
      kind: "album",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "lio-banana-split",
    title: "Le Banana split",
    artist: "Lio",
    year: 1979,
    format: "45 tours / anthologie",
    mood: "Pop sucrée, new wave, image TV",
    commercialSuccess: "Tube de fin 70 devenu repere majeur de la pop francophone 80.",
    cover: {
      alt: "Pochette Le Banana split Lio",
      kind: "album",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "jeanne-mas-toute-premiere-fois",
    title: "Toute première fois",
    artist: "Jeanne Mas",
    year: 1984,
    format: "45 tours / album",
    mood: "Pop dramatique, clip, image rouge et noire",
    commercialSuccess: "Tres grand succes radio et figure emblematique de la pop française 80.",
    cover: {
      alt: "Pochette Toute premiere fois Jeanne Mas",
      kind: "album",
      color: "#8f2d56",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "elsa-ten-va-pas",
    title: "T’en va pas",
    artist: "Elsa",
    year: 1986,
    format: "45 tours / BO",
    mood: "Ballade adolescente, cinema, television",
    commercialSuccess: "Numero un populaire et chanson associee durablement au cinema français des annees 80.",
    cover: {
      alt: "Pochette T en va pas Elsa",
      kind: "album",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "images-demons-minuit",
    title: "Les Démons de minuit",
    artist: "Images",
    year: 1986,
    format: "45 tours / album",
    mood: "Pop dance, Top 50, synthés",
    commercialSuccess: "Tube massif de 1986 et classique des soirees annees 80.",
    cover: {
      alt: "Pochette Les Demons de minuit Images",
      kind: "album",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1593078165899-c14f0fb8910f?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "debut-soiree-nuit-folie",
    title: "Nuit de folie",
    artist: "Début de Soirée",
    year: 1988,
    format: "45 tours / album",
    mood: "Dance pop, fete, television",
    commercialSuccess: "Tube enorme de 1988 et refrain durable des fetes populaires.",
    cover: {
      alt: "Pochette Nuit de folie",
      kind: "album",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "partenaire-particulier",
    title: "Partenaire particulier",
    artist: "Partenaire Particulier",
    year: 1985,
    format: "45 tours / album",
    mood: "New wave, synthpop, minimalisme TV",
    commercialSuccess: "Tube synthpop et reference reguliere des anthologies annees 80.",
    cover: {
      alt: "Pochette Partenaire particulier",
      kind: "album",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1593078165899-c14f0fb8910f?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "rita-mitsouko-marciale",
    title: "Marcia Baïla",
    artist: "Les Rita Mitsouko",
    year: 1984,
    format: "45 tours / album",
    mood: "Pop arty, clip, scene alternative",
    commercialSuccess: "Succes critique et populaire, clip devenu image patrimoniale de la pop 80.",
    cover: {
      alt: "Pochette Marcia Baila Rita Mitsouko",
      kind: "album",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "gold-capitaine-abandonne",
    title: "Capitaine abandonné",
    artist: "Gold",
    year: 1985,
    format: "45 tours / album",
    mood: "Pop rock FM, groupe, refrains radio",
    commercialSuccess: "Tube radio majeur et presence forte dans les compilations annees 80.",
    cover: {
      alt: "Pochette Capitaine abandonne Gold",
      kind: "album",
      color: "#ffb84d",
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "maurice-chevalier-fleur-paris",
    title: "Fleur de Paris",
    artist: "Maurice Chevalier",
    year: 1944,
    format: "78 tours / anthologie",
    mood: "Liberation, music-hall, refrain populaire",
    commercialSuccess: "Refrain fortement associe a la Liberation et au music-hall populaire.",
    cover: {
      alt: "Pochette Fleur de Paris Maurice Chevalier",
      kind: "album",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1526394931762-90052e97b376?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "elyane-celis-piroulirouli",
    title: "Piroulirouli",
    artist: "Élyane Célis",
    year: 1946,
    format: "78 tours / anthologie",
    mood: "Fantaisie, radio, sourire",
    commercialSuccess: "Succes de radio et presence dans les anthologies de chanson fantaisie.",
    cover: {
      alt: "Pochette Piroulirouli Elyane Celis",
      kind: "album",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1526394931762-90052e97b376?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "andre-dassary-ramuntcho",
    title: "Ramuntcho",
    artist: "André Dassary",
    year: 1944,
    format: "78 tours / anthologie",
    mood: "Tenor populaire, operette, Sud-Ouest",
    commercialSuccess: "Grande presence populaire dans le repertoire de charme et d’operette.",
    cover: {
      alt: "Pochette Ramuntcho Andre Dassary",
      kind: "album",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1526394931762-90052e97b376?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "lys-gauty-chaland-passe",
    title: "Le chaland qui passe",
    artist: "Lys Gauty",
    year: 1940,
    format: "78 tours / anthologie",
    mood: "Chanson dramatique, cabaret, voix grave",
    commercialSuccess: "Standard patrimonial associe aux grandes interpretes d’avant-guerre et de guerre.",
    cover: {
      alt: "Pochette Le chaland qui passe Lys Gauty",
      kind: "album",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1526394931762-90052e97b376?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "marie-dubas-mon-legionnaire",
    title: "Mon légionnaire",
    artist: "Marie Dubas",
    year: 1940,
    format: "78 tours / anthologie",
    mood: "Theatre vocal, realiste, cabaret",
    commercialSuccess: "Titre repris et transforme en standard par plusieurs generations.",
    cover: {
      alt: "Pochette Mon legionnaire Marie Dubas",
      kind: "album",
      color: "#8f2d56",
      url: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "georgius-lycee-papillon",
    title: "Au lycée Papillon",
    artist: "Georgius",
    year: 1940,
    format: "78 tours / anthologie",
    mood: "Humour, fantaisie, chanson parlee",
    commercialSuccess: "Reference durable de chanson humoristique et de repertoire scolaire parodique.",
    cover: {
      alt: "Pochette Au lycee Papillon Georgius",
      kind: "album",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1526394931762-90052e97b376?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "fred-adison-orchestre",
    title: "Fred Adison et son orchestre",
    artist: "Fred Adison",
    year: 1941,
    format: "78 tours / anthologie",
    mood: "Swing, orchestre, danse",
    commercialSuccess: "Presence forte dans les bals, radios et anthologies swing.",
    cover: {
      alt: "Pochette Fred Adison orchestre",
      kind: "album",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "compagnons-trois-cloches",
    title: "Les Trois Cloches",
    artist: "Les Compagnons de la chanson",
    year: 1946,
    format: "78 tours / anthologie",
    mood: "Groupe vocal, apres-guerre, harmonie",
    commercialSuccess: "Grand succes francophone puis international avec Edith Piaf.",
    cover: {
      alt: "Pochette Les Trois Cloches Compagnons",
      kind: "album",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "berthe-sylva-roses-blanches",
    title: "Les Roses blanches",
    artist: "Berthe Sylva",
    year: 1930,
    format: "78 tours / anthologie",
    mood: "Realiste, melodrame, 78 tours",
    commercialSuccess: "Standard melodramatique durable et grande presence dans les anthologies.",
    cover: {
      alt: "Pochette Les Roses blanches Berthe Sylva",
      kind: "album",
      color: "#8f2d56",
      url: "https://images.unsplash.com/photo-1526394931762-90052e97b376?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "lucienne-boyer-parlez-moi-amour",
    title: "Parlez-moi d’amour",
    artist: "Lucienne Boyer",
    year: 1930,
    format: "78 tours / anthologie",
    mood: "Romance, cabaret, international",
    commercialSuccess: "Grand prix du disque et standard international de la chanson romantique.",
    cover: {
      alt: "Pochette Parlez-moi d amour Lucienne Boyer",
      kind: "album",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "pills-tabet-couches-foin",
    title: "Pills et Tabet",
    artist: "Pills et Tabet",
    year: 1932,
    format: "78 tours / anthologie",
    mood: "Duo fantaisie, humour, radio",
    commercialSuccess: "Duo populaire de radio et de music-hall.",
    cover: {
      alt: "Pochette Pills et Tabet",
      kind: "album",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1526394931762-90052e97b376?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "jean-tranchant-ici-on-peche",
    title: "Ici l’on pêche",
    artist: "Jean Tranchant",
    year: 1935,
    format: "78 tours / anthologie",
    mood: "Auteur-compositeur, swing leger, fantaisie",
    commercialSuccess: "Reference critique de la chanson d’auteur des annees 30.",
    cover: {
      alt: "Pochette Ici l on peche Jean Tranchant",
      kind: "album",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1526394931762-90052e97b376?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "noel-noel-coucou",
    title: "Coucou",
    artist: "Noël-Noël",
    year: 1932,
    format: "78 tours / anthologie",
    mood: "Fantaisie, cinema, humour tendre",
    commercialSuccess: "Succes de scene et de cinema, memoire durable de fantaisiste.",
    cover: {
      alt: "Pochette Coucou Noel-Noel",
      kind: "album",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "georges-tabet-viens-poupoule",
    title: "Georges Tabet fantaisie",
    artist: "Georges Tabet",
    year: 1936,
    format: "78 tours / anthologie",
    mood: "Fantaisie, duo, music-hall",
    commercialSuccess: "Presence importante dans les duos et fantaisies d’avant-guerre.",
    cover: {
      alt: "Pochette Georges Tabet fantaisie",
      kind: "album",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1526394931762-90052e97b376?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "alibert-canebiere",
    title: "Un de la Canebière",
    artist: "Alibert",
    year: 1935,
    format: "78 tours / operette",
    mood: "Operette marseillaise, accent, scene",
    commercialSuccess: "Grand succes d’operette et marqueur de la chanson marseillaise.",
    cover: {
      alt: "Pochette Un de la Canebiere Alibert",
      kind: "album",
      color: "#ffb84d",
      url: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "marianne-oswald-anna-la-bonne",
    title: "Anna la bonne",
    artist: "Marianne Oswald",
    year: 1934,
    format: "78 tours / cabaret",
    mood: "Expressionnisme, texte, cabaret",
    commercialSuccess: "Reference critique majeure, plus patrimoniale que commerciale.",
    cover: {
      alt: "Pochette Anna la bonne Marianne Oswald",
      kind: "album",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "yvonne-george-jai-pas-su-y-faire",
    title: "J’ai pas su y faire",
    artist: "Yvonne George",
    year: 1925,
    format: "78 tours / anthologie",
    mood: "Cabaret intense, modernite, rive gauche",
    commercialSuccess: "Figure plus critique que commerciale, tres influente dans les milieux de cabaret.",
    cover: {
      alt: "Pochette Yvonne George cabaret",
      kind: "album",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1526394931762-90052e97b376?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "felix-mayol-viens-poupoule",
    title: "Viens poupoule",
    artist: "Félix Mayol",
    year: 1920,
    format: "78 tours / cafe-concert",
    mood: "Cafe-concert, refrain, scene ancienne",
    commercialSuccess: "Repertoire tres populaire, repris par plusieurs generations de fantaisistes.",
    cover: {
      alt: "Pochette Viens poupoule Mayol",
      kind: "album",
      color: "#ffb84d",
      url: "https://images.unsplash.com/photo-1526394931762-90052e97b376?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "dranem-pitie-papa",
    title: "Pitié pour papa",
    artist: "Dranem",
    year: 1921,
    format: "78 tours / cafe-concert",
    mood: "Comique troupier, grimace, cafe-concert",
    commercialSuccess: "Immense popularite de scene et influence durable sur les comiques chantants.",
    cover: {
      alt: "Pochette Dranem chanson comique",
      kind: "album",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1526394931762-90052e97b376?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "georgel-sous-ponts-paris",
    title: "Sous les ponts de Paris",
    artist: "Georgel",
    year: 1925,
    format: "78 tours / anthologie",
    mood: "Chanson parisienne, romance, rue",
    commercialSuccess: "Standard parisien repris tout au long du XXe siecle.",
    cover: {
      alt: "Pochette Sous les ponts de Paris Georgel",
      kind: "album",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "gaston-ouvrard-je-ne-suis-pas-bien-portant",
    title: "Je ne suis pas bien portant",
    artist: "Gaston Ouvrard",
    year: 1929,
    format: "78 tours / chanson comique",
    mood: "Comique, diction, catalogue corporel",
    commercialSuccess: "Classique comique et morceau de bravoure pour interpretes de diction.",
    cover: {
      alt: "Pochette Je ne suis pas bien portant",
      kind: "album",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1526394931762-90052e97b376?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "marjal-valse-brune",
    title: "La Valse brune",
    artist: "Marjal",
    year: 1926,
    format: "78 tours / anthologie",
    mood: "Valse, voix populaire, bal",
    commercialSuccess: "Standard de valse populaire regulierement repris en anthologies.",
    cover: {
      alt: "Pochette La Valse brune Marjal",
      kind: "album",
      color: "#8f2d56",
      url: "https://images.unsplash.com/photo-1526394931762-90052e97b376?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "fortuge-cest-un-mauvais-garcon",
    title: "Chansons de revue",
    artist: "Fortugé",
    year: 1927,
    format: "78 tours / revue",
    mood: "Revue, fantaisie, Paris nocturne",
    commercialSuccess: "Repertoire de revue et presence dans les memoires du Paris des annees 20.",
    cover: {
      alt: "Pochette Fortuge revue",
      kind: "album",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "georgette-plana-ancienne",
    title: "Refrains de bal musette",
    artist: "Georgette Plana",
    year: 1929,
    format: "78 tours / anthologie",
    mood: "Bal musette, voix populaire, accordéon",
    commercialSuccess: "Presence durable dans le repertoire musette et les reprises populaires.",
    cover: {
      alt: "Pochette Georgette Plana bal musette",
      kind: "album",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1526394931762-90052e97b376?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "harry-fragson-reviens",
    title: "Reviens",
    artist: "Harry Fragson",
    year: 1910,
    format: "Cylindre / 78 tours",
    mood: "Cafe-concert, charme, avant-guerre",
    commercialSuccess: "Vedette majeure du cafe-concert et du disque ancien.",
    cover: {
      alt: "Pochette Reviens Harry Fragson",
      kind: "album",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1526394931762-90052e97b376?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "polin-troupier",
    title: "Polin - chansons de troupier",
    artist: "Polin",
    year: 1911,
    format: "Cylindre / 78 tours",
    mood: "Comique troupier, uniforme, diction",
    commercialSuccess: "Immense popularite de cafe-concert et influence sur les fantaisistes.",
    cover: {
      alt: "Pochette Polin chansons de troupier",
      kind: "album",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1526394931762-90052e97b376?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "paulus-pere-victoire",
    title: "Le père la Victoire",
    artist: "Paulus",
    year: 1910,
    format: "Cylindre / 78 tours",
    mood: "Cafe-concert, patriotique, ancien repertoire",
    commercialSuccess: "Figure historique du cafe-concert, deja patrimoniale dans les annees 1910.",
    cover: {
      alt: "Pochette Paulus pere victoire",
      kind: "album",
      color: "#8f2d56",
      url: "https://images.unsplash.com/photo-1526394931762-90052e97b376?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "eugenie-buffet-sergots",
    title: "La sérénade des sergots",
    artist: "Eugénie Buffet",
    year: 1912,
    format: "Cylindre / 78 tours",
    mood: "Realiste ancienne, rue, cafe-concert",
    commercialSuccess: "Figure majeure du realisme de cafe-concert.",
    cover: {
      alt: "Pochette Eugenie Buffet sergots",
      kind: "album",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1526394931762-90052e97b376?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "yvette-guilbert-madame-arthur",
    title: "Madame Arthur",
    artist: "Yvette Guilbert",
    year: 1913,
    format: "Cylindre / 78 tours",
    mood: "Diseuse, cabaret, art vocal",
    commercialSuccess: "Icône internationale du cabaret et de la chanson dite.",
    cover: {
      alt: "Pochette Madame Arthur Yvette Guilbert",
      kind: "album",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1526394931762-90052e97b376?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "charlus-repertoire-comique",
    title: "Charlus - chansons comiques",
    artist: "Charlus",
    year: 1912,
    format: "Cylindre / 78 tours",
    mood: "Chanson comique, cafe-concert, phonographe",
    commercialSuccess: "Un des chanteurs les plus presents sur supports phonographiques anciens.",
    cover: {
      alt: "Pochette Charlus chansons comiques",
      kind: "album",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1526394931762-90052e97b376?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "berard-chansons-marins",
    title: "Bérard - chansons de marins",
    artist: "Bérard",
    year: 1911,
    format: "Cylindre / 78 tours",
    mood: "Chanson maritime, baryton, scene ancienne",
    commercialSuccess: "Repertoire populaire sur disques anciens et scenes de cafe-concert.",
    cover: {
      alt: "Pochette Berard chansons de marins",
      kind: "album",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1526394931762-90052e97b376?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "resca-chansons-napolitaines",
    title: "Resca - romances et chansons napolitaines",
    artist: "Resca",
    year: 1913,
    format: "Cylindre / 78 tours",
    mood: "Tenor, romance, chanson napolitaine",
    commercialSuccess: "Repertoire de tenor populaire tres diffuse par le disque ancien.",
    cover: {
      alt: "Pochette Resca romances",
      kind: "album",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1526394931762-90052e97b376?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "aristide-bruant-belleville",
    title: "À Belleville",
    artist: "Aristide Bruant",
    year: 1905,
    format: "Cylindre / cafe-concert",
    mood: "Cabaret montmartrois, argot, chanson sociale",
    commercialSuccess: "Figure majeure du cabaret avant 1910, devenue iconographie patrimoniale.",
    cover: {
      alt: "Pochette A Belleville Aristide Bruant",
      kind: "album",
      color: "#1e172d",
      url: "https://images.unsplash.com/photo-1526394931762-90052e97b376?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "theresa-cafe-concert",
    title: "Thérésa - reine du café-concert",
    artist: "Thérésa",
    year: 1900,
    format: "Cylindre / anthologie",
    mood: "Cafe-concert, diva populaire, Second Empire",
    commercialSuccess: "Vedette immense du cafe-concert, deja historique avant 1910.",
    cover: {
      alt: "Pochette Theresa cafe concert",
      kind: "album",
      color: "#ff4f7b",
      url: "https://images.unsplash.com/photo-1526394931762-90052e97b376?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "amiati-clairon",
    title: "Le Clairon",
    artist: "Amiati",
    year: 1900,
    format: "Cylindre / anthologie patriotique",
    mood: "Cafe-concert, patriotique, voix dramatique",
    commercialSuccess: "Grand repertoire patriotique et figure reconnue de la scene ancienne.",
    cover: {
      alt: "Pochette Le Clairon Amiati",
      kind: "album",
      color: "#8f2d56",
      url: "https://images.unsplash.com/photo-1526394931762-90052e97b376?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "fursy-cabaret-quat-zarts",
    title: "Fursy au cabaret",
    artist: "Fursy",
    year: 1906,
    format: "Cylindre / cabaret",
    mood: "Chansonnier, satire, Quat’z’Arts",
    commercialSuccess: "Nom important du cabaret satirique parisien avant 1910.",
    cover: {
      alt: "Pochette Fursy cabaret",
      kind: "album",
      color: "#7c5cff",
      url: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "xavier-privas-hirondelles",
    title: "Les Hirondelles",
    artist: "Xavier Privas",
    year: 1904,
    format: "Cylindre / cabaret",
    mood: "Chanson poetique, Montmartre, diseur",
    commercialSuccess: "Figure respectee de la chanson poetique et des cabarets montmartrois.",
    cover: {
      alt: "Pochette Xavier Privas Hirondelles",
      kind: "album",
      color: "#20c7b5",
      url: "https://images.unsplash.com/photo-1526394931762-90052e97b376?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "emma-liebel-matchiche",
    title: "La Matchiche",
    artist: "Emma Liebel",
    year: 1905,
    format: "Cylindre / cafe-concert",
    mood: "Danse, cafe-concert, succes populaire",
    commercialSuccess: "Succes de danse et de cafe-concert au tournant du siecle.",
    cover: {
      alt: "Pochette La Matchiche Emma Liebel",
      kind: "album",
      color: "#ff7a59",
      url: "https://images.unsplash.com/photo-1526394931762-90052e97b376?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "anna-thibaud-lilas",
    title: "Quand les lilas refleuriront",
    artist: "Anna Thibaud",
    year: 1902,
    format: "Cylindre / romance",
    mood: "Romance, cafe-concert, voix populaire",
    commercialSuccess: "Voix populaire des romances anciennes et des scenes de cafe-concert.",
    cover: {
      alt: "Pochette Quand les lilas refleuriront",
      kind: "album",
      color: "#ffb84d",
      url: "https://images.unsplash.com/photo-1526394931762-90052e97b376?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  },
  {
    id: "borel-clerc-rirette",
    title: "La Petite Tonkinoise",
    artist: "Borel-Clerc",
    year: 1906,
    format: "Cylindre / revue",
    mood: "Revue, chanson composee, cafe-concert",
    commercialSuccess: "Compositeur et chansonnier associe a plusieurs airs tres diffuses.",
    cover: {
      alt: "Pochette Borel Clerc revue",
      kind: "album",
      color: "#ffd166",
      url: "https://images.unsplash.com/photo-1526394931762-90052e97b376?auto=format&fit=crop&w=1400&q=80",
      source: "Unsplash"
    },
    tracksCount: 4
  }
];
