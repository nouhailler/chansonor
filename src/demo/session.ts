import type { DemoSeed } from './engine';

const DEMO_SEED_KEY = 'chansonor-demo-seed';

export function activateDemoSeed(seed: DemoSeed): void {
  sessionStorage.setItem(DEMO_SEED_KEY, JSON.stringify(seed));
}

export function clearDemoSeed(): void {
  sessionStorage.removeItem(DEMO_SEED_KEY);
}

export function readDemoSeed(): DemoSeed | undefined {
  const raw = sessionStorage.getItem(DEMO_SEED_KEY);
  if (!raw) return undefined;
  try {
    return JSON.parse(raw) as DemoSeed;
  } catch {
    clearDemoSeed();
    return undefined;
  }
}

export function isDemoSessionActive(): boolean {
  return Boolean(readDemoSeed());
}
