import React, { useEffect } from 'react';
import { useCarbonStore } from '../store/useCarbonStore';
import { Leaf, Flame, ArrowDownRight } from 'lucide-react';
import DailyTimelineChart from '../components/DailyTimelineChart';
import DailyMissions from '../components/DailyMissions';

const Dashboard: React.FC = () => {
  const { setAnimationMode, logs } = useCarbonStore();

  const maxAddLog = logs.filter(l => l.type === 'add').sort((a, b) => b.value - a.value)[0];
  const maxAddText = maxAddLog ? (maxAddLog.action.length > 15 ? maxAddLog.action.substring(0, 15) + '...' : maxAddLog.action) : 'None yet';
  
  const recentReduceLog = logs.find(l => l.type === 'reduce');
  const recentReduceValue = recentReduceLog ? recentReduceLog.value : 0;

  useEffect(() => {
    setAnimationMode('loop');
  }, [setAnimationMode]);

  return (
    <div style={{ animation: 'fade-in 0.5s ease' }}>
      <header style={{ marginBottom: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '8px' }}>Your Carbon Dashboard</h1>
          <p style={{ color: 'var(--text-muted)' }}>Real-time overview of your environmental impact.</p>
        </div>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '24px' }}>
        {/* Daily Timeline Visual System */}
        <div style={{ gridColumn: 'span 8' }}>
          <DailyTimelineChart />
        </div>

        {/* Quick Stats */}
        <div style={{ gridColumn: 'span 4', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div className="glass-panel" style={{ padding: '24px', flex: 1, display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ padding: '16px', background: 'rgba(239, 68, 68, 0.1)', borderRadius: '12px', color: 'var(--accent-red)' }}><Flame size={32} /></div>
            <div style={{ overflow: 'hidden' }}>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Largest Contributor</div>
              <div style={{ fontSize: '1.2rem', fontWeight: 600, textTransform: 'capitalize', whiteSpace: 'nowrap' }} title={maxAddLog?.action}>{maxAddText}</div>
              {maxAddLog && <div style={{ fontSize: '0.85rem', color: 'var(--accent-red)' }}>+{Number(maxAddLog.value).toFixed(2)} kg</div>}
            </div>
          </div>
          
          <div className="glass-panel" style={{ padding: '24px', flex: 1, display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ padding: '16px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '12px', color: 'var(--accent-green)' }}><Leaf size={32} /></div>
            <div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Recent Reduction</div>
              <div style={{ fontSize: '1.4rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
                {recentReduceValue ? '-' : ''}{Number(recentReduceValue).toFixed(2)} kg 
                {recentReduceValue > 0 && <ArrowDownRight size={20} color="var(--accent-green)" />}
              </div>
            </div>
          </div>
        </div>

        {/* Daily Missions Engagement System */}
        <div style={{ gridColumn: 'span 12' }}>
          <DailyMissions />
        </div>
      </div>
{/* 
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} /> */}
    </div>
  );
};

export default Dashboard;
