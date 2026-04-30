import { create } from 'zustand';

export interface Mission {
  id: string;
  title: string;
  description: string;
  co2Reduction: number; // in kg
  points: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  completed: boolean;
}

interface MissionsState {
  missions: Mission[];
  streak: number;
  totalPoints: number;
  generateMissions: () => void;
  completeMission: (id: string) => void;
}

const missionPool = [
  { title: "Avoid using car today", description: "Use public transport or cycle instead.", co2Reduction: 2.5, points: 50, difficulty: "Hard" },
  { title: "Eat vegetarian for a meal", description: "Replace a meat-based meal with plant-based options.", co2Reduction: 1.5, points: 30, difficulty: "Medium" },
  { title: "Walk at least 2 km", description: "Take a walk for short errands instead of driving.", co2Reduction: 0.8, points: 20, difficulty: "Easy" },
  { title: "Avoid online food delivery", description: "Cook at home to reduce packaging and delivery emissions.", co2Reduction: 1.2, points: 25, difficulty: "Medium" },
  { title: "Unplug idle electronics", description: "Turn off devices that are not in use to save energy.", co2Reduction: 0.5, points: 10, difficulty: "Easy" },
  { title: "Zero waste day", description: "Avoid producing any non-recyclable waste today.", co2Reduction: 3.0, points: 100, difficulty: "Hard" },
];

export const useMissionsStore = create<MissionsState>((set, get) => ({
  missions: [],
  streak: 0,
  totalPoints: 0,
  generateMissions: () => {
    // Generate 3 random missions from the pool
    const shuffled = [...missionPool].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3).map((m, i) => ({
      ...m,
      id: `mission_${Date.now()}_${i}`,
      difficulty: m.difficulty as 'Easy' | 'Medium' | 'Hard',
      completed: false
    }));
    set({ missions: selected });
  },
  completeMission: (id: string) => {
    set((state) => {
      const updatedMissions = state.missions.map(m => 
        m.id === id ? { ...m, completed: true } : m
      );
      const mission = state.missions.find(m => m.id === id);
      const pointsEarned = mission && !mission.completed ? mission.points : 0;
      
      const newlyAllDone = !state.missions.every(m => m.completed) && updatedMissions.every(m => m.completed);
      const newStreak = newlyAllDone ? state.streak + 1 : state.streak;

      return {
        missions: updatedMissions,
        totalPoints: state.totalPoints + pointsEarned,
        streak: newStreak
      };
    });
  }
}));
