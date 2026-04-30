import React, { useEffect } from 'react';
import { useCarbonStore } from '../store/useCarbonStore';

const ExplorePage: React.FC = () => {
  const { emissions, setEmissions, setAnimationMode } = useCarbonStore();

  useEffect(() => {
    setAnimationMode('loop');
  }, [setAnimationMode]);

  return (
    <div style={{ paddingBottom: '100px', animation: 'fade-in 0.5s ease' }}>
      <header style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '8px' }}>Interactive Simulator</h1>
        <p style={{ color: 'var(--text-muted)' }}>Adjust the slider below to see how different emission levels affect the global ecosystem.</p>
      </header>

      <div className="glass-panel" style={{ padding: '40px', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '40px' }}>Simulated Emissions Level: <span style={{ color: emissions > 70 ? 'var(--accent-red)' : emissions < 30 ? 'var(--accent-green)' : 'var(--accent-yellow)' }}>{emissions}</span></h3>
        
        <input 
          type="range" 
          min="0" 
          max="100" 
          value={emissions}
          onChange={(e) => setEmissions(parseInt(e.target.value))}
          style={{ width: '100%', cursor: 'pointer', marginBottom: '24px' }}
        />
        
        <p style={{ color: 'var(--text-muted)' }}>
          {emissions > 70 ? 'Chaotic dispersion. High environmental impact.' : 
           emissions < 30 ? 'Stable footprint. Harmony with the ecosystem.' : 
           'Moderate dispersion. Room for improvement.'}
        </p>
      </div>
    </div>
  );
};

export default ExplorePage;
