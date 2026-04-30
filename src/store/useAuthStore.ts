import { create } from 'zustand';

interface User {
  name: string;
  avatar: string;
}

interface AuthState {
  user: User | null;
  hasCompletedOnboarding: boolean;
  startingAge: number | null;
  login: (name: string) => void;
  logout: () => void;
  setOnboardingCompleted: (status: boolean) => void;
  setStartingAge: (age: number) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  hasCompletedOnboarding: false,
  startingAge: null,
  login: (name: string) => set({ 
    user: { 
      name, 
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}` 
    } 
  }),
  logout: () => set({ user: null, hasCompletedOnboarding: false, startingAge: null }),
  setOnboardingCompleted: (status: boolean) => set({ hasCompletedOnboarding: status }),
  setStartingAge: (age: number) => set({ startingAge: age }),
}));
