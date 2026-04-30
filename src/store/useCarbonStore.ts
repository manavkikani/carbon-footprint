import { create } from 'zustand';

export type AnimationMode = 'scroll' | 'loop' | 'burst';

export interface ActivityLog {
  id: number;
  action: string;
  value: number;
  type: 'add' | 'reduce';
  aiReasoning?: string;
}

export interface HabitBaselines {
  transport: number;
  food: number;
  shopping: number;
}

export interface PendingSimulation {
  transportReduction: number;
  foodReduction: number;
  shoppingReduction: number;
}

export interface ScannedItem {
  id: number;
  name: string;
  ecoScore: number;
  impactValue: number;
  type: 'add' | 'reduce';
}

interface CarbonState {
  emissions: number; // 0 to 100
  initialEmission: number | null; // Baseline from onboarding
  animationMode: AnimationMode;
  logs: ActivityLog[];
  setEmissions: (val: number | ((prev: number) => number)) => void;
  setAnimationMode: (mode: AnimationMode) => void;
  triggerBurst: () => void;
  burstTriggerId: number;
  addLog: (log: ActivityLog) => void;
  habits: HabitBaselines;
  isInitialized: boolean;
  pendingSimulation: PendingSimulation | null;
  scans: ScannedItem[];
  setIsInitialized: (val: boolean) => void;
  setPendingSimulation: (sim: PendingSimulation | null) => void;
  setHabits: (habits: Partial<HabitBaselines>) => void;
  addScan: (scan: ScannedItem) => void;
  applySimulation: (reduction: number, logMsg: string) => void;
  setInitialEmission: (val: number) => void;
}

export const useCarbonStore = create<CarbonState>((set) => ({
  emissions: 0,
  initialEmission: null,
  animationMode: 'scroll',
  logs: [],
  burstTriggerId: 0,
  isInitialized: false,
  pendingSimulation: null,
  habits: { transport: 40, food: 35, shopping: 25 },
  scans: [],
  setIsInitialized: (val) => set({ isInitialized: val }),
  setPendingSimulation: (sim) => set({ pendingSimulation: sim }),
  setEmissions: (val) =>
    set((state) => ({
      emissions: typeof val === 'function' ? val(state.emissions) : val,
    })),
  setInitialEmission: (val) => set({ initialEmission: val }),
  setAnimationMode: (mode) => set({ animationMode: mode }),
  triggerBurst: () => set((state) => ({ burstTriggerId: state.burstTriggerId + 1 })),
  addLog: (log) => set((state) => ({ logs: [log, ...state.logs].slice(0, 5) })),
  setHabits: (newHabits) => set((state) => ({ habits: { ...state.habits, ...newHabits } })),
  addScan: (scan) => set((state) => ({ scans: [scan, ...state.scans] })),
  applySimulation: (reduction, logMsg) => set((state) => ({
    emissions: Math.max(0, state.emissions - reduction),
    logs: [{ id: Date.now(), action: logMsg, value: reduction, type: 'reduce' as const }, ...state.logs].slice(0, 5),
    burstTriggerId: state.burstTriggerId + 1,
  })),
}));
