export type DemoStepType = 'navigate' | 'click' | 'type' | 'wait' | 'highlight' | 'narrate';

export type DemoTargetId = string;

export interface DemoScenario {
  id: string;
  title: string;
  description?: string;
  seed: DemoSeed;
  startPath?: string;
  steps: DemoStep[];
}

export interface DemoSeed {
  namespace: string;
  data?: Record<string, unknown>;
}

export type DemoStep =
  | DemoNavigateStep
  | DemoClickStep
  | DemoTypeStep
  | DemoWaitStep
  | DemoHighlightStep
  | DemoNarrateStep;

interface DemoStepBase {
  id?: string;
  label?: string;
  durationMs?: number;
}

export interface DemoNavigateStep extends DemoStepBase {
  type: 'navigate';
  path: string;
}

export interface DemoClickStep extends DemoStepBase {
  type: 'click';
  target: DemoTargetId;
}

export interface DemoTypeStep extends DemoStepBase {
  type: 'type';
  target: DemoTargetId;
  text: string;
  clearBefore?: boolean;
}

export interface DemoWaitStep extends DemoStepBase {
  type: 'wait';
  ms: number;
}

export interface DemoHighlightStep extends DemoStepBase {
  type: 'highlight';
  target: DemoTargetId;
  message?: string;
  placement?: DemoNarrationPlacement;
}

export interface DemoNarrateStep extends DemoStepBase {
  type: 'narrate';
  message: string;
  placement?: DemoNarrationPlacement;
}

export type DemoNarrationPlacement = 'top' | 'right' | 'bottom' | 'left' | 'center';

export interface DemoEngineOptions {
  scenario: DemoScenario;
  speed?: DemoSpeed;
  reducedMotion?: boolean;
  navigate: (path: string) => void;
  onStepChange?: (state: DemoEngineState) => void;
  onStatusChange?: (status: DemoEngineStatus) => void;
  onVisualChange?: (visual: DemoVisualState) => void;
  onExit?: () => void;
}

export type DemoSpeed = 0.5 | 1 | 1.5 | 2;

export type DemoEngineStatus = 'idle' | 'playing' | 'paused' | 'completed' | 'exited' | 'error';

export interface DemoEngineState {
  scenarioId: string;
  status: DemoEngineStatus;
  currentStepIndex: number;
  currentStep?: DemoStep;
  speed: DemoSpeed;
  error?: DemoEngineError;
}

export interface DemoEngineError {
  stepIndex: number;
  step?: DemoStep;
  message: string;
}

export interface DemoVisualState {
  cursor: DemoPoint;
  targetRect?: DemoRect;
  narration?: DemoNarrationState;
}

export interface DemoNarrationState {
  message: string;
  placement: DemoNarrationPlacement;
}

export interface DemoPoint {
  x: number;
  y: number;
}

export interface DemoRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface DemoEngine {
  play(): void;
  pause(): void;
  next(): Promise<void>;
  setSpeed(speed: DemoSpeed): void;
  exit(): void;
  getState(): DemoEngineState;
}

const DEFAULT_STEP_MS = 900;
const DEFAULT_CURSOR_MS = 420;
const TARGET_TIMEOUT_MS = 3500;

export class BrowserDemoEngine implements DemoEngine {
  private status: DemoEngineStatus = 'idle';
  private currentStepIndex = -1;
  private speed: DemoSpeed;
  private runId = 0;
  private visual: DemoVisualState = { cursor: { x: window.innerWidth / 2, y: window.innerHeight / 2 } };

  constructor(private readonly options: DemoEngineOptions) {
    this.speed = options.speed ?? 1;
    this.emitState();
    this.emitVisual();
  }

  play(): void {
    if (this.status === 'playing' || this.status === 'completed' || this.status === 'exited') return;
    this.setStatus('playing');
    void this.loop(++this.runId);
  }

  pause(): void {
    if (this.status !== 'playing') return;
    this.setStatus('paused');
    this.runId += 1;
  }

  async next(): Promise<void> {
    if (this.status === 'exited' || this.status === 'completed') return;
    const previous = this.status;
    this.runId += 1;
    this.setStatus('paused');
    await this.executeNextStep();
    if (previous === 'playing' && this.getState().status !== 'completed') this.play();
  }

  setSpeed(speed: DemoSpeed): void {
    this.speed = speed;
    this.emitState();
  }

  exit(): void {
    this.runId += 1;
    this.visual = { cursor: this.visual.cursor };
    this.emitVisual();
    this.setStatus('exited');
    this.options.onExit?.();
  }

  getState(): DemoEngineState {
    return {
      scenarioId: this.options.scenario.id,
      status: this.status,
      currentStepIndex: this.currentStepIndex,
      currentStep: this.options.scenario.steps[this.currentStepIndex],
      speed: this.speed
    };
  }

  private async loop(runId: number): Promise<void> {
    while (this.status === 'playing' && runId === this.runId) {
      await this.executeNextStep();
      if (this.status !== 'playing' || runId !== this.runId) return;
      if (this.currentStepIndex >= this.options.scenario.steps.length - 1) {
        this.setStatus('completed');
        return;
      }
    }
  }

