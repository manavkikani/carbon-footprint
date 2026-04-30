import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Target, CheckCircle, Leaf, Zap, Award } from 'lucide-react';
import { useMissionsStore } from '../store/useMissionsStore';
import { useCarbonStore } from '../store/useCarbonStore';

const DailyMissions: React.FC = () => {
  const { missions, generateMissions, completeMission, streak, totalPoints } = useMissionsStore();
  const { applySimulation, triggerBurst } = useCarbonStore();

  useEffect(() => {
    if (missions.length === 0) {
      generateMissions();
    }
  }, [missions, generateMissions]);

  const handleComplete = (id: string, reduction: number, points: number) => {
    completeMission(id);
    applySimulation(reduction, `Completed Mission`);
    triggerBurst(); // Connects mission to particle animation
  };

  return (
    <div className="glass-panel" style={{ padding: '32px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <div>
          <h3 style={{ fontSize: '1.4rem', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Target color="var(--accent-yellow)" /> Daily Missions
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '4px', margin: 0 }}>
            Complete challenges to lower your Twin's footprint
          </p>
        </div>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <div style={{ background: 'rgba(245, 177, 11, 0.1)', color: 'var(--accent-yellow)', padding: '6px 12px', borderRadius: '100px', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.9rem', fontWeight: 600 }}>
            <Award size={16} /> {totalPoints} pts
          </div>
          <div style={{ background: 'rgba(255, 255, 255, 0.1)', padding: '6px 12px', borderRadius: '100px', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.9rem', fontWeight: 600 }}>
            🔥 {streak} Streak
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {missions.map((mission, idx) => (
          <motion.div
            key={mission.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            style={{
              padding: '24px',
              borderRadius: '20px',
              background: mission.completed ? 'rgba(16, 185, 129, 0.05)' : 'rgba(255,255,255,0.02)',
              border: `1px solid ${mission.completed ? 'rgba(16, 185, 129, 0.2)' : 'var(--glass-border)'}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '24px'
            }}
          >
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                <span style={{ 
                  fontSize: '0.8rem', 
                  padding: '2px 8px', 
                  borderRadius: '100px', 
                  background: mission.difficulty === 'Hard' ? 'rgba(239,68,68,0.2)' : mission.difficulty === 'Medium' ? 'rgba(245,177,11,0.2)' : 'rgba(16,185,129,0.2)',
                  color: mission.difficulty === 'Hard' ? 'var(--accent-red)' : mission.difficulty === 'Medium' ? 'var(--accent-yellow)' : 'var(--accent-green)'
                }}>
                  {mission.difficulty}
                </span>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Leaf size={14} color="var(--accent-green)" /> -{mission.co2Reduction} kg
                </span>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Zap size={14} color="var(--accent-yellow)" /> +{mission.points} pts
                </span>
              </div>
              <h4 style={{ fontSize: '1.1rem', margin: '0 0 4px 0', color: mission.completed ? 'var(--text-muted)' : '#fff', textDecoration: mission.completed ? 'line-through' : 'none' }}>{mission.title}</h4>
              <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem' }}>{mission.description}</p>
            </div>
            
            <motion.button
              whileHover={{ scale: mission.completed ? 1 : 1.05 }}
              whileTap={{ scale: mission.completed ? 1 : 0.95 }}
              disabled={mission.completed}
              onClick={() => handleComplete(mission.id, mission.co2Reduction, mission.points)}
              style={{
                width: '120px',
                height: '44px',
                borderRadius: '100px',
                border: 'none',
                background: mission.completed ? 'rgba(16, 185, 129, 0.2)' : 'var(--text-main)',
                color: mission.completed ? 'var(--accent-green)' : 'var(--bg-color)',
                fontWeight: 600,
                cursor: mission.completed ? 'default' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
            >
              {mission.completed ? <><CheckCircle size={18} /> Done</> : 'Complete'}
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DailyMissions;
