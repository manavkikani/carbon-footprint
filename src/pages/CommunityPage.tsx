import React, { useEffect, useState, useMemo } from 'react';
import { useCarbonStore } from '../store/useCarbonStore';
import { useGuildStore } from '../store/useGuildStore';
import type { Guild } from '../store/useGuildStore';
import { Trophy, Award, Users, Plus, Shield, ChevronLeft, ChevronRight } from 'lucide-react';

const CommunityPage: React.FC = () => {
  const { setAnimationMode, emissions } = useCarbonStore();
  const { guilds, users, userGuildId, createGuild, joinGuild, leaveGuild, getGuildMembers } = useGuildStore();
  
  const [activeTab, setActiveTab] = useState<'leaderboard' | 'guilds'>('leaderboard');
  const [selectedGuild, setSelectedGuild] = useState<Guild | null>(null);
  
  const [showCreate, setShowCreate] = useState(false);
  const [newGuildName, setNewGuildName] = useState('');
  const [newGuildMotto, setNewGuildMotto] = useState('');

  // Pagination filters
  const filterOptions = [
    { label: 'Top 100', start: 0, end: 100 },
    { label: '101 - 500', start: 100, end: 500 },
    { label: '501 - 1000', start: 500, end: 1000 },
    { label: '1001 - 5000+', start: 1000, end: 6000 }
  ];
  const [activeFilter, setActiveFilter] = useState(filterOptions[0]);

  useEffect(() => {
    setAnimationMode('loop');
  }, [setAnimationMode]);

  const handleCreateGuild = (e: React.FormEvent) => {
    e.preventDefault();
    if (newGuildName.trim() && newGuildMotto.trim()) {
      createGuild(newGuildName.trim(), newGuildMotto.trim());
      setShowCreate(false);
      setNewGuildName('');
      setNewGuildMotto('');
    }
  };

  const getStatus = (score: number) => score < 30 ? 'stable' : score > 70 ? 'fragmented' : 'moderate';

  // Memoize all sorted users
  const allUsersSorted = useMemo(() => {
    const you = { id: 'me', name: 'You', score: emissions, guildId: userGuildId };
    const combined = [...users, you].sort((a, b) => a.score - b.score);
    return combined.map((u, i) => ({ ...u, rank: i + 1, status: getStatus(u.score) }));
  }, [users, emissions, userGuildId]);

  const currentUserRank = useMemo(() => allUsersSorted.find(u => u.name === 'You'), [allUsersSorted]);
  
  const displayedUsers = allUsersSorted.slice(activeFilter.start, activeFilter.end);
  
  // Memoize sorted guilds
  const sortedGuilds = useMemo(() => {
    return [...guilds].sort((a, b) => a.totalScore - b.totalScore); // Assuming lowest footprint is best
  }, [guilds]);

  // Guild specific users
  const activeGuildMembers = useMemo(() => {
    if (!selectedGuild) return [];
    const members = getGuildMembers(selectedGuild.id);
    const mapped = members.map(m => ({ ...m, rank: allUsersSorted.find(u => u.id === m.id)?.rank || 0, status: getStatus(m.score) }));
    if (userGuildId === selectedGuild.id) {
       mapped.push({ id: 'me', name: 'You', score: emissions, guildId: selectedGuild.id, rank: currentUserRank?.rank || 0, status: getStatus(emissions) });
    }
    return mapped.sort((a, b) => a.score - b.score);
  }, [selectedGuild, getGuildMembers, allUsersSorted, userGuildId, emissions, currentUserRank]);

  const [guildPage, setGuildPage] = useState(1);
  const itemsPerPage = 50;
  const displayedGuildMembers = activeGuildMembers.slice((guildPage - 1) * itemsPerPage, guildPage * itemsPerPage);

  const renderLeaderboardRows = (data: any[]) => (
    <>
      {data.map((u) => (
        <div key={u.id} style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          padding: '16px 0', 
          borderBottom: '1px solid rgba(255,255,255,0.05)',
          alignItems: 'center',
          color: u.name === 'You' ? 'var(--text-main)' : 'var(--text-muted)',
          fontWeight: u.name === 'You' ? 700 : 400,
          background: u.name === 'You' ? 'rgba(16,185,129,0.1)' : 'transparent',
          borderRadius: '8px',
          paddingLeft: '16px',
          paddingRight: '16px'
        }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px', width: '60px' }}>
            {u.rank <= 3 && <Trophy size={16} color={u.rank === 1 ? 'gold' : u.rank === 2 ? 'silver' : '#cd7f32'} />}
            #{u.rank}
          </span>
          <span style={{ flex: 1, marginLeft: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            {u.name} {u.rank <= 3 && <Award size={16} color="var(--accent-green)" />}
          </span>
          <span style={{ 
            color: u.status === 'stable' ? 'var(--accent-green)' : u.status === 'fragmented' ? 'var(--accent-red)' : 'var(--accent-yellow)',
            textTransform: 'capitalize',
            fontSize: '0.9rem',
            width: '120px'
          }}>
            {u.status}
          </span>
          <span style={{ width: '80px', textAlign: 'right', fontWeight: 600 }}>{Number(u.score).toFixed(2)}</span>
        </div>
      ))}
    </>
  );

  return (
    <div style={{ animation: 'fade-in 0.5s ease', paddingBottom: '100px' }}>
      <header style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '8px' }}>Community Hub</h1>
        <p style={{ color: 'var(--text-muted)' }}>Compete among {users.length.toLocaleString()} global citizens to reduce the carbon footprint.</p>
      </header>

      {/* Tabs */}
      {!selectedGuild && (
        <div style={{ display: 'flex', gap: '16px', marginBottom: '32px' }}>
          <button 
            onClick={() => setActiveTab('leaderboard')}
            className="glass-button" 
            style={{ background: activeTab === 'leaderboard' ? 'rgba(255,255,255,0.1)' : 'transparent', border: activeTab === 'leaderboard' ? '1px solid var(--glass-border)' : '1px solid transparent' }}
          >
            <Trophy size={18} /> Global Leaderboard
          </button>
          <button 
            onClick={() => setActiveTab('guilds')}
            className="glass-button" 
            style={{ background: activeTab === 'guilds' ? 'rgba(255,255,255,0.1)' : 'transparent', border: activeTab === 'guilds' ? '1px solid var(--glass-border)' : '1px solid transparent' }}
          >
            <Shield size={18} /> Guilds & Teams
          </button>
        </div>
      )}

      {activeTab === 'leaderboard' && !selectedGuild && (
        <div className="glass-panel" style={{ padding: '40px' }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
            <h2 style={{ fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '12px' }}><Trophy color="var(--accent-green)" /> Global Rankings</h2>
            <div style={{ display: 'flex', gap: '8px', background: 'rgba(255,255,255,0.05)', padding: '4px', borderRadius: '8px', overflowX: 'auto' }}>
              {filterOptions.map(f => (
                <button
                  key={f.label}
                  onClick={() => setActiveFilter(f)}
                  style={{
                    padding: '8px 16px', borderRadius: '6px', cursor: 'pointer', border: 'none',
                    background: activeFilter.label === f.label ? 'var(--accent-green)' : 'transparent',
                    color: activeFilter.label === f.label ? '#000' : 'var(--text-main)',
                    fontWeight: activeFilter.label === f.label ? 600 : 400,
                    whiteSpace: 'nowrap'
                  }}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '16px', borderBottom: '1px solid var(--glass-border)', color: 'var(--text-muted)', fontWeight: 600, paddingLeft: '16px', paddingRight: '16px' }}>
            <span style={{ width: '60px' }}>Rank</span>
            <span style={{ flex: 1, marginLeft: '20px' }}>Name</span>
            <span style={{ width: '120px' }}>State</span>
            <span style={{ width: '80px', textAlign: 'right' }}>Score (kg)</span>
          </div>

          {currentUserRank && (!displayedUsers.find(u => u.name === 'You')) && (
            <div style={{ borderBottom: '1px dashed var(--glass-border)', marginBottom: '8px', paddingBottom: '8px' }}>
              {renderLeaderboardRows([currentUserRank])}
            </div>
          )}

          {renderLeaderboardRows(displayedUsers)}
        </div>
      )}

      {activeTab === 'guilds' && !selectedGuild && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <h2 style={{ fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '12px' }}><Shield color="var(--accent-green)" /> Guild Leaderboard</h2>
            {!userGuildId ? (
              <button className="glass-button" onClick={() => setShowCreate(!showCreate)} style={{ background: 'var(--accent-green)', color: '#000', border: 'none' }}>
                <Plus size={18} /> Create Guild
              </button>
            ) : (
                <span style={{ color: 'var(--text-muted)' }}>You are in a Guild</span>
            )}
          </div>

          {showCreate && !userGuildId && (
            <div className="glass-panel" style={{ padding: '24px', marginBottom: '32px', animation: 'fade-in 0.3s ease' }}>
              <h3 style={{ marginBottom: '16px' }}>Establish a New Guild</h3>
              <form onSubmit={handleCreateGuild} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <input type="text" placeholder="Guild Name" value={newGuildName} onChange={e => setNewGuildName(e.target.value)} required style={{ padding: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', color: 'var(--text-main)', borderRadius: '8px' }} />
                  <input type="text" placeholder="Motto / Objective" value={newGuildMotto} onChange={e => setNewGuildMotto(e.target.value)} required style={{ padding: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', color: 'var(--text-main)', borderRadius: '8px' }} />
                </div>
                <button type="submit" className="glass-button" style={{ height: '100%', minHeight: '100px', flex: '0 0 120px', background: 'rgba(255,255,255,0.1)' }}>Establish</button>
              </form>
            </div>
          )}

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '16px' }}>
            {sortedGuilds.map((guild, index) => (
              <div key={guild.id} className="glass-panel" style={{ padding: '24px', display: 'flex', alignItems: 'center', gap: '24px', border: userGuildId === guild.id ? '2px solid var(--accent-green)' : undefined, cursor: 'pointer', transition: 'border-color 0.2s' }} onClick={() => setSelectedGuild(guild)}>
                <div style={{ width: '40px', fontSize: '1.4rem', fontWeight: 700, color: index < 3 ? 'var(--accent-yellow)' : 'var(--text-muted)', textAlign: 'center' }}>
                  #{index + 1}
                </div>
                
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: '1.4rem', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {guild.name}
                    {userGuildId === guild.id && <span style={{ fontSize: '0.7rem', background: 'var(--accent-green)', color: '#000', padding: '2px 8px', borderRadius: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>Your Guild</span>}
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>"{guild.motto}"</p>
                </div>
                
                <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '4px', justifyContent: 'flex-end' }}><Users size={14} /> Members</div>
                    <div style={{ fontSize: '1.2rem', fontWeight: 600 }}>{guild.members}</div>
                  </div>
                  
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '4px' }}>Total Footprint</div>
                    <div style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--accent-green)' }}>{Number(guild.totalScore).toFixed(2)} kg</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {selectedGuild && (
        <div className="glass-panel" style={{ padding: '40px', animation: 'fade-in 0.3s ease' }}>
          <button 
            className="glass-button" 
            onClick={() => { setSelectedGuild(null); setGuildPage(1); }} 
            style={{ padding: '8px 16px', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '32px', border: 'none', background: 'rgba(255,255,255,0.05)' }}
          >
            <ChevronLeft size={16} /> Back to Guilds
          </button>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '40px' }}>
            <div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '8px' }}>{selectedGuild.name}</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>"{selectedGuild.motto}"</p>
            </div>
            <div style={{ display: 'flex', gap: '16px' }}>
              {userGuildId === selectedGuild.id ? (
                <button className="glass-button" onClick={() => { leaveGuild(); setSelectedGuild(null); }} style={{ borderColor: 'var(--accent-red)', color: 'var(--accent-red)', padding: '12px 24px' }}>
                  Leave Guild
                </button>
              ) : !userGuildId ? (
                <button className="glass-button" onClick={() => joinGuild(selectedGuild.id)} style={{ background: 'var(--accent-green)', color: '#000', padding: '12px 24px', border: 'none', fontWeight: 600 }}>
                  Join Guild
                </button>
              ) : null}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginBottom: '40px' }}>
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '24px', borderRadius: '12px' }}>
              <span style={{ display: 'block', color: 'var(--text-muted)', marginBottom: '8px' }}>Total Footprint</span>
              <span style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--accent-green)' }}>{Number(selectedGuild.totalScore).toFixed(2)}</span>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '24px', borderRadius: '12px' }}>
              <span style={{ display: 'block', color: 'var(--text-muted)', marginBottom: '8px' }}>Guild Rank</span>
              <span style={{ fontSize: '2rem', fontWeight: 700 }}>#{sortedGuilds.findIndex(g => g.id === selectedGuild.id) + 1}</span>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '24px', borderRadius: '12px' }}>
              <span style={{ display: 'block', color: 'var(--text-muted)', marginBottom: '8px' }}>Active Members</span>
              <span style={{ fontSize: '2rem', fontWeight: 700 }}>{selectedGuild.members}</span>
            </div>
          </div>

          <h3 style={{ fontSize: '1.5rem', marginBottom: '24px', borderBottom: '1px solid var(--glass-border)', paddingBottom: '16px' }}><Users size={20} style={{ display: 'inline', marginRight: '8px' }} /> Guild Roster</h3>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '16px', color: 'var(--text-muted)', fontWeight: 600, paddingLeft: '16px', paddingRight: '16px' }}>
            <span style={{ width: '60px' }}>Rank</span>
            <span style={{ flex: 1, marginLeft: '20px' }}>Member Name</span>
            <span style={{ width: '120px' }}>State</span>
            <span style={{ width: '80px', textAlign: 'right' }}>Score</span>
          </div>
          
          {renderLeaderboardRows(displayedGuildMembers)}
          
          {activeGuildMembers.length > itemsPerPage && (
             <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '32px' }}>
               <button 
                 onClick={() => setGuildPage(p => Math.max(1, p - 1))} 
                 disabled={guildPage === 1}
                 className="glass-button" style={{ padding: '8px 16px', display: 'flex', alignItems: 'center' }}
               ><ChevronLeft size={16} /> Prev</button>
               <span style={{ display: 'flex', alignItems: 'center', color: 'var(--text-muted)' }}>Page {guildPage} of {Math.ceil(activeGuildMembers.length / itemsPerPage)}</span>
               <button 
                 onClick={() => setGuildPage(p => Math.min(Math.ceil(activeGuildMembers.length / itemsPerPage), p + 1))} 
                 disabled={guildPage === Math.ceil(activeGuildMembers.length / itemsPerPage)}
                 className="glass-button" style={{ padding: '8px 16px', display: 'flex', alignItems: 'center' }}
               >Next <ChevronRight size={16} /></button>
             </div>
          )}

        </div>
      )}
    </div>
  );
};

export default CommunityPage;