  private async executeNextStep(): Promise<void> {
    const nextIndex = this.currentStepIndex + 1;
    const step = this.options.scenario.steps[nextIndex];
    if (!step) {
      this.setStatus('completed');
      return;
    }

    this.currentStepIndex = nextIndex;
    this.emitState();

    try {
      await this.executeStep(step);
    } catch (error) {
      this.setStatus('error');
      this.emitState(error instanceof Error ? error.message : 'Erreur inconnue');
    }
  }

  private async executeStep(step: DemoStep): Promise<void> {
    switch (step.type) {
      case 'navigate':
        this.options.navigate(step.path);
        await this.sleep(step.durationMs ?? 650);
        if (this.isStepInterrupted()) return;
        this.visual = { ...this.visual, targetRect: undefined, narration: undefined };
        this.emitVisual();
        return;
      case 'click': {
        const element = await this.findTarget(step.target);
        await this.moveToElement(element);
        if (this.isStepInterrupted()) return;
        element.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
        await this.sleep(step.durationMs ?? 350);
        return;
      }
      case 'type': {
        const element = await this.findTarget(step.target);
        await this.moveToElement(element);
        if (this.isStepInterrupted()) return;
        await this.typeInto(element, step.text, step.clearBefore ?? false);
        await this.sleep(step.durationMs ?? 250);
        return;
      }
      case 'wait':
        await this.sleep(step.ms);
        return;
      case 'highlight': {
        const element = await this.findTarget(step.target);
        await this.moveToElement(element);
        this.visual = {
          ...this.visual,
          targetRect: this.toRect(element.getBoundingClientRect()),
          narration: step.message ? { message: step.message, placement: step.placement ?? 'bottom' } : undefined
        };
        this.emitVisual();
        await this.sleep(step.durationMs ?? DEFAULT_STEP_MS);
        return;
      }
      case 'narrate':
        this.visual = {
          ...this.visual,
          targetRect: undefined,
          narration: { message: step.message, placement: step.placement ?? 'center' }
        };
        this.emitVisual();
        await this.sleep(step.durationMs ?? DEFAULT_STEP_MS);
        return;
    }
  }

  private async findTarget(target: DemoTargetId): Promise<HTMLElement> {
    const startedAt = performance.now();
    while (performance.now() - startedAt < TARGET_TIMEOUT_MS) {
      const element = document.querySelector<HTMLElement>(`[data-demo-id="${CSS.escape(target)}"]`);
      if (element) {
        element.scrollIntoView({ block: 'center', inline: 'center', behavior: this.options.reducedMotion ? 'auto' : 'smooth' });
        await this.sleep(this.options.reducedMotion ? 50 : 300);
        return element;
      }
      await this.sleep(100);
    }
    throw new Error(`Element data-demo-id="${target}" introuvable`);
  }

  private async moveToElement(element: HTMLElement): Promise<void> {
    const rect = element.getBoundingClientRect();
    const cursor = { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
    this.visual = { ...this.visual, cursor, targetRect: this.toRect(rect) };
    this.emitVisual();
    await this.sleep(this.options.reducedMotion ? 50 : DEFAULT_CURSOR_MS);
  }

  private async typeInto(element: HTMLElement, text: string, clearBefore: boolean): Promise<void> {
    if (!(element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement)) return;
    element.focus();
    if (clearBefore) this.setInputValue(element, '');
    const delay = this.options.reducedMotion ? 0 : 55;
    for (const char of text) {
      if (this.isStepInterrupted()) return;
      this.setInputValue(element, `${element.value}${char}`);
      await this.sleep(delay);
    }
  }

  private setInputValue(element: HTMLInputElement | HTMLTextAreaElement, value: string): void {
    const descriptor = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(element), 'value');
    descriptor?.set?.call(element, value);
    element.dispatchEvent(new InputEvent('input', { bubbles: true, inputType: 'insertText', data: value }));
    element.dispatchEvent(new Event('change', { bubbles: true }));
  }

  private async sleep(ms: number): Promise<void> {
    const scaled = Math.max(0, ms / this.speed);
    await new Promise((resolve) => window.setTimeout(resolve, scaled));
  }

  private toRect(rect: DOMRect): DemoRect {
    return { x: rect.left, y: rect.top, width: rect.width, height: rect.height };
  }

  private isStepInterrupted(): boolean {
    return this.status === 'exited' || this.status === 'paused';
  }

  private setStatus(status: DemoEngineStatus): void {
    this.status = status;
    this.options.onStatusChange?.(status);
    this.emitState();
  }

  private emitState(message?: string): void {
    this.options.onStepChange?.({
      scenarioId: this.options.scenario.id,
      status: this.status,
      currentStepIndex: this.currentStepIndex,
      currentStep: this.options.scenario.steps[this.currentStepIndex],
      speed: this.speed,
      error: message ? { stepIndex: this.currentStepIndex, step: this.options.scenario.steps[this.currentStepIndex], message } : undefined
    });
  }

  private emitVisual(): void {
    this.options.onVisualChange?.(this.visual);
  }
}
