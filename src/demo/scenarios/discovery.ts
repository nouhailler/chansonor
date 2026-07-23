import type { DemoScenario } from '../engine';

export const discoveryScenario: DemoScenario = {
  id: 'decouverte',
  title: 'Decouverte de Chansonor',
  description: 'Parcours guide entre accueil, artistes, recherche et favoris.',
  startPath: '/',
  seed: {
    namespace: 'demo-decouverte',
    data: {
      favorites: [
        { id: 'artist-edith-piaf', type: 'artist', title: 'Edith Piaf', color: '#ff4f7b' },
        { id: 'artist-jacques-brel', type: 'artist', title: 'Jacques Brel', color: '#7c5cff' }
      ]
    }
  },
  steps: [
    { type: 'navigate', path: '/' },
    {
      type: 'narrate',
      message: "Bienvenue dans Chansonor : l'accueil pose les grands points d'entree de l'application.",
      placement: 'bottom'
    },
    {
      type: 'highlight',
      target: 'home-hero-search',
      message: 'La recherche globale reste le raccourci le plus rapide pour retrouver un artiste, un titre ou un album.'
    },
    { type: 'navigate', path: '/artists' },
    {
      type: 'highlight',
      target: 'artists-grid',
      message: 'La page Artistes presente les fiches avec portraits, regions et styles.'
    },
    { type: 'navigate', path: '/search' },
    {
      type: 'click',
      target: 'global-search-input'
    },
    {
      type: 'type',
      target: 'global-search-input',
      text: 'Piaf',
      clearBefore: true
    },
    {
      type: 'highlight',
      target: 'search-results',
      message: 'Les resultats melangent artistes, chansons, albums et collections.'
    },
    { type: 'navigate', path: '/favorites' },
    {
      type: 'highlight',
      target: 'favorites-library',
      message: "Ces favoris viennent du seed de demo : aucune donnee reelle n'est modifiee."
    },
    {
      type: 'narrate',
      message: 'La demonstration est terminee. Vous pouvez quitter a tout moment avec Echap.',
      placement: 'center'
    }
  ]
};
