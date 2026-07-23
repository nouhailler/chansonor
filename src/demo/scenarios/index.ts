import type { DemoScenario } from '../engine';
import { discoveryScenario } from './discovery';

export const demoScenarios = {
  [discoveryScenario.id]: discoveryScenario
} satisfies Record<string, DemoScenario>;

export type DemoScenarioId = keyof typeof demoScenarios;
