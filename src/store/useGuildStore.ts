import { create } from 'zustand';
import { mockGuilds, mockUsers } from '../data/mockCommunity';
import type { MockUser } from '../data/mockCommunity';

export interface Guild {
  id: string;
  name: string;
  motto: string;
  members: number;
  totalScore: number;
}

interface GuildState {
  guilds: Guild[];
  users: MockUser[];
  userGuildId: string | null;
  createGuild: (name: string, motto: string) => void;
  joinGuild: (guildId: string) => void;
  leaveGuild: () => void;
  getGuildMembers: (guildId: string) => MockUser[];
}

const initializedGuilds = mockGuilds.map(g => {
  const membersInGuild = mockUsers.filter(u => u.guildId === g.id);
  const totalScore = membersInGuild.reduce((sum, u) => sum + u.score, 0);
  return {
    ...g,
    members: membersInGuild.length,
    totalScore: Number(totalScore.toFixed(2))
  };
});

export const useGuildStore = create<GuildState>((set, get) => ({
  guilds: initializedGuilds,
  users: mockUsers,
  userGuildId: null,
  getGuildMembers: (guildId: string) => {
    // Sort members of the guild linearly
    return get().users.filter(u => u.guildId === guildId).sort((a, b) => a.score - b.score);
  },
  createGuild: (name: string, motto: string) => {
    const newGuild: Guild = {
      id: Math.random().toString(36).substring(7),
      name,
      motto,
      members: 1,
      totalScore: 0
    };
    set((state) => ({
      guilds: [...state.guilds, newGuild],
      userGuildId: newGuild.id
    }));
  },
  joinGuild: (guildId: string) => {
    set((state) => ({
      userGuildId: guildId,
      guilds: state.guilds.map(g => 
        g.id === guildId ? { ...g, members: g.members + 1 } : g
      )
    }));
  },
  leaveGuild: () => {
    const { userGuildId, guilds } = get();
    if (!userGuildId) return;
    set({
      userGuildId: null,
      guilds: guilds.map(g => 
        g.id === userGuildId ? { ...g, members: Math.max(0, g.members - 1) } : g
      )
    });
  }
}));
