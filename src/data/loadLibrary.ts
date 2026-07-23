export interface LibraryModule {
  albums: typeof import('./albums')['albums'];
  artists: typeof import('./artists')['artists'];
  collections: typeof import('./exploreData')['collections'];
  decades: typeof import('./exploreData')['decades'];
  regions: typeof import('./exploreData')['regions'];
  songs: typeof import('./songs')['songs'];
  styles: typeof import('./exploreData')['styles'];
  timeline: typeof import('./timeline')['timeline'];
}

let libraryPromise: Promise<LibraryModule> | undefined;

export function loadLibrary(): Promise<LibraryModule> {
  libraryPromise ??= Promise.all([
    import('./albums'),
    import('./artists'),
    import('./exploreData'),
    import('./songs'),
    import('./timeline')
  ]).then(([albumModule, artistModule, exploreModule, songModule, timelineModule]) => ({
    albums: albumModule.albums,
    artists: artistModule.artists,
    collections: exploreModule.collections,
    decades: exploreModule.decades,
    regions: exploreModule.regions,
    songs: songModule.songs,
    styles: exploreModule.styles,
    timeline: timelineModule.timeline
  }));
  return libraryPromise;
}

export function preloadLibrary(): void {
  const run = () => {
    void loadLibrary();
  };

  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(run, { timeout: 2500 });
    return;
  }

  globalThis.setTimeout(run, 1200);
}
